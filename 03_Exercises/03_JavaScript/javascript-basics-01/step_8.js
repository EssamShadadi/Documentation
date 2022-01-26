function alertAge(){
    let userAge = parseInt(document.getElementById("age").value);
    if (userAge>18){
        alert("You are over 18");
    }
    else{
        alert("you are under 18");
    }

}