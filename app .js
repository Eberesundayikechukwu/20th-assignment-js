function love(){
    var name1 = document.getElementById("nameone").value;
   var name2 = document.getElementById("nametwo").value;
   if(name1.length<=2){
        alert("enter at least 3 character");
      }
             if(name2.length<=2){
             alert("enter at least 3 character");    
     }
   else{
      var random = Math.floor(Math.random()*100);
           document.getElementById("print").innerHTML = name1 + " and " + name2 + " = " + random + " % " + " of love ";
    }
     if(random>=10 || random>=50){
         document.getElementById("statement").innerHTML = "Good Relationship";
      }
      else if(random>=51 || random<=100){
       document.getElementById("statement").innerHTML = "lovely Relationship";
      }
}