import { useFormik } from "formik"
import { Header } from "../../Other/Header/Index"
import { ShoppingCartState } from "../../Other/ShoppingCartState/Index"
import { validationSchema } from "./ValidationSchema"
import { useNavigate } from "react-router-dom"

export const FormLayout: React.FC = () => { 
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            cardNumber: "",
            cardDate: "",
            cvv: "",
            email: ""
        },
        validationSchema,
        onSubmit: () => {
            navigate("../keys")
        }
    })
    
    return(
        <>
            <Header />
            <main>
                <h2 className="title">Payment Form</h2>
                <ShoppingCartState number={2}/>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <label className="form__label">
                        Cardholder Name:
                        {formik.errors.name && formik.touched.name ? <p className="form__text">{formik.errors.name}</p> : ""}
                        <input
                            className="form__input"
                            type="text" 
                            name="name" 
                            value={formik.values.name} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        ></input>
                    </label>
                    <label className="form__label">
                        Card Number:
                        {formik.errors.cardNumber && formik.touched.cardNumber ? <p className="form__text">{formik.errors.cardNumber}</p> : ""}
                        <input 
                            className="form__input"
                            type="text" 
                            name="cardNumber" 
                            value={formik.values.cardNumber} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        ></input>
                    </label>
                    <label className="form__label">
                        Expire Date:
                        {formik.errors.cardDate && formik.touched.cardDate ? <p className="form__text">{formik.errors.cardDate}</p> : ""}
                        <input 
                            className="form__input"
                            type="text" 
                            name="cardDate" 
                            value={formik.values.cardDate} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        ></input>
                    </label>
                    <label className="form__label">
                        CVV:
                        {formik.errors.cvv && formik.touched.cvv ? <p className="form__text">{formik.errors.cvv}</p> : ""}
                        <input 
                            className="form__input form__input--cvv"
                            type="text" 
                            name="cvv" 
                            min={3} 
                            max={3} 
                            value={formik.values.cvv} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        ></input>
                    </label>
                    <label className="form__label">
                        E-mail:
                        {formik.errors.email && formik.touched.email ? <p className="form__text">{formik.errors.email}</p> : ""}
                        <input
                            className="form__input"
                            type="email" 
                            name="email" 
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        ></input>
                    </label>
                    <button className="form__button" type="submit">Confirm Payment</button>
                </form>
            </main>
        </>
    )
}