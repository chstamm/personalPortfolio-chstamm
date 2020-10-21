document.querySelector("#title").innerText = "The Orchard";

document.querySelector("#slogan").innerText = "Managing Tree Arrays!";

const trees = ["Honey Crisp", "Gala", "Golden Delish", "Fugi"];
const error = document.querySelector("#error");
const results = document.querySelector("#results");

const displayTrees = () => {
  let treeList = "";
  trees.forEach((tree) => {
      console.log(tree)
  });
};

displayTrees()