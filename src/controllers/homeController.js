const connection = require('../config/database')

const getHomePage = (req, res) => {
    connection.query('SELECT * FROM users ORDER BY id DESC LIMIT 10', (error, results, fields) => {
        if (error) {
            console.error('Query error:', error)
            return res.status(500).send('Internal Server Error')
        }

        return res.render('index.ejs', { users: results })
    })
}


module.exports = {
    getHomePage
}