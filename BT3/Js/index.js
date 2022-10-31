

document.getElementById("DemChanLe").onclick = function DenSoChanLe() {
    var Number1 = document.getElementById("Num1").value * 1;
    var Number2 = document.getElementById("Num2").value * 1;
    var Number3 = document.getElementById("Num3").value * 1;
    var content = "";
    var DemChan = 0;
    var DemLe = 0;
    if( Number1 %2 == 0)
        {
         
            DemChan++
       
        }
        else{
         
            DemLe++
        
        }
        if( Number2 %2 == 0)
        {
          
            DemChan++
           
        }
        else{
           
            DemLe++
          
        }
        if( Number3 %2 == 0)
        {
          
            DemChan++
          
        }
        else{
         
            DemLe++
              
              
        }  
    content = +DemChan+" Số chẵn và "+DemLe+" số lẻ" ;  
    document.getElementById("divBT3").innerHTML = content;
    document.getElementById("divBT3").classList.add("divBT3");
        
}