emcc -03 -s WASM=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS='["_f"]' fib.c
