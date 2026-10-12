// * kleine Änderung zur Aufgabenstellung: eine Sammlung von "besiegten" und "nicht besiegten" Drachen

const initialDragons = [
  {
    id: 1,
    name: "Alduin",
    type: "Frost",
    location: "Whiterun",
    isDefeated: false,
    healthPoints: 1200,
  },
  {
    id: 2,
    name: "Paarthurnax",
    type: "Fire",
    location: "Throat of the World",
    isDefeated: true,
    healthPoints: 1500,
  },
];

let dragons = JSON.parse(localStorage.getItem("dragonList")) || [
  ...initialDragons,
];

const getDragons = () => {
  return [...dragons];
};

const dragonReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DRAGON":
      return [...state, action.dragon];
    case "DEFEAT_DRAGON":
      return state.map((dragon) => {
        if (dragon.name.toLowerCase() === action.name) {
          const defeatStatus = dragon.isDefeated;
          return {
            ...dragon,
            isDefeated: !defeatStatus,
          };
        }
        return dragon;
      });
    case "REMOVE_DRAGON":
      return state.filter(
        (dragon) => dragon.name.toLowerCase() !== action.name,
      );
    case "DAMAGE_DRAGON":
      return state.map((dragon) => {
        if (dragon.id === action.id) {
          return {
            ...dragon,
            healthPoints: dragon.healthPoints - action.damage,
          };
        }
        return dragon;
      });
    default:
      return state;
  }
};

const getDefeatedDragons = () => {
  return dragons.filter((dragon) => dragon.isDefeated);
};

const getDragonsByType = (type) => {
  return dragons.filter((dragon) => dragon.type === type);
};

const getDragonById = (id) => {
  return dragons.filter((dragon) => dragon.id === id);
};

// * dispatch-Funktion, damit "state" nicht vergessen wird. Wird automatisch als Argument weitergegeben
const dispatch = (action) => {
  dragons = dragonReducer(dragons, action);
  return dragons;
};

const displayList = () => {
  return dragons;
};

export {
  getDragons,
  getDefeatedDragons,
  getDragonsByType,
  dispatch,
  getDragonById,
  displayList,
};
