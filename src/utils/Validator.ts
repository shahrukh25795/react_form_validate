

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
