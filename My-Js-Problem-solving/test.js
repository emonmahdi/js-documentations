function reversStr(str) {
  let resversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    resversed += str[i];
  }
  return resversed;
}

const result = reversStr("Emon mahdi");
console.log(result);
