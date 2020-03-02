
var num = document.getElementById("input");
var button = document.getElementById("button");
var result = document.getElementById("result");

// button.addEventListener("click",function() {
//     console.log("works");

// })

var a = 48535;
var b = 48534;
var c = 53404;
var d = 63895;



const tax = {

    taxCalculator: (num) => {   
        if (num <= 48535){
            num = num*15/100;        
            result.value = num.toFixed(2);

        }    
             
        else if (num>48535 && num<=97069){
            num = (a*15/100) + (num-a)*20.5/100;
            result.value = num.toFixed(2);  
        }    
        
        else if (num >97069 && num<=150473) {
           num = a*15/100 + b*20.5/100 + (num-(a+b))*26/100;
           result.value = num.toFixed(2);  
        }    
        
        else if (num > 150473 && num<=214368){        
            num = a*15/100 + b*20.5/100 + b*26/100 + (num-(a+b+c))*29/100;
            result.value = num.toFixed(2);  
        }
        
        else {
            num = a*15/100 + b*20.5/100 + c*26/100 + d*29/100 + (num -(a+b+c+d))*33/100;
            result.value = num.toFixed(2);  
        }
        
    },

};


button.addEventListener("click",function() {
    tax.taxCalculator(num.value);
})


// export {tax};

