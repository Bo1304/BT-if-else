

function getDaysOfMonth(year, month) {

    return new Date(year, month + 1, 0).getDate();

}
function getDaysOfMonthNhuan(year, month) {

    return new Date(year, month + 1, 0).getDate() +1;

}

// alert("Tháng 2 có " + getDaysOfMonth(new Date().getFullYear(), 1) + " ngày"); // tháng 2 có giá trị là 1

//  alert("Tháng 10 có " + getDaysOfMonth(new Date().getFullYear(), 9) + " ngày"); // tháng 10 có giá trị là 9

document.getElementById("TinhNgay").onclick = function TinhNgayThang() {
    var date = new Date();
    var nam = date.getFullYear();

    var thang = Number(document.getElementById("Month").value);
    var nam = Number(document.getElementById("Year").value);
    var content = "";
    if (nam % 4 == 0) {
       if(thang == 2){
        content = "Tháng " + thang + " có " + getDaysOfMonthNhuan(new Date().getFullYear(), thang - 1) + " ngày, năm "+nam;
       }
       else{
        content = "Tháng " + thang + " có " + getDaysOfMonth(new Date().getFullYear(), thang - 1) + " ngày, năm "+nam;
       }
       
    }
    else {
        content = "Tháng " + thang + " có " + getDaysOfMonth(new Date().getFullYear(), thang - 1) + " ngày, năm "+nam;
    }


    document.getElementById("divBT6").innerHTML = content;
    document.getElementById("divBT6").classList.add("divBT6");
}

