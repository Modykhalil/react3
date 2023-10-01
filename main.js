
   /*  peroblem 1 */

function average(a,s,d,f,g,h,j,k,l,z){
    sum=a+s+d+f+g+h+j+k+l+z;
    average=sum/10;
    return average;
}

document.getElementById("play").innerHTML=average(10,20,30,40,50,60,70,80,90,100)




   /*  peroblem 2 */
  
function area(x,y){
    area=(x*y)/2
    return area;
}

document.getElementById("play1").innerHTML=area(15,10)




   /*  peroblem 3 */

function age(x){
days=365*x;
return days;
}

console.log(age(20));


 /*  peroblem 4 */

 function add(x,y){
    sum=x+y;
    return sum;
 }

 document.getElementById("play2").innerHTML=add(10,20)

 /* peroblem 5 */

 function name(x){
    var names=["Ali","khalil","amr","cr7","ahmed","zin","omar","fathy","pedro","messi"]
    return names[x] ;
 }


 document.getElementById("play3").innerHTML=name(0)


  /* peroblem 6 */

  function string(x){
    return x;
  }

  document.getElementById("play4").innerHTML=string("Mohamed Ahmed Mohamed Ahmed")


  /* peroblem 7 */

  function time(x){
    secound=x*60*60;
    return secound;

  }


  document.getElementById("play5").innerHTML=time(2)

  /*peroblem 8 */

  function comp(x,y,w,z){
   sum=x+y+w+z;
   return sum;
}
  
if (comp(100,200,300,400)>350){
    document.getElementById("play6").innerHTML="true"
  }
  else{
    document.getElementById("play6").innerHTML="false"
  }

   /*peroblem 9 */

  

    function khalil(x){
     return x === 0;

    }

    document.getElementById("play7").innerHTML=khalil(0)

    /* peroblem 10 */
    function mod(x,y){
        return x%y;
    }

    document.getElementById("play8").innerHTML=mod(1,4)

    /* peoblem 11 */

    function compare(x,y){
        if (x>y){
          return  x
        }
        else if (x<y){
            return y;
        }
        else {
          return "equals";
        }
    }

    document.getElementById("play9").innerHTML=compare(50,100)

     

    /* peroblem 12 */

    function type(x){
      return typeof x ==='number' ;
     
    }


    document.getElementById("play10").innerHTML=type(10)


    /* peroblem */

    function getCurrentDate() {
        const currentDate = new Date();
        return currentDate;
      }


      document.getElementById("play11").innerHTML=getCurrentDate()

    


   



        

   
 










