# Banco API Tests

## 📌 Objetivo
Este projeto tem como objetivo automatizar testes de API Rest para o repositório [Banco API](https://github.com/juliodelimas/banco-api), validando o comportamento dos endpoints e contribuindo a qualidade das funcionalidades implementadas.

---

## 🛠 Stack Utilizada
- **Linguagem:** JavaScript (Node.js)
- **Framework de testes:** [Mocha](https://mochajs.org/)
- **Biblioteca de asserções:** [Chai](https://www.chaijs.com/)
- **Biblioteca para requisições HTTP:** [Supertest](https://github.com/visionmedia/supertest)
- **Geração de relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- Outras dependências listadas no `package.json` do projeto.

---

## 📂 Estrutura de Diretórios

```bash
banco-api-tests/
├── test/                # Contém os arquivos de teste
├── mochawesome/         # Relatórios HTML gerados pelo Mochawesome
├── package.json         # Configuração do projeto e dependências
├── .env                 # Variáveis de ambiente (não versionado)
└── README.md            # Documentação do projeto
```

---

## ⚙️ Arquivo `.env`

O arquivo `.env` **não está incluído no repositório** e deve ser criado pelo usuário para configurar variáveis de ambiente.

Formato esperado:
```env
BASE_URL=http://localhost:3000
```

> `BASE_URL` deve conter a URL base da API a ser testada.

---

## ▶️ Executando os Testes

1. **Instalar dependências**
```bash
npm install
```

2. **Rodar os testes**
```bash
npm test
```

3. **Gerar relatório com Mochawesome**
```bash
npx mocha test/**/*.js --reporter mochawesome
```

Após a execução, o relatório em HTML será gerado no diretório `mochawesome/`.

---

## 📚 Documentação das Dependências

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [Dotenv](https://github.com/motdotla/dotenv)
