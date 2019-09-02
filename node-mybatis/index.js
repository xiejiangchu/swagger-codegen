//引入数据库
var mysql = require('mysql');
const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const beanTemplate = fs.readFileSync(path.join(__dirname, './template/bean.hbs'), 'utf-8')
const mapperTemplate = fs.readFileSync(path.join(__dirname, './template/mapper.hbs'), 'utf-8')
const mapperInterfaceTemplate = fs.readFileSync(path.join(__dirname, './template/mapperInterface.hbs'), 'utf-8')
const serviceTemplate = fs.readFileSync(path.join(__dirname, './template/service.hbs'), 'utf-8')
const serviceImplTemplate = fs.readFileSync(path.join(__dirname, './template/serviceImpl.hbs'), 'utf-8')
const controllerTemplate = fs.readFileSync(path.join(__dirname, './template/controller.hbs'), 'utf-8')

var typeMapping = {
    "CHAR": {
        "short": "String",
        "long": "java.lang.String"
    },
    "VARCHAR": {
        "short": "String",
        "long": "java.lang.String"
    },
    "TEXT": {
        "short": "String",
        "long": "java.lang.String"
    },
    "ENUM": {
        "short": "String",
        "long": "java.lang.String"
    },
    "LONGVARCHAR": {
        "short": "String",
        "long": "java.lang.String"
    },
    "NUMERIC": {
        "short": "double",
        "long": "java.lang.Double"
    },
    "DECIMAL": {
        "short": "double",
        "long": "java.lang.Double"
    },
    "BIT": {
        "short": "boolean",
        "long": "java.lang.Boolean"
    },
    "BOOLEAN": {
        "short": "boolean",
        "long": "java.lang.Boolean"
    },
    "TINYINT": {
        "short": "byte",
        "long": "java.lang.Byte"
    },
    "SMALLINT": {
        "short": "short",
        "long": "java.lang.Short"
    },
    "INTEGER": {
        "short": "int",
        "long": "java.lang.Integer"
    },
    "INT": {
        "short": "int",
        "long": "java.lang.Integer"
    },
    "MEDIUMINT": {
        "short": "int",
        "long": "java.lang.Integer"
    },
    "BIGINT": {
        "short": "long",
        "long": "java.lang.Long"
    },
    "REAL": {
        "short": "float",
        "long": "java.lang.Float"
    },
    "FLOAT": {
        "short": "double",
        "long": "java.lang.Double"
    },
    "DOUBLE": {
        "short": "double",
        "long": "java.lang.Double"
    },
    "BINARY": {
        "short": "String",
        "long": "java.lang.String"
    },
    "VARBINARY": {
        "short": "String",
        "long": "java.lang.String"
    },
    "LONGVARBINARY": {
        "short": "String",
        "long": "java.lang.String"
    },
    "DATE": {
        "short": "Date",
        "long": "java.util.Date"
    },
    "TIME": {
        "short": "Date",
        "long": "java.util.Date"
    },
    "TIMESTAMP": {
        "short": "Date",
        "long": "java.util.Date"
    },
    "CLOB": {
        "short": "String",
        "long": "java.lang.String"
    },
    "BLOB": {
        "short": "String",
        "long": "java.lang.String"
    }
}

Handlebars.registerHelper('toLowerCase', function(str) {
    return _.toLower(str);
})
Handlebars.registerHelper('toUpperCase', function(str) {
    return _.toUpper(str);
})
Handlebars.registerHelper('upperCaseFirst', function(str) {
    return _.upperFirst(str);
})
Handlebars.registerHelper('camelCase', function(str) {
    str = str.toLowerCase();
    str = _.capitalize(str)
    str = _.camelCase(str);
    str = _.upperFirst(str);
    return str;
})

Handlebars.registerHelper('javaTypeShort', function(str) {
    str = _.toUpper(str);
    return typeMapping[str]['short'];
})

Handlebars.registerHelper('javaTypeLong', function(str) {
    str = _.toUpper(str);
    return typeMapping[str]['long'];
})

function camelCase(str) {
    str = str.toLowerCase();
    str = _.capitalize(str)
    str = _.camelCase(str);
    str = _.upperFirst(str);
    return str;
}

Handlebars.registerHelper('camelCaseLowerFirst', function(str) {
    str = str.toLowerCase();
    str = _.capitalize(str)
    str = _.camelCase(str);
    return str;
})

Handlebars.registerHelper('brackets', function(str) {
    return `{${str}}`
})

Handlebars.registerHelper('bracketsAndCamelCaseLowerFirst', function(str) {
    str = str.toLowerCase();
    str = _.capitalize(str)
    str = _.camelCase(str);
    return `{${str}}`
})

var java_package = 'com.xie.server'
var tables = [];



//实现本地链接
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql',
    database: 'nideshop'
})

connection.query(` select  
            table_name    as tableName,
            engine        as engine,
            table_comment as comments,
            create_time   as createTime from information_schema.tables where table_schema = (select database())`, function(error, results, fields) {
    if (error) throw error;
    tables = results;
   if (!!fs.existsSync(java_package)) {} else {
        if (!fs.mkdirSync(java_package),{ recursive: true }) {
            return console.log("目录：" + java_package + "创建成功");
        } else {
            return console.log("目录：" + java_package + "创建失败");
        }
    }
    // console.log(results);
    for (var k = 0, length3 = results.length; k < length3; k++) {
        getColum(results[k]);
    }
});

function getColum(table) {
    connection.query(`select
            table_name             as tableName,
            column_name            as columnName,
            data_type              as dataType,
            column_comment         as comments,
            column_key             as columnKey,
            is_nullable            as isNullable,
            column_type            as columnType,
            character_octet_length as characterOctetLength,
            extra
        from information_schema.columns
        where table_name = '${table.tableName}' and table_schema = (select database()) order by ordinal_position`, function(error, results, fields) {
        if (error) throw error;
        // console.log(results);
        let params = {
            'tableInfo': table,
            'package': java_package,
            'cols': results,
            'project_base':java_package
        };
       
     
        genBean(params);
        genMapper(params);
        genMapperInterface(params);
        genService(params);
        genServiceImpl(params);
        genController(params);
    });
}

function genBean(data) {
    let munstr = path.join(__dirname, `${data.project_base}/bean/`);
    if (!!fs.existsSync(munstr)) {} else {
        if (!fs.mkdirSync(munstr)) {
            return console.log("目录：" + munstr + "创建成功");
        } else {
            return console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(beanTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/bean/${fileName}.java`), template);
    // console.log(template);
}

function genMapper(data) {
    let munstr = path.join(__dirname, `${data.project_base}/xml/`);
    if (!!fs.existsSync(munstr)) {} else {
        if (!fs.mkdirSync(munstr)) {
            return console.log("目录：" + munstr + "创建成功");
        } else {
            return console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(mapperTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/xml/${fileName}Mapper.xml`), template);
    // console.log(template);
}

function genMapperInterface(data) {
    let munstr = path.join(__dirname, `${data.project_base}/mapper/`);
    if (!!fs.existsSync(munstr)) {} else {
        if (!fs.mkdirSync(munstr)) {
            return console.log("目录：" + munstr + "创建成功");
        } else {
            return console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(mapperInterfaceTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/mapper/${fileName}Mapper.java`), template);
    // console.log(template);
}

function genService(data) {
    let munstr = path.join(__dirname, `${data.project_base}/service/`);
    if (!!fs.existsSync(munstr)) {} else {
        if (!fs.mkdirSync(munstr)) {
            return console.log("目录：" + munstr + "创建成功");
        } else {
            return console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(serviceTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/service/${fileName}Service.java`), template);
    // console.log(template);
}

function genServiceImpl(data) {
    let munstr = path.join(__dirname, `${data.project_base}/service/impl`);
    if (!!fs.existsSync(munstr)) {} else {
        if (!fs.mkdirSync(munstr)) {
            return console.log("目录：" + munstr + "创建成功");
        } else {
            return console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(serviceImplTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/service/impl/${fileName}ServiceImpl.java`), template);
    // console.log(template);
}

function genController(data) {
    let munstr = path.join(__dirname, `${data.project_base}/controller/`);
    if (!!fs.existsSync(munstr)) {} else {
        if (!fs.mkdirSync(munstr)) {
            return console.log("目录：" + munstr + "创建成功");
        } else {
            return console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(controllerTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/controller/${fileName}Controller.java`), template);
    // console.log(template);
}

// connection.end();