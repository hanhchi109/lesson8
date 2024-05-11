import express from 'express';
const userRoutes = express.Router();
import UserController from '../controllers/UserController.js';

// Tạo tài khoản người dùng mới
userRoutes.post('/create', UserController.createUser);

// Đăng nhập
userRoutes.post('/login', UserController.loginUser);

// Đăng xuất
userRoutes.post('/logout', UserController.logoutUser);

export default userRoutes;