import React from 'react'
import AddressInfo from './UI/AddressInfo'
import Identifications from './UI/Identifications'
import PersonalDetails from './UI/PersonalDetails'
import "./Style.css"
import { addCustomerForm } from '../data/formData'
import { SubmitDataType, CustomerDetailType } from '../../utils/types'
import { checkValuesExist, validateEmail, validatePhoneNum } from '../../utils/Validator'

interface AddCustomerProps { }

const AddCustomer = (props: AddCustomerProps) => {


    const [formData, setFormData] = React.useState<SubmitDataType>({ ...addCustomerForm }); //initialize form values
    const [isDisabled, setIsDisabled] = React.useState<boolean>(true); //using for managing button disable/anable state

    //here updating input value
    const updateValue = (key: string, value: string, type: CustomerDetailType) => {
        let data: SubmitDataType = { ...formData };
        let item = data[type];
        // @ts-ignore
        item[key] = value;
        // @ts-ignore
        data[type] = item;
        const isValid = checkValuesExist(data); //this line retun ture if all values are filled
        setIsDisabled(!isValid);
        setFormData(data);
    }

    //handle form data submitting
    const handleSubmit = () => {
        if (!validateEmail(formData?.personalDetails?.emailAddress)) {
            alert("Email is not valid.")
            return true
        }
        if (!validatePhoneNum(formData?.personalDetails?.phoneNumber)) {
            alert("Phone number is not valid")
            return true
        }

        //Here need to call API
        alert("Form data validate successfully!")
        console.table(formData)
    }

    return (
        <div className="container">
            <div className="form">
                <h3 className="title">Customer Information</h3>
                <PersonalDetails
                    personalDetailsFormData={formData.personalDetails}
                    onChange={(key: string, value: string) => updateValue(key, value, "personalDetails")}
                    {...props}
                />
                <AddressInfo
                    addressInfoFormData={formData.address}
                    onChange={(key: string, value: string) => updateValue(key, value, "address")}
                    {...props}
                />
                <Identifications
                    identificationsFormData={formData.identification}
                    onChange={(key: string, value: string) => updateValue(key, value, "identification")}
                    {...props}
                />
            </div>
            <div className="btn-wrapper">
                <button disabled={isDisabled} type="button" onClick={handleSubmit} className="btn">Appay Now</button>
            </div>
        </div>
    )
}

export default AddCustomer
