var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
  // spc
  for (let j = 1; j < n - i; j += 2) {
    str += " ";
  }
  // str
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  s
  for (let j = 1; j < n - i + 1; j++) {
    str += " ";
  }
  
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}



for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);