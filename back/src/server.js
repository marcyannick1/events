const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const eventRoute = require("./routes/eventRoute");
const connectDB = require('./config/database');

const port = process.env.SRV_PORT || 3000

dotenv.config();
const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/events", eventRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
