const checkOrigin = (req, res, next) => {
    const token = req.headers.authorization;
    const origin = req.headers.origin;
    console.log("Token: ", token, "\nOrigin: ", origin);
    next();
}

module.exports = { checkOrigin }