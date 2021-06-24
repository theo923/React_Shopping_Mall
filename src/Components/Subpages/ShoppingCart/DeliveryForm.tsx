import * as React from 'react'

type DeliveryFromProps = {
    handleDeliveryInfo(info: React.SyntheticEvent<HTMLInputElement>): void;
    deliveryInfo: {
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

export const DeliveryForm = ({ handleDeliveryInfo, deliveryInfo }: DeliveryFromProps) : JSX.Element => {
    const { firstName, lastName, phoneNumber, postCode, Address1, Address2, townCity, county } = deliveryInfo

    return(
        <div className='form-control'>
            <div className="flex flex-wrap gap-10 mt-5">
                    <label className="label">
                        <span className="label-text">Please enter your information below</span>
                    </label> 
            </div>
           <div className="flex flex-wrap gap-10 mt-5">
               <div>
                    <label htmlFor='firstName' className="label">
                        <span className="label-text">First Name:</span>
                    </label> 
                    <input id='firstName' name='firstName' value={firstName} onChange={e => handleDeliveryInfo(e)} type="text" placeholder="First Name" className="input input-bordered" />
               </div>

               <div>
                    <label htmlFor='lastName' className="label">
                        <span className="label-text">Last Name:</span>
                    </label> 
                    <input id='lastName' name='lastName' value={lastName} onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Last Name" className="input input-bordered" />
                </div>
            </div>

            <div className="flex flex-wrap gap-10 mt-5">
                <div>
                    <label htmlFor='phoneNumber' className="label">
                        <span className="label-text">Phone Number</span>
                    </label> 
                    <input id='phoneNumber' name='phoneNumber' value={phoneNumber} onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Phone Number" className="input input-bordered" />
                </div>
                <div>
                    <label htmlFor='postCode' className="label">
                        <span className="label-text">Post Code</span>
                    </label> 
                    <input id='postCode' name='postCode' value={postCode} onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Post Code" className="input input-bordered" />
                </div>
            </div>

            <div className="flex flex-wrap gap-10 mt-5">
                <div>
                    <label htmlFor='Address1' className="label">
                        <span className="label-text">Address line 1 (or Company name)</span>
                    </label> 
                    <input id='Address1' name='Address1' value={Address1} onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Address line 1 (or Company name)" className="input input-bordered" />
                </div>
                <div>
                    <label htmlFor='Address2' className="label">
                        <span className="label-text">Address line 2 (optional)</span>
                    </label> 
                    <input id='Address2' name='Address2' value={Address2} onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Address line 2 (optional)" className="input input-bordered" />
                </div>
            </div>
            
            <div className="flex flex-wrap gap-10 mt-5">
                <div>
                    <label htmlFor='townCity' className="label">
                        <span className="label-text">Town/City</span>
                    </label> 
                    <input id='townCity' name='townCity' value={townCity} onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Town/City" className="input input-bordered" />
                </div>
                <div>
                    <label htmlFor='county' className="label">
                        <span className="label-text">County</span>
                    </label> 
                    <input id='county' name='county' value={county} onChange={e => handleDeliveryInfo(e)} type="text" placeholder="County" className="input input-bordered" />
                </div>
            </div>
        </div>
    )

}