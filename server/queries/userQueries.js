const query = {
    getUserName: 'SELECT userName FROM users WHERE email=$1',
    getUserByEmail: 'SELECT password_hash,id,role,email FROM users WHERE email=$1',
    createNewUser:
        'INSERT INTO users (id, username,email,password_hash,active,role,created_by) VALUES ($1, $2,$3,$4,TRUE,$5,$6);',
    getuser: 'SELECT username,email,active,role FROM users WHERE email=$1;',
};
export { query };
