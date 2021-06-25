//calculator.js

var buttons = document.getElementsByClassName("button");
var display = document.getElementById("screen-count");
var operand1 = 0;
var operand2 = null;
var operator = null;

 for(var i = 0 ; i < buttons.length ; i++){  
    console.log(buttons[i]);
    buttons[i].addEventListener('click',function(){
     var value = this.getAttribute('data-value');  
     console.log('value',value);
     
     if(value == '*'){
         operator = '*';
         operand1 = parseFloat(display.textContent);
         //alert(operand1);
         display.innerText = value + "";
        // console.log(operand1);        
        
     }else if(value == '+'){
         operator = '+';
         operand1 = parseFloat(display.textContent);
         display.innerText = value + "";
         console.log(operand1);
      }else if(value == '-'){
         operator = '-';
         operand1 = parseFloat(display.textContent);
         display.innerText = value + "";
         console.log(operand1);
      }else if(value == '%'){
         operator = '%';
         operand1 = parseFloat(display.textContent);
         display.innerText = value + "";
         console.log(operand1);
      }else if(value == '/'){
         operator = '/';
         operand1 = parseFloat(display.textContent);
         display.innerText = value + "";
         console.log(operand1);
      }
     
     
         else if(value == '='){
           
            let dis = display.textContent;
            dis = dis.substr(1);

            operand2 = parseFloat(dis);
            console.log("2nd operand" , operand2);
         
            console.log(operand1);

               var result; 
               if(operator == '+/-' ){
                  result = eval('operand1 ^ operand2');
               }
               if(operator == '/' ){
                  result = eval('operand1 / operand2');
               }

               
               if(operator == '%' ){
                  result = eval('operand1 % operand2');
               }
               
               if(operator == '+' ){
                  result = eval('operand1 + operand2');
               }
               if(operator == '-'){
                
                  result = eval('operand1 - operand2');
               }

               
               
               if(operator == '*'){
                  
                  result = eval('operand1 * operand2');
               }

 
               display.innerText = result;
           
     



     }
     
      else if(value == 'AC'){
                display.innerText = "";
            }else if(value == '+/-'){
              //let ae = display.innerText
                display.innerText = display.innerText.substr(1) + "";
            }
             else{
                  display.innerText += value;
                 }
   
    });
 }
 
 
 
 
 let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log("Button text is ",buttonText);

        // if(buttonText == 'X'){
        //     buttonText = '*';
        //     screenValue += buttonText;
        //     screen.value = screenValue;
        // }
        if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

