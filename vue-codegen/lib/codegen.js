const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const _ = require('lodash')
const apiTemplate = fs.readFileSync(path.join(__dirname, './template/api.hbs'), 'utf-8')
const apiStoreTemplate = fs.readFileSync(path.join(__dirname, './template/apiStore.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
const requesTemplate = fs.readFileSync(path.join(__dirname, './template/request.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerHelper('toLowerCase', function(word) {
    return word.toLowerCase()
})
Handlebars.registerHelper('upperCaseFirst', function(str) {
    var str = str.toLowerCase();
    return _.upperFirst(str);
})
Handlebars.registerHelper('toLowerCase', function(str) {
    return _.toLower(str);
})
Handlebars.registerHelper('toUpperCase', function(str) {
    return _.toUpper(str);
})
Handlebars.registerHelper('camelCase', function(str) {
    str = str.toLowerCase();
    str = _.capitalize(str)
    str = _.camelCase(str);
    str = _.upperFirst(str);
    return str;
})
Handlebars.registerHelper('camelCaseLowerFirst', function(str) {
    str = str.toLowerCase();
    str = _.capitalize(str)
    str = _.camelCase(str);
    return str;
})
Handlebars.registerHelper('brackets', function(word) {
    return `{${word}}`
})
module.exports = function(data) {
    let template = Handlebars.compile(apiTemplate)(data)
    template = beautify(template, { indent_size: 2, max_preserve_newlines: -1 })

    let apiStore = Handlebars.compile(apiStoreTemplate)(data)
    apiStore = beautify(apiStore, { indent_size: 2, max_preserve_newlines: -1 })

    let request = Handlebars.compile(requesTemplate)(data)
    request = beautify(request, { indent_size: 2, max_preserve_newlines: -1 })
    // console.log(apiStore)
    return { "request": request, 'api': template, 'store': apiStore };
}