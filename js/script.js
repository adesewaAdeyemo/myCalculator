let tipPercent = document.querySelectorAll(".tip");
let tip = 0;
tipPercent.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(btn.value);
    tip = btn.value;
  });
});

let custom = document.querySelector(".customPercent");
custom.addEventListener("input", () => {
  if (custom.value > 0) {
    tip = custom.value;
  }
});

function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById("bill").value;
  let people = document.getElementById("people").value;
  let totalTip = (tip / 100) * bill;
  let tipPerPerson = parseFloat(totalTip / people).toFixed(2);
  var totalPerPerson = parseFloat(
    (Number(bill) + Number(totalTip)) / people
  ).toFixed(2);
  console.log(totalPerPerson);

  tipPerPerson = Math.round(tipPerPerson * 100) / 100;
  totalPerPerson = Math.round(totalPerPerson * 100) / 100;
  document.getElementById("tipSplit").style.display = "block";
  document.getElementById("tip").innerHTML = "$" + tipPerPerson;
  document.getElementById("billSplit").style.display = "block";
  document.getElementById("split").innerHTML = "$" + totalPerPerson;
}

document.getElementById("clearScreen").addEventListener("click", reset);
function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("people").value = "";
  let tip = "";
  var tipPerPerson = "";
  var totalPerPerson = "";

  document.getElementById("tip").innerHTML = "$" + parseFloat(0).toFixed(2);
  document.getElementById("split").innerHTML = "$" + parseFloat(0).toFixed(2);
}
