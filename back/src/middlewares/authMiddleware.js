const {verifyToken} = require('../utils/jwt');
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({error: 'Token manquant'});
    }

    try {
        const decoded = await verifyToken(token);

        const user = await User.findById(decoded.user._id).select('-password');

        if (!user) {
            return res.status(401).json({message: 'Utilisateur non trouvé.'});
        }

        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({message: 'Token invalide ou expiré.'});
    }
};

module.exports = authMiddleware;