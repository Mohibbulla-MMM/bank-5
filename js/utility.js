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
  