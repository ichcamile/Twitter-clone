

function ItemMenu({ iconUrl, name }) {
  return (
    <>
      <li>
        <span className="iconUrl">{iconUrl}</span>
        <span className="names" >{name}</span>
      </li>
    </>
  )
}

export default ItemMenu;
