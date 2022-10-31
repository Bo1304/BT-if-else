

document.getElementById("DuDoan").onclick = function DuDoanTamGiac() {
    var n1 = Number( document.getElementById("Num1").value ) ;
    var n2 =  Number( document.getElementById("Num2").value ) ;
    var n3 =  Number( document.getElementById("Num3").value ) ;
    var content = "";

   if(n1 + n2 >n3 || n2 + n3 > n1 || n1 + n3 > n2 )
   {
    if(n1 * n1 == n2 * n2 + n3 * n3 || n2 * n2 == n1 * n1 + n3 * n3 
        || n3 * n3 == n1 * n1 + n2 * n2 )
        {
            content = "Hình tam giác vuông";
        }
        else if(n1 == n2 && n2 == n3)
        {
            content ="Hình tam giác đều";
        }
        else if(n1 == n2 || n1 == n3 || n2 == n3)
        {
            content= "Hình tam giác cân";
        }
        else if(n1 + n2 <= n3 || n2 + n3 <= n1 || n1 + n3 <= n2)
        {
            content = "dữ liệu không hợp lệ";
        }
        else{
            content = "một loại tam giác khác";
        }
   } 
   else{
    content = "không hợp lệ";
   }

    document.getElementById("divBT4").innerHTML = content;
    document.getElementById("divBT4").classList.add("divBT4");
}