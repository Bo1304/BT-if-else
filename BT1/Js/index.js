

document.getElementById("SapXep").onclick = function SapXepTangDan(){
    var n1 = document.getElementById("Num1").value *1;
    var n2 = document.getElementById("Num2").value *1;
    var n3 = document.getElementById("Num3").value *1;
    var description= "";
    if(n1 > n2 && n1 > n3)
    {
        if(n2 > n3){
            console.log(n3,n2,n1);
            description = "Các số tăng dần là:"+n3+" -> "+n2+" -> "+n1;
        }
        else{
            console.log(n2,n3,n1);
            description = "Các số tăng dần là:"+n2+" -> "+n3+" -> "+n1;
        }
    }
    else if(n2 > n1 && n2 > n3){
        if(n1 > n3)
        {
            console.log(n3,n1,n2);
            description = "Các số tăng dần là:"+n3+" -> "+n1+" -> "+n2;
        }
        else{
            console.log(n1,n3,n2);
            description = "Các số tăng dần là:"+n1+" -> "+n3+" -> "+n2;
        }
    }
    if(n3 > n1 && n3 > n2){
        if(n1 > n2)
        {
            console.log(n2,n1,n3);
            description = "Các số tăng dần là:"+n2+" -> "+n1+" -> "+n3;
        }
        else{
            console.log(n1,n2,n3);
            description = "Các số tăng dần là:"+n1+" -> "+n2+" -> "+n3;
        }
    }
    document.getElementById("divBT1").innerHTML = description;
    document.getElementById("divBT1").classList.add("divBT1");
}