1、递归算法？
function dg(n, sum) {
while(n > 0) {
sum += n;
n--;
dg(n, sum);
}
return sum;
}
2、递归实现斐波那契
const dg = (n) => {
if (n < 3) return 1;
return dg(n - 2) + dg(n - 1);
}

const fbnq = (l) => {
  for (let i = 1; i < (l + 1); i++) {
    console.log(dg(i));
  }
}
fbnq(6);
分治算法
