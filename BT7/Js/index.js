
document.getElementById("DocSo").onclick= function KTDocSo(){
    var n1 = Number( document.getElementById("Num1").value);
    var content = "";
    var temp1 =Number( document.getElementById("Num1").value);
    // đơn vị
    var temp2 =Number( document.getElementById("Num1").value);
    // hàng chục
    var temp3 =Number( document.getElementById("Num1").value);
    // hàng trắm
    
    temp1 = n1 % 10;
    temp2 = Math.floor(n1 /10);
    temp3 = Math.floor(n1 /100);
  
   

switch (temp1) {
    case 1:{
        content = "một";
        break;
    }
    case 2:{
        content = "hai";
        break;
    }
    case 3:{
        content = "ba";
        break;
    }
    case 4:{
        content = "bốn";
        break;
    }
    case 5:{
        content = "năm";
        console.log("năm");
        break;
    }
    case 6:{
        content = "sáu";
        console.log(content);
        break;
    }
    case 7:{
        content = "bảy";
        break;
    }
    case 8:{
        content = "tám";
        break;
    }
    case 9:{
        content = "chín";
        break;
    }
}
switch (temp2) {
    case 1:{
        content = "mười";
        break;
    }
    case 2:{
        content = "hai mươi";
        break;
    }
    case 3:{
        content = "ba mươi" ;
        break;
    }
    case 4:{
        content = "bốn mươi";
        break;
    }
    case 5:{
        content = "năm mươi";
        break;
    }
    case 6:{
        content = "sáu mươi ";
        console.log("sáu mươi");
        break;
    }
    case 7:{
        content = "bảy mươi";
        break;
    }
    case 8:{
        content = "tám mươi";
        break;
    }
    case 9:{
        content = "chín mươi";
        break;
    }
}
    
switch (temp3) {
    case 1:{
        content = "một trăm";
        break;
    }
    case 2:{
        content = "hai trăm";
        break;
    }
    case 3:{
        content = "ba trăm" ;
        break;
    }
    case 4:{
        content = "bốn trăm";
        break;
    }
    case 5:{
        content = "năm trăm";
        break;
    }
    case 6:{
        content = "sáu trăm ";
        break;
    }
    case 7:{
        content = "bảy trăm";
        break;
    }
    case 8:{
        content = "tám trăm";
        break;
    }
    case 9:{
        content = "chín trăm";
        console.log("chín trăm");
        break;
    }
}
    

// console.log(n1);
console.log(temp1,temp2,temp3);



    
  
    
    //   content =temp1,temp2;
    document.getElementById("divBT7").innerHTML = content;
    document.getElementById("divBT7").classList.add("divBT7");
}

