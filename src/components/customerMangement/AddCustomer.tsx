import React from 'react'
import AddressInfo from './UI/AddressInfo'
import Identifications from './UI/Identifications'
import PersonalDetails from './UI/PersonalDetails'
import "./Style.css"

interface AddCustomerProps { }

const AddCustomer = (props: AddCustomerProps) => {
    return (
        <div className="container">
            <div className="form">
                <h3 className="title">Customer Information</h3>
                <PersonalDetails
                    {...props}
                />
                <AddressInfo
                    {...props}
                />
                <Identifications
                    {...props}
                />
            </div>
            <div className="btn-wrapper">
                <button className="btn">Appay Now</button>
            </div>
        </div>
    )
}

export default AddCustomer
