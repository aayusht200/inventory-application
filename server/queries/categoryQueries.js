const query = {
    create: 'INSERT INTO category (id, name,description,created_by) VALUES ($1,$2,$3,$4);',
    getAll: 'SELECT id, name,description FROM category;',
};

export { query };
