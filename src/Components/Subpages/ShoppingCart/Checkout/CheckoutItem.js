import React from 'react'

export const CheckoutItem = ({ cartItem }) => {
    const { itemPrice, attemptQuantity, itemDescription } = cartItem
    return(
                    <tbody>
                    <tr>
                        <th>
                            {attemptQuantity}
                        </th> 
                        <td>
                            {itemDescription}
                        </td> 
                        <th>
                            {`$${attemptQuantity * itemPrice}`}
                        </th>
                    </tr>
                    </tbody> 
    )
}