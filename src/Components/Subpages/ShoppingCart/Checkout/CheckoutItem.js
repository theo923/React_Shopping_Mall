import React from 'react'

export const CheckoutItem = ({ itemprice, attemptquantity, itemdescription }) => {
    return(
                    <tbody>
                    <tr>
                        <th>
                            {attemptquantity}
                        </th> 
                        <td>
                            {itemdescription}
                        </td> 
                        <th>
                            {`$${attemptquantity * itemprice}`}
                        </th>
                    </tr>
                    </tbody> 
    )
}