const query = {
    getUserName: 'SELECT userName FROM users WHERE email=$1',
    getPassword: 'SELECT password_hash FROM users WHERE email=$1',
};
export { query };
