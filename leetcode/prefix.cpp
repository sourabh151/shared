#include <iostream>
#include <string>

int p(char *s, char *sw) {
  char *sc = s;
  char *swc = sw;
  bool match = true;
  int a = 0, c = 0;
  while (*sc != '\0') {
    if (*sc == ' ') {
      match = true;
      swc = sw;
      a = c + 1;
    } else if (match) {
      if (*swc == '\0') {
        return a;
      }
      if (*swc == *sc) {
        swc++;
      } else {
        match = false;
      }
    }
    c++;
    sc++;
  }
  return -1;
}
int main(int argc, char *argv[]) {
  std::cout << argc;
  argc--;
  int c = 1;
  std::string str;
  while (c <= argc) {
    int i = 0;
    while (argv[c][i] != '\0') {
      std::cout << argv[c][i];
      str += argv[c][i];
      i++;
    }
    std::cout << std::endl;
    ++c;
    if (c <= argc) {
      str += ' ';
    }
  }
  std::cout << str;
  const char* a = str.c_str();
  const char* b = "wo";
  std::cout<<std::endl<<p(a, b)<<std::endl;
  return 0;
}
