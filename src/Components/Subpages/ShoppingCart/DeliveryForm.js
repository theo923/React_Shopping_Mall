import React from 'react'

export const DeliveryForm = ({ handleDeliveryInfo }) => {

    return(
        <div className='form-control'>
           <div className="flex flex-wrap gap-10 mt-5">
               <div>
                    <label className="label">
                        <span className="label-text">First Name:</span>
                    </label> 
                    <input name='firstName' onChange={e => handleDeliveryInfo(e)} type="text" placeholder="First Name" className="input input-bordered" />
               </div>

               <div>
                    <label className="label">
                        <span className="label-text">Last Name:</span>
                    </label> 
                    <input name='lastName' onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Last Name" className="input input-bordered" />
                </div>
            </div>

            <div className="flex flex-wrap gap-10 mt-5">
                <div>
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label> 
                    <input name='phoneNumber' onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Phone Number" className="input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Post Code</span>
                    </label> 
                    <input name='postCode' onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Post Code" className="input input-bordered" />
                </div>
            </div>

            <div className="flex flex-wrap gap-10 mt-5">
                <div>
                    <label className="label">
                        <span className="label-text">Address line 1 (or Company name)</span>
                    </label> 
                    <input name='Address1' onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Address line 1 (or Company name)" className="input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Address line 2 (optional)</span>
                    </label> 
                    <input name='Address2' onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Address line 2 (optional)" className="input input-bordered" />
                </div>
            </div>
            
            <div className="flex flex-wrap gap-10 mt-5">
                <div>
                    <label className="label">
                        <span className="label-text">Town/City</span>
                    </label> 
                    <input name='townCity' onChange={e => handleDeliveryInfo(e)} type="text" placeholder="Town/City" className="input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">County</span>
                    </label> 
                    <input name='county' onChange={e => handleDeliveryInfo(e)} type="text" placeholder="County" className="input input-bordered" />
                </div>
            </div>
        </div>
    )

}