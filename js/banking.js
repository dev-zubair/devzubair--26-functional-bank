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


function getInputValue (){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear input field
    depositInput.value = '';

    return depositAmount;
    
}




document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('hi');

    //input deposit
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue();

    // console.log(depositAmount);

    //show deposit amount in the main deposit section
    const depositTotal = document.getElementById('deposit-total');
    // because 'deosit-total' span tag er moddhe use kora hoyse, tai inner text use korsi. ta na hole VALUE use hoto.
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    // console.log(depositTotalText);

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    
    
});

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('hi');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

//update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;


    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clear input
    withdrawInput.value = '';
})