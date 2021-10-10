import { SubmitDataType } from "../../utils/types";


//add customer form config
export const addCustomerForm: SubmitDataType = {
    personalDetails: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        dateOfBirth: "",
        socialSecurity: ""
    },
    address: {
        streetAddress: "",
        apartmentNumber: "",
        zipCode: "",
        state: "",
    },
    identification: {
        residentialProof: "",
        idNumber: "",
        idState: "",
    }
}
