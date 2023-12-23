import "./file.css"

function GroceryItem({ id,groceryObj ,handleEdit,deleteItem }) {
    return (
        <div id={id} className="item-individual-div">
            <h4 className="grocery-name">{groceryObj?.name}</h4>
            <div className="icon-div">
            <img onClick={()=>handleEdit(groceryObj.id)} className="edit" src="https://media.istockphoto.com/id/988801990/vector/pencil-icon-green-round-button.jpg?s=612x612&w=0&k=20&c=smuXYlHV0Ul5RZ18wOU2j2R9tDP-2JyQflMgSA0jKBk=" alt="" />
            <img onClick={()=>deleteItem(groceryObj.id)} className="delete" src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png" alt="" />
            </div>
        </div>
    )
}
export default GroceryItem