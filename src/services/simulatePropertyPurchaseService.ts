import { PropertyPurchaseInput } from "../types/propertyPurchaseInput";
import { formatCurrencyBR } from "../utils/formatCurrencyBR";

export function simulatePropertyPurchase(data: PropertyPurchaseInput) {
  const { anos_contrato, percentual_entrada, valor_imovel } = data;

  const valor_entrada = valor_imovel * (percentual_entrada / 100);
  const valor_financiado = valor_imovel - valor_entrada;
  const total_a_guardar = (valor_imovel * 0.15);
  const parcela_mensal = ((valor_imovel * 0.15) / (anos_contrato * 12));

  return {
    valor_entrada: formatCurrencyBR(valor_entrada),
    valor_financiado: formatCurrencyBR(valor_financiado),
    total_a_guardar: formatCurrencyBR(total_a_guardar),
    parcela_mensal: formatCurrencyBR(parcela_mensal)
  }

}