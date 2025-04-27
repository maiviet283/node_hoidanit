require('dotenv').config()
const mysql = require('mysql2')

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    // Nếu true, khi quá giới hạn sẽ đợi thay vì lỗi
    waitForConnections: true, 
    // Số kết nối tối đa (ở đây là 99)
    connectionLimit: 99,
    // 	Số lượng request tối đa được xếp hàng (0 là không giới hạn)
    queueLimit: 0
})

module.exports = connection