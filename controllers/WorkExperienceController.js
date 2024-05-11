import WorkModel from '../models/WorkExperience.js';

const WorkExperienceController = {
    createWorkExperience: async (req, res) => {
        try {
            // Thêm mã để kiểm tra quyền truy cập và lấy profile_id từ token
            const profile_id = req.username; // Giả sử profile_id được lấy từ token
            const workExperienceData = { ...req.body, profile_id };
            const workExperience = await WorkModel.create(workExperienceData);
            res.status(201).json(workExperience);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    getWorkExperience: async (req, res) => {
        try {
            const workExperiences = await WorkModel.find({ profile_id: req.username });
            res.json(workExperiences);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    updateWorkExperience: async (req, res) => {
        try {
            const profile_id = req.username;
            const workExperience = await WorkModel.findOneAndUpdate(
                { _id: req.params.id, profile_id },
                { $set: req.body },
                { new: true }
            );
            if (!workExperience) {
                return res.status(404).json({ message: 'Work experience not found' });
            }
            res.json(workExperience);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}

export default WorkExperienceController;