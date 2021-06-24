import * as React from 'react'

type eachInfoProp = {
    eachInfo: {
        Address1: string;
        Address2: string;
        county: string;
        firstName: string;
        lastName: string;
        phoneNumber: number;
        postCode: string;
        townCity: string;
        username: string;
    };
}

export const CheckoutInfo = ({ eachInfo } : eachInfoProp ) : JSX.Element => {
    const { username, firstName, lastName, phoneNumber, postCode, Address1, Address2, townCity, county, } = eachInfo
    return(
                    <tbody>
                    <tr>
                        <th>
                        Username
                        </th> 
                        <td>
                            {username}
                        </td> 
                    </tr>
                    <tr>
                        <th>
                        First Name
                        </th> 
                        <td>
                            {firstName}
                        </td> 
                    </tr>
                    <tr>
                        <th>
                        Last Name
                        </th> 
                        <td>
                            {lastName}
                        </td> 
                    </tr>
                    <tr>
                        <th>
                        Phone Number
                        </th> 
                        <td>
                            {phoneNumber}
                        </td> 
                    </tr>
                    <tr>
                        <th>
                        Post Code
                        </th> 
                        <td>
                            {postCode}
                        </td> 
                    </tr>
                    <tr>
                        <th>
                        Address 1
                        </th> 
                        <td>
                            {Address1}
                        </td> 
                    </tr>
                    <tr>
                        <th>
                        Address 2
                        </th> 
                        <td>
                            {Address2}
                        </td> 
                    </tr>
                    <tr>
                        <th>
                        Town / City
                        </th> 
                        <td>
                            {townCity}
                        </td> 
                    </tr>
                    <tr>
                        <th>
                        County
                        </th> 
                        <td>
                            {county}
                        </td> 
                    </tr>
                    </tbody> 
    )
}