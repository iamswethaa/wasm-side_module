const fs = require('fs');
const path = require('path');

(async () => {
  const wasmPath = path.resolve(__dirname, 'sum.wasm');
  const buffer = fs.readFileSync(wasmPath);

  const wasmModule = await WebAssembly.instantiate(buffer);
  const { sum } = wasmModule.instance.exports;

  const result = sum(5, 5); 
  console.log(`Result: ${result}`);
})();
