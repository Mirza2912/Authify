import express from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { error } from "./Middlewares/error.middleware.js";
import fileUpload from "express-fileupload";

// cors options means who can access our backend from frontend
const corsOptions = {
  origin: process.env.ORIGIN,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.static("public"));
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

//Routes
import userRouter from "./Routes/user.routes.js";

//For Users
app.use("/api/v1/users", userRouter);

//Using error() middleware for throwing ApiError
app.use(error);
