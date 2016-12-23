
function makeFriendlyDates(arr) {
  var yearNow = new Date().getFullYear();
  var result = [];
    
    function month(x){
      switch(x){
        case "01":
          x= "January";
         break;
        case "02":
          x= "February";
          break;
        case "03":
          x = "March";
          break;
        case "04":
          x ="April";
          break;
        case "05":
          x = "May";
          break;
        case "06":
          x ="June";
          break;
        case "07":
          x = "July";
          break;
        case "08":
          x = "August";
          break;
        case "09":
          x = "September";
          break;
        case "10":
          x = "October";
          break;
        case "11":
          x = "November";
          break;
        case "12":
          x = "December";
          break;
        default:
          x = undefined;
      }
      
      return x;
    }
  
  function checkDay(x){
    
     switch(x){
       case "1":
         x = "st";
         break;
       case "2":
         x = "nd";
         break;
       case "3":
         x = "rd";
         break;
       default:
         x = "th";
     }
    return x;
  }
  
        var dayArr = [],
          yearArr = [],
          monthArr = [];
 
     
  for(var i = 0; i<arr.length; i++){
     var split = arr[i].split("-"),
          year = split[0],
          monthVar = month(split[1]),
          day = parseInt(split[2]);
    
     dayArr.push(day);
     monthArr.push(monthVar);
     yearArr.push(year);    
  }
  
  //kako ću provjeriti da li je zadnji broj dana 1,2,3 ili default?
  //Pretvori u string zatim razdvoji pa cemo vrsiti funkciju zadnjeg clana
  var splitDay1 = dayArr[0].toString().split("");
  var splitDay2 = dayArr[1].toString().split("");
  var dayNastavak1 = checkDay(splitDay1[splitDay1.length-1]);
  var dayNastavak2 = checkDay(splitDay2[splitDay2.length-1]);
  
  if(dayArr[0] == 13 || dayArr[0] == 12 || dayArr[0] == 11){
    dayNastavak1 = "th";
  } else if(dayArr[1] == 13 && dayArr[1] == 12 && dayArr[1] == 11){
    dayNastavak2 = "th";
  }
  
   //Checking out now
  if(yearArr[0] == yearNow && yearArr[1] == yearNow){

      if(monthArr[0]==monthArr[1]){
           if(dayArr[0] == dayArr[1]){
             result.push(monthArr[0] + " " + dayArr[0]+dayNastavak1);
           } else {
             result.push(monthArr[0] + " "+dayArr[0]+dayNastavak1);
             result.push(dayArr[1]+dayNastavak2);
           }
      } else {
        result.push(monthArr[0] +" " + dayArr[0] + dayNastavak1);
        result.push(monthArr[1] + " " + dayArr[1] + dayNastavak2);
      }

  } 

  else if(yearArr[0] == yearNow && yearArr[1] == yearNow +1){

     if(monthArr[0] == monthArr[1]){
        result.push(monthArr[0] + " "+dayArr[0]+dayNastavak1);
       result.push(monthArr[1] + " "+dayArr[1]+dayNastavak2 + ", "+yearArr[1]);
     } else {
       result.push(monthArr[0] + " "+dayArr[0]+dayNastavak1);
       result.push(monthArr[1] + " "+dayArr[1]+dayNastavak2);
     }
  }
  
  else if(yearArr[0] == yearNow && yearArr[1] !== yearNow+1){       
       result.push(monthArr[0] + " " + dayArr[0] + dayNastavak1 + ", " + yearArr[0]);
       result.push(monthArr[1] + " " + dayArr[1] + dayNastavak2 + ", " + yearArr[1]);    
  } 
  
  else if(((yearArr[0] && yearArr[1]) !== yearNow)){
       if(yearArr[0] == yearArr[1]){
          if(monthArr[0] == monthArr[1]){
          //  return true;
            if(dayArr[0]==dayArr[1]){
              result.push(monthArr[0] + " " + dayArr[0] + dayNastavak1 + ", " + yearArr[0]); 
            } else {
              result.push(monthArr[0] + " " + dayArr[0] + dayNastavak1 + ", " + yearArr[0]);
       result.push(monthArr[1] + " " + dayArr[1] + dayNastavak2); 
            }
          } else {
            result.push(monthArr[0] + " " + dayArr[0] + dayNastavak1+", " +yearArr[0]);
            result.push(monthArr[1] + " " + dayArr[1] + dayNastavak2);
          }
       } else if(yearArr[0] == yearArr[1]-1){
           if(monthArr[0] == monthArr[1]){
              if(dayArr[0] == dayArr[1]){
               result.push(monthArr[0] + " " + dayArr[0] + dayNastavak1 + ", " +    yearArr[0]);
       result.push(monthArr[1] + " " + dayArr[1] + dayNastavak2 + ", " + yearArr[1]);  
              } else {
                result.push(monthArr[0]+ " "+dayArr[0]+dayNastavak1+", "+yearArr[0]);
                result.push(monthArr[1]+" "+dayArr[1]+dayNastavak2);
              }
          }  
       }
        else {
            result.push(monthArr[0] + " " + dayArr[0] + dayNastavak1 + ", " + yearArr[0]);
       result.push(monthArr[1] + " " + dayArr[1] + dayNastavak2 + ", " + yearArr[1]); 
       }                                                                
   }
 
 
  return result;
 
  
  
}
console.log(makeFriendlyDates(["2027-09-05", "2027-09-09"]));