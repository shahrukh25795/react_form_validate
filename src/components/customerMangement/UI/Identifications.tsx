import React from 'react'
import { IdentificationType } from '../../../utils/types'
import InputField from './InputField'
import RadioInput from './RadioInput';

interface IdentificationsProps {
    identificationsFormData: IdentificationType;
    onChange: (key: string, value: string) => void;
}

const Identifications = (props: IdentificationsProps) => {

    const { identificationsFormData, onChange } = props;

    return (
        <div className="">
            <h4 className="heading">Persional Details</h4>
            <div className="row">
                <RadioInput
                    label="Driver Licence"
                    value="Driver Licence"
                    onChange={(evt) => onChange("residentialProof", evt.target.value)}
                    id="driver_licence"
                    checked={identificationsFormData?.residentialProof === "Driver Licence"}
                />
                <RadioInput
                    label="Non Driver / State ID"
                    value="Non Driver / State ID"
                    onChange={(evt) => onChange("residentialProof", evt.target.value)}
                    id="non_driver"
                    checked={identificationsFormData?.residentialProof === "Non Driver / State ID"}
                />
            </div>
            <div className="row">
                <RadioInput
                    label="US Military"
                    value="US Military"
                    onChange={(evt) => onChange("residentialProof", evt.target.value)}
                    id="us_military"
                    checked={identificationsFormData?.residentialProof === "US Military"}
                />
                <RadioInput
                    label="US Passport"
                    value="US Passport"
                    onChange={(evt) => onChange("residentialProof", evt.target.value)}
                    id="us_passport"
                    checked={identificationsFormData?.residentialProof === "US Passport"}
                />
            </div>
            <div className="row">
                <InputField
                    label="ID Number"
                    value={identificationsFormData?.idNumber}
                    onChange={(evt) => { onChange("idNumber", evt.target.value) }}
                    id="id_number"
                    type="number"
                />
                <InputField
                    label="ID State"
                    value={identificationsFormData?.idState}
                    onChange={(evt) => { onChange("idState", evt.target.value) }}
                    id="id_state"
                />
            </div>
        </div>
    )
}

export default Identifications
