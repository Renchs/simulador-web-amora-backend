
# # Simulador de Compra de Imóvel aMORA Back-End

Esse projeto se trata de um teste técnico de nivel junior. Você precisa construir uma solução para simulação de compra de imóvel, conforme o modelo aMORA.

#### Acesse o frontend do projeto clicando [aqui](https://github.com/Renchs/simulador-web-amora-frontend)


## Funcionalidades

Simular os valores de uma compra de imóvel.

## Documentação da API

#### Retorna os valores de uma

```http
  POST /simulacao
```


| Body                | Tipo     | Descrição                                              |
| :-------------------| :------- | :----------------------------------------------------  |
| `valor_imovel`      | `number` | O valor do imóvel digitado deve ser acima de 0.        |
| `percentual_entrada`| `number` | O percentual de entrada deve ser entre 5% e 20%.       |
| `anos_contrato`     | `number` | A duração de contrato deve ser entre 1 e 5 anos.       |

##### Exemplo de entrada
```json
{
  "valor_imovel": 400000,
  "percentual_entrada": 5,
  "anos_contrato": 3
}
```

##### Exemplo de retorno
```json
{
  "valor_entrada": "20.000,00",
  "valor_financiado": "380.000,00",
  "total_a_guardar": "60.000,00",
  "parcela_mensal": "1.666,67"
}
```

## Stack utilizada

**Back-end:** Node, Express, Typescript

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Renchs/simulador-web-amora-backend.git
```

Entre no diretório do projeto

```
  cd .\simulador-web-amora-backend\
```

Instale as dependências

```bash
  npm install
```

Crie um arquivo .env informando a porta, ou por padrão ira rodar na porta 3000

Inicie o servidor

```bash
  npm run dev
```

## FAQ

#### Porque não foi utilizado nenhum banco de dados?

Optei por não utilizar um banco de dados nesta aplicação porque se trata de uma API simples, com uma rota e lógica de simulação, sem necessidade de persistência dos dados. Caso o projeto fosse de uma escala maior, para lidar com mais rotas, entidades e armazenamento permanente, escolheria o Prisma para fazer a integração com um banco de dados relacional.


#### O projeto não está muito simples?

Sim, o projeto foi intencionalmente mantido simples, com foco em funcionalidade e entrega rápida, evitando complexidade desnecessária. Em um cenário mais robusto, algumas escolhas teriam sido diferentes, como a utilização do Zod para validação de dados, organização das rotas em pastas dedicadas e a estruturação dos controllers usando classes. A ideia foi demonstrar uma solução funcional e objetiva.
