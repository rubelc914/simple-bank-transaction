document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);
    const depositTotal = document.getElementById('deposit-total');
    console.log(depositTotal);
    // depositTotal.innerText = depositAmount;
    const previousDepositAmount = depositTotal.innerText;
    // console.log(previousDepositAmount);
    const totalDepositAmount = parseFloat(previousDepositAmount) + parseFloat(depositAmount);
    console.log(totalDepositAmount);
    depositTotal.innerText = totalDepositAmount;
    //total balance 
    const totalBalance = document.getElementById('total-balance');
    // console.log(totalBalance);
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const totalBalanceAmount = previousTotalBalance + parseFloat(depositAmount);
    // console.log(totalBalanceAmount);
    totalBalance.innerText = totalBalanceAmount;
    

    //clear deposit input field
    depositInput.value='';
    
})

//money withdraw

    document.getElementById('withdraw-button').addEventListener('click',function(){
    //get withdraw input field
    const inputWithdraw = document.getElementById('withdraw-input');
    const inputWithdrawText = inputWithdraw.value;
    const inputWithdrawAmount = parseFloat(inputWithdrawText);

    //get previous withdraw display
    const totalWithdrawDisplay = document.getElementById('withdraw-total');
    const totalWithdrawText = totalWithdrawDisplay.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawText);
    const totalWithdrawAmountDisplay = totalWithdrawAmount+inputWithdrawAmount;
    totalWithdrawDisplay.innerText = totalWithdrawAmountDisplay; 

    //update total balance 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    const totalBalanceAmountUpdate = totalBalanceAmount -inputWithdrawAmount;
    totalBalance.innerText = totalBalanceAmountUpdate;
    
    


    

    //clear withdraw input 
    inputWithdraw.value = '';
    });
