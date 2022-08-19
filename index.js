function oddishOrEvenish(num) {
  let total = 0;
  num
    .toString()
    .split("")
    .map(function (value) {
      total += parseInt(value);
    });

  let response = total % 2 === 0 ? "Even" : "Odd";
  return response;
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
