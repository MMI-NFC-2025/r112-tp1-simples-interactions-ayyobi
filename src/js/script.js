// TODO
// 1
const paragraphe = document.querySelector("#a-mettre-en-rouge");
paragraphe.style.color = "red";

// 2
const bouton = document.querySelector("#en-rouge-suite-a-click");
bouton.addEventListener("click", () => {
  bouton.style.color = "red";
});

// 3 
const tousLesH2 = document.querySelectorAll("h2");
tousLesH2.forEach((elem) => {
  elem.addEventListener("click", () => {
    elem.style.color = "red";
  });
});


