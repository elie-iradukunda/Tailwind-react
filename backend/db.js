import pg from 'pg'
const { Pool } = pg

    const pool = new Pool({
      user: 'postgres',
      host: 'localhost', 
      database: 'food-app',
      password: '07866',
      port: 5432, 
    });
export default pool;