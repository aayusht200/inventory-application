import React, { useState } from 'react';
import { Card } from './Card';

const initialLoginState = {
    email: '',
    password: '',
};
interface HeaderProps {
    className?: string;
    title: string;
}
const errorStatement = 'Incorrect Email/Password Address';
const Login = () => {
    const [login, setLogin] = useState(initialLoginState);
    const [errorState, setError] = useState('');
    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
            credentials: 'include',
        })
            .then((response) => {
                if (!response.ok) {
                    setError(errorStatement);
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('accessToken', data.accessToken);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Card className="login" header={<Header className="" title="Inventory App" />}>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 text-md md:text-lg lg:text-xl p-5 rounded-2xl shadow bg-blue-300"
            >
                <label htmlFor="email" className="font-bold">
                    Email:
                </label>
                <input
                    type="email"
                    value={login.email}
                    name="email"
                    id="email"
                    className="shadow rounded p-1 bg-blue-50 md:w-100 w-75 lg:w-125 focus:ring-blue-800"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setLogin((prev) => ({
                            ...prev,
                            email: e.target.value,
                        }));
                        setError('');
                    }}
                />
                <label htmlFor="password" className="font-bold">
                    Password:
                </label>
                <input
                    type="password"
                    value={login.password}
                    name="password"
                    id="password"
                    className=" shadow rounded p-1 bg-blue-50 md:w-100 w-75 lg:w-125 focus:ring-blue-800"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setLogin((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }));
                        setError('');
                    }}
                />
                {errorState && (
                    <span className="border shadow rounded  pr-4 pl-4 bg-blue-50 text text-red-400 font-medium w-fit">
                        {errorState}
                    </span>
                )}
                <button
                    type="submit"
                    className="shadow rounded pr-6 pl-6 p-1 bg-blue-50 w-fit font-bold text-blue-800 border-blue-950 hover:scale-105 cursor-pointer"
                >
                    Submit
                </button>
            </form>
        </Card>
    );
};

function Header({ className, title }: HeaderProps) {
    return (
        <div className={`header ${className}`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold ">{title}</h1>
        </div>
    );
}
export { Login };
