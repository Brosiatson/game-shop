import { useFormik } from "formik"
import { Header } from "../../Other/Header/Index"
import { ShoppingCartState } from "../../Other/ShoppingCartState/Index"
import { validationSchema } from "./ValidationSchema"
import "./FormLayout.css"
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
                <h2 className="h2-shopping-cart-form">Payment Form</h2>
                <ShoppingCartState number={2}/>
                <div className="shopping-cart-form-container">
                    <form className="shopping-cart-form" onSubmit={formik.handleSubmit}>
                        <label>
                            Cardholder Name:
                            {formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ""}
                            <input
                                type="text" 
                                name="name" 
                                value={formik.values.name} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            ></input>
                        </label>
                        <label>
                            Card Number:
                            {formik.errors.cardNumber && formik.touched.cardNumber ? <p>{formik.errors.cardNumber}</p> : ""}
                            <input 
                                type="text" 
                                name="cardNumber" 
                                value={formik.values.cardNumber} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            ></input>
                        </label>
                        <label>
                            Expire Date:
                            {formik.errors.cardDate && formik.touched.cardDate ? <p>{formik.errors.cardDate}</p> : ""}
                            <input 
                                type="text" 
                                name="cardDate" 
                                value={formik.values.cardDate} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            ></input>
                        </label>
                        <label>
                            CVV:
                            {formik.errors.cvv && formik.touched.cvv ? <p>{formik.errors.cvv}</p> : ""}
                            <input 
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
                        <label>
                            E-mail:
                            {formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ""}
                            <input 
                                type="email" 
                                name="email" 
                                value={formik.values.email} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            ></input>
                        </label>
                        <button type="submit">Confirm Payment</button>
                    </form>
                </div>
            </main>
        </>
    )
}