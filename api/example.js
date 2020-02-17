/**
* @apiDefine User 用户组
* 
*/
/**
 *
 * @apiDefine CreateUserError
 *
 * @apiError CreateUserError 找不到相关数据
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": {
 *           "code": 404,
 *           "msg": "",
 *           "path" ""
 *       }
 *     }
 *
 */


/**
 * @api {get} /user/:id Read data of a User
 * @apiVersion 0.3.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission admin
 *
 * @apiDescription Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.
 *
 * @apiParam {String} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {String}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function getUser() { return; }

/**
 * @api {post} /user Create a new User
 * @apiVersion 0.3.0
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiSuccess {String} id         The new Users-ID.
 *
 * @apiUse CreateUserError
 */
function postUser() { return; }

/**
 * @api {put} /user/:id Change a new User
 * @apiVersion 0.3.0
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription This function has same errors like POST /user, but errors not defined again, they were included with "apiUse"
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiUse CreateUserError
 */
function putUser() { return; }

/**
* @api {get} /user/:id 获取一个用户的信息
* @apiVersion 0.1.0
* @apiName selectByPrimaryKeyForGoodsGallery
* @apiGroup User
* @apiPermission admin
* @apiDescription 通过用户ID来获取用户信息
* Multilines are possible.
* @apiHeader {String} AccessToken 鉴权标识
* @apiHeaderExample {json} 请求示例:
* { "AccessToken": "3b96402f-70c5-11e5-a4fb-b026b977eb28" }
* @apiParam: id
* @return: com.xie.server.bean.BaseResponse<com.xie.server.bean.GoodsGallery>
* @apiSuccess {String} firstname  姓
* @apiSuccess {String}   lastname   名
* @apiSuccessExample Success-Response:
* HTTP/1.1 200 OK
* {
* "firstname": "John",
* "lastname": "Doe"
* }
* @apiError UserNotFound   The error description text in version 0.1.0.
* @apiErrorExample {json} 错误应答:
* HTTP/1.1 404 Not Found
* {
* "error": "UserNotFound"
* }
* @author: xie
* @Since: 2019/9/4
* @apiVersion 1.2.1
* @Copyright (c) 2017, EBSCN All Rights Reserved.
*/
function putUser() { return; }