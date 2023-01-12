console.log('start up');

let charName;
let charPersonality;
let charSkill;


function getVariables(ev) {
  console.log('enter');
  ev.preventDefault();
  charName = document.querySelector("input#userName").value;
  charPersonality = document.querySelector("input#userPersonality").value;
  charSkill = document.querySelector("input#userSkill").value
  givingColor();
}


//branching
function givingColor() {

  if (charName.length > 5) {
    document.querySelector("body").style.backgroundColor= "Red";
  } else 
    {
    document.querySelector("body").style.backgroundColor= "green";
  }
~


}
// |load is a property of window, submit is a property of form

window.addEventListener("load", function(){
  const form = document.getElementById("characterInput");
  form.addEventListener("submit", getVariables);
});
