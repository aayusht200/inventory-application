Table products [headercolor: #175e7a] {
	id uuid [ pk, not null, unique ]
	title varchar [ not null ]
	description varchar [ not null ]
	price decimal [ not null ]
	category_id uuid [ not null ]
	active boolean [ not null ]
	quantity integer [ not null, default: 0 ]
	created_at timestamp [ not null, default: `NOW()` ]
	updated_at timestamp [ not null ]
	created_by uuid [ not null ]
}

Table category [headercolor: #175e7a] {
	id uuid [ pk, not null ]
	name varchar [ not null, unique ]
	description varchar [ not null ]
	created_at timestamp [ not null, default: `NOW()` ]
	created_by uuid [ not null ]
}

Table users [headercolor: #175e7a] {
	id uuid [ pk, not null ]
	username varchar [ not null ]
	email varchar [ not null, unique ]
	password_hash varchar [ not null ]
	active boolean [ not null ]
	role varchar [ not null, default: user ]
	created_at timestamp [ not null, default: `NOW()` ]
	updated_at timestamp [ not null ]
}

Ref fk_category_id_products {
	category.id < products.category_id [ delete: no action, update: no action ]
}

Ref fk_users_id_products {
	users.id < products.created_by [ delete: no action, update: no action ]
}

Ref fk_users_id_category {
	users.id < category.created_by [ delete: no action, update: no action ]
}