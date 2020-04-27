$('.carousel').carousel({
    interval: 8000,
})

gsap.from('.logo', {duration: 2, opacity: 0, y: 20});

let logoImg = document.getElementById("logoImg");

logoImg.addEventListener("click", function(event){
    gsap.from(logoImg, {duration: 1, rotate: 360})
});

let imgTiles = document.getElementsByClassName("imgTile1");

for (let imgTile of imgTiles){
    imgTile.addEventListener("mouseenter", function(event){
    gsap.to(imgTile, {duration: .5, scale: 1.2});
    imgTile.addEventListener("mouseleave", function(event){
    gsap.to(imgTile, {duration: .5, scale: 1});
    });
});}

