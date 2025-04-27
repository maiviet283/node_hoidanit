const connection = require('../config/database')

const getAllUsers = async () => {
    const [results, fields] = await connection.promise().query('SELECT * FROM users');
    return results;
};

const getUserById = async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [results] = await connection.promise().query(sql, [id]);
    return results[0];
};

const createUser = async (name, email, city) => {
    const sql = 'INSERT INTO users (name, email, city) VALUES (?, ?, ?)';
    const [results] = await connection.promise().query(sql, [name, email, city]);
    return results;
};

const updateUserById = async (id, name, email, city) => {
    const sql = 'UPDATE users SET name = ?, email = ?, city = ? WHERE id = ?';
    const [results] = await connection.promise().query(sql, [name, email, city, id]);
    return results;
};

const deleteUserById = async (id) => {
    const sql = 'DELETE FROM users WHERE id = ?'
    const [results] = await connection.promise().query(sql, [id])
    return results
}


module.exports = {
    getAllUsers,createUser,
    getUserById,updateUserById,
    deleteUserById
}