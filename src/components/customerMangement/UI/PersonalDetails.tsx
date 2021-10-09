import React from 'react'
import { PersonalDetailsType } from '../../../utils/types'
import InputField from './InputField'

interface PersonalDetailsProps {
    personalDetailsFormData: PersonalDetailsType;
    onChange: (key: string, value: string) => void;
}

const PersonalDetails = (props: PersonalDetailsProps) => {

    const { personalDetailsFormData, onChange } = props;

    return (
        <div className="">
            <h4 className="heading">Persional Details</h4>
            <div className="row">
                <InputField
                    label="First Name"
                    value={personalDetailsFormData?.firstName}
                    onChange={(evt) => onChange("firstName", evt.target.value)}
                    id="first_name"
                />
                <InputField
                    label="Last Name"
                    value={personalDetailsFormData?.lastName}
                    onChange={(evt) => onChange("lastName", evt.target.value)}
                    id="last_name"
                />
            </div>
            <div className="row">
                <InputField
                    label="Email"
                    value={personalDetailsFormData?.emailAddress}
                    onChange={(evt) => onChange("emailAddress", evt.target.value)}
                    id="email"
                    type="email"
                />
                <InputField
                    label="Mobile Number"
                    value={personalDetailsFormData?.phoneNumber}
                    onChange={(evt) => onChange("phoneNumber", evt.target.value)}
                    id="mobile_number"
                    type="number"
                />
            </div>
            <div className="row">
                <InputField
                    label="Date of birth"
                    value={personalDetailsFormData?.dateOfBirth}
                    onChange={(evt) => onChange("dateOfBirth", evt.target.value)}
                    id="d_o_b"
                    type="date"
                />
                <InputField
                    label="Social Security / Tin Number"
                    value={personalDetailsFormData?.socialSecurity}
                    onChange={(evt) => onChange("socialSecurity", evt.target.value)}
                    id="social_security"
                />
            </div>
        </div>
    )
}

export default PersonalDetails
