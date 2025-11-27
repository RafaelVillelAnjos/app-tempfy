require("dotenv").config();
const { Pool } = require("pg");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

// Conexão com PostgreSQL usando variáveis do .env
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

pool.connect()
    .then(() => console.log("Conexão com o banco bem sucedida! ✅"))
    .catch(err => console.error("Falha na conexão com o banco ❌", err));


// -------------------------------
// ROTAS
// -------------------------------

// Inserir usuário
app.post("/usuarios", async (req, res) => {
    try {
        const sql = "INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *";
        const result = await pool.query(sql, [req.body.nome, req.body.email]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Selecionar todos os usuários
app.get("/usuarios", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM usuarios");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Atualizar usuário
app.patch("/usuarios/:id", async (req, res) => {
    try {
        const sql = "UPDATE usuarios SET nome=$1, email=$2 WHERE id=$3 RETURNING *";
        const result = await pool.query(sql, [
            req.body.nome,
            req.body.email,
            req.params.id
        ]);
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Deletar usuário
app.delete("/usuarios/:id", async (req, res) => {
    try {
        await pool.query("DELETE FROM usuarios WHERE id=$1", [req.params.id]);
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Iniciar servidor
app.listen(process.env.PORT, () =>
    console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`)
);