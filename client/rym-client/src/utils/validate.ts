import { FormValues } from "../components/SignOn";

function validate(userData: FormValues) {

    const tempErrors= {
        email: "",
        password: ""
    };
    if (!/\S+@\S+\.\S+/.test(userData.email) || userData.email.length > 50) {
        tempErrors.email = "El email no tiene la estructura correcta"
    }

    if (userData.password.length < 5 || userData.password.length > 120) {
    tempErrors.password = "La contraseña debe tener ser mayor a 5 caracteres";
    }
    if(!/[0-9]/.test(userData.password)) tempErrors.password = "La contraseña necesita un número"

    return tempErrors;
}

export default validate;