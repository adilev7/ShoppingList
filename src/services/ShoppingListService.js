import { generateID, sleep } from "../utils";

let shoppingList = [
  {
    id: generateID(),
    title: "Tomatos",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quasi atque nisi est ullam sint enim suscipit porro quis consequuntur, earum esse? Dicta consequatur natus assumenda aperiam maxime odio modi mollitia, quis incidunt, ipsa necessitatibus corporis nesciunt? Ea libero magnam explicabo quasi dolore, nihil eaque modi minima, quaerat vitae labore.",
    price: 5,
    isChecked: true,
  },
  {
    id: generateID(),
    title: "Cucumbers",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quasi atque nisi est ullam sint enim suscipit porro quis consequuntur, earum esse? Dicta consequatur natus assumenda aperiam maxime odio modi mollitia, quis incidunt, ipsa necessitatibus corporis nesciunt? Ea libero magnam explicabo quasi dolore, nihil eaque modi minima, quaerat vitae labore.",
    price: 3,
    isChecked: false,
  },
];

const validateNewItem = (newItem) => {
  const idIsValid = newItem.id === undefined || newItem.id?.length === 24;
  return (
    idIsValid &&
    Object.keys(newItem).length === 5 &&
    typeof newItem.title === "string" &&
    typeof newItem.description === "string" &&
    typeof newItem.price === "number" &&
    newItem.price > 0 &&
    typeof newItem.isChecked === "boolean"
  );
};

export const getShoppingList = async () => {
  await sleep();
  return shoppingList;
};

export const getShoppingListItem = async (id) => {
  await sleep();
  const shoppingListItem = shoppingList.find((item) => item.id === id);
  if (!shoppingListItem) {
    throw new Error("Not found. Invalid product ID");
  }
  return shoppingListItem;
};

export const createUpdateShoppingListItem = async (newItem) => {
  
  const isValid = validateNewItem(newItem);
  if (!isValid) {
    throw new Error("Bad request");
  }
  const itemIndex = shoppingList.findIndex((product) => product.id === newItem.id);
  if (itemIndex === -1) {
    await sleep();
    shoppingList.push(newItem);
  } else {
    await sleep(200);
    shoppingList[itemIndex] = newItem;
  }
  return shoppingList;
};

export const deleteShoppingListItem = async (id) => {
  await sleep();
  shoppingList = shoppingList.filter((item) => item.id !== id);
  return shoppingList;
};

export default {
  getShoppingList,
  getShoppingListItem,
  createUpdateShoppingListItem,
  deleteShoppingListItem,
};
