# 📚 Sistema de Cadastro de Usuários com MongoDB, Node.js e React

Este projeto é um sistema de cadastro de usuários com banco de dados **MongoDB (NoSQL)**. O backend foi construído com **Node.js**, utilizando **Express** e **Prisma**, enquanto o frontend foi desenvolvido com **React** e **Vite**. É possível realizar requisições por aplicativos como **Postman** ou diretamente pelo front-end.

---

## 🖼️ Demonstração

### 📷 Imagem da Interface Web
![Imagem do FRONT](https://github.com/user-attachments/assets/54215933-e0f4-42d1-8e48-f1f71b08fbf7)

---

### 🎞️ GIF de Funcionamento

![Funcionamento](https://github.com/user-attachments/assets/afac6876-9533-4f3e-b7e9-248363626dc1)


---

## 🚀 Tecnologias Utilizadas

- **JavaScript**
- **Node.js**
- **React.js**
- **MongoDB**
- **Vite** (para build e execução do React)
- **Express.js** (framework para o Node.js)
- **Prisma** (ORM para o banco de dados)
- **CSS**

---

## ⚙️ Como Usar

### 1. 📁 Configurar o Banco de Dados

- Crie uma conta no MongoDB Atlas ou instale localmente.
- Crie um banco de dados e copie a URL de conexão.

---

### 2. 📝 Criar o arquivo `.env`

Dentro da pasta `InterfaceReact`, crie um arquivo chamado `.env` e adicione:

```env
DATABASE=mongodb+srv://<seu-usuario>:<sua-senha>@<seu-cluster>.mongodb.net/<seu-db>?retryWrites=true&w=majority
```

---

### 3. 📦 Instalar dependências

No terminal, instale as dependências:

```bash
npm install
```

---

### 4. 🚀 Rodar o Projeto

Iniciar o servidor backend:

```bash
nodemon server.js
```

---

## 📌 Próximos Passos

- 🔧 Refatorar e limpar o código  
- 📱 Melhorar a responsividade para diferentes tamanhos de tela  
- ✅ Criar testes básicos de requisições  
- 🛡️ Adicionar validações no backend  
- 💬 Implementar mensagens de erro e sucesso no front-end  

## 🧠 Aprendizados

Esse projeto me ajudou a praticar a integração entre frontend e backend, usando um banco NoSQL real (MongoDB) e ferramentas modernas como React com Vite e Express com Prisma.  
Também exercitei a criação de APIs REST, manipulação de dados via Postman e construção de interfaces responsivas.




