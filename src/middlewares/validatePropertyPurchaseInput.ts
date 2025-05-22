import { Request, Response, NextFunction } from "express";
import { PropertyPurchaseInput } from "../types/propertyPurchaseInput";


export function validatePropertyPurchaseInput(req: Request, res: Response, next: NextFunction) {
  const data: PropertyPurchaseInput = req.body;
  const errors: { field: string; message: string }[] = [];

  if (typeof data.anos_contrato !== "number") {
    errors.push({ field: "anos_contrato", message: "O campo 'anos_contrato' deve ser um número." });
  } else if (data.anos_contrato < 1 || data.anos_contrato > 5) {
    errors.push({ field: "anos_contrato", message: "A duração de contrato deve ser entre 1 e 5 anos." });
  }

  if (typeof data.valor_imovel !== "number") {
    errors.push({ field: "valor_imovel", message: "O campo 'valor_imovel' deve ser um número." });
  } else if (data.valor_imovel <= 0 ) {
    errors.push({ field: "valor_imovel", message: "O valor do imóvel não pode ser negativo." });
  }

  if (typeof data.percentual_entrada !== "number") {
    errors.push({ field: "percentual_entrada", message: "O campo 'percentual_entrada' deve ser um número." });
  } else if (data.percentual_entrada < 5 || data.percentual_entrada > 20) {
    errors.push({ field: "percentual_entrada", message: "O valor de entrada deve ser entre 5% e 20%." });
  }

  if (errors.length > 0) {
    res.status(400).json({ errors });
    return;
  }

  next();
}