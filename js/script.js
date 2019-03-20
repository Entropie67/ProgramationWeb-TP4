
var description = document.querySelector(".descritpion");
var image = document.querySelector(".image img");
image.addEventListener("mouseover",function(){
    description.style.display = "block";
});
image.addEventListener("mouseout",function(){
    description.style.display = "none";
});
function valide() {
    alert("validatoin, ok !");
}
var validation = document.querySelector(".button");
var affichage = document.querySelector(".affichage");
validation.addEventListener("click",valide);
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
