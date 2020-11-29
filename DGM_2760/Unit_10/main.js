document.querySelector("#title").innerText = "Hotel Finder";
document.querySelector("#slogan").innerText = "Find Your Happy Place";

async function getData() {
  try {
    const response = await fetch("hotels.json");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

let hotelData = {};

getData().then(data => hotelData = data);
let links = document.querySelectorAll("a").forEach((link) => {
  link.addEventListener('click', hotelInfo)
  
})


function hotelInfo(event) { 
  let hotelChosen = hotelData.hotels.find(hotels => {
    return event.target.id === hotels.name.toLowerCase()
  })
  console.log(hotelChosen)

  document.querySelector("#hotelName").textContent = `${hotelChosen.name} Hotel`
  document.querySelector("#address").textContent = `${hotelChosen.address}`
  document.querySelector("#rooms").textContent = `${hotelChosen.rooms}`
  document.querySelector("#gym").textContent = `${hotelChosen.gym}`
  document.querySelector("#type").textContent = `${hotelChosen.roomTypes.join(", ")}`
  document.querySelector("#picture").src = `imgs/${hotelChosen.picture}`
}


