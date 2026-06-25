-- CREATE an  database 'inventory'
CREATE DATABASE inventory;


-- Create a new table 'products' with a primary key and columns
CREATE TABLE products (
    id uuid PRIMARY KEY,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
	price FLOAT  NOT NULL,
	category_id uuid NOT NULL,
	active BOOLEAN NOT NULL,
	quantity INTEGER NOT NULL DEFAULT 0,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMP NOT NULL,
	created_by uuid NOT NULL
);

-- Create a new table 'category' with a primary key and columns
CREATE TABLE category (
    id uuid PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	created_by uuid NOT NULL
);

-- Create a new table 'users' with a primary key and columns
CREATE TABLE users (
    id uuid PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL,
    password_hash VARCHAR NOT NULL,
    active BOOLEAN NOT NULL,
	role VARCHAR NOT NULL DEFAULT 'user',
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	created_by uuid NOT NULL
);

-- Alter a  table 'products' with a foreign key from category(id)
ALTER TABLE products
ADD CONSTRAINT fk_category_id_products
FOREIGN KEY (category_id)
REFERENCES category(id);

-- Alter a  table 'products' with a foreign key from users(id)
ALTER TABLE products
ADD CONSTRAINT fk_users_id_products
FOREIGN KEY (created_by)
REFERENCES users(id);

-- Alter a  table 'products' with a foreign key from category(id)
ALTER TABLE category
ADD CONSTRAINT fk_users_id_category
FOREIGN KEY (created_by)
REFERENCES users(id);