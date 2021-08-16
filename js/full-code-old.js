/* 
function doubleIt (num){
    const result = num * 2
    return result;
}

const first = doubleIt(5);
const second = doubleIt(7);
console.log(first);
console.log(second); 
*/


function getInputValue (inputID){
    const depositInput = document.getElementById(inputID);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear input field
    depositInput.value = '';

    return depositAmount;
    
}

function updateTotalField(totalFieldId, depositAmount){
    const depositTotal = document.getElementById(totalFieldId);
    // because 'deosit-total' span tag er moddhe use kora hoyse, tai inner text use korsi. ta na hole VALUE use hoto.
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
}

document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('hi');

    //input deposit
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue('deposit-input');

    //get an update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    // because 'deosit-total' span tag er moddhe use kora hoyse, tai inner text use korsi. ta na hole VALUE use hoto.
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */
   
    updateTotalField('deposit-total', depositAmount );


    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    
    
});

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input');

    //get and  update withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawTotalText); 
    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount; */

    updateTotalField('withdraw-total', withdrawAmount);


    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    
})