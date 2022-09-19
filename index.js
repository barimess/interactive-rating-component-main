let rating_state;

// function to select a rating and clear other selections
function select(obj) {
 rating_state = obj.innerHTML;
 let wiper ;
 //scuffed way of clearing selections.
 for(let i=1; i<6; i++) {
   wiper = document.getElementById(`number-${i}`);
   wiper.classList.remove("selected");
 }
 obj.classList.add("selected");
}

//function to submit the rating to the thank you form.
function submitRating(){
  // get rating from previous function and change the html afterwards
  let rating_value = document.getElementById("rating-value");
  if (!rating_state) {return};
  rating_value.innerHTML = rating_state;

  //fade out animation 
  let rating_section = document.getElementById("rating-section");
  fadeOut(rating_section);

  //fade in animation
  let thankyou_section = document.getElementById("thankyou-section");
  fadeIn(thankyou_section, rating_section);
  }

function fadeOut(obj) {
  obj.classList.add("animate-out");
  obj.addEventListener('animationend', function(e) {
    obj.classList.add("hidden");
  }, {
    capture: false,
    once: true,
    passive: false
  });
}

function fadeIn(obj, obj2) {

  //wait for the first object to finish animating then play the second one.
  //note this can be mixed with "fadOut" function into a "swap" function but this is more clear.
  obj2.addEventListener('animationend', function(e) {
    obj.classList.remove("hidden");
    obj.classList.add("animate-in");
    obj.classList.remove("visuallyhidden")
  }, {
    capture: false,
    once: true,
    passive: false
  });
  
}