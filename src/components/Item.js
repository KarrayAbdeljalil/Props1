import React from 'react'

const Item = ({Item}) => {
    console.log(item)
    return (
        <div>
            <tr>
      <th scope="row"><button>Product details </button></th>
      <td><img src={Item.imgSrc} alt={Item.name}/></td>
      <td><h4>{item.name}</h4></td>
      <td><h4>{item.price}</h4></td>
    </tr>
        </div>
    )
}

export default Item
 