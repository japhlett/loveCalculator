function calculator(){
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if(name1 === ""||name2 ===""){
        alert("Enter names in both fields");
    }

    const lovePercentage = Math.floor(Math.random ()*101);
    if(lovePercentage < 30){
        document.getElementById("result").innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}
        <br> Not a Great Match Keep Looking!`;
    }else if(lovePercentage >= 30 && lovePercentage < 70){
        document.getElementById("result").innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}
        <br> There is potential. Give it a try!`;
    }else{
        document.getElementById("result").innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}
        <br>Great Match! Love is in the Air!`;
    }

}