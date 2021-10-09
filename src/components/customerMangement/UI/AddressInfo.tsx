import React from 'react'
import InputField from './InputField'

const Address = () => {
    return (
        <div className="">
            <h4 className="heading">Address</h4>
            <InputField
                label="Street Address"
                value=""
                onChange={() => { }}
                id="street_address"
                className="address"
            />
            <div className="row">
                <div className="row">
                    <InputField
                        label="First Name"
                        value=""
                        onChange={() => { }}
                        id="first_name"
                    />
                    <InputField
                        label="Last Name"
                        value=""
                        onChange={() => { }}
                        id="last_name"
                    />
                </div>
                <InputField
                    label="Last Name"
                    value=""
                    onChange={() => { }}
                    id="last_name"
                />
            </div>
        </div>
    )
}

export default Address
