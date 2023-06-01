document.getElementById('withdraw-btn').addEventListener('click', function()
{
    const newWithdraw = getInputValue('withdraw-amount');
    const prevWithdraw = getElementValue('total-withdraw');
    const newTotalWithdraw = newWithdraw + prevWithdraw;
    updateElementValue(newTotalWithdraw, 'total-withdraw');
    const prevTotal = getElementValue('total-balance');
    const newTotal = prevTotal - newWithdraw;
    updateElementValue(newTotal, 'total-balance');
})