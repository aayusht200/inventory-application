const query = {
    getAll: 'SELECT * FROM products;',
    getOne: 'SELECT * FROM products WHERE id=$1',
};
export { query };
