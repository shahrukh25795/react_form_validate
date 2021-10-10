

//check nestest object values are filled or not
export const checkValuesExist = (obj: any = {}) => {
    let isValid = true;
    for (let keys in obj) {
        for (let key in obj?.[keys]) {
            if (!obj?.[keys]?.[key]) {
                isValid = false;
                break;
            }
        }
    }
    // true:- all values are filled
    // false:- all values are not filled
    return isValid;
};

//check email is valid or not
export const validateEmail = (value: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
};

//check phone number is valid or not
export const validatePhoneNum = (value: string): boolean => {
    const phonePattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return phonePattern.test(value);
};
