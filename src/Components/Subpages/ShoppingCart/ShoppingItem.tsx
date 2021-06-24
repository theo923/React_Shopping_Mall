import * as React from 'react'

interface IShoppingItem {
    cartItem: {
        attemptquantity: number;
        itemchecked: boolean;
        itemdescription: string;
        itemid: number;
        itemimage: string;
        itemname: string;
        itemprice: number;
        itemquantity: number;
        itemtype: string;
        limitedquantity: number;
      },
    handleSCChange(e: object): void;
}

export const ShoppingItem : React.FC<IShoppingItem> = ({ cartItem, handleSCChange }) => {
    const { itemname, itemprice, itemtype, itemdescription, itemimage, limitedquantity, attemptquantity, itemchecked } = cartItem

    return(
            <tbody>
                <tr>
                    <th>
                    <label>
                        <input name={itemname} id='isChecked' type="checkbox" className="checkbox" checked={Boolean(itemchecked)} onChange={e => handleSCChange(e)} /> 
                        <span className="checkbox-mark"></span>
                    </label>
                    </th> 
                    <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="w-12 h-12 mask mask-squircle">
                            <img src={itemimage} alt={itemname} />
                        </div>
                        </div> 
                        <div>
                        <div className="font-bold">
                                {itemname}
                            </div> 
                        <div className="text-sm opacity-50">
                                {itemtype}
                            </div>
                        </div>
                    </div>
                    </td> 
                    <td>
                        {itemdescription}
                        
                    <br /> 
                    <span className="badge badge-outline badge-sm">${itemprice} Per one</span>
                    </td> 
                    <td>
                    <button name={itemname} id='decrement' onClick={e => handleSCChange(e)} className="btn btn-ghost btn-xs ">-</button>
                        {attemptquantity === limitedquantity ? `${attemptquantity} (Max)` : attemptquantity}
                    <button name={itemname} id='addcounter' onClick={e => handleSCChange(e)} className="btn btn-ghost btn-xs ">+</button>                            
                    </td> 
                    <th>
                    <button className="btn btn-ghost btn-xs">${attemptquantity * itemprice}</button>
                    </th>
                </tr>
            </tbody> 
    )
}