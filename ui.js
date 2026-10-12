export const dragonName = document.getElementById("dragonName");
export const dragonType = document.getElementById("dragonType");
export const dragonLocation = document.getElementById("dragonLocation");
export const isDefeated = document.getElementById("isDefeated");
export const healthPoints = document.getElementById("healthPoints");
export const addBtn = document.getElementById("addBtn");

export const displayBtn = document.getElementById("displayBtn");
export const output = document.getElementById("output");

export const defeatStatusDragonList = document.getElementById(
  "defeatStatusDragonList",
);
export const toggleBtn = document.getElementById("toggleBtn");
export const removeDragonDragonList = document.getElementById(
  "removeDragonDragonList",
);
export const removeBtn = document.getElementById("removeBtn");

export const createDragon = (
  name,
  type,
  location,
  isDefeated,
  healthPoints,
) => {
  console.log(isDefeated);
  return {
    id: Math.floor(Math.random() * 100),
    name,
    type,
    location,
    isDefeated,
    healthPoints,
  };
};

export const refreshList = (dragonList) => {
  defeatStatusDragonList.innerHTML = "";
  removeDragonDragonList.innerHTML = "";
  dragonList.forEach((dragon) => {
    const newElement = document.createElement("option");
    newElement.value = dragon.name.toLowerCase();
    newElement.textContent = dragon.name;

    defeatStatusDragonList.appendChild(newElement);
  });

  dragonList.forEach((dragon) => {
    const newElement = document.createElement("option");
    newElement.value = dragon.name.toLowerCase();
    newElement.textContent = dragon.name;

    removeDragonDragonList.appendChild(newElement);
  });

  localStorage.setItem("dragonList", JSON.stringify(dragonList));
};
