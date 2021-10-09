export type SubmitDataType = {
    personalDetails: PersonalDetailsType;
    address: AddressType;
    identification: IdentificationType;
}

export type PersonalDetailsType = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    dateOfBirth: string;
    socialSecurity: string;
}

export type AddressType = {
    streetAddress: string;
    apartmentNumber: string;
    zipCode: string;
    state: string;
}

export type IdentificationType = {
    residentialProof: string;
    residentialProofID: string;
    idNumber: string;
    idState: string;
}

export type CustomerDetailType = "personalDetails" | "address" | "identification"