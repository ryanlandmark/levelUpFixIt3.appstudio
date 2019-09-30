let loanType = prompt('type Car or Home to pick a type of loan calculator.')
for(i=0; i<= loanType.length; i++){
if(loanType =='Car' || loanType == 'car'){ 
loanResponse = prompt('enter the amount of monney needed') 
timeLoan = prompt('enter the amount of months you want to pay of this loan')
loanInterest = prompt('enter your interst rate of your loan')
function carLoanPayment(loanAmount, timeAmount, intrest){
    return `A car loan for ${loanResponse} over ${timeLoan} months at ${loanInterest} intrest would have a monthly payment of $` + loanAmount/timeAmount*intrest;
    }
} else if (loanType == 'Home' || loantype == 'home'){
  homeAmount= prompt('enter the amount of your home loan')
  homeTime = prompt('enter the amount of months your home loan is for') 
  homeIntrest =prompt('enter your intrest rate for your home loan')
    function homeLoanPayment (homeLoanAmount, homeMonthAmount,homeintrestAmount){
    return `A home loan for ${homeAmount} over ${homeTime} years at {homeIntrest} intrest your monthly payment would be ` + homeLoanAmount/homeMonthAmount*homeIntrestAmount;
    }
    }
    var carLoanPayment = carLoanPayment(`${loanResponse}`, `${timeLoan}`,`${loanInterest}`);
    alert(carLoanPayment); 
  
    var homeLoanPayment = homeLoanPayment (`${homeAmount}`, `${homeTime}`, `${homeIntrest}`);
    alert(homeLoanPayment);
  }  
  
