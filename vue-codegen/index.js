const parse = require('./lib/parse.js')
const codegen = require('./lib/codegen.js')
const fs = require('fs')
const path = require('path')
const request = require('request');
const HashMap = require('./lib/HashMap.js');
const _ = require('lodash')
// const mdGen = require('./md/index.js')
// const ymlGen = require('./yml/index.js')


var url = 'http://127.0.0.1:8080/v2/api-docs';
var name = 'admin';

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        fs.writeFileSync(path.join(__dirname, `./${name}.json`), body)
        let opt = {
            swagger: JSON.parse(body),
            moduleName: name,
            className: name,
            domain:"http://127.0.0.1:8080/"
        }
        let data = parse(opt);
        let methods = data.methods;
        let map = new HashMap();
        for (var i = methods.length - 1; i >= 0; i--) {
            if (map.get(methods[i].tags)) {
                map.get(methods[i].tags).push(methods[i]);
            } else {
                map.put(methods[i].tags, [methods[i]]);
            }

        }
        let keys = map.keySet();
        for (var i = keys.length - 1; i >= 0; i--) {
            let name=keys[i];
            let methods=map.get(name);
            data.moduleName=name;
            data.methods=methods;
            genJs(name,data);
            // genMd(data);
            // genYml(data);
        }

    }
});

function genJs(name, data) {
    let codeResult = codegen(data);
    fs.writeFileSync(path.join(__dirname, `/output/${name}Request.js`), codeResult.api);
    fs.writeFileSync(path.join(__dirname, `/output/${name}.js`), codeResult.store);
    fs.writeFileSync(path.join(__dirname, `/output/request.js`), codeResult.request);
}


function genMd(name, ddata) {
    let mdData = mdGen(data)
    fs.writeFileSync(path.join(__dirname, `./output/${name}.md`), mdData)
}

function genYml(name, ddata) {
    let ymlData = ymlGen(data)
    fs.writeFileSync(path.join(__dirname, `./output/${name}.yml`), ymlData)
}