const path = require('path');

module.exports = {
    "admin": (req, res) => {
        res.status(200);
        res.sendFile(path.resolve(__dirname + '/../public/index.html'));
    }
}