function checkPassword()
{
    let objArr= document.querySelectorAll("input");
    if (objArr[0].value!=objArr[1].value){
       for (let i =0;i<objArr.length;i++){
        objArr[i].style.border ="2px solid red"
        }
    } 
}
    