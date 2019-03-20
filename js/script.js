
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
function afficheVoiture() {
    var résultat = "Une " + this.fabricant + " " + this.modèle
        + " de cette année " + this.année;
    console.log(résultat);
}
function Voiture(fabricant, modèle, année) {
    this.fabricant = fabricant;
    this.modele = modele;
    this.annee = annee;
    this.afficheVoiture = afficheVoiture;
}
var maVoiture = new Voiture("Eagle", "Talon TSi", 1993);