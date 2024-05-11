import express from 'express';
const profileRoutes = express.Router();
import ProfileController from '../controllers/ProfileController.js';
import authenticate from '../middlewares/authMiddleware.js';

// Middleware xác thực token và lấy profile_id từ token
profileRoutes.use(authenticate);

// Lấy thông tin profile của người dùng
profileRoutes.get('/', ProfileController.getProfile);

// Cập nhật thông tin profile của người dùng
profileRoutes.put('/', ProfileController.updateProfile);

export default profileRoutes;