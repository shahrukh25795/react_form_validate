import React from 'react'
import InputField from './InputField'

const Identifications = () => {
    return (
        <div className="">
            <h4 className="heading">Persional Details</h4>
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
            <div className="row">
                <InputField
                    label="Email"
                    value=""
                    onChange={() => { }}
                    id="email"
                    type="email"
                />
                <InputField
                    label="Mobile Number"
                    value=""
                    onChange={() => { }}
                    id="mobile_number"
                    type="number"
                />
            </div>
            <div className="row">
                <InputField
                    label="Date of birth"
                    value=""
                    onChange={() => { }}
                    id="d_o_b"
                    type="date"
                />
                <InputField
                    label="Address"
                    value=""
                    onChange={() => { }}
                    id="address"
                />
            </div>
        </div>
    )
}

export default Identifications
