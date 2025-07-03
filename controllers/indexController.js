const { messages } = require('../db.js');

function indexParse(req, res) {
    res.render('index', { title: 'Mini Message Board', messages})
}

module.exports = { indexParse };