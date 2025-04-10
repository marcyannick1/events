const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const connectDB = require('./config/database');
const dotenv = require('dotenv')
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');

dotenv.config();

connectDB()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
