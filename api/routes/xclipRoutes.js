'use strict';
module.exports = function(app) {
    const xclip = require('../controllers/xclipController')

    // todoList Routes
    app.route('/api')
    .post(xclip.slack_response)
    .get(xclip.get_response)
}
