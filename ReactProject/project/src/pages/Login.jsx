import style from "../CSS/Login.module.css"
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const { register, handleSubmit, reset, formState } = useForm()
    const { errors } = formState;
    const navigate = useNavigate();


    const submit = async (formData) => {
        try {
            // Make API call with form data
            const response = await axios.post('http://localhost:5000/user/login', formData);
            console.log(response.data);
            if (response.data.status === "success") {
                toast.success("Login Successfully");
                setTimeout(() => {
                    navigate('/');
                }, 2000);

                if (response.data.status === "failed")
                    // localStorage.setItem("token", response.data.jwt);
                    reset({ email: "", password: "" });

            } else {
                toast.error("Login failed");

                // reset({ email: "", password: "" });
                // response.data.status("failed")

            }

        } catch (error) {
            console.log(error.response.data); // Log the specific error message from the server
        }
    }

    return (
        <>
            <div className={style.bg}>
                <ToastContainer />
                <Form action="" method="" onSubmit={handleSubmit(submit)}>
                    <div className={style.contain}>
                        <h1>Login</h1>
                        <input type="text" placeholder="please Enter erro" {...register("email", { required: { value: true, message: "please Enter Email", trim: true } })} />

                        <p style={{ color: "red" }}>{errors?.email?.message}</p>

                        <input type="password" placeholder="Password" {...register("password", { required: { value: true, message: "please Enter Password", trim: true }})} />
                        <p style={{ color: "red" }}>{errors?.password?.message}</p>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            </div>
        </>
    )
}
