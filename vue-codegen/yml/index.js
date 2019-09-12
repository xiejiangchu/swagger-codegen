const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const apiTemplate = fs.readFileSync(path.join(__dirname, 'template/api.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, 'template/method.hbs'), 'utf-8')
const parse = require('../lib/parse.js')
const codegen = require('../lib/codegen.js')
Handlebars.registerPartial('method', method)


module.exports = function(data) {
    let codeResult = codegen(data)
    let yml = Handlebars.compile(apiTemplate)(data)
    return yml;
}