import axios from "axios";
import { useState } from "react";

import "../register/register.form.scss";

export function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = (e: any) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e: any) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify(user);
            const res = await axios.post("/login", body, config);
        } catch (err) {
            console.error(err.response?.data);
        }
    };

    return (
        <div className="register-form">
            <div className="user">
                <header className="user__header">
                    <h1 className="user__title">Login</h1>
                </header>

                <form onSubmit={(e) => onSubmit(e)} className="form">
                    <div className="form__group">
                        <input
                            onChange={onChange}
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form__input"
                            value={email}
                        />
                    </div>

                    <div className="form__group">
                        <input
                            onChange={onChange}
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form__input"
                            value={password}
                        />
                    </div>

                    <input
                        onChange={onChange}
                        type="submit"
                        className="btn"
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}
