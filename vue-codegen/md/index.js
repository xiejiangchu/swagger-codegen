const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const mdTemplate = fs.readFileSync(path.join(__dirname, 'template/md.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, 'template/method.hbs'), 'utf-8')
const parse = require('../lib/parse.js')
const codegen = require('../lib/codegen.js')
Handlebars.registerPartial('method', method)
Handlebars.registerHelper('requireFilter', function(require) {
    return require ? 'required' : 'optional'
})

module.exports = function(data) {
    let codeResult = codegen(data)
    let md = Handlebars.compile(mdTemplate)(data)
    return md;
}