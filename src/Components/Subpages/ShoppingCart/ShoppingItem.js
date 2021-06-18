import React from 'react'

export const ShoppingItem = ({ cartItem, handleSCChange }) => {
    const {itemName, itemPrice, itemType, attemptQuantity, itemDescription, itemImage, itemChecked, limitedQuantity} = cartItem
    return(
                <tbody>
                    <tr>
                        <th>
                        <label>
                            <input name={itemName} id='isChecked' type="checkbox" className="checkbox" checked={Boolean(itemChecked)} onChange={handleSCChange} /> 
                            <span className="checkbox-mark"></span>
                        </label>
                        </th> 
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="w-12 h-12 mask mask-squircle">
                                <img src={itemImage} alt={itemName} />
                            </div>
                            </div> 
                            <div>
                            <div className="font-bold">
                                    {itemName}
                                </div> 
                            <div className="text-sm opacity-50">
                                    {itemType}
                                </div>
                            </div>
                        </div>
                        </td> 
                        <td>
                            {itemDescription}
                            
                        <br /> 
                        <span className="badge badge-outline badge-sm">${itemPrice} Per one</span>
                        </td> 
                        <td>
                        <button name={itemName} id='decrement' onClick={handleSCChange} className="btn btn-ghost btn-xs ">-</button>
                            {attemptQuantity === limitedQuantity ? `${attemptQuantity} (Max)` : attemptQuantity}
                        <button name={itemName} id='addcounter' onClick={handleSCChange} className="btn btn-ghost btn-xs ">+</button>                            
                        </td> 
                        <th>
                        <button className="btn btn-ghost btn-xs">${attemptQuantity * itemPrice}</button>
                        </th>
                    </tr>
                </tbody> 
    )
}