const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const {notFound, errorHandler} = require("./middlewares/errorHandler");

const dotenv = require("dotenv").config();
const PORT = 5000;
// const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/ProductRouter");
const blogRouter = require("./routes/blogRoute");
const cors = require("cors");
const app = express();
dbConnect();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/product", productRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running  at PORT ${PORT}`);
});
