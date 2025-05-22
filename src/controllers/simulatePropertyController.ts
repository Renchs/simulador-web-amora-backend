import { Request, Response } from 'express';
import { simulatePropertyPurchase } from '../services/simulatePropertyPurchaseService';


export const simulatePropertyPurchaseHandle = (req: Request, res: Response) => {  
  const result = simulatePropertyPurchase(req.body);
  res.status(200).json(result);
}