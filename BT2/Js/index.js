


document.getElementById("Btap2").onclick = function Sayhello() {
  var ex = document.getElementById("Member").value *1;
    var content = "";
    switch (ex) {
        case 1:{
            content = "Xin chào con ghệ đít bự ";
           break;
         }
        case 2:{        
            content = "Xin chào Bố";
            break;
        }
        case 3:{      
            content = "Xin chào Mẹ ";
            break;
        }
        case 4:{        
            content = "Xin chào anh trai";
            break;
        }
        case 5:{           
            content = "Xin chào em gái ";
            break;
        }
        default:{        
            content = "Bạn vui lòng chọn đúng người ";
        }
    }
    document.getElementById("divBT2").innerHTML = content;
    document.getElementById("divBT2").classList.add("divBT2");
}