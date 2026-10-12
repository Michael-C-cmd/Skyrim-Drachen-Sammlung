import {
  getDragons,
  getDefeatedDragons,
  getDragonsByType,
  dispatch,
  getDragonById,
  displayList,
} from "./dragonStore.mjs";

import {
  dragonName,
  dragonType,
  dragonLocation,
  isDefeated,
  healthPoints,
  addBtn,
  displayBtn,
  output,
  defeatStatusDragonList,
  toggleBtn,
  removeDragonDragonList,
  removeBtn,
  createDragon,
  refreshList,
} from "./ui.js";

// const dragonList1 = dispatch({
//   type: "ADD_DRAGON",
//   dragon: {
//     id: 3,
//     name: "Mirmulnir",
//     type: "Blood",
//     location: "Whiterun",
//     isDefeated: true,
//     healthPoints: 1000,
//   },
// });

const dragonList2 = dispatch({
  type: "DEFEAT_DRAGON",
  id: 1,
});

// const dragonList3 = dispatch({
//   type: "ADD_DRAGON",
//   dragon: {
//     id: 4,
//     name: "Sahloknir",
//     type: "Fire",
//     location: "Kynesgrove",
//     isDefeated: false,
//     healthPoints: 1900,
//   },
// });

displayBtn.addEventListener("click", () => {
  output.innerHTML = "";
  const currentList = displayList();
  currentList.forEach((dragon) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<b><u>${dragon.name}</u></b>: ${dragon.type}, ${dragon.isDefeated ? "defeated" : "undefeated"}, HP: ${dragon.healthPoints}`;
    output.appendChild(listItem);
  });
});

addBtn.addEventListener("click", () => {
  if (
    !dragonName.value ||
    !dragonType.value ||
    !dragonLocation.value ||
    !isDefeated.value ||
    !healthPoints.value
  ) {
    output.textContent = "No dragon added!";
    return;
  }
  const newDragon = createDragon(
    dragonName.value,
    dragonType.value,
    dragonLocation.value,
    Boolean(isDefeated.value),
    healthPoints.value,
  );

  const newList = dispatch({
    type: "ADD_DRAGON",
    dragon: newDragon,
  });

  console.log(newList);

  dragonName.value = "";
  dragonType.value = "";
  dragonLocation.value = "";
  healthPoints.value = "";

  refreshList(newList);
});

removeBtn.addEventListener("click", () => {
  const newList = dispatch({
    type: "REMOVE_DRAGON",
    name: removeDragonDragonList.value,
  });

  console.log(newList);

  refreshList(newList);
});

toggleBtn.addEventListener("click", () => {
  const newList = dispatch({
    type: "DEFEAT_DRAGON",
    name: defeatStatusDragonList.value,
  });

  console.log(newList);

  refreshList(newList);
});

refreshList(dragonList2);
