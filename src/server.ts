import express from "express";
import dotenv from "dotenv";
import { validatePropertyPurchaseInput } from "./middlewares/validatePropertyPurchaseInput";
import { simulatePropertyPurchaseHandle } from "./controllers/simulatePropertyController";




dotenv.config();
const app = express();

app.use(express.json());

app.post("/simulacao", validatePropertyPurchaseInput, simulatePropertyPurchaseHandle)

app.listen(process.env.PORT || 3000, () => {
  console.log("Server rodando");
})
