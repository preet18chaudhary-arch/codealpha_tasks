const images = [
"https://picsum.photos/id/1015/600/400",
"https://picsum.photos/id/1011/600/400",
"https://picsum.photos/id/1025/600/400",
"https://picsum.photos/id/1040/600/400",
"https://picsum.photos/id/1031/600/400",
"https://picsum.photos/id/1074/600/400"
];

let current = 0;

const lightbox = document.getElementById("lightbox");
const lightImage = document.getElementById("lightImage");

function openLightbox(index){
current = index;
lightImage.src = images[current];
lightbox.style.display = "flex";
}

function closeLightbox(){
lightbox.style.display = "none";
}

function changeImage(step){
current += step;

if(current < 0)
current = images.length - 1;

if(current >= images.length)
current = 0;

lightImage.src = images[current];
}

function filterImages(category){

const items = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".filters button");

buttons.forEach(btn => btn.classList.remove("active"));
event.target.classList.add("active");

items.forEach(item => {

if(category === "all" || item.classList.contains(category))
item.style.display = "block";
else
item.style.display = "none";

});

}

document.addEventListener("keydown", function(e){

if(lightbox.style.display === "flex"){

if(e.key === "ArrowRight")
changeImage(1);

if(e.key === "ArrowLeft")
changeImage(-1);

if(e.key === "Escape")
closeLightbox();

}

});