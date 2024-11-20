function log(l1, h1, l2, h2) {
  console.log("l1 : " + l1);
  console.log("h1 : " + h1);
  console.log("l2 : " + l2);
  console.log("h2 : " + h2);
}
let num1 = [1, 3, 9, 13];
let num2 = [2, 5, 6, 8];
function median(num1, num2) {
  let count = Math.floor(((num1.length + num2.length) - 1) / 2);
  //odd true 1 false 0
  let odd = ((num1.length + num2.length) % 2) == 0 ? false: true;
  // console.log(odd);
  let m = 0;
  let l1 = 0,
  l2 = 0;
  let h1 = num1.length - 1,
  h2 = num2.length - 1;
  log(l1, h1, l2, h2);
  while (count-- > 0) {
    // console.log(count);
    //if both can move forward
    if (l1 <= h1 && l2 <= h2) {
      if (num1[l1] < num2[l2]) {
        l1++;
      } else {
        l2++;
      }
    }
    //if any one of them can move forward
    else {
      if (l1 > h1) {
        l2++;
      } else {
        l1++;
      }
    }
    //if both can move backward
    if (h1 >= l1 && h2 >= l2) {
      if (num1[h1] > num2[h2]) {
        h1--;
      } else {
        h2--;
      }
    }
    //if any one of them can move backward
    else {
      if (h1 < l1) {
        h2--;
      } else {
        h1--;
      }
    }
  }
  log(l1, h1, l2, h2);

  if (odd) {
    m = ((l1 == h1)?num1[l1]: num2[l2]);
  } else {
    //m = ("not implemented lol");
    if (l1 > h1) {
      // console.log(num1[l2], num2[h2])
      m = (num2[l2] + num2[h2])/2;
    } else if (l2 > h2) {
      m = (num1[l1] + num1[h1])/2;
    } else {
      m = (num1[l1]+num2[l2])/2;
    }
  }
  return m;
}
let m = median(num1, num2);
console.log(m);