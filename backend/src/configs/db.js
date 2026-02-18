import mongoose from "mongoose";
import dns from "node:dns/promises"; // Import the promises-based DNS module

export const connectDB = async () => {
    try {
        // Explicitly set the DNS server to bypass local resolution issues
        dns.setServers(["1.1.1.1"]);

        // Use 'await' to ensure the connection is established before moving on
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED!!!!");
    } catch (err) {
        console.error("error connecting to DB", err);
        process.exit(1);
    }
}