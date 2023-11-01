

function ItemMenu({icon, name }) {
  return (
    <>
      <li>
        <span className="icon" >{icon}</span>
        <span className="names" >{name}</span>
      </li>
    </>
  )
}

export default ItemMenu;
