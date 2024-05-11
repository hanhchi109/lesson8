import ProfileModel from '../models/Profile.js';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key_uwu';

const ProfileController = {
    authenticate: async (req, res, next) => {
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'No token provided' });
            }
            jwt.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Invalid token' });
                }
                req.username = decoded;
                next();
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getProfile: async (req, res) => {
        try {
            const profile = await ProfileModel.findOne({ user_id: req.username });
            if (!profile) {
                return res.status(404).json({ message: 'Profile not found' });
            }
            res.json(profile);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    updateProfile: async (req, res) => {
        try {
            const profile = await ProfileModel.findOne({ user_id: req.username });
            if (!profile) {
                return res.status(404).json({ message: 'Profile not found' });
            }
            // Cập nhật thông tin hồ sơ cá nhân
            // ...
            res.json({ message: 'Profile updated successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}

export default ProfileController;