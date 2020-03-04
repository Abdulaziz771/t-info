
const phone = /^[+](?:(?:|00)998|0)\d{9}$/;
const mail =  /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/ ;

export function phoneValidate(value) {
    return phone.test(value)
}

export function phoneValidateNotimportant(value) {
    if (phone.test(value) || value == '' || value == null ) return true
    else return false
}

export function mailValidateNotimportant(value) {
    if (mail.test(value) || value == '' || value == null ) return true
    else return false
}

export function addresORphoneNumber(value) {
    if (phone.test(value) || mail.test(value)) return true
    else return  false
}