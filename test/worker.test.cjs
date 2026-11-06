const test = require('node:test');
const assert = require('node:assert/strict');
const Worker = require('../native-gpu/worker.cjs');
test('missing executable rejects without uncaught process or stream errors', async () => {
  const worker = new Worker('Z:\\missing-dsh-shot\\powershell.exe', []);
  try { await assert.rejects(worker.request({}, 1000)); }
  finally { worker.dispose(); }
  assert.equal(worker.pending.size, 0);
});
test('hung helper is terminated; disposal prevents restart', async () => {
  const worker = new Worker(process.execPath, ['-e', 'setInterval(()=>{},1000)']);
  try {
    await assert.rejects(worker.request({}, 100), /超时/);
    assert.equal(worker.child, null);
    worker.dispose();
    await assert.rejects(worker.request({}), /卸载/);
  } finally { worker.dispose(); }
});
test('old child exit cannot reject requests on the replacement worker', async () => {
  const script = "require('node:readline').createInterface({input:process.stdin}).on('line',l=>{const r=JSON.parse(l);console.log(JSON.stringify({id:r.id,ok:true,value:r.value}))})";
  const worker = new Worker(process.execPath, ['-e', script]);
  try {
    const first = worker.request({value:1}, 3000);
    const rejected = assert.rejects(first, /停止/);
    worker.stop();
    const second = worker.request({value:2}, 3000);
    await rejected;
    assert.equal((await second).value, 2);
    assert.equal(worker.pending.size, 0);
  } finally { worker.dispose(); }
});
test('worker survives command errors and can accept the next command', async () => {
  const script = "require('node:readline').createInterface({input:process.stdin}).on('line',l=>{const r=JSON.parse(l);console.log(JSON.stringify({id:r.id,error:r.fail?'capture failed':undefined,ok:!r.fail}))})";
  const worker = new Worker(process.execPath, ['-e', script]);
  try {
    await assert.rejects(worker.request({fail:true},3000), /capture failed/);
    assert.equal((await worker.request({},3000)).ok, true);
  } finally { worker.dispose(); }
});

