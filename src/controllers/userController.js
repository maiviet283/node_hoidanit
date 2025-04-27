const connection = require('../config/database')
const {getAllUsers,createUser,getUserById,updateUserById,
    deleteUserById
} = require('../services/user.service')

const getHomePageUsers = async (req, res) => {
    try {
        const results = await getAllUsers()
        return res.render('users/index.ejs', { users: results })
    } catch (error) {
        console.error('Error rendering users:', error)
        return res.status(500).send('Internal Server Error')
    }
};

const getRegisterUser = (req, res) => {
    res.render('users/register')
}

const getLoginUser = (req, res) => {
    res.render('users/login')
}

// Tạo user mới
const postCreateUser = async (req, res) => {
    try {
        const { name, email, city } = req.body;

        if (!name || !email || !city) {
            return res.status(400).send('All fields are required');
        }

        await createUser(name, email, city);
        res.redirect('/');
    } catch (error) {
        console.error('Create User Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

const getUpdateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await getUserById(userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.render('users/update', { user });
    } catch (error) {
        console.error('Error fetching user:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

const postUpdateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email, city } = req.body;

        if (!name || !email || !city) {
            return res.status(400).send('All fields are required');
        }

        await updateUserById(userId, name, email, city);
        res.redirect('/');
    } catch (error) {
        console.error('Update User Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
};

const postDeleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        await deleteUserById(userId)
        res.redirect('/')
    } catch (error) {
        console.log('Delete User Error:', error.message)
        res.status(500).send('Internal Server Error')
    }
}


module.exports = {
    getRegisterUser,getHomePageUsers,getLoginUser,
    postCreateUser,getUpdateUser,postUpdateUser,
    postDeleteUser
}