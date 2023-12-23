import { useEffect, useState } from "react";
import "./file.css";
import GroceryItem from "./GroceryItem";
import Alert from "./Alert";

function GroceryMain() {
  const [itemName, setItemName] = useState("");
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const [grocerylistArray, setGrocerylistArray] = useState(array);
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(0);
  const [editValue, setEditValue] = useState("");

  useEffect(()=>{
    let savedItem=localStorage.getItem("ARRAY")
    if(savedItem){
        let arrayItems=JSON.parse(savedItem)
        setGrocerylistArray(arrayItems)
    }
  },[])

  function handleInput(e) {
    setItemName(e.target.value);
  }

  function saveItem() {
    if (itemName === "") {
      setAlert({ show: true, type: "failure", msg: "Please enter a valid name" });
    } else {
      const newItem = { id: Date.now(), name: itemName };
      setGrocerylistArray([...grocerylistArray, newItem]);
      localStorage.setItem("ARRAY", JSON.stringify([...grocerylistArray, newItem]));
    setItemName("")
    setAlert({ show: true, type: "success", msg: "Item has been added" });
}
}
console.log(itemName)

  function handleEdit(id) {
    setEditing(true);
    setEditId(id);
    const editedItemIdx = grocerylistArray.findIndex((obj) => obj.id === id);
    setEditValue(grocerylistArray[editedItemIdx]?.name);
  }

  function handleEditInput(e) {
    setEditValue(e.target.value);
  }

  function saveEditedItem() {
    if (editValue === "") {
      setAlert({ show: true, type: "failure", msg: "Please enter a valid name" });
      setEditing(false);
      setItemName("");
      setEditId(0);
      setEditValue("");
    } else {
      const updatedArray = grocerylistArray.map((obj) => (obj.id === editId ? { id: editId, name: editValue } : obj));
      setGrocerylistArray(updatedArray);
      localStorage.setItem("ARRAY", JSON.stringify(updatedArray));
      setEditing(false);
      setItemName("");
      setEditId(0);
      setEditValue("");
      setAlert({ show: true, type: "success", msg: "Item has been Edited" });
    }
  }

  function deleteItem(id) {
    console.log(id)
    let updatedArray=grocerylistArray.filter(obj=>obj.id!==id)
    setGrocerylistArray(updatedArray)
    localStorage.removeItem("ARRAY")
    localStorage.setItem("ARRAY", JSON.stringify(updatedArray));
    setAlert({ show: true, type: "failure", msg: "Item has been deleted" });
  }

  function clearAllItems() {
    const updatedArray = [];
    setGrocerylistArray(updatedArray);
    localStorage.setItem("ARRAY", JSON.stringify(updatedArray));
    setAlert({ show: true, type: "failure", msg: "All Items have been deleted" });
  }

  return (
    <div id="grocery-main-div">
      {alert.show ? <Alert type={alert.type} msg={alert.msg} /> : null}
      {editing ? (
        <div id="edit-main-div">
          <h1 id="main-h-edit">Grocery bud</h1>
          <input value={editValue} onChange={handleEditInput} type="text" id="edit-input" />
          <button onClick={saveEditedItem} id="edit-btn">
            Edit
          </button>
        </div>
      ) : (
        <div id="main-grocery-div">
          <h1 id="main-h">Grocery bud</h1>
          <div id="input-div">
            <input value={itemName} onChange={handleInput} type="text" id="input" />
            <button onClick={saveItem} id="submit-btn">
              Submit
            </button>
          </div>
          <div id="list-div">
            {grocerylistArray.map((obj, idx) => (
              <GroceryItem key={idx} id={idx} groceryObj={obj} handleEdit={handleEdit} deleteItem={deleteItem} />
            ))}
          </div>
          <h1 onClick={clearAllItems} id="clear-h">
            Clear All Items
          </h1>
        </div>
      )}
    </div>
  );
}
export default GroceryMain;

const array = [
  { id: 0, name: "Fish" },
  { id: 1, name: "Tomatoes" },
];
