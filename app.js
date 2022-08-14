// https://www.omnicalculator.com/math/factorial

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', function() {
  
    result.textContent = `Factorial = ${computeFactorial()}`;
})

// calculation

function computeFactorial() {

  let res = 1;

  for(let i=1; i<=Number(v1.value); i++) {

    res *= i;
  }

  return res;
}