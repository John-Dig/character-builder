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
//background changing
function givingColor() {

  if (charName.length > 3) {
    document.querySelector("p").style.backgroundColor= "Red";
  }

   else
    {
    document.querySelector("p").style.backgroundColor= "green";
  }


//border changing
  if(charPersonality.length > 3) {
    document.querySelector("p").style.borderColor= "Yellow";
  }
  else
  {
    document.querySelector("p").style.borderColor= "Blue";
  }


//text changing
  if(charSkill.length > 3) {
    document.querySelector("p").style.color= "purple";
  }
  else
  {
    document.querySelector("p").style.color= "brown"
  }

  document.querySelector("p").innerText=charName;
}
// |load is a property of window, submit is a property of form

window.addEventListener("load", function(){
  const form = document.getElementById("characterInput");
  form.addEventListener("submit", getVariables);
});
