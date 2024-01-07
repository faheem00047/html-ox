exports.name = '/images/videoanime';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const mp4 = require('./data/json/mp4.json');
        var image = mp4[Math.floor(Math.random() * mp4.length)].trim();
        res.jsonp({
            data: image,
            count: mp4.length
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}