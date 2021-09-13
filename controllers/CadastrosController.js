module.exports = {
    index: () => {
        let cadastros = require('../database/cadastros.json');
        return cadastros;
    },
}