import express from "express";
import cors from "cors";
import { json } from "body-parser";
import userRoutes from "./routes/user";
import accountRoutes from "./routes/account";
import transferRoutes from "./routes/transfer";

const app = express();

app.use(cors());
app.use(json());

app.use("/api/users", userRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/transfers", transferRoutes);

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});