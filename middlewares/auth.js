/** gaurentees user is logged in
 * @param {import("express").Request<ParamsDictionary, any, any, qs.ParsedQs, Record<string, any>>} req 
 * @param {import("express").Response<any, Record<string, any>, number>} res 
 * @param {import("express").NextFunction} next 
 */
async function isAuthenticated(req, res, next) {
    // TODO: check if user is logged in.

    next();
}

module.exports = {
    isAuthenticated
}
