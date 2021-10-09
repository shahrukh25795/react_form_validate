import { SubmitDataType } from "../../utils/types";

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
        residentialProofID: "",
        idNumber: "",
        idState: "",
    }
}
