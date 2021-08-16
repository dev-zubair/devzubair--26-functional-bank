function getInputValue (inputID){
    const depositInput = document.getElementById(inputID);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear input field
    depositInput.value = '';
    return depositAmount;    
}

function updateTotalField(totalFieldId, depositAmount){
    // debugger
    const depositTotal = document.getElementById(totalFieldId);
    // because 'deosit-total' span tag er moddhe use kora hoyse, tai inner text use korsi. ta na hole VALUE use hoto.
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal; 
}

function updateBanalce(depositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* 
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); 
    */
    const previousBalanceTotal =  getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount; 
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0){
        updateTotalField('deposit-total', depositAmount );
        updateBanalce(depositAmount, true);
    }
});

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount); 
        updateBanalce(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance){
        console.log('You have not enough balance to withdraw');
    }
})