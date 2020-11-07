document.querySelector("#title").innerText = "The Orchard";

document.querySelector("#slogan").innerText = "Managing Tree Arrays!";

const trees = ["Honey Crisp", "Gala", "Golden Delish", "Fugi"];
const error = document.querySelector("#error");
const results = document.querySelector("#results");

const displayTrees = () => {
  let treeList = "";
  trees.forEach((tree) => {
    treeList += `${tree} <br>`;
  });
  results.innerHTML =
    treeList + `<span> This list is ${trees.length} elements long </span>`;
  //console.log(treeList)
};

displayTrees();

document.getElementById("add-cherry").onclick = () => {
  trees.push("Cherry");
  displayTrees();
};

document.getElementById("add-orange").onclick = () => {
  trees.unshift("Orange");
  displayTrees();
};

document.getElementById("remove-first").onclick = () => {
  if (trees.length > 1) {
    trees.shift();
    displayTrees();
  } else {
    error.textContent = "Sorry, Can't remove last Tree!";
  }
};

document.getElementById("remove-second").onclick = () => {
  if (trees.length > 1) {
    trees.splice(1, 1);
    displayTrees();
  } else {
    error.textContent = "Sorry, Can't remove last tree!";
  }
};

document.getElementById("remove-end").onclick = () => {
  if (trees.length > 1) {
    trees.pop();
    displayTrees();
  } else {
    error.textContent = "Sorry, Can't redove last Tree!";
  }
};

document.getElementById("sortTrees").onclick = () => {
  trees.sort();
  displayTrees();
};

document.getElementById("lowerCase").onclick = () => {
  trees.forEach((treeLowerCase, index, array) => {
    array[index] = treeLowerCase.toLowerCase();
  });
  displayTrees();
};

document.getElementById("name3").onclick = () => {
  if (trees.length > 2) {
    const thirdTree = trees[2]
    error.textContent = `The third tree is ${thirdTree}`;
  } else {
      error.textContent = `Sorry, there isn't a third tree.`
  }
};

document.getElementById("name4").onclick = () => {
    if (trees.length > 3) {
      const fourthTree = trees[3]
      error.textContent = `The fourth tree is ${fourthTree}.`;
    } else {
        error.textContent = `Sorry, there isn't a fourth tree.`
    }
  };