
document.getElementById('deposit-btn').addEventListener('click', function()
{
    const newdeposit = getInputValue('deposit-amount');
    const prevDeposit = getElementValue('total-deposit');
    const newTotalDeposit = newdeposit + prevDeposit;
    updateElementValue(newTotalDeposit, 'total-deposit');
    const prevTotal = getElementValue('total-balance');
    const newTotal = prevTotal + newdeposit;
    updateElementValue(newTotal, 'total-balance');
})
