#include "emscripten.h"

EMSCRIPTEN_KEEPALIVE

int f(int n)
{
  int a = 0;
  int b = 1;
  while (n-- > 1) {
    int t = a;
    a = b;
    b += t;
  }
  return b;
}
