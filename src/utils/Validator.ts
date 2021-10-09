

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
