
document.getElementById("TimKiem").onclick = function Tim () {
    var name1 = document.getElementById("Num1").value;
    var name2 = document.getElementById("Num4").value;
    var name3 = document.getElementById("Num7").value;

    var x1 = Number(document.getElementById("Num2").value);
    var y1 = Number(document.getElementById("Num3").value);

    var x12 = Number(document.getElementById("Num5").value);
    var y12 = Number(document.getElementById("Num6").value);

    var x13 = Number(document.getElementById("Num8").value);
    var y13 = Number(document.getElementById("Num9").value);

    var x2 = Number(document.getElementById("Num10").value);
    var y2 = Number(document.getElementById("Num11").value);

    var d1 =  Math.sqrt((x2 * x2 - 2 * x2 *x1 +x1 *x1) + (y2 * y2 - 2 * y2 *y1 +y1 *y1));
    var d2 =  Math.sqrt((x2 * x2 - 2 * x2 *x12 +x12 *x12) + (y2 * y2 - 2 * y2 *y12 +y12 *y12));
    var d3 =  Math.sqrt((x2 * x2 - 2 * x2 *x13 +x13 *x13) + (y2 * y2 - 2 * y2 *y13 +y13 *y13));

    var content = "";


    if(d1 > d2 && d1 > d3){
        content ="sinh viên xa trường nhất "+name1;
    }
    else if (d2 > d1 && d2 > d3){
        content ="sinh viên xa trường nhất "+name2;
    }

    else if(d3 > d1 && d3 > d2){
        content ="sinh viên xa trường nhất "+name3;
    }

    // else if(d3 > d1) {
    //     content ="sinh viên xa trường nhất "+name3;
    // }

    // else if(d2 > d3){
    //     content ="sinh viên xa trường nhất "+name2;
    // }
    // else if(d3 > d2) { 
    //     content ="sinh viên xa trường nhất "+name3;
    // }


    document.getElementById("divBT8").innerHTML = content;
    document.getElementById("divBT8").classList.add("divBT8");
    console.log("ketQua",d1);
    console.log("ketQua",d2);
    console.log("ketQua",d3);
}

