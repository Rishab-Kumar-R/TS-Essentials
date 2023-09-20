import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import todoRoutes from "./routes/todos";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(json());

app.use("/todos", todoRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
