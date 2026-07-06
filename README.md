# Inventory Application

A full-stack inventory and shopping-cart application built with a React/TypeScript frontend and an Express/PostgreSQL backend. The app supports product browsing, product images served from the backend, user signup/login, JWT-based authentication, role-aware admin flows, and per-user cart persistence in `localStorage`.

> Note: this project is still in active development. Product browsing and cart behavior are implemented on the frontend, while admin-facing product/category management screens are not yet built.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- React Router
- React Context
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
- Nodemon

## Project Structure

```text
.
├── client
│   ├── src
│   │   ├── components          # Shared UI, product, cart, and page components
│   │   ├── context             # Auth, product, and cart providers
│   │   ├── helperFunctions     # API service helpers
│   │   ├── pages               # Product grid, cart, login, signup, settings
│   │   ├── App.tsx             # Client-side routes
│   │   └── main.tsx            # React provider tree and app entry
│   └── package.json
└── server
    ├── controller              # Route handlers
    ├── middleware              # JWT auth and admin validation
    ├── public/images           # Static product images
    ├── queries                 # SQL query strings
    ├── routes                  # Express routers
    ├── schema                  # Database schema and seed SQL
    ├── connection.js           # PostgreSQL pool
    ├── server.js               # Express app entry
    └── package.json
```

## Features

- Product grid that fetches products from the backend API
- Product cards with image, title, price, and add/remove cart controls
- Backend-served product images from `server/public/images`
- Cart page with line items, quantity controls, clear-cart action, and INR total
- Cart badge showing the current item count
- Per-user cart persistence using `localStorage` keys in the format `cart:<username>`
- User signup and login
- Password hashing with bcrypt
- JWT access tokens stored on the client as `accessToken`
- Auth restoration through `/api/users/getuser`
- Logout flow through the settings page
- Admin-only account creation UI when logged in as an admin
- Admin-protected product and category API routes
- PostgreSQL-backed users, products, and categories
- Light/dark theme tokens defined in CSS variables

## Frontend Routes

| Route | Description |
| --- | --- |
| `/` | Product grid |
| `/products` | Product grid |
| `/cart` | Shopping cart |
| `/login` | Login page |
| `/signup` | Signup page |
| `/setting` | Settings/logout page |
| `*` | 404 page |

## Backend API Routes

### Products

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `GET` | `/api/products` | Public | Get all products |
| `GET` | `/api/products/new` | Admin | Get an empty product object |
| `POST` | `/api/products/new` | Admin | Create a product |
| `GET` | `/api/products/:id` | Public | Get one product |
| `PUT` | `/api/products/:id` | Admin | Update a product |
| `DELETE` | `/api/products/:id` | Admin | Delete a product |

### Categories

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `GET` | `/api/category/getAll` | Public | Get all categories |
| `GET` | `/api/category/create` | Admin | Get an empty category object |
| `POST` | `/api/category/create` | Admin | Create a category |

### Users

| Method | Endpoint | Access | Description |
| --- | --- | --- | --- |
| `POST` | `/api/users/signup` | Public | Create a standard user |
| `POST` | `/api/users/login` | Public | Login and receive an access token |
| `GET` | `/api/users/getuser` | Authenticated | Get the current user |
| `POST` | `/api/users/signup-admin` | Authenticated/Admin | Create a user/admin account |

## Database

The database contains three main tables:

- `users`
- `category`
- `products`

Schema and seed files are in:

```text
server/schema/
├── createtionQuery.sql
├── dummyData.sql
└── tableSchema.sql
```

The tables use UUID primary keys and foreign-key relationships for product categories, product creators, and category creators.

## Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=3000
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_NAME=inventory
JWT_SECRET=your_jwt_secret
CLIENT_ORIGIN=http://localhost:5174
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

At minimum, create the `inventory` database and run:

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

The backend also serves static product images from:

```text
http://localhost:3000/images/<file-name>
```

### 4. Start the Frontend

From the `client` directory:

```bash
npm run dev
```

Vite will print the frontend URL in the terminal. The backend CORS configuration reads from `CLIENT_ORIGIN` and falls back to:

```text
http://localhost:5174
```

If Vite starts on a different port, set `CLIENT_ORIGIN` in `server/.env` or start Vite on the matching port.

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

## Implementation Notes

- The React app is wrapped in `AuthProvider`, `ProductProvider`, and `CartProvider`.
- Products are fetched once through `ProductProvider` using `getAllProduct`.
- Product image URLs are rendered as `http://localhost:3000${image_url}`.
- Cart state is stored per logged-in username in `localStorage`.
- Logging out removes the JWT token and resets the auth context.
- The settings page currently contains the logout action.
- Theme variables for light and dark modes are defined, but there is not yet a visible theme toggle.
- Admin-only API routes require an `Authorization: Bearer <token>` header.

## Known Issues / In Progress

- Admin product/category management screens are not implemented yet.
- The cart page uses a wide fixed grid layout in `CartCard`, so mobile responsiveness may need more work.
- Automated tests are not implemented yet.

## Suggested Next Steps

- Add admin UI for creating and editing products/categories.
- Fix the product delete SQL query.
- Move API base URLs into environment variables.
- Add route guards for authenticated/admin-only frontend pages.
- Add checkout/order persistence if the cart is meant to become a real shopping flow.
- Add tests for authentication, product fetching, cart behavior, and protected backend routes.
