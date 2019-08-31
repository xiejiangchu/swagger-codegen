const parse = require('./lib/parse.js')
const codegen = require('./lib/codegen.js')
const fs = require('fs')
const path = require('path')
const request = require('request');
// const mdGen = require('./md/index.js')
// const ymlGen = require('./yml/index.js')


var url = 'http://119.27.160.36/v2/api-docs';
var name = 'api';

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        fs.writeFileSync(path.join(__dirname, `./${name}.json`), body)
        let opt = {
            swagger: JSON.parse(body),
            moduleName: name,
            className: name
        }
        let data = parse(opt);
        // console.log(JSON.stringify(data));
        genJs(data);
        // genMd(data);
        // genYml(data);
    }
});

function genJs(data) {
    let codeResult = codegen(data);
    fs.writeFileSync(path.join(__dirname, `/${name}Request.js`), codeResult.api);
    fs.writeFileSync(path.join(__dirname, `/${name}.js`), codeResult.store);
}


function genMd(data) {
    let mdData = mdGen(data)
    fs.writeFileSync(path.join(__dirname, `./${name}.md`), mdData)
}

function genYml(data) {
    let ymlData = ymlGen(data)
    fs.writeFileSync(path.join(__dirname, `./${name}.yml`), ymlData)
}