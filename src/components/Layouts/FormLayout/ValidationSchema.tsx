import * as yup from "yup"

export const validationSchema = () => yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Name is too short (min. 3)")
        .max(32, "Name is too long (max. 32)")
        .matches(/\b([A-Z][-,a-z. ']+[ ]*)+/gm, "Incorrect Name"),
    cardNumber: yup
        .string()
        .required("Card number is required")
        .min(16, "Card number is too short")
        .max(17, "Card number is too long")
        .matches(/([0-9]{4}){4}/, "Incorrect card number"),
    cardDate: yup
        .string()
        .required("Expire date is required")
        .min(7, "Date is too short")
        .max(8, "Date is too long")
        .matches(/(0[1-9]|1[0-2])[/](202[4-9]|203[0-9])/, "Incorrect expire date"),
    cvv: yup
        .string()
        .required("CVV is required")
        .min(3, "CVV is too short")
        .max(3, "CVV is too long")
        .matches(/[0-9]{3}/, "Incorrect CVV"),
    email: yup
        .string()
        .required("E-mail is required")
        .email("Incorrect e-mail")
})