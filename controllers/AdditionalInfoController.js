import AdditionalInfoModel from '../models/AdditionalInfo.js';

const AdditionalInfoController = {
    createAdditionalInfo: async (req, res) => {
        try {
            // Thêm mã để kiểm tra quyền truy cập và lấy profile_id từ token
            const profile_id = req.username; // Giả sử profile_id được lấy từ token
            const additionalInfoData = { ...req.body, profile_id };
            const additionalInfo = await AdditionalInfoModel.create(additionalInfoData);
            res.status(201).json(additionalInfo);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getAdditionalInfo: async (req, res) => {
        try {
            const additionalInfo = await AdditionalInfoModel.findOne({ profile_id: req.username });
            if (!additionalInfo) {
                return res.status(404).json({ message: 'Additional info not found' });
            }
            res.json(additionalInfo);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    updateAdditionalInfo: async (req, res) => {
        try {
            const profile_id = req.username;
            const additionalInfo = await AdditionalInfoModel.findOneAndUpdate(
                { _id: req.params.id, profile_id },
                { $set: req.body },
                { new: true }
            );
            if (!additionalInfo) {
                return res.status(404).json({ message: 'Additional info not found' });
            }
            res.json(additionalInfo);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}

export default AdditionalInfoController;