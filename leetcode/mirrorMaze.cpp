#include <iostream>
#include <cstdio>

int main (int argc, char *argv[]) {
  int R,C;
  std::scanf("%i %i",&R,&C);
  //std::printf("%i %i",C,R);
  char* grid[R];
  for (int i = 0; i<R; i++) {
    std::cin.getline(grid[i],C);
  }
  for (int i = 0; i<R; i++) {
      std::cout<<grid[i];
  }
  return 0;
}
