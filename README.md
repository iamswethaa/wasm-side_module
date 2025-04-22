# Web Assembly Conversion Using Side Module

This project demonstrates how to compile a C function (addition) into WebAssembly using Emscripten's `SIDE_MODULE` method and invoke it from a Node.js script.

## Steps

### 1. **Clone the Repository**

  ```bash
     git clone https://github.com/iamswethaa/wasm-side_module.git
  ```

### 2. **Install Emscripten**
   
  - Clone the Emscripten SDK repository
    
     ```bash
     git clone https://github.com/emscripten-core/emsdk.git
     cd emsdk
     ```

  - Install and activate the latest version
    
    ```bash
    ./emsdk install latest
    ./emsdk activate latest
    ```

  - Set up the environment variables
    
    ```bash
    ./emsdk_env.sh
    ```
    
### 3. **Compile C to WebAssembly**
   
   ```bash
   cd ..
   emcc add.c -O3 -s WASM=1 -s SIDE_MODULE=1 -o add.wasm
   ``` 
  
  - **-O3 :** Enables optimization for performance.
          
  - **-s WASM=1 :** Specifies that the output should be in WebAssembly format.
          
  - **-s SIDE_MODULE=1 :** Generates a standalone .wasm file without accompanying JavaScript glue code.
          
  - **-o add.wasm :** Names the output file as add.wasm.
          
  This command produces a add.wasm file, which is your compiled WebAssembly module.

### 4. **Run the Script**
   
   ```bash
   node index.js
   ```
