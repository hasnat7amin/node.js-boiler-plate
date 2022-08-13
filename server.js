const app= require("./app")
const connectDB = require("./database")
require('dotenv').config()

const port = process.env.PORT || 5000;

connectDB(); 

app.listen(port);
console.log(`listening at port http://localhost:${port}`);
