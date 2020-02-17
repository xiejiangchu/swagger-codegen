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
    },
    "JSON": {
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

Handlebars.registerHelper('toUpperCaseDB', function(str) {
    return prefix + _.toUpper(str);
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


Handlebars.registerHelper('functionCall', function(list) {
    return _.flatMap(list, flatCall);
})

Handlebars.registerHelper('functionParam', function(list) {
    return _.flatMap(list, flat);
})

Handlebars.registerHelper('controllerParam', function(list) {
    return _.flatMap(list, flatController);
})

function flatCall(val) {
    return val.columnName;
}

function flat(val) {
    let type = _.toUpper(val.dataType);
    return typeMapping[type]['short'] + " " + val.columnName;
}

function flatController(val) {
    let type = _.toUpper(val.dataType);
    return `@RequestParam(value = "${ val.columnName}") ${typeMapping[type]['short']}  ${val.columnName}`;
}

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

var java_package = 'com.xie.exam.server';
var prefix = "T_";



//实现本地链接
var connection = mysql.createConnection({
    host: '10.84.147.133',
    user: 'root',
    password: '1qazxsw2',
    database: 'authbank'
})

connection.query(`SELECT
                    table_name AS tableName,
                    ENGINE AS ENGINE,
                    table_comment AS comments,
                    create_time AS createTime 
                FROM
                    information_schema.TABLES 
                WHERE
                    table_schema = ( SELECT DATABASE ( ) )`, function(error, results, fields) {
    if (error) throw error;
    if (!!fs.existsSync(java_package)) {
        console.log("目录：" + java_package + "已经存在");
    } else {
        if (!fs.mkdirSync(java_package), { recursive: true }) {
            console.log("目录：" + java_package + "创建成功");
        } else {
            console.log("目录：" + java_package + "创建失败");
        }
    }
    // console.log(results);

    for (var k = 0, length3 = results.length; k < length3; k++) {
        if (results[k].tableName != "migration_history" && results[k].tableName != "MIGRATION_HISTORY") {
            results[k].tableName = _.trimStart(results[k].tableName, prefix);
            getColum(results[k]);
        }

    }

    connection.end();
});

function getColum(table) {
    connection.query(`SELECT
                        table_name AS tableName,
                        column_name AS columnName,
                        data_type AS dataType,
                        column_comment AS comments,
                        column_key AS columnKey,
                        is_nullable AS isNullable,
                        character_maximum_length AS character_maximum_length,
                        numeric_precision AS numeric_precision,
                        numeric_scale AS numeric_scale,
                        column_type AS columnType,
                        character_octet_length AS characterOctetLength,
                        extra AS extra 
                    FROM
                        information_schema.COLUMNS 
                    WHERE
                        table_name = '${prefix}${table.tableName}' 
                        AND table_schema = ( SELECT DATABASE ( ) ) 
                        AND data_type != 'timestamp'
                        AND extra != 'auto_increment'
                    ORDER BY
                        ordinal_position`, function(error, results, fields) {
        if (error) throw error;
        // console.log(results);
        let params = {
            'tableInfo': table,
            'package': java_package,
            'cols': results,
            'project_base': java_package
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
    if (!fs.existsSync(munstr)) {
        if (!fs.mkdirSync(munstr)) {
            console.log("目录：" + munstr + "创建成功");
        } else {
            console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(beanTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/bean/${fileName}.java`), template);
}

function genMapper(data) {
    let munstr = path.join(__dirname, `${data.project_base}/xml/`);
    if (!fs.existsSync(munstr)) {
        if (!fs.mkdirSync(munstr)) {
            console.log("目录：" + munstr + "创建成功");
        } else {
            console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(mapperTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/xml/${fileName}Mapper.xml`), template);
}

function genMapperInterface(data) {
    let munstr = path.join(__dirname, `${data.project_base}/mapper/`);
    if (!fs.existsSync(munstr)) {
        if (!fs.mkdirSync(munstr)) {
            console.log("目录：" + munstr + "创建成功");
        } else {
            console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(mapperInterfaceTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/mapper/${fileName}Mapper.java`), template);
}

function genService(data) {
    let munstr = path.join(__dirname, `${data.project_base}/service/`);
    if (!fs.existsSync(munstr)) {
        if (!fs.mkdirSync(munstr)) {
            console.log("目录：" + munstr + "创建成功");
        } else {
            console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(serviceTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/service/${fileName}Service.java`), template);
}

function genServiceImpl(data) {
    let munstr = path.join(__dirname, `${data.project_base}/service/impl`);
    if (!fs.existsSync(munstr)) {
        if (!fs.mkdirSync(munstr)) {
            console.log("目录：" + munstr + "创建成功");
        } else {
            console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(serviceImplTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/service/impl/${fileName}ServiceImpl.java`), template);
}

function genController(data) {
    let munstr = path.join(__dirname, `${data.project_base}/controller/`);
    if (!fs.existsSync(munstr)) {
        if (!fs.mkdirSync(munstr)) {
            console.log("目录：" + munstr + "创建成功");
        } else {
            console.log("目录：" + munstr + "创建失败");
        }
    }
    let fileName = camelCase(data.tableInfo.tableName);
    let template = Handlebars.compile(controllerTemplate)(data);
    fs.writeFileSync(path.join(__dirname, `${data.project_base}/controller/${fileName}Controller.java`), template);
}