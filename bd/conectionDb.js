
import 'dotenv/config'
import pg from 'pg'

//indica los datos para el acceso a la bd
const pool = new pg.Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    allowExitOnIdle: true
    // connectionString: process.env.DATABASE_URL,
})

export default pool;