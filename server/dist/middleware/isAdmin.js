"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = void 0;
const isAdmin = ({ context }, next) => {
    console.log(context.req.session);
    if (context.req.session.isAdmin === "false") {
        throw new Error("not an admin");
    }
    return next();
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=isAdmin.js.map