const { messages } = require('../db.js');

function newParse(req, res) {
    res.render('new');
}

function newMessage (req, res) {
    messages.push( {username: req.body.username, message: req.body.messageText, date: new Date().toISOString().slice(0, 10)});
    res.redirect('/');
}

module.exports = { newParse, newMessage };