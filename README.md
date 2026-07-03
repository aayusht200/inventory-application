# Inventory Application

A full-stack inventory management application with a React/TypeScript frontend and an Express/PostgreSQL backend. The project includes user signup/login, JWT-based authentication, role-aware admin flows, product and category API routes, and PostgreSQL schema files for inventory data.

> Note: this project is still in active development. The backend product/category/user APIs are mostly wired, while the current product page UI is still a placeholder and the client product fetch helper is not implemented yet.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Heroicons
- Oxlint

### Backend

- Node.js
- Express
- PostgreSQL
- `pg`
- JSON Web Tokens
- bcrypt
- CORS

## Project Structure

```text
.
├── client
│   ├── src
│   │   ├── components          # Shared UI components
│   │   ├── context             # Auth context/provider
│   │   ├── helperFunctions     # Auth/signup/user/product services
│   │   ├── pages               # Products, Login, Signup pages
│   │   ├── App.tsx             # Client routes
│   │   └── main.tsx            # React app entry
│   └── package.json
└── server
    ├── controller              # Route handlers
    ├── middleware              # Auth and admin validation
    ├── queries                 # SQL query strings
    ├── routes                  # Express routers
    ├── schema                  # Database schema and seed SQL
    ├── connection.js           # PostgreSQL pool
    ├── server.js               # Express app entry
    └── package.json
```

## Features

- User signup and login
- Password hashing with bcrypt
- JWT access tokens
- Authenticated current-user lookup
- Admin-only account creation
- Admin-only product create/update/delete routes
- Admin-only category creation routes
- PostgreSQL-backed users, products, and categories
- React auth context with localStorage token restoration
- Login and signup forms with basic error handling

## Current App Routes

### Frontend

| Route | Description |
| --- | --- |
| `/` | Products page |
| `/products` | Products page |
| `/login` | Login page |
| `/signup` | Signup page |
| `*` | 404 page |

### Backend

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `GET` | `/api/products` | Public | Get all products |
| `GET` | `/api/products/new` | Admin | Get an empty product object |
| `POST` | `/api/products/new` | Admin | Create a product |
| `GET` | `/api/products/:id` | Public | Get one product |
| `PUT` | `/api/products/:id` | Admin | Update a product |
| `DELETE` | `/api/products/:id` | Admin | Delete a product |
| `GET` | `/api/category/getAll` | Public | Get all categories |
| `GET` | `/api/category/create` | Admin | Get an empty category object |
| `POST` | `/api/category/create` | Admin | Create a category |
| `POST` | `/api/users/signup` | Public | Create a standard user |
| `POST` | `/api/users/login` | Public | Login and receive an access token |
| `GET` | `/api/users/getuser` | Authenticated | Get the current user |
| `POST` | `/api/users/signup-admin` | Authenticated/Admin | Create a user/admin account |

## Database

The database schema defines three main tables:

- `users`
- `category`
- `products`

Schema and seed files are available in:

```text
server/schema/
├── createtionQuery.sql
├── dummyData.sql
└── tableSchema.sql
```

The tables use UUID primary keys and foreign keys for:

- product category ownership
- product creator ownership
- category creator ownership

## Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=3000
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_NAME=inventory
JWT_SECRET=your_jwt_secret
```

## Getting Started

### 1. Install Dependencies

Install client dependencies:

```bash
cd client
npm install
```

Install server dependencies:

```bash
cd ../server
npm install
```

### 2. Set Up PostgreSQL

Create the database and tables using the SQL files in `server/schema`.

At minimum, create the `inventory` database and run the table creation SQL from:

```text
server/schema/createtionQuery.sql
```

Optional seed data is available in:

```text
server/schema/dummyData.sql
```

### 3. Start the Backend

From the `server` directory:

```bash
npm run server
```

The API runs on:

```text
http://localhost:3000
```

### 4. Start the Frontend

From the `client` directory:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Development Notes

- The server enables CORS for `http://localhost:5173`.
- The client stores the JWT access token in `localStorage` under `accessToken`.
- Admin-only routes require an `Authorization: Bearer <token>` header.
- The current `Products` page renders the app shell but does not yet list product data.
- `client/src/helperFunctions/productService.ts` currently contains a placeholder `getAllProduct` function.
- Product deletion currently has a SQL typo in `server/queries/productQueries.js` (`productsWHERE`) that should be fixed before relying on delete behavior.

## Available Scripts

### Client

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Server

```bash
npm run server
npm test
```

`npm test` is currently a placeholder script in the server package.

## Suggested Next Steps

- Implement product fetching in the frontend product service.
- Render product inventory cards or tables on the Products page.
- Add create/edit product forms for admin users.
- Fix the product delete SQL query.
- Add request validation for product/category/user payloads.
- Add frontend route protection for admin-only screens.
- Add automated tests for authentication, products, and category routes.
