const mongoose = require('mongoose');

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/uniconnectdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for user profiles
const userSchema = new mongoose.Schema({
    name: String,
    skills: [String],
    points: Number,
    // Add other fields as needed
});

// Create a model for user profiles based on the schema
const UserProfile = mongoose.model('UserProfile', userSchema);

module.exports = {
    // Function to search for profiles by skill
    searchProfilesBySkill: async (skill) => {
        try {
            // Use Mongoose to query profiles with the specified skill
            const matchingProfiles = await UserProfile.find({ skills: skill });
            return matchingProfiles;
        } catch (error) {
            console.error('Error searching profiles:', error);
            return [];
        }
    }
};
