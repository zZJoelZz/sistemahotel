import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import {login} from '../../services/loginServices'
import './Login.css'

const Login = () => {
    const RealizaLogin=(dados)=>{
        login(dados.email,dados.password)
    }
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required() 
    })
    return (
        <>
            <h1>Login</h1>
            <p>Entre com as sua credenciais</p>
            <Formik initialValues={{}} onSubmit={RealizaLogin} validationSchema={validations}>
                <Form className="Login">
                    <div className="Login-Group">
                        <Field name="email" className="Login-Field" />
                        <ErrorMessage component="span" name="email" className="Login-Error"></ErrorMessage>
                    </div>

                    <div className="Login-Group">
                        <Field name="password" className="Login-Field" />
                        <ErrorMessage component="span" name="password" className="Login-Error"></ErrorMessage>
                    </div>

                    <button className="Login-Btn" type="submit">Login</button>
                </Form>
            </Formik>
        </>
    )
}

export default Login