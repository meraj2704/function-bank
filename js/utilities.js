function getInputValue(inputId)
{
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputNumber = parseFloat(inputString);
    input.value ='';
    return inputNumber;
}

function getElementValue(elementId)
{
    const input = document.getElementById(elementId);
    const inputString = input.innerText;
    const inputNumber = parseFloat(inputString);
    input.innerText ='';
    return inputNumber;
}
function updateElementValue(newAmount, elementId)
{
const element = document.getElementById(elementId);
element.innerText = newAmount;
}