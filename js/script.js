
var description = document.querySelector(".descritpion");
var image = document.querySelector(".image img");
image.addEventListener("mouseover",function(){
    description.style.display = "block";
});
image.addEventListener("mouseout",function(){
    description.style.display = "none";
});

// Partie 2 :
function afficheCours() {
    var résultat = "Avec " + this.prof + " cours de " + this.cours
        + " \n";
    console.log(résultat);
}
function Cours(prof, cours) {
    this.prof = prof;
    this.cours = cours;

    this.afficheCours = afficheCours;
}
var mesCours = new Cours("Elophe", "Web");
mesCours.afficheCours();
var validation = document.querySelector(".button");
var affichage = document.querySelector(".affichage");
validation.addEventListener("click",valide);
function valide() {
    let prof = document.getElementById("prof").value;
    let cours = document.getElementById("cours").value;
    affichage.innerHTML += prof + " en cours de " + cours +"<br />";
    alert(prof);
}