import React from 'react'
import AddressInfo from './UI/AddressInfo'
import Identifications from './UI/Identifications'
import PersonalDetails from './UI/PersonalDetails'
import "./Style.css"
import { addCustomerForm } from '../data/formData'
import { SubmitDataType, CustomerDetailType } from '../../utils/types'
import { checkValuesExist } from '../../utils/Validator'

interface AddCustomerProps { }

const AddCustomer = (props: AddCustomerProps) => {

    const [formData, setFormData] = React.useState<SubmitDataType>({ ...addCustomerForm });
    const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

    const updateValue = (key: string, value: string, type: CustomerDetailType) => {
        let data: SubmitDataType = { ...formData };
        let item = data[type];
        // @ts-ignore
        item[key] = value;
        // @ts-ignore
        data[type] = item;
        const isValid = checkValuesExist(data);
        setIsDisabled(!isValid);
        setFormData(data)
    }

    const handleSubmit = () => {
        console.log(formData, "formData")
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
