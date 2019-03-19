
var description = document.querySelector(".descritpion");
var image = document.querySelector(".image img");
image.addEventListener("mouseover",function(){
    description.style.display = "block";
});
image.addEventListener("mouseout",function(){
    description.style.display = "none";
});
