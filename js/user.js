function inputConverter(inputId) {
  const element = document.getElementById(inputId);
  const elementValue = element.value;
  const elementConvert = parseFloat(elementValue);
  element.value = "";
  return elementConvert;
}
function textConverter(inputId) {
  const element = document.getElementById(inputId);
  const elementValue = element.innerText;
  const elementConvert = parseFloat(elementValue);
  return elementConvert;
}
function setValue(thisId, variableName) {
  const element = document.getElementById(thisId);
  element.innerText = variableName;
}

document.getElementById("deposite-btn").addEventListener("click", function () {
  // deposite input fild ---
  const depositeInputFild = inputConverter("deposite-fild");
  if (depositeInputFild <= 0 || isNaN(depositeInputFild)) {
    alert("very low amount");
    return;
  }
  // deposite text fild ---
  const depositeTextFild = textConverter("deposite-main-balance");
  // main balance text fild ---
  const mainBalanceTextFild = textConverter("main-balance");
  // deposite sum ----
  const depositeSum = depositeInputFild + depositeTextFild;
  const depostUpdate = setValue("deposite-main-balance", depositeSum);
  // main balance sum
  const mainSum = mainBalanceTextFild + depositeInputFild;
  const mainBalanceUpdate = setValue("main-balance", mainSum);

  // console.log(depositeTextFild);
});
document.getElementById("widhrow-btn").addEventListener("click", function () {
  // widhrow input  fild -------
  const widhrowInputFild = inputConverter("widhrow-fild");
  if (widhrowInputFild <= 0 || isNaN(widhrowInputFild)) {
    alert("very low amount");
    return;
  }
  // widhrow input  fild -------
  const widhrowTextFild = textConverter("widhrow-text-fild");
  // main balance text fild -------
  const mainBalanceTextFild = textConverter("main-balance");

  // widhrow sum
  const widhrowSum = widhrowInputFild + widhrowTextFild;
  const widhrowSumUpdate = setValue("widhrow-text-fild", widhrowSum);
  // main balace update sum
  if (mainBalanceTextFild < widhrowInputFild) {
    alert("Your balance no avilabe");
    return
  }
  const mainBaleceSum = mainBalanceTextFild - widhrowInputFild;
  const mainBaleceSumUpdate = setValue("main-balance", mainBaleceSum);
});


let a = `
//
this is result 
`
console.log(a)