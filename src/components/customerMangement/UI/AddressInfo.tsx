import React from 'react'
import { AddressType } from '../../../utils/types'
import InputField from './InputField'

interface AddressProps {
    addressInfoFormData: AddressType;
    onChange: (key: string, value: string) => void;
}

const Address = (props: AddressProps) => {

    const { addressInfoFormData, onChange } = props;

    return (
        <div className="">
            <h4 className="heading">Address</h4>
            <InputField
                label="Street Address"
                value={addressInfoFormData?.streetAddress}
                onChange={(evt) => onChange("streetAddress", evt.target.value)}
                id="street_address"
                className="address"
            />
            <div className="row">
                <div className="row">
                    <InputField
                        label="Apartment Number"
                        value={addressInfoFormData?.apartmentNumber}
                        onChange={(evt) => onChange("apartmentNumber", evt.target.value)}
                        id="apartment_number"
                    />
                    <InputField
                        label="ZipCode"
                        value={addressInfoFormData?.zipCode}
                        onChange={(evt) => onChange("zipCode", evt.target.value)}
                        id="zip_code"
                    />
                </div>
                <InputField
                    label="State"
                    value={addressInfoFormData?.state}
                    onChange={(evt) => onChange("state", evt.target.value)}
                    id="state"
                />
            </div>
        </div>
    )
}

export default Address
