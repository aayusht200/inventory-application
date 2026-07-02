interface LoginCredentials {
    email: string;
    password: string;
}

const authService = async (credentials: LoginCredentials) => {
    return fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        credentials: 'include',
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    });
};

export { authService };
