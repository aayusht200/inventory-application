const query = {
    getAll: 'SELECT * FROM products;',
    getOne: 'SELECT * FROM products WHERE id=$1',
    update: 'UPDATE products SET title=$1, description=$2, price=$3, category_id=$4, active=$5, quantity=$6, updated_at=NOW() WHERE id=$7;',
    delete: 'DELETE FROM productsWHERE id=$1;',
    create:'INSERT INTO products (id,title,description,price,category_id,active,quantity,updated_at,created_by) VALUES ($1,$2,$3,$4,$5,$6,$7,NOW(),$8);'
};
export { query };
