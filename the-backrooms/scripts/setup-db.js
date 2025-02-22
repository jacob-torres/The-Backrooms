// Script for setting up MongoDB database
require('dotenv').config();  // Configure environment variables
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

async function setupDatabase() {
    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI environment variable is not set.");
    }

    console.log(`Database URI: ${MONGODB_URI}`);

    // Connect to the_backrooms database
    try {
        await mongoose.connect(MONGODB_URI);
        const db = mongoose.connection.db;

        console.log("Creating Level schema for database ...");

        const   levelSchema = new mongoose.Schema(
            {
                id: Number,
                name: String,
                description: String,
                regions: [
                    {
                        id: Number,
                        description: String,
                        exits: [
                            {
                                levelId: Number,
                                regionId: Number,
                                direction: String
                            }
                        ],
                        regionRounds: Number
                    }
                ],
            }
        );

        const Level = mongoose.model('Level', levelSchema);
        const levelCount = await Level.countDocuments();
        if (levelCount === 0) {
            await Level.create({
                id: 0,
                name: "The Lobby",
                Description: "Level 0 description.",
                regions: [
                    {
                        id: 0,
                        description: "Level 0 region 0 description.",
                        exits: [
                            { levelId: 0, regionId: 1, direction: "left" }
                        ],
                        regionRounds: 1
                    }
                ],
            });

            console.log("Inserted Level 0 into the database.");
        }

        console.log(Level.find());
        console.log("Database setup complete.");
    } catch (err) {
        console.error("There was an error setting up the database:", err.message);
    } finally {
        console.log("Disconnecting from the database.");
        mongoose.disconnect();
    }
}

setupDatabase();