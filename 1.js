findOppositeNumber = (n = parseInt(prompt("Enter n")), inputNumber = parseInt(prompt("Enter the inputNumber"))) =>{
    if((n >= 4) && (n <= 20)){
        if(n%2 == 0){
            if((inputNumber >= 0) && (inputNumber <= n -1)){
                if((inputNumber + (n/2)) < (n-1)){
                    return inputNumber + (n/2);
                }else{
                    return (inputNumber + (n/2)) - n;
                }
                
            }else{
                alert("input number is not correct. Try again!");
                findOppositeNumber();
            }
        }else{
            alert("n must be an even number. Try again!");
            findOppositeNumber();
        }
    }
    else{
        alert("n must be larger than 4 and less than 20. Try again!");
        findOppositeNumber();
    }
}