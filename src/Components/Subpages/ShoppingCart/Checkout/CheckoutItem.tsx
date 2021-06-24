import * as React from 'react'

type CheckoutItemProps = {
    itemprice: number; 
    attemptquantity: number; 
    itemdescription: string;
}

export const CheckoutItem = ({ itemprice, attemptquantity, itemdescription } : CheckoutItemProps) : JSX.Element => {
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