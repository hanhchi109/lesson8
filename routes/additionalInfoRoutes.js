import express from 'express';
const additionalInfoRoutes = express.Router();
import AdditionalInfoController from '../controllers/AdditionalInfoController.js';
import authenticate from '../middlewares/authMiddleware.js';

// Middleware xác thực token và lấy profile_id từ token
additionalInfoRoutes.use(authenticate);

// Tạo mới thông tin bổ sung
additionalInfoRoutes.post('/', AdditionalInfoController.createAdditionalInfo);

// Lấy thông tin bổ sung của người dùng
additionalInfoRoutes.get('/', AdditionalInfoController.getAdditionalInfo);

// Cập nhật thông tin bổ sung của người dùng
additionalInfoRoutes.put('/:id', AdditionalInfoController.updateAdditionalInfo);

export default additionalInfoRoutes;