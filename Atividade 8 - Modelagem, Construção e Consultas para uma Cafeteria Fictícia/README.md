!\[SQL](https://img.shields.io/badge/SQL-MySQL%2FPostgreSQL-blue)

# ☕ Sistema de Controle de Vendas - Cafeteria BomGosto



Este projeto implementa o \*\*modelo de banco de dados\*\* para uma cafeteria fictícia chamada \*\*BomGosto\*\*, que deseja registrar suas vendas de café por meio de comandas digitais.  

Faz parte da \*\*Atividade 08 - Modelando, Construindo e Pesquisando\*\* do curso \*\*Desenvolvedor Fullstack Jr (Codifica Edu)\*\*.



---



\## 🧱 Estrutura do Banco de Dados



O sistema foi dividido em três entidades principais:



| Tabela | Função |

|--------|---------|

| \*\*menu\_cafe\*\* | Catálogo de cafés com nome, detalhes e valor unitário |

| \*\*pedido\*\* | Registro principal de cada comanda (data, mesa, cliente) |

| \*\*item\_pedido\*\* | Relacionamento entre pedido e cafés vendidos, com quantidades |



O relacionamento é de \*\*1:N\*\* entre `pedido` → `item\_pedido`, e cada `item\_pedido` referencia um café no `menu\_cafe`.



---



\## 💾 Scripts Incluídos



1\. \*\*Criação das tabelas (DDL)\*\*  

&nbsp;  Define as estruturas, chaves primárias e estrangeiras, e restrições de integridade.



2\. \*\*Inserção de dados de exemplo (DML)\*\*  

&nbsp;  Adiciona cafés e pedidos fictícios para simulação das consultas.



3\. \*\*Consultas SQL principais (SELECT):\*\*

&nbsp;  - \*\*Listagem do menu\*\* — mostra os cafés ordenados alfabeticamente.  

&nbsp;  - \*\*Detalhamento de pedidos e itens\*\* — une as três tabelas e mostra preços e totais.  

&nbsp;  - \*\*Total por comanda\*\* — soma o valor total de cada pedido.  

&nbsp;  - \*\*Comandas com mais de um tipo\*\* — filtra apenas quem comprou mais de um tipo de café.  

&nbsp;  - \*\*Faturamento diário\*\* — total de vendas agrupado por data.



---



\## 🧰 Como Executar



1\. Crie um novo banco de dados (MySQL ou PostgreSQL):

&nbsp;  ```sql

&nbsp;  CREATE DATABASE cafeteria\_sql;```


2\. Abra o arquivo cafeteria.sql e execute todo o conteúdo.



Rode as consultas (SELECT) para visualizar os resultados.



