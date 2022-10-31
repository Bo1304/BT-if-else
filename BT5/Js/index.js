

document.getElementById("TinhNgayHomQua").onclick = 
function TinhNTN(){
    // var date = new Date();
    // var y = date.getFullYear();
    // var m = date.getMonth();
    // var d = date.getDate();
    var d = Number(document.getElementById("Num1").value);
    var m = Number(document.getElementById("Num2").value);
    var y = Number(document.getElementById("Num3").value);
    var content ="";

    switch (m) {
        case 5: case 7: case 10: case 12:{
            if(d ==1){
                d = 30;
                m -=1;
            } else{
                d= d- 1;
            }
            break;
        }
        
         case 2: case 4: case 6: case 8: case 9:{
            if(d ==1){
                d = 31;
                m -=1;
            }else{
                d = d -1;
            }
            break; 
        }
        case 1:{
            if(d ==1){
                d = 31;
                m =12;
                y -=1;
            }else{
                d = d -1;
            }
            break; 
        }
        case 3:{
            if(d ==1 && y % 4 ==0 ){
                d= 29;
                m -=1;
            }
            else if(d == 1 && y % 4 != 0){
                d = 28 ;
                m -= 1;
            }
            else{
                d = d -1;
            }
        break;
        }
       
    }
    content ="Hôm qua "+d+"/"+m+"/"+y;
    document.getElementById("divBT5").innerHTML = content;
    document.getElementById("divBT5").classList.add("divBT5");
}

document.getElementById("TinhNgayMai").onclick = 
function TinhNTN1(){
    // var date = new Date();
    // var y = date.getFullYear();
    // var m = date.getMonth();
    // var d = date.getDate();
    var d1 = Number(document.getElementById("Num1").value);
    var m1 = Number(document.getElementById("Num2").value);
    var y1 = Number(document.getElementById("Num3").value);
    var content ="";

    switch (m1) {
        case 1: case 3: case 5: case 7: case 8: case 10:{
            if(d1 ==31){
                d1 = 1;
                m1 +=1;
            } else{
                d1= d1 +1;
            }
            break;
        }
        case 12:{
            if(d1 ==31){
                d1 = 1;
                m1 =1;
                y1 +=1;
            } else{
                d1= d1 +1;
            }
            break;
        }
        case 4: case 6: case 9: case 11: {
            if(d1 ==30){
                d1 = 1;
                m1 +=1;
            }else{
                d1 = d1 +1;
            }
            break; 
        }
        case 2:{
            if(d1 ==29 && y1 % 4 ==0 ){
                d= 1;
                m +=1;
            }
            else if(d1 == 28 && y1 % 4 != 0){
                d1 = 1 ;
                m1 += 1;
            }
            else{
                d1 = d1 +1;
            }
        break;
        }
       
    }
    content ="Ngày mai "+d1+"/"+m1+"/"+y1;
    document.getElementById("divBT5").innerHTML = content;
    document.getElementById("divBT5").classList.add("divBT5");
}