let ratingstate = "";

function select(obj) {
 ratingstate = obj.innerHTML;
 let wiper ;
 for(let i=1; i<6; i++) {
   wiper = document.getElementById(`number-${i}`);
   wiper.classList.remove("selected");
 }
 obj.classList.add("selected")
}