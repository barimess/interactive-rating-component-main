let ratingstate = "";

// function to select a rating and clear other selections
function select(obj) {
 ratingstate = obj.innerHTML;
 let wiper ;
 //scuffed way of clearing selections.
 for(let i=1; i<6; i++) {
   wiper = document.getElementById(`number-${i}`);
   wiper.classList.remove("selected");
 }
 obj.classList.add("selected");
}

// TODO: find a way to translate functionality towards the thank you wrapper.