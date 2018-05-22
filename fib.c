#include <stdlib.h>
#include "emscripten.h"

EMSCRIPTEN_KEEPALIVE
int f(int n)
{
  if (n == 0 || n == 1)
    return n;
  else
    return (f(n-1) + f(n-2));
}
