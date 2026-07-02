import React, { useState } from 'react';
import { Card } from './Card';
import { authService } from '../helperFunctions/authService';
import { Input } from './Input';
import { Header } from './Header';
import { Button } from './Button';
import { InputError } from './InputError';
const initialLoginState = {
    email: '',
    password: '',
};

const errorStatement = 'Incorrect Email/Password Address';
const Login = () => {
    const [login, setLogin] = useState(initialLoginState);
    const [errorState, setError] = useState('');
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        authService(login)
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken);
                console.log(data);
            })
            .catch(() => {
                setError(errorStatement);
            });
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLogin((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        setError('');
    }

    return (
        <Card className="login" header={<Header className="" title="Inventory App" />}>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 text-md md:text-lg lg:text-xl p-5 rounded-2xl shadow bg-blue-300"
            >
                <Input
                    label="Email:"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={login.email}
                    placeholder="example@gmail.com"
                />

                <Input label="Password:" id="password" type="password" onChange={handleChange} value={login.password} />
                {errorState && <InputError message={errorState} />}
                <Button type="submit" content="Submit" />
            </form>
        </Card>
    );
};
export { Login };
