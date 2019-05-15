

var sichtbar = 0;

 function einblenden(was) {
   if (sichtbar == 0) {
     document.getElementById(was).style.display="block";

     sichtbar = 1;
    }
    else {
      document.getElementById(was).style.display="none";
      sichtbar = 0;
    }
 }
