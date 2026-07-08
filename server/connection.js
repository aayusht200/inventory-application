import pg from 'pg';

process.loadEnvFile();
pg.types.setTypeParser(1082, (val) => val); //disables autoconversion of certain data types.

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

// const pool = new pg.Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
// });

export { pool };
