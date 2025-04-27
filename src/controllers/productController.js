const getProductHome = (req, res) => {
    res.render('products/index.ejs', {
        title: 'Trang chủ',
        name: 'Việt',
        items: ['Áo', 'Quần', 'Giày']
    });
}

const getProductDetail = (req, res) => {
    res.send("<h1>This shirt is very cheap</h1>")
}

module.exports = {
    getProductHome, getProductDetail
}