import { re_email } from '../regExp'
const validate = (argum, cb) => {
    let errors = {}
    const defaultValidate = (key, value) => {
        if (!value.length) {
            errors = { ...errors, [key]: `The ${key} field is required.` }
        } else if (value.length < 2) {
            errors = { ...errors, [key]: `The ${key} must be at least 2 characters.` }
        }
    }
    for (let [key, value] of Object.entries(argum)) {
        switch (key) {
            case "email":
                if (!re_email.test(value)) {
                    errors = {...errors, [key]: 'Incorrect email'}
                }
                defaultValidate(key, value)
                break
            case "minutes":
                if (value < 0) {
                    errors = {...errors, [key]: 'Min value 0'}
                } else if (value > 60) {
                    errors = {...errors, [key]: 'Max value 60'}
                } else if (!`${value}`.length) {
                    errors = {...errors, [key]: 'field is required'}
                }
                break
            case "hour":
                if (value < 0) {
                    errors = {...errors, [key]: 'Min value 0'}
                } else if (!`${value.length}`) {
                    errors = {...errors, [key]: 'field is required'}
                }
                break
            default:
                defaultValidate(key, value)
                break;
        }
    }
    if (Object.entries(errors).length) {
        cb(errors)
        return false
    }
    return true;
}

export {
    validate
}