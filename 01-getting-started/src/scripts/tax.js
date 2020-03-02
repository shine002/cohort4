let a = 48535;  //first tax slab
let b = 48534;  //second  tax bracket
let c = 53404;  //third  tax bracket
let d = 63895;  //forth  tax bracket

const tax = {

    taxCalculator: (num) => {   
        if (num <= 48535){
            return (num*15/100).toFixed(2);                  

        }    
             
        else if (num>48535 && num<=97069){
            return ((a*15/100) + (num-a)*20.5/100).toFixed(2);
            
        }    
        
        else if (num >97069 && num<=150473) {
            return (a*15/100 + b*20.5/100 + (num-(a+b))*26/100).toFixed(2);
            
        }    
        
        else if (num > 150473 && num<=214368){        
            return  (a*15/100 + b*20.5/100 + b*26/100 + (num-(a+b+c))*29/100).toFixed(2);
            
        } 
        
        else {
            return (a*15/100 + b*20.5/100 + c*26/100 + d*29/100 + (num -(a+b+c+d))*33/100).toFixed(2);
            
        }
        
    },

};


export default tax;

