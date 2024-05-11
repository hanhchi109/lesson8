import mongoose from 'mongoose';
import Collections from '../database/collection.js' 

const additionalInfoSchema = new mongoose.Schema({
    profile_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
    hobbies: [{ type: String }],
    personal_goals: { type: String }
});

const AdditionalInfoModel = mongoose.model(Collections.ADDITIONAL_INFO, additionalInfoSchema);
export default AdditionalInfoModel;
