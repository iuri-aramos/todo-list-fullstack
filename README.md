### Visão Geral do Projeto
Vamos criar um **sistema de gerenciamento de tarefas (To-Do List)** com autenticação de usuários. Ele terá:
- **Frontend**: Vue.js 3 com Vite (build tool) e Vitest (testes).
- **Backend**: Node.js com Express, usando JWT para autenticação segura.
- **Banco de Dados**: MySQL para persistência, com opção de banco em memória (SQLite) para testes.
- **Testes**: Testes unitários, de regressão e de performance no frontend e backend.
- **Infraestrutura**: Docker para containerização, Kubernetes para orquestração, e Terraform para infraestrutura como código.
- **Observabilidade**: Ferramentas gratuitas como Prometheus e Grafana para monitoramento.

O sistema permitirá que usuários:
- Façam login/registro com autenticação via JWT.
- Criem, editem, excluam e visualizem tarefas.
- O frontend consumirá APIs do backend de forma segura (HTTPS, tokens).
- O backend salvará os dados no MySQL.
- Testes garantirão a robustez do sistema.
- Infraestrutura será gerenciada com containers e IaC.
- Observabilidade monitorará desempenho e erros.

---

### Tecnologias e Justificativas
1. **Frontend (Vue.js 3 + Vite + Vitest)**:
   - **Vue.js 3**: Framework reativo, leve e moderno, ideal para SPAs. Usa Composition API para maior flexibilidade.
   - **Vite**: Build tool rápida, com hot module replacement (HMR) para desenvolvimento ágil.
   - **Vitest**: Framework de testes integrado com Vite, suporta testes unitários e é otimizado para Vue.
   - **Estilização**: Tailwind CSS para componentes responsivos e estilizados de forma eficiente.

2. **Backend (Node.js + Express)**:
   - **Node.js**: Ambiente de execução leve e escalável para APIs REST.
   - **Express**: Framework minimalista para criar APIs rapidamente.
   - **JWT**: Tokens para autenticação segura, com validação de sessões.
   - **ORM**: Prisma para interação segura e tipada com o banco de dados.

3. **Banco de Dados**:
   - **MySQL**: Banco relacional robusto e amplamente usado.
   - **SQLite**: Alternativa em memória para testes locais e desenvolvimento inicial.

4. **Testes**:
   - **Frontend**: Vitest para testes unitários e de regressão; k6 para testes de performance.
   - **Backend**: Jest para testes unitários e de regressão; k6 para performance.
   - **Regressão**: Testes para garantir que novas funcionalidades não quebrem o existente.
   - **Performance**: Testes de carga para APIs e renderização do frontend.

5. **Infraestrutura**:
   - **Docker**: Containerização para padronizar ambientes.
   - **Kubernetes**: Orquestração de containers para escalabilidade.
   - **Terraform**: Infraestrutura como código para provisionar recursos na nuvem (ex.: AWS, GCP).

6. **Observabilidade**:
   - **Prometheus**: Coleta de métricas de performance.
   - **Grafana**: Visualização de métricas e dashboards.
   - **Loki**: Agregação de logs para debugging.

---

### Plano de Estudos e Cronograma
O plano será dividido em **30 dias**, com objetivos diários claros para aprender e configurar as tecnologias, implementar o sistema e explorar infraestrutura/observabilidade. Cada dia terá:
- **Tarefa de Estudo**: Aprender conceitos específicos.
- **Tarefa de Implementação**: Configurar ou desenvolver partes do sistema.
- **Recursos**: Links para documentação e tutoriais.

O projeto será implementado em etapas:
1. Configuração do ambiente (Dias 1-3).
2. Backend com autenticação e APIs (Dias 4-10).
3. Frontend com Vue.js (Dias 11-17).
4. Testes (Dias 18-22).
5. Infraestrutura com Docker, Kubernetes e Terraform (Dias 23-27).
6. Observabilidade com Prometheus e Grafana (Dias 28-30).

---


# To-Do List Full Stack Project

## Overview
This project is a full-stack To-Do List application built to learn modern web development technologies. It includes a Vue.js 3 frontend, a Node.js/Express backend, MySQL database, comprehensive testing, containerized infrastructure with Docker and Kubernetes, Terraform for IaC, and observability with Prometheus and Grafana.

## Tech Stack
- **Frontend**: Vue.js 3 (Composition API), Vite, Vitest, Tailwind CSS
- **Backend**: Node.js, Express, JWT for authentication, Prisma ORM
- **Database**: MySQL (production), SQLite (testing)
- **Testing**: Vitest (frontend), Jest (backend), k6 (performance)
- **Infrastructure**: Docker, Kubernetes, Terraform
- **Observability**: Prometheus, Grafana, Loki

## Project Features
- User authentication (register, login, JWT-based).
- CRUD operations for tasks (create, read, update, delete).
- Secure API communication with HTTPS and JWT.
- Unit, regression, and performance tests.
- Containerized deployment with Kubernetes.
- Infrastructure as Code with Terraform.
- Monitoring with Prometheus and Grafana.

## 30-Day Study and Implementation Plan

### Week 1: Setup and Backend Foundations
**Day 1: Environment Setup**
- **Study**: Learn Node.js basics, Vite setup, and MySQL installation.
- **Task**: Install Node.js, MySQL, and Vite. Create project folders (`frontend`, `backend`).
- **Resources**:
  - Node.js: https://nodejs.org/en/docs
  - Vite: https://vitejs.dev/guide/
  - MySQL: https://dev.mysql.com/doc/
- **Implementation**:
  - Initialize Node.js project: `npm init -y`
  - Initialize Vite project: `npm create vite@latest frontend -- --template vue`

**Day 2: Backend Setup (Express + Prisma)**
- **Study**: Express.js basics, Prisma ORM setup.
- **Task**: Set up Express server and Prisma with MySQL/SQLite.
- **Resources**:
  - Express: https://expressjs.com/en/starter/installing.html
  - Prisma: https://www.prisma.io/docs/getting-started
- **Implementation**:
  - Install dependencies: `npm install express prisma @prisma/client`
  - Configure Prisma schema for User and Task models.

**Day 3: Database Schema and Initial APIs**
- **Study**: Database modeling, REST API concepts.
- **Task**: Create database schema for users and tasks. Implement basic GET /tasks endpoint.
- **Resources**:
  - REST APIs: https://restfulapi.net/
  - Prisma Schema: https://www.prisma.io/docs/concepts/components/prisma-schema
- **Implementation**:
  - Define Prisma schema.
  - Create Express route for retrieving tasks.

**Day 4-6: Authentication with JWT**
- **Study**: JWT, bcrypt for password hashing, secure API practices.
- **Task**: Implement register and login endpoints with JWT.
- **Resources**:
  - JWT: https://jwt.io/introduction
  - bcrypt: https://www.npmjs.com/package/bcrypt
- **Implementation**:
  - Install `jsonwebtoken` and `bcrypt`.
  - Create endpoints: `/register`, `/login`.
  - Protect routes with JWT middleware.

**Day 7-10: Complete Backend APIs**
- **Study**: CRUD operations, error handling, input validation.
- **Task**: Implement create, update, delete task endpoints. Add input validation.
- **Resources**:
  - Express Validator: https://express-validator.github.io/docs/
- **Implementation**:
  - Create endpoints: `/tasks` (POST, PUT, DELETE).
  - Add middleware for validation and error handling.

### Week 2: Frontend Development
**Day 11: Vue.js Setup and Components**
- **Study**: Vue.js Composition API, Vue Router.
- **Task**: Set up Vue.js with Vite, create basic components (Header, TaskList).
- **Resources**:
  - Vue.js: https://vuejs.org/guide/introduction.html
  - Vue Router: https://router.vuejs.org/
- **Implementation**:
  - Install Vue Router: `npm install vue-router@4`
  - Create components in `src/components`.

**Day 12-13: Styling with Tailwind CSS**
- **Study**: Tailwind CSS basics, responsive design.
- **Task**: Install and configure Tailwind CSS. Style components.
- **Resources**:
  - Tailwind CSS: https://tailwindcss.com/docs/installation
- **Implementation**:
  - Install Tailwind: `npm install -D tailwindcss postcss autoprefixer`
  - Configure `tailwind.config.js` and style components.

**Day 14-15: Frontend API Integration**
- **Study**: Axios for HTTP requests, Vue.js reactivity.
- **Task**: Connect frontend to backend APIs for task CRUD.
- **Resources**:
  - Axios: https://axios-http.com/docs/intro
- **Implementation**:
  - Install Axios: `npm install axios`
  - Create services to call backend APIs.

**Day 16-17: Authentication in Frontend**
- **Study**: Vue.js state management, JWT handling.
- **Task**: Implement login/register forms, store JWT in localStorage.
- **Resources**:
  - Vue.js State: https://vuejs.org/guide/scaling-up/state-management.html
- **Implementation**:
  - Create login/register components.
  - Handle JWT in API requests.

### Week 3: Testing
**Day 18: Frontend Unit Tests with Vitest**
- **Study**: Vitest setup, unit testing Vue components.
- **Task**: Write unit tests for TaskList component.
- **Resources**:
  - Vitest: https://vitest.dev/guide/
- **Implementation**:
  - Install Vitest: `npm install -D vitest @vue/test-utils`
  - Write tests in `tests/` folder.

**Day 19: Backend Unit Tests with Jest**
- **Study**: Jest setup, testing Express routes.
- **Task**: Write unit tests for task endpoints.
- **Resources**:
  - Jest: https://jestjs.io/docs/getting-started
- **Implementation**:
  - Install Jest: `npm install -D jest supertest`
  - Create test files for APIs.

**Day 20: Regression Testing**
- **Study**: Regression testing concepts.
- **Task**: Write regression tests for critical features (login, task CRUD).
- **Resources**:
  - Regression Testing: https://www.guru99.com/regression-testing.html
- **Implementation**:
  - Extend Vitest and Jest suites for regression.

**Day 21-22: Performance Testing with k6**
- **Study**: k6 for performance testing.
- **Task**: Write performance tests for APIs and frontend rendering.
- **Resources**:
  - k6: https://k6.io/docs/
- **Implementation**:
  - Install k6: Follow k6 installation guide.
  - Create scripts for load testing.

### Week 4: Infrastructure and Observability
**Day 23-24: Docker Setup**
- **Study**: Docker basics, Dockerfile creation.
- **Task**: Containerize frontend and backend.
- **Resources**:
  - Docker: https://docs.docker.com/get-started/
- **Implementation**:
  - Create `Dockerfile` for frontend and backend.
  - Use `docker-compose` for local setup.

**Day 25-26: Kubernetes**
- **Study**: Kubernetes pods, services, deployments.
- **Task**: Deploy app to Minikube (local Kubernetes).
- **Resources**:
  - Kubernetes: https://kubernetes.io/docs/home/
  - Minikube: https://minikube.sigs.k8s.io/docs/
- **Implementation**:
  - Create Kubernetes manifests (pods, services).
  - Deploy to Minikube.

**Day 27: Terraform**
- **Study**: Terraform basics, provisioning cloud resources.
- **Task**: Write Terraform scripts to deploy to a cloud provider (e.g., AWS).
- **Resources**:
  - Terraform: https://www.terraform.io/docs
- **Implementation**:
  - Install Terraform.
  - Create `.tf` files for infrastructure.

**Day 28-30: Observability with Prometheus and Grafana**
- **Study**: Prometheus metrics, Grafana dashboards, Loki for logs.
- **Task**: Set up Prometheus for metrics, Grafana for visualization, Loki for logs.
- **Resources**:
  - Prometheus: https://prometheus.io/docs/
  - Grafana: https://grafana.com/docs/
  - Loki: https://grafana.com/docs/loki/latest/
- **Implementation**:
  - Configure Prometheus in backend.
  - Set up Grafana dashboards.
  - Integrate Loki for log aggregation.

## Setup Instructions
### Backend
```bash
mkdir backend && cd backend
npm init -y
npm install express prisma @prisma/client jsonwebtoken bcrypt express-validator
npx prisma init
```
- Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  tasks     Task[]
}

model Task {
  id        Int      @id @default(autoincrement())
  title     String
  completed Boolean  @default(false)
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
}
```
- Set up `.env`:
```
DATABASE_URL="mysql://user:password@localhost:3306/todolist"
JWT_SECRET="your_jwt_secret"
```

### Frontend
```bash
npm create vite@latest frontend -- --template vue
cd frontend
npm install vue-router@4 axios tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Configure `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Running the Project
- **Backend**: `cd backend && npm start`
- **Frontend**: `cd frontend && npm run dev`
- **Database**: Ensure MySQL is running or use SQLite for testing.
- **Tests**: `npm test` in respective folders.
- **Docker**: `docker-compose up`
- **Kubernetes**: `kubectl apply -f k8s/`
- **Terraform**: `terraform apply`

## Next Steps
Follow the daily plan to implement each component. Refer to resources for deeper learning. Ask for specific code snippets or clarifications as needed!



---

### Instruções para Implementação
- **Código**: Você implementará o código com base nas instruções no README. Por exemplo, no **Dia 1**, você criará os projetos com `npm init` e `npm create vite@latest`. No **Dia 2**, configurará o Prisma e o Express.
- **Dúvidas**: Pergunte sobre trechos específicos (ex.: "Como implemento o middleware JWT?") que eu forneço o código detalhado.
- **Estilização**: Para componentes Vue, usarei Tailwind CSS. Posso fornecer exemplos de componentes estilizados quando você chegar na fase do frontend.
- **Testes**: Fornecerei exemplos de testes unitários, de regressão e de performance quando você estiver nos dias 18-22.
- **Infraestrutura**: Fornecerei `Dockerfile`, manifests Kubernetes e scripts Terraform nos dias correspondentes.

### Como Prosseguir
1. Comece pelo **Dia 1** do plano no README.
2. Siga as instruções de estudo e implementação.
3. Quando precisar de ajuda com um trecho de código ou configuração, me avise e eu forneço o código dentro de `<xaiArtifact>` com explicações.
4. Se quiser ajustar o plano (ex.: mais dias para testes), é só pedir!

Está pronto para começar? Qualquer dúvida inicial ou quer que eu detalhe alguma parte do Dia 1? 🚀
