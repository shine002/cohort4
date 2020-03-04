let objData = {
    NL:	"Newfoundland and Labrador",
    PE:	"Prince Edward Island",
    NS:	"Nova Scotia",
    NB:	"New Brunswick",
    QC:	"Quebec",
    ON:	"Ontario",
    MB:	"Manitoba",
    SK:	"Saskatchewan",
    AB:	"Alberta",
    BC:	"British Columbia",
    YT:	"Yukon",
    NT:	"Northwest Territories",
    NU:	"Nunavut",
    }
    
    // var key = "key2";
    // var value = obj[key]  // value2
    // console.log(value);
    
    const obj  = {
        
    
        searchObj: (search) => {
                search = search.toUpperCase();
                var value = objData[search];              
              if (value == undefined){
                  return "Invalid Input";
              }else{
                return value;
              }
            }
    }


 export default obj;   