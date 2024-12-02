const { Pool } = require("pg")
//indica los datos para el acceso a la bd
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Cg10358",
    database: "likeme",
    allowExitOnIdle: true
})

//obtiene desde la bd todos los registros
const getPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    return rows
}

//crear registros en la BD, agregar posts
const addPost = async (titulo, img, descripcion, likes) => {
    try {
        const consulta = await pool.query('INSERT INTO posts (titulo, img, descripcion, likes) VALUES($1,$2,$3,$4) RETURNING *', [titulo, img, descripcion, likes])
        console.log('post agregado')
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getPosts, addPost }