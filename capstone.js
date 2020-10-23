// burger menu  
function burger(){
  var x=document.getElementById("nava");
  var y=document.getElementById("navContainer");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.height="2.5rem";
  } else {
    x.style.display = "flex";
    y.style.height="8rem";
  }
}






