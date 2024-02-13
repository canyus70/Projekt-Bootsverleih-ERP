import jwt from "jsonwebtoken";

export function doJwtAuth(req, res, next) {
    const _invalidAuthResponse = (message) => res.status(401).json({ success: false, message: message || "Invalid authentication"});
    const authorization = req.headers.authorization;
    if (!authorization) return _invalidAuthResponse();
    const [authType, tokenString] = authorization.split(" ");
    if (authType !== "Bearer" || !tokenString) return _invalidAuthResponse();

    try {
        const tokenPayload = jwt.verify(tokenString, process.env.JWT_SECRET);
        req.verifiedUser = tokenPayload;
        next();
    } catch (error) {
        console.log(error);
        return _invalidAuthResponse("Invalid token");
    }
}