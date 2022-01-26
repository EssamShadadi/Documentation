function shoeSize(){
    let shoe = parseInt(document.getElementById("shoe_size").value);
    let year =parseInt(document.getElementById("year").value);
    let res = shoe *2;
    res = res +5;
    res = res *50;
    res = res / year;
    res =res +1766;
    alert(res);

}