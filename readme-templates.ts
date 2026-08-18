
export interface ReadmeTemplate {
  id: string;
  name: string;
  description: string;
  category:
    | "Open Source"
    | "SaaS"
    | "API"
    | "Frontend"
    | "Backend"
    | "Minimal"
    | "CLI Tool"
    | "Mobile App"
    | "Browser Extension"
    | "Machine Learning"
    | "Monorepo"
    | "Design System";
  content: string;
}

export const readmeTemplates: ReadmeTemplate[] = [
  // ─────────────────────────────────────────────
  // 1. STANDARD OPEN SOURCE
  // ─────────────────────────────────────────────
  {
    id: "standard-open-source",
    name: "Standard Open Source",
    description:
      "A comprehensive template for standard open-source projects with all necessary sections.",
    category: "Open Source",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/150" alt="Project Logo" width="150" />

  # 🌟 Awesome Project

  <p>A comprehensive, robust, and highly scalable solution for everyday problems.</p>

  <p>
    <a href="https://github.com/username/project/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/username/project.svg?style=flat-square" alt="Contributors" />
    </a>
    <a href="https://github.com/username/project/stargazers">
      <img src="https://img.shields.io/github/stars/username/project.svg?style=flat-square" alt="Stars" />
    </a>
    <a href="https://github.com/username/project/issues">
      <img src="https://img.shields.io/github/issues/username/project.svg?style=flat-square" alt="Issues" />
    </a>
    <a href="https://github.com/username/project/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/username/project.svg?style=flat-square" alt="License" />
    </a>
    <a href="https://github.com/username/project/actions">
      <img src="https://img.shields.io/github/actions/workflow/status/username/project/ci.yml?style=flat-square" alt="CI" />
    </a>
  </p>

  <p>
    <a href="#-demo">View Demo</a> ·
    <a href="https://github.com/username/project/issues/new?labels=bug">Report Bug</a> ·
    <a href="https://github.com/username/project/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>



## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Demo](#-demo)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Configuration](#-configuration)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Changelog](#-changelog)
- [Security](#-security)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)
- [Contact](#-contact)


## 🚀 About the Project

> **One-sentence tagline** — what the project is in plain English.

Write 2–3 sentences explaining:
- **What** this project does
- **Why** you built it (the problem it solves)
- **Who** it is for (the target audience)

Example:
> Awesome Project is an open-source task automation tool that eliminates repetitive shell scripting for development teams. Built out of frustration with existing solutions that required too much boilerplate, it lets you define workflows in a single YAML file and run them anywhere.


## ⚙️ How It Works

Explain the core mechanism of your project in simple terms. Use a flow diagram if it helps.

\`\`\`
User Input → Parser → Processor → Output
\`\`\`

1. **Step 1 — Input:** Describe what the project receives as input.
2. **Step 2 — Processing:** Explain what happens internally at a high level.
3. **Step 3 — Output:** Describe what the user gets back.

No deep technical details here — save those for the API docs. The goal is for a new visitor to understand the project in under 60 seconds.


## 💼 Real-World Use Cases

Concrete examples of who uses this and why:

- **Use Case 1 — Team / Role:** Describe how a specific team or type of user benefits. E.g., *"DevOps engineers use this to automate environment setup across multiple cloud providers without maintaining separate scripts per provider."*
- **Use Case 2 — Team / Role:** Another scenario. E.g., *"Startups use this to scaffold new microservices in seconds, keeping all services consistent with shared config."*
- **Use Case 3 — Team / Role:** Edge case or power-user scenario.


## ✨ Features

- **Feature 1:** Clear description of what this does and why it matters.
- **Feature 2:** Clear description of what this does and why it matters.
- **Feature 3:** Clear description of what this does and why it matters.
- **Feature 4:** Clear description of what this does and why it matters.


## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, Next.js
- **Backend:** Node.js, Express, GraphQL
- **Database:** PostgreSQL, Redis
- **DevOps:** Docker, GitHub Actions, AWS


## 🎬 Demo

> 🔗 [Live Demo](https://your-demo-link.com)

![Demo GIF](https://via.placeholder.com/800x400?text=Demo+GIF+Here)


## 📂 Project Structure

\`\`\`
project-root/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application routes
│   ├── lib/              # Utility functions
│   └── styles/           # Global styles
├── public/               # Static assets
├── tests/                # Test suites
├── .env.example          # Environment variables template
├── docker-compose.yml    # Docker setup
├── package.json
└── README.md
\`\`\`


## 🏁 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/username/project.git
   cd project
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your values
   \`\`\`

4. Run database migrations and start:
   \`\`\`bash
   npm run migrate
   npm run dev
   \`\`\`


## 💡 Usage

### Basic Usage

\`\`\`bash
# Start the development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
\`\`\`

### Code Example

\`\`\`javascript
import { AwesomeProject } from 'awesome-project';

const app = new AwesomeProject({ option: 'value' });

// Do the main thing
const result = await app.run();
console.log(result);
\`\`\`

### Common Workflows

\`\`\`bash
# Workflow 1 — describe what this accomplishes
npm run workflow:one

# Workflow 2 — describe what this accomplishes
npm run workflow:two
\`\`\`

> 📖 See the [full documentation](https://docs.example.com) for advanced usage.


## ⚙️ Configuration

| Variable     | Description                          | Default         |
| ------------ | ------------------------------------ | --------------- |
| \`PORT\`       | Port to run the server on            | \`3000\`          |
| \`DB_URL\`     | Database connection string           | \`null\`          |
| \`NODE_ENV\`   | Environment mode                     | \`development\`   |
| \`LOG_LEVEL\`  | Logging verbosity                    | \`info\`          |


## 📡 API Documentation

### Get User Profile

\`GET /api/v1/users/:id\`

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \`id\`      | \`string\` | Unique identifier of user |

**Response:**
\`\`\`json
{
  "id": "123",
  "name": "John Doe",
  "email": "john@example.com"
}
\`\`\`

> Full docs: [https://your-api-docs.com](https://your-api-docs.com)


## 🖼️ Screenshots

| Dashboard | Settings |
|-----------|----------|
| ![Dashboard](https://via.placeholder.com/400x250?text=Dashboard) | ![Settings](https://via.placeholder.com/400x250?text=Settings) |


## 🗺️ Roadmap

- [x] Initial release
- [x] Authentication module
- [ ] Dark mode support
- [ ] Mobile app
- [ ] Internationalization (i18n)

See [open issues](https://github.com/username/project/issues) for proposed features and known bugs.


## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for code of conduct and guidelines.


## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a full history of changes.


## 🔒 Security

Found a vulnerability? Email security@example.com — do **not** open a public issue.


## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.


## 💖 Acknowledgements

- [Library Name](https://example.com) — what it contributes
- [Inspiration](https://example.com) — what it contributes


## 📫 Contact

Your Name — [@your_twitter](https://twitter.com/your_twitter) — email@example.com

Project Link: [https://github.com/username/project](https://github.com/username/project)
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 2. MINIMAL
  // ─────────────────────────────────────────────
  {
    id: "minimal",
    name: "Minimalist",
    description: "A clean, minimal README that gets straight to the point.",
    category: "Minimal",
    content: `
# Project Name

> One-line description of what this project does.

## About

2–3 sentences: what it is, why it exists, who should use it.

## How It Works

Brief explanation of the core mechanism. E.g.: *"Reads a config file, transforms the input, and writes the result to stdout."*

## Installation

\`\`\`bash
npm install my-project
\`\`\`

## Usage

\`\`\`javascript
import myProject from 'my-project';

// Basic usage
myProject.init({ option: 'value' });

// With callback
myProject.run((result) => {
  console.log(result);
});
\`\`\`

## Use Cases

- **Scenario 1:** Who uses it and why.
- **Scenario 2:** Another practical scenario.

## Contributing

Pull requests are welcome. For major changes, open an issue first.

## License

[MIT](https://choosealicense.com/licenses/mit/)
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 3. SAAS APPLICATION
  // ─────────────────────────────────────────────
  {
    id: "saas-product",
    name: "SaaS Application",
    description:
      "For SaaS platforms. Covers architecture, multi-tenancy, billing, auth, and deployment.",
    category: "SaaS",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/150" alt="Logo" width="150" />

  # 🚀 SaaS Product Name

  <p>The modern SaaS solution for <em>Target Audience</em> to solve <em>Specific Problem</em>.</p>

  <p>
    <a href="https://your-product.com">Website</a> ·
    <a href="https://docs.your-product.com">Docs</a> ·
    <a href="https://github.com/username/project/issues">Issues</a>
  </p>

  <img src="https://img.shields.io/github/license/username/project.svg?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/status-beta-yellow?style=flat-square" alt="Status" />
</div>

---

## 📑 Table of Contents

- [About the Product](#-about-the-product)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [File Structure](#-file-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Stripe Integration](#-stripe-integration)
- [Authentication](#-authentication)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Support](#-support)
- [License](#-license)

---

## 🧾 About the Product

> **Tagline** — One sentence that describes the product.

Describe what your SaaS does in 2–3 sentences. Answer:
- **What** is the core product?
- **Who** is it built for?
- **What problem** does it eliminate?

Example:
> SaaS Product Name is a multi-tenant project management platform built for remote-first engineering teams. It replaces the chaos of scattered Notion pages and Jira boards with a single workspace that connects tasks, docs, and deploys. Teams ship faster because everything they need is in one place.

---

## ⚙️ How It Works

High-level flow of the product — what happens from sign-up to value delivery:

\`\`\`
Sign Up → Create Organization → Invite Team → Configure Workspace → Start Working
\`\`\`

1. **Onboarding:** User signs up, creates or joins an organization. Roles and permissions are applied automatically.
2. **Core Loop:** Describe the main action users take repeatedly (e.g., create → assign → complete tasks).
3. **Billing:** Stripe tracks usage/seats. Plans gate features. Webhooks sync subscription state in real time.
4. **Notifications:** Events trigger email and in-app notifications to keep the team in sync.

---

## 💼 Real-World Use Cases

- **Remote Engineering Teams:** Replace fragmented tooling with one workspace. Engineers spend less time context-switching and more time shipping.
- **Agencies:** Manage multiple client projects from a single dashboard with per-client data isolation and custom branding.
- **Startups:** Get a production-ready collaboration platform without building internal tooling from scratch.
- **Enterprise IT:** Enforce SSO, audit logs, and RBAC across all teams from a central admin console.

---

## ✨ Key Features

- **Multi-tenant Architecture:** Secure, isolated data per organization.
- **Role-based Access Control (RBAC):** Granular user permissions across resources.
- **Stripe Integration:** Subscription billing, trial periods, usage-based pricing, and invoices.
- **Email Notifications:** Transactional emails via Resend / SendGrid.
- **Audit Logs:** Track all user and system actions with timestamps.
- **Analytics Dashboard:** Real-time metrics and per-seat usage insights.

---

## 🏗️ Architecture

\`\`\`
User → CDN/Edge → Next.js App (Vercel)
                       │
               ┌───────┴────────┐
          tRPC API         Auth (NextAuth)
               │
        ┌──────┴──────┐
     Prisma ORM     Redis Cache
        │
  PostgreSQL (Supabase / PlanetScale)
\`\`\`

---

## 🛠️ Tech Stack

| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Framework   | Next.js 14 (App Router)       |
| Language    | TypeScript                    |
| Styling     | Tailwind CSS + shadcn/ui      |
| ORM         | Prisma                        |
| Database    | PostgreSQL                    |
| Auth        | NextAuth.js                   |
| Payments    | Stripe                        |
| Email       | Resend                        |
| Deployment  | Vercel                        |

---

## 📂 File Structure

\`\`\`
saas-app/
├── src/
│   ├── app/              # Next.js App Router pages & layouts
│   ├── components/       # Shared UI components
│   ├── lib/              # Stripe, Prisma, and mail clients
│   ├── server/           # tRPC routers and procedures
│   └── hooks/            # Custom React hooks
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
├── .env.example
└── package.json
\`\`\`

---

## 🏁 Getting Started

\`\`\`bash
git clone https://github.com/username/saas.git
cd saas
npm install
cp .env.example .env
npm run db:push
npm run db:seed
npm run dev
\`\`\`

---

## 💡 Usage

### Creating an Organization

After signing in, navigate to **Dashboard → New Organization** and follow the setup wizard.

### Inviting Team Members

\`\`\`
Settings → Members → Invite by email
\`\`\`

Invited users receive a magic-link email. Roles can be assigned during or after invite.

### Managing Subscriptions

Billing is handled entirely through Stripe. Admins can upgrade, downgrade, or cancel under **Settings → Billing**.

### API Access

\`\`\`bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.your-product.com/v1/organizations
\`\`\`

---

## 🛠️ Environment Variables

\`\`\`env
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
RESEND_API_KEY=re_...
\`\`\`

---

## 🗄️ Database Setup

\`\`\`bash
npm run db:push       # Push schema changes
npm run db:migrate    # Run migrations
npm run db:seed       # Seed development data
npm run db:studio     # Open Prisma Studio
\`\`\`

---

## 💳 Stripe Integration

1. Create products and prices in your [Stripe Dashboard](https://dashboard.stripe.com).
2. Update price IDs in \`src/lib/stripe/plans.ts\`.
3. Listen to webhooks locally:
   \`\`\`bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   \`\`\`

---

## 🔑 Authentication

Supported providers (configured in \`src/lib/auth.ts\`):
- Google OAuth
- GitHub OAuth
- Email (Magic Link)

---

## 🚢 Deployment

\`\`\`bash
vercel --prod
\`\`\`

Set all environment variables in the Vercel dashboard before deploying.

---

## 🧪 Testing

\`\`\`bash
npm run test            # Unit tests
npm run test:e2e        # End-to-end tests
npm run test:coverage   # Coverage report
\`\`\`

---

## 📞 Support

- 📧 Email: support@example.com
- 💬 Discord: [Join our server](https://discord.gg/example)
- 📖 Docs: [https://docs.your-product.com](https://docs.your-product.com)

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 4. API SERVICE
  // ─────────────────────────────────────────────
  {
    id: "api-service",
    name: "API Service",
    description:
      "For REST/GraphQL APIs. Covers endpoints, auth, rate limiting, error handling, and docs.",
    category: "API",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/120" alt="Logo" width="120" />

  # 🌐 API Service Name

  <p>A fast, scalable, fully-typed REST API for managing <em>Resources</em>.</p>

  <img src="https://img.shields.io/badge/OpenAPI-3.0-green?style=flat-square" alt="OpenAPI" />
  <img src="https://img.shields.io/github/license/username/project.svg?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/coverage-95%25-brightgreen?style=flat-square" alt="Coverage" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [File Tree](#-file-tree)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Authentication](#-authentication)
- [Rate Limiting](#-rate-limiting)
- [API Reference](#-api-reference)
- [Error Handling](#-error-handling)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🧾 About

> **Tagline** — One sentence describing the API.

Describe what this API does, what data or service it exposes, and who should integrate with it.

Example:
> The Items API is a RESTful service that manages product catalog data for e-commerce platforms. It provides fast, cached endpoints for reading inventory and authenticated endpoints for catalog management, designed to handle thousands of requests per second.

---

## ⚙️ How It Works

Describe the request lifecycle at a high level:

\`\`\`
Client Request
    │
    ▼
Rate Limiter → Auth Middleware → Validator → Controller → Service → DB/Cache
    │
    ▼
JSON Response (success or structured error)
\`\`\`

1. **Auth:** Every request is validated against a JWT or API key.
2. **Validation:** Request body and params are checked with Zod schemas before any business logic runs.
3. **Caching:** Read-heavy endpoints are cached in Redis with TTL-based invalidation.
4. **Response:** All responses follow a consistent envelope format.

---

## 💼 Real-World Use Cases

- **Mobile Apps:** A React Native app calls this API to fetch and update user data without embedding business logic client-side.
- **Third-Party Integrations:** Partners use the public API with scoped API keys to read product data into their own systems.
- **Microservice Communication:** Other internal services call this API as a single source of truth for the resource domain.
- **Webhooks & Automation:** Zapier or Make.com users connect to this API to trigger workflows on data changes.

---

## ✨ Features

- Fully typed with TypeScript
- JWT authentication with refresh token rotation
- Role-based authorization middleware
- Rate limiting per API key / IP
- Request validation with Zod
- Swagger / OpenAPI 3.0 docs
- Structured JSON logging with Pino
- Consistent error response format

---

## 🛠️ Tech Stack

| Layer      | Technology       |
| ---------- | ---------------- |
| Runtime    | Node.js + Bun    |
| Framework  | Fastify          |
| Language   | TypeScript       |
| Validation | Zod              |
| ORM        | Prisma           |
| Database   | PostgreSQL       |
| Caching    | Redis            |
| Docs       | Swagger UI       |
| Testing    | Vitest           |

---

## 📂 File Tree

\`\`\`
api/
├── src/
│   ├── controllers/      # Route handlers
│   ├── models/           # DB schemas / entities
│   ├── routes/           # API route definitions
│   ├── middleware/        # Auth, rate-limit, error handlers
│   ├── services/         # Business logic layer
│   ├── validators/       # Zod request schemas
│   └── utils/            # Shared helpers
├── prisma/
├── tests/
├── swagger.yml
├── .env.example
└── server.ts
\`\`\`

---

## 🏁 Getting Started

\`\`\`bash
git clone https://github.com/username/api-project.git
cd api-project
npm install
cp .env.example .env
npm run db:migrate
npm run dev
\`\`\`

---

## 💡 Usage

### Make your first request

\`\`\`bash
# Get all items (public endpoint)
curl https://api.example.com/v1/items

# Create an item (authenticated)
curl -X POST https://api.example.com/v1/items \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "My Item", "description": "A great item"}'
\`\`\`

### SDK / Client Example

\`\`\`typescript
import { ApiClient } from '@yourorg/api-sdk';

const client = new ApiClient({ apiKey: process.env.API_KEY });

const items = await client.items.list({ page: 1, limit: 20 });
const item  = await client.items.create({ name: 'New Item' });
\`\`\`

> 📖 Full interactive docs: [https://api.example.com/docs](https://api.example.com/docs)

---

## 🔑 Authentication

\`\`\`http
Authorization: Bearer <YOUR_TOKEN>
\`\`\`

**Get a token:**

\`\`\`http
POST /api/v1/auth/login
Content-Type: application/json

{ "email": "user@example.com", "password": "your_password" }
\`\`\`

**Response:**
\`\`\`json
{ "accessToken": "eyJ...", "refreshToken": "eyJ...", "expiresIn": 3600 }
\`\`\`

---

## 🚦 Rate Limiting

| Tier       | Limit            |
| ---------- | ---------------- |
| Free       | 100 req / hour   |
| Pro        | 1,000 req / hour |
| Enterprise | Unlimited        |

Response headers on every request:
\`\`\`
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1714000000
\`\`\`

---

## 📚 API Reference

### Items

| Method   | Endpoint             | Description         | Auth |
| -------- | -------------------- | ------------------- | ---- |
| \`GET\`    | \`/api/v1/items\`      | List all items      | No   |
| \`GET\`    | \`/api/v1/items/:id\`  | Get a single item   | No   |
| \`POST\`   | \`/api/v1/items\`      | Create an item      | Yes  |
| \`PUT\`    | \`/api/v1/items/:id\`  | Update an item      | Yes  |
| \`DELETE\` | \`/api/v1/items/:id\`  | Delete an item      | Yes  |

---

## ⚠️ Error Handling

All errors follow a consistent format:

\`\`\`json
{
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested item does not exist.",
    "status": 404
  }
}
\`\`\`

| Code                  | HTTP | Description                 |
| --------------------- | ---- | --------------------------- |
| \`UNAUTHORIZED\`        | 401  | Missing or invalid token    |
| \`FORBIDDEN\`           | 403  | Insufficient permissions    |
| \`RESOURCE_NOT_FOUND\`  | 404  | Resource does not exist     |
| \`VALIDATION_ERROR\`    | 422  | Invalid request body/params |
| \`RATE_LIMIT_EXCEEDED\` | 429  | Too many requests           |
| \`INTERNAL_ERROR\`      | 500  | Unexpected server error     |

---

## 🧪 Testing

\`\`\`bash
npm run test                # Unit tests
npm run test:integration    # Integration tests
npm run test:coverage       # Coverage report
\`\`\`

---

## 🚢 Deployment

\`\`\`bash
npm run build
npm run start

# Docker
docker build -t api-service .
docker run -p 3000:3000 --env-file .env api-service
\`\`\`

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 5. FRONTEND APPLICATION
  // ─────────────────────────────────────────────
  {
    id: "frontend-app",
    name: "Frontend Application",
    description:
      "For React, Vue, Next.js apps. Covers UI, state, accessibility, testing, and deployment.",
    category: "Frontend",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/150" alt="Logo" width="150" />

  # 🎨 Application Name

  <p>A beautiful, accessible, and performant web application built with <em>Framework</em>.</p>

  <img src="https://img.shields.io/github/license/username/project.svg?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/a11y-WCAG%202.1-blue?style=flat-square" alt="Accessibility" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [File Structure](#-file-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [State Management](#-state-management)
- [Color Reference](#-color-reference)
- [Running Tests](#-running-tests)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Links](#-links)

---

## 🧾 About

> **Tagline** — One sentence describing the app.

2–3 sentences: what it is, what problem it solves, and who it's for.

Example:
> Application Name is a real-time collaborative whiteboard for product and design teams. It replaces static slide decks and disconnected docs with a shared visual canvas that updates live for everyone in the room — no refresh needed.

---

## ⚙️ How It Works

Describe the core user flow:

\`\`\`
User visits → Auth check → Dashboard → Feature A / Feature B → Result
\`\`\`

1. **Authentication:** Users sign in via OAuth or email. Sessions are stored securely as HTTP-only cookies.
2. **Data Loading:** React Query fetches and caches data from the backend API on mount.
3. **State:** Local UI state (modals, theme) lives in Zustand. Server state is managed by React Query.
4. **Real-time (if applicable):** WebSocket connection pushes live updates to all connected clients.

---

## 💼 Real-World Use Cases

- **Product Teams:** Collaborate on feature planning in a shared workspace that keeps everyone on the same page without meetings.
- **Freelancers:** Present deliverables to clients in a polished, interactive format instead of sending PDFs.
- **Educators:** Build interactive lesson interfaces that students can use at their own pace on any device.

---

## ✨ Features

- Responsive, mobile-first design
- Dark / Light mode
- Full keyboard navigation (WCAG 2.1 AA)
- Lazy loading and code splitting
- Internationalization (i18n) ready
- PWA support (offline mode)

---

## 🛠️ Tech Stack

- **Framework:** React 18 / Next.js 14
- **Styling:** Tailwind CSS + CSS Modules
- **State:** Zustand / Redux Toolkit
- **Data Fetching:** React Query / SWR
- **Forms:** React Hook Form + Zod
- **Testing:** Vitest + Testing Library + Playwright
- **Build:** Vite / Turbopack

---

## 📸 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| ![Light](https://via.placeholder.com/400x250?text=Light+Mode) | ![Dark](https://via.placeholder.com/400x250?text=Dark+Mode) |

---

## 📂 File Structure

\`\`\`
frontend/
├── public/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/           # Primitive components (Button, Input...)
│   │   └── layout/       # Page layouts and wrappers
│   ├── features/         # Feature-scoped modules
│   ├── hooks/            # Custom React hooks
│   ├── pages/ (or app/)  # Route-level components
│   ├── store/            # Global state
│   ├── services/         # API call functions
│   ├── utils/            # Helper functions
│   └── i18n/             # Translation files
├── tests/
└── package.json
\`\`\`

---

## 🏁 Getting Started

\`\`\`bash
git clone https://github.com/username/frontend-app.git
cd frontend-app
npm install
cp .env.example .env.local
npm run dev
\`\`\`

---

## 💡 Usage

### Navigation

Describe the main sections of the app and how to get to them.

- **Dashboard** — Overview of all activity at a glance.
- **Feature Section** — Explain what users do here and how.
- **Settings** — Describe configuration options available.

### Key Interactions

\`\`\`bash
# Create a new item
Click "+ New" in the top right → fill out the form → Save

# Export data
Settings → Export → Choose format → Download
\`\`\`

### Available Scripts

\`\`\`bash
npm run dev           # Start dev server
npm run build         # Production build
npm run preview       # Preview production build
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run lint          # ESLint
npm run format        # Prettier
npm run type-check    # TypeScript check
\`\`\`

---

## 🛠️ Environment Variables

\`\`\`env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://your-site.com
\`\`\`

---

## 🗃️ State Management

\`\`\`
src/store/
├── authStore.ts      # User session and auth state
├── uiStore.ts        # Theme, modal, toast state
└── domainStore.ts    # Feature-specific state
\`\`\`

---

## 🎨 Color Reference

| Name      | Hex       | Preview |
| --------- | --------- | ------- |
| Primary   | \`#0a192f\` | ![#0a192f](https://via.placeholder.com/12/0a192f?text=+) |
| Secondary | \`#f8f8f8\` | ![#f8f8f8](https://via.placeholder.com/12/f8f8f8?text=+) |
| Accent    | \`#00b48a\` | ![#00b48a](https://via.placeholder.com/12/00b48a?text=+) |
| Danger    | \`#e53e3e\` | ![#e53e3e](https://via.placeholder.com/12/e53e3e?text=+) |

---

## 🧪 Running Tests

\`\`\`bash
npm run test              # Unit & component tests
npm run test:coverage     # With coverage report
npm run test:e2e          # Playwright end-to-end
\`\`\`

---

## ⚡ Performance

| Metric         | Score   |
| -------------- | ------- |
| Performance    | 98/100  |
| Accessibility  | 100/100 |
| Best Practices | 100/100 |
| SEO            | 100/100 |

---

## 🚢 Deployment

\`\`\`bash
vercel --prod

# Docker
docker build -t frontend-app .
docker run -p 3000:3000 frontend-app
\`\`\`

---

## 🔗 Links

[![Portfolio](https://img.shields.io/badge/portfolio-000?style=for-the-badge)](https://yourportfolio.com)
[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com)
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 6. BACKEND SERVICE
  // ─────────────────────────────────────────────
  {
    id: "backend-service",
    name: "Backend Service",
    description:
      "For server-side applications. Covers architecture, DB, caching, queues, and production setup.",
    category: "Backend",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/150" alt="Logo" width="150" />

  # ⚙️ Backend Service Name

  <p>A production-ready backend service for <em>describe the purpose</em>.</p>

  <img src="https://img.shields.io/github/license/username/project.svg?style=flat-square" alt="License" />
  <img src="https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?style=flat-square" alt="Node Version" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [Database](#-database)
- [Background Jobs](#-background-jobs)
- [Caching](#-caching)
- [Logging & Monitoring](#-logging--monitoring)
- [Testing](#-testing)
- [Docker](#-docker)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🧾 About

> **Tagline** — One sentence describing this service.

Describe what this backend does, what data or operations it owns, and which other systems depend on it.

Example:
> The Notifications Service is an internal microservice responsible for delivering email, push, and in-app notifications across all products in the platform. It decouples notification logic from the main application, ensuring delivery reliability via a persistent job queue even during downstream outages.

---

## ⚙️ How It Works

\`\`\`
Inbound Event (HTTP / Message Queue)
    │
    ▼
Middleware (Auth → Validation → Rate Limit)
    │
    ▼
Controller → Service Layer → Repository
    │                              │
    ▼                              ▼
Async Job Queue (BullMQ)     PostgreSQL / Redis
    │
    ▼
Worker processes job → External API / Email / Push
\`\`\`

1. **Ingestion:** Events arrive via HTTP or a message queue (Kafka / SQS).
2. **Validation:** Requests are validated against strict Zod schemas before processing.
3. **Business Logic:** The service layer orchestrates logic without touching HTTP or DB directly.
4. **Persistence:** All state changes go through the repository layer to PostgreSQL.
5. **Async Work:** Long-running tasks (emails, file processing) are offloaded to BullMQ workers.

---

## 💼 Real-World Use Cases

- **Internal Microservice:** Other services in the platform POST events here to trigger side effects (emails, push notifications, audit entries) without coupling to delivery logic.
- **Webhook Processor:** Receives third-party webhooks (Stripe, GitHub) and translates them into domain events for other services to consume.
- **Scheduled Jobs:** Runs nightly data cleanup, report generation, and billing reconciliation tasks via BullMQ cron jobs.
- **Batch Processor:** Accepts large CSV uploads, processes them asynchronously, and notifies the requester when done.

---

## ✨ Features

- Modular layered architecture (Controller → Service → Repository)
- JWT auth with refresh token rotation
- Background jobs with BullMQ
- Redis caching layer
- Database migrations with Prisma
- Structured logging (Pino)
- Health check endpoint
- Graceful shutdown

---

## 🏗️ Architecture

\`\`\`
HTTP Request
    │
    ▼
 Router (Fastify)
    │
    ▼
 Middleware (Auth, Validation, Rate Limit)
    │
    ▼
 Controller → Service → Repository
                │
         ┌──────┴──────┐
      PostgreSQL     Redis
           │
        BullMQ Workers
\`\`\`

---

## 🛠️ Tech Stack

| Concern          | Technology     |
| ---------------- | -------------- |
| Runtime          | Node.js 20+    |
| Framework        | Fastify        |
| Language         | TypeScript     |
| ORM              | Prisma         |
| Database         | PostgreSQL     |
| Cache            | Redis          |
| Queue            | BullMQ         |
| Logging          | Pino           |
| Testing          | Vitest + Supertest |
| Containerization | Docker         |

---

## 📂 Project Structure

\`\`\`
backend/
├── src/
│   ├── config/           # App config & env parsing
│   ├── controllers/      # HTTP handlers
│   ├── services/         # Business logic
│   ├── repositories/     # DB queries (Prisma)
│   ├── middleware/        # Auth, error, validation
│   ├── jobs/             # BullMQ job definitions
│   ├── workers/          # BullMQ worker processors
│   └── utils/            # Shared helpers
├── prisma/
├── tests/
├── Dockerfile
├── docker-compose.yml
└── .env.example
\`\`\`

---

## 🏁 Getting Started

\`\`\`bash
git clone https://github.com/username/backend.git
cd backend
npm install
cp .env.example .env

# Start Postgres and Redis
docker-compose up -d postgres redis

npm run db:migrate
npm run dev
\`\`\`

---

## 💡 Usage

### HTTP API

\`\`\`bash
# Health check
curl http://localhost:3000/health

# Authenticated request
curl -H "Authorization: Bearer TOKEN" \
  http://localhost:3000/api/v1/resource
\`\`\`

### Triggering a Background Job

\`\`\`typescript
import { emailQueue } from './jobs/emailQueue';

await emailQueue.add('send-welcome', {
  to: 'user@example.com',
  template: 'welcome',
});
\`\`\`

### Monitoring Queues

Open [Bull Board](https://github.com/felixmosh/bull-board) at \`http://localhost:3000/admin/queues\` to monitor job status.

---

## 🛠️ Environment Variables

\`\`\`env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=15m
\`\`\`

---

## 🗄️ Database

\`\`\`bash
npm run db:migrate      # Run pending migrations
npm run db:rollback     # Rollback last migration
npm run db:seed         # Seed development data
npm run db:studio       # Open Prisma Studio
\`\`\`

---

## 🔄 Background Jobs

| Queue          | Description                       |
| -------------- | --------------------------------- |
| \`email\`        | Sends transactional emails        |
| \`notifications\`| Push notification delivery        |
| \`cleanup\`      | Periodic data cleanup tasks       |

---

## 🗃️ Caching

Cache keys follow: \`{resource}:{id}:{variant}\` — e.g. \`user:123:profile\` (TTL: 300s)

---

## 📊 Logging & Monitoring

- Logs: structured JSON via **Pino**
- Health: \`GET /health\` → \`{ "status": "ok", "uptime": 12345 }\`
- Metrics: \`GET /metrics\` (Prometheus-compatible)

---

## 🧪 Testing

\`\`\`bash
npm run test
npm run test:integration
npm run test:coverage
\`\`\`

---

## 🐳 Docker

\`\`\`bash
docker build -t backend-service .
docker-compose up
docker-compose -f docker-compose.prod.yml up -d
\`\`\`

---

## 🚢 Deployment

\`\`\`bash
npm run build
npm run start

# PM2
pm2 start dist/server.js --name backend-service
\`\`\`

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 7. CLI TOOL
  // ─────────────────────────────────────────────
  {
    id: "cli-tool",
    name: "CLI Tool",
    description:
      "For command-line tools. Covers commands, flags, config files, shell completion, and publishing.",
    category: "CLI Tool",
    content: `
<div align="center">

  # 🖥️ cli-tool-name

  <p>A fast, developer-friendly CLI for <em>doing something useful</em>.</p>

  \`\`\`
  $ cli-tool-name --help
  \`\`\`

  <img src="https://img.shields.io/npm/v/cli-tool-name.svg?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/cli-tool-name.svg?style=flat-square" alt="Downloads" />
  <img src="https://img.shields.io/github/license/username/cli-tool.svg?style=flat-square" alt="License" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Usage](#-usage)
- [Commands](#-commands)
- [Flags & Options](#-flags--options)
- [Configuration File](#-configuration-file)
- [Examples](#-examples)
- [Shell Completion](#-shell-completion)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧾 About

> **Tagline** — One sentence describing the tool.

2–3 sentences: what this CLI does, what pain it eliminates, and who should install it.

Example:
> \`cli-tool-name\` is a zero-config code scaffolding tool for TypeScript monorepos. Instead of copying boilerplate between projects, you run one command and get a fully configured workspace — with linting, testing, and CI pre-wired — in under 10 seconds.

---

## ⚙️ How It Works

Describe what happens when a command is run:

\`\`\`
$ cli-tool-name run
        │
        ▼
  Load config (.cli-tool.json or defaults)
        │
        ▼
  Validate inputs (args + flags)
        │
        ▼
  Execute pipeline (steps run in order)
        │
        ▼
  Write output / print result to stdout
\`\`\`

---

## 💼 Real-World Use Cases

- **Backend Developers:** Scaffold a new microservice with one command instead of copying config from an existing service.
- **DevOps Engineers:** Automate repetitive environment setup scripts across multiple machines without maintaining bash scripts per OS.
- **Open Source Maintainers:** Run cross-repo tasks (version bumps, changelog generation) from a single familiar command.
- **Teams with Standards:** Enforce consistent project structure by distributing a shared config file as an npm package.

---

## ✨ Features

- ⚡ Blazing fast execution
- 🔧 Zero-config defaults with full customization
- 🌈 Rich terminal output with color support
- 📄 JSON and plain-text output modes
- 🔌 Plugin-friendly architecture
- 🔤 Shell completion for bash, zsh, and fish

---

## 📦 Installation

\`\`\`bash
# npm
npm install -g cli-tool-name

# Homebrew
brew install username/tap/cli-tool-name

# Binary (all platforms)
curl -sSL https://install.example.com | sh
\`\`\`

**Requirements:** Node.js ≥ 18

---

## 🚀 Quick Start

\`\`\`bash
# 1. Initialize config in current project
cli-tool-name init

# 2. Run the primary action
cli-tool-name run

# 3. Check version
cli-tool-name --version
\`\`\`

---

## 💡 Usage

### Basic workflow

\`\`\`bash
# Initialize once per project
cli-tool-name init

# Run against a target directory
cli-tool-name run ./src

# List available actions
cli-tool-name list

# Preview changes without applying them
cli-tool-name run --dry-run
\`\`\`

### Piping and scripting

\`\`\`bash
# Output as JSON for scripting
cli-tool-name list --output json | jq '.targets[]'

# Use in a Makefile or CI step
cli-tool-name build --config .cli-tool.prod.json
\`\`\`

---

## 📚 Commands

| Command                      | Description                        |
| ---------------------------- | ---------------------------------- |
| \`cli-tool-name init\`         | Initialize config in current dir   |
| \`cli-tool-name run [target]\` | Execute the main workflow          |
| \`cli-tool-name list\`         | List available targets             |
| \`cli-tool-name config\`       | View or edit configuration         |
| \`cli-tool-name upgrade\`      | Upgrade to the latest version      |

---

## 🏳️ Flags & Options

| Flag         | Alias | Type      | Description                       | Default          |
| ------------ | ----- | --------- | --------------------------------- | ---------------- |
| \`--output\`   | \`-o\`  | \`string\`  | Output format (\`json\` / \`text\`)  | \`text\`           |
| \`--verbose\`  | \`-v\`  | \`boolean\` | Enable verbose logging            | \`false\`          |
| \`--dry-run\`  | \`-d\`  | \`boolean\` | Preview without executing         | \`false\`          |
| \`--config\`   | \`-c\`  | \`string\`  | Path to config file               | \`.cli-tool.json\` |

---

## ⚙️ Configuration File

Create \`.cli-tool.json\` at your project root:

\`\`\`json
{
  "$schema": "https://cli-tool-name.dev/schema.json",
  "output": "json",
  "targets": ["src", "lib"],
  "ignore": ["node_modules", "dist"],
  "plugins": ["@cli-tool/plugin-example"]
}
\`\`\`

---

## 💡 Examples

\`\`\`bash
# Run verbosely on a specific path
cli-tool-name run ./src --verbose

# Dry-run a destructive operation
cli-tool-name clean --dry-run

# Output JSON and pipe to jq
cli-tool-name list --output json | jq '.targets'
\`\`\`

---

## 🔤 Shell Completion

\`\`\`bash
# Bash
cli-tool-name completion bash >> ~/.bashrc

# Zsh
cli-tool-name completion zsh >> ~/.zshrc

# Fish
cli-tool-name completion fish > ~/.config/fish/completions/cli-tool-name.fish
\`\`\`

---

## 🤝 Contributing

\`\`\`bash
git clone https://github.com/username/cli-tool.git
cd cli-tool
npm install
npm run dev -- --help
\`\`\`

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 8. MOBILE APP
  // ─────────────────────────────────────────────
  {
    id: "mobile-app",
    name: "Mobile Application",
    description:
      "For React Native or Flutter apps. Covers platform setup, build, store deployment, and testing.",
    category: "Mobile App",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/150" alt="App Icon" width="150" style="border-radius: 24px" />

  # 📱 App Name

  <p>A beautiful cross-platform mobile app for iOS and Android.</p>

  <a href="https://apps.apple.com">
    <img src="https://img.shields.io/badge/App_Store-0D96F6?style=flat-square&logo=app-store&logoColor=white" alt="App Store" />
  </a>
  <a href="https://play.google.com">
    <img src="https://img.shields.io/badge/Google_Play-414141?style=flat-square&logo=google-play&logoColor=white" alt="Google Play" />
  </a>
  <img src="https://img.shields.io/github/license/username/app.svg?style=flat-square" alt="License" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [Running on Device](#-running-on-device)
- [Building for Production](#-building-for-production)
- [App Store Deployment](#-app-store-deployment)
- [Testing](#-testing)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧾 About

> **Tagline** — One sentence describing the app.

2–3 sentences: what it does, who it's for, and what makes it different.

Example:
> App Name is a personal finance tracker that helps freelancers understand where their money goes each month. Unlike bulky banking apps, it focuses on a single weekly check-in habit — users spend 2 minutes reviewing their week and the app surfaces patterns they'd otherwise miss.

---

## ⚙️ How It Works

Describe the core app flow:

\`\`\`
Install App → Sign Up → Onboarding → Core Feature Loop → Results / Output
\`\`\`

1. **Auth:** Users sign in with email or social OAuth. Tokens are stored in secure device storage.
2. **Data Sync:** App syncs with the backend on foreground resume, with optimistic updates for offline changes.
3. **Core Loop:** Describe the main repeated action — the thing users do every session.
4. **Notifications:** Background service delivers scheduled push notifications via FCM/APNs.

---

## 💼 Real-World Use Cases

- **Daily Users:** Describe a habit or recurring need this app addresses (e.g., a daily tracker, a communication tool, a productivity utility).
- **Field Workers:** Describe an on-the-go scenario where having a native mobile experience matters (e.g., offline-first, camera, GPS).
- **Teams:** Describe a collaborative workflow enabled by the app (e.g., approvals, shared lists, team scheduling).

---

## ✨ Features

- Works on iOS 14+ and Android 8+
- Offline-first with local data persistence (MMKV / Hive)
- Push notifications (FCM + APNs)
- Biometric authentication (Face ID / Fingerprint)
- Dark mode support
- Screen reader accessible

---

## 🛠️ Tech Stack

| Concern      | Technology              |
| ------------ | ----------------------- |
| Framework    | React Native / Flutter  |
| Language     | TypeScript / Dart       |
| Navigation   | React Navigation v6     |
| State        | Zustand / Riverpod      |
| Local DB     | MMKV / Hive             |
| Network      | Axios / Dio             |
| Push Notifs  | Notifee / FCM           |
| CI/CD        | Expo EAS / Fastlane     |

---

## 📸 Screenshots

| Home | Detail | Settings |
|------|--------|----------|
| ![Home](https://via.placeholder.com/200x400?text=Home) | ![Detail](https://via.placeholder.com/200x400?text=Detail) | ![Settings](https://via.placeholder.com/200x400?text=Settings) |

---

## 📋 Prerequisites

- Node.js ≥ 18 (React Native) / Flutter SDK (Flutter)
- Xcode 15+ (iOS builds)
- Android Studio + JDK 17 (Android builds)
- CocoaPods (iOS only)

---

## 🏁 Getting Started

\`\`\`bash
git clone https://github.com/username/mobile-app.git
cd mobile-app
npm install

# iOS only
cd ios && pod install && cd ..
\`\`\`

---

## 💡 Usage

### Navigating the App

- **Home Tab** — Describe what users see here and the primary action.
- **Feature Tab** — Describe core functionality available here.
- **Profile / Settings** — Explain personalization and account options.

### Key Gestures & Interactions

| Action             | How to do it                         |
| ------------------ | ------------------------------------ |
| Create new item    | Tap the **+** button (bottom right)  |
| Delete an item     | Long-press → select Delete           |
| Refresh content    | Pull-to-refresh on the main list     |
| Change theme       | Profile → Appearance → Dark / Light  |

---

## 🛠️ Environment Variables

\`\`\`env
API_URL=https://api.example.com
GOOGLE_MAPS_API_KEY=your_key
FIREBASE_PROJECT_ID=your_project
\`\`\`

---

## 📱 Running on Device

\`\`\`bash
# iOS Simulator
npx react-native run-ios

# Android Emulator
npx react-native run-android

# Physical device (Expo)
npx expo start --tunnel
\`\`\`

---

## 🏗️ Building for Production

\`\`\`bash
# iOS release
npx react-native run-ios --configuration Release

# Android APK
cd android && ./gradlew assembleRelease

# EAS Build (Expo)
eas build --platform all
\`\`\`

---

## 🏪 App Store Deployment

\`\`\`bash
eas submit --platform ios
eas submit --platform android

# Fastlane
fastlane ios release
fastlane android deploy
\`\`\`

---

## 🧪 Testing

\`\`\`bash
npm run test
npx detox build --configuration ios.sim.debug
npx detox test --configuration ios.sim.debug
\`\`\`

---

## 🤝 Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) and ensure all tests pass before submitting a PR.

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 9. BROWSER EXTENSION
  // ─────────────────────────────────────────────
  {
    id: "browser-extension",
    name: "Browser Extension",
    description:
      "For Chrome/Firefox extensions. Covers permissions, manifest V3, loading, and store publishing.",
    category: "Browser Extension",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/128" alt="Icon" width="128" />

  # 🧩 Extension Name

  <p>A browser extension that <em>does something awesome</em> for Chrome and Firefox.</p>

  <a href="https://chrome.google.com/webstore">
    <img src="https://img.shields.io/badge/Chrome_Web_Store-4285F4?style=flat-square&logo=google-chrome&logoColor=white" />
  </a>
  <a href="https://addons.mozilla.org">
    <img src="https://img.shields.io/badge/Firefox_Add--ons-FF7139?style=flat-square&logo=firefox&logoColor=white" />
  </a>
  <img src="https://img.shields.io/github/license/username/extension.svg?style=flat-square" alt="License" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Features](#-features)
- [Permissions Used](#-permissions-used)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Loading Unpacked](#-loading-unpacked)
- [Building for Production](#-building-for-production)
- [Publishing](#-publishing)
- [Privacy Policy](#-privacy-policy)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧾 About

> **Tagline** — One sentence describing what the extension does.

2–3 sentences: what problem it solves in the browser, who it's for, and what it replaces or improves.

Example:
> Extension Name adds a persistent sidebar to any GitHub repository page that shows the full folder tree and lets you jump to any file with a keyboard shortcut — no more clicking through nested directories one folder at a time.

---

## ⚙️ How It Works

\`\`\`
User clicks extension icon (or trigger condition)
    │
    ▼
Background service worker activates
    │
    ▼
Content script injected into active tab
    │
    ▼
DOM manipulation / data extraction
    │
    ▼
Result shown in popup UI or injected panel
\`\`\`

1. **Trigger:** Explain what activates the extension (icon click, page load, keyboard shortcut, context menu).
2. **Content Script:** Describe what it reads from or writes to the current page.
3. **Background Worker:** Explain any persistent logic, message passing, or API calls.
4. **Storage:** Settings and state are persisted via \`chrome.storage.sync\` (syncs across devices) or \`chrome.storage.local\`.

---

## 💼 Real-World Use Cases

- **Developers:** Describe a developer workflow this extension streamlines (e.g., faster GitHub navigation, quick console utilities, tab management).
- **Researchers / Writers:** Describe how it helps while reading or doing online research (e.g., saving highlights, annotation, citation formatting).
- **Power Users:** Describe an advanced or niche scenario where the extension provides real productivity gain.

---

## ✨ Features

- Works in Chrome 100+, Edge 100+, and Firefox 110+
- Manifest V3 compliant
- Zero telemetry or tracking
- Keyboard accessible
- Settings sync across devices (\`chrome.storage.sync\`)

---

## 🔐 Permissions Used

| Permission       | Why it's needed                              |
| ---------------- | -------------------------------------------- |
| \`activeTab\`     | Access the current page when user clicks     |
| \`storage\`       | Save user preferences                        |
| \`contextMenus\`  | Add right-click menu entries                 |
| \`notifications\` | Show desktop alerts                          |

> ⚠️ This extension does **not** request access to all URLs or browsing history.

---

## 📸 Screenshots

| Popup | Options | In-Page Panel |
|-------|---------|---------------|
| ![Popup](https://via.placeholder.com/300x200?text=Popup) | ![Options](https://via.placeholder.com/300x200?text=Options) | ![Panel](https://via.placeholder.com/300x200?text=In-Page) |

---

## 🏁 Getting Started

\`\`\`bash
git clone https://github.com/username/extension.git
cd extension
npm install
npm run dev
\`\`\`

---

## 💡 Usage

### Basic Usage

1. Click the extension icon in the toolbar (or use the keyboard shortcut \`⌘+Shift+E\`).
2. Describe what the user sees / can do in the popup.
3. Explain any options configurable from the Options page (\`Right-click icon → Options\`).

### Keyboard Shortcuts

| Shortcut          | Action                          |
| ----------------- | ------------------------------- |
| \`⌘ + Shift + E\`  | Open the extension popup        |
| \`Esc\`             | Close the popup or panel        |
| \`↑ / ↓\`          | Navigate items in a list        |

### Settings

Open the Options page to configure:
- **Setting 1** — explain what it does
- **Setting 2** — explain what it does

---

## 📂 Project Structure

\`\`\`text
extension/
├── public/
│   ├── manifest.json     # Extension manifest (V3)
│   └── icons/            # 16, 32, 48, 128px icons
├── src/
│   ├── background/       # Service worker
│   ├── content/          # Content scripts
│   ├── popup/            # Popup UI (React)
│   └── options/          # Options page (React)
├── dist/                 # Built extension (gitignored)
└── package.json
\`\`\`

---

## 🔓 Loading Unpacked

1. Run \`npm run build\` to generate the \`dist/\` folder.
2. Go to \`chrome://extensions\` and enable **Developer mode**.
3. Click **Load unpacked** → select the \`dist/\` folder.

---

## 🏗️ Building for Production

\`\`\`bash
npm run build:chrome    # Zip for Chrome Web Store
npm run build:firefox   # Zip for Firefox Add-ons
\`\`\`

---

## 🏪 Publishing

| Store            | Submit URL                                    |
| ---------------- | --------------------------------------------- |
| Chrome Web Store | https://chrome.google.com/webstore/devconsole |
| Firefox Add-ons  | https://addons.mozilla.org/developers/        |
| Edge Add-ons     | https://partner.microsoft.com/dashboard       |

---

## 🔏 Privacy Policy

This extension does not collect, transmit, or sell any personal data. All preferences are stored locally via \`chrome.storage.sync\`. See [PRIVACY.md](PRIVACY.md) for full details.

---

## 🤝 Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 10. MACHINE LEARNING
  // ─────────────────────────────────────────────
  {
    id: "machine-learning",
    name: "Machine Learning Project",
    description:
      "For ML/AI projects. Covers dataset, model training, evaluation metrics, inference, and reproducibility.",
    category: "Machine Learning",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/150" alt="Logo" width="150" />

  # 🧠 ML Project Name

  <p>A machine learning model for <em>describe the task</em>, achieving <strong>X%</strong> accuracy on <em>Dataset Name</em>.</p>

  <img src="https://img.shields.io/badge/python-3.10+-blue?style=flat-square&logo=python" alt="Python" />
  <img src="https://img.shields.io/badge/framework-PyTorch-EE4C2C?style=flat-square&logo=pytorch" alt="PyTorch" />
  <img src="https://img.shields.io/github/license/username/ml-project.svg?style=flat-square" alt="License" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Results](#-results)
- [Dataset](#-dataset)
- [Model Architecture](#-model-architecture)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Training](#-training)
- [Evaluation](#-evaluation)
- [Inference](#-inference)
- [Project Structure](#-project-structure)
- [Experiment Tracking](#-experiment-tracking)
- [Contributing](#-contributing)
- [Citation](#-citation)
- [License](#-license)

---

## 🧾 About

> **Tagline** — One sentence describing the model and what it predicts or generates.

2–3 sentences: what task the model solves, what data it was trained on, and why it matters.

Example:
> This project trains a ResNet-50 classifier to detect early-stage diabetic retinopathy from fundus images, achieving 94% AUC on the EyePACS dataset. Accurate early detection can prevent blindness in millions of patients who currently lack access to specialist diagnosis.

---

## ⚙️ How It Works

Describe the ML pipeline from raw data to prediction:

\`\`\`
Raw Data
    │
    ▼
Preprocessing (resize, normalize, augment)
    │
    ▼
Feature Extraction (CNN backbone / embeddings)
    │
    ▼
Model Head (classifier / regressor / decoder)
    │
    ▼
Output (class label / bounding box / generated text)
    │
    ▼
Post-processing + confidence thresholding
\`\`\`

1. **Data Pipeline:** Raw inputs are cleaned, split, and augmented before training.
2. **Model:** Describe the core architecture choice and why it was selected.
3. **Training:** Supervised / semi-supervised / self-supervised — explain the objective function.
4. **Inference:** Describe how a new sample is processed at prediction time.

---

## 💼 Real-World Use Cases

- **Healthcare / Screening:** Describe a clinical or diagnostic application (e.g., automated screening at scale where specialists are unavailable).
- **Industry Automation:** Describe a quality control, monitoring, or classification task in manufacturing or operations.
- **Consumer Product:** Describe how this model could power a feature in an app or service (recommendation, search ranking, content moderation).
- **Research Baseline:** Describe how this repo can serve as a reproducible starting point for related academic experiments.

---

## 📊 Results

| Metric    | Value  |
| --------- | ------ |
| Accuracy  | 94.2%  |
| Precision | 93.8%  |
| Recall    | 94.6%  |
| F1 Score  | 94.2%  |
| AUC-ROC   | 0.981  |

![Confusion Matrix](https://via.placeholder.com/500x400?text=Confusion+Matrix)

---

## 📦 Dataset

| Property    | Value                                     |
| ----------- | ----------------------------------------- |
| Source      | [Dataset Name](https://example.com)       |
| Size        | 50,000 samples                            |
| Split       | 80% train / 10% val / 10% test            |
| Classes     | 10                                        |
| Format      | CSV / HDF5 / Parquet                      |

\`\`\`bash
python scripts/download_data.py
python scripts/preprocess.py --input data/raw --output data/processed
\`\`\`

---

## 🏗️ Model Architecture

\`\`\`
Input (224×224×3)
    │
ResNet-50 Backbone (pretrained ImageNet)
    │
Global Average Pooling
    │
Dropout (p=0.3)
    │
Linear (2048 → 512) + ReLU
    │
Linear (512 → num_classes)
    │
Softmax
\`\`\`

---

## 🏁 Getting Started

\`\`\`bash
git clone https://github.com/username/ml-project.git
cd ml-project

python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate

pip install -r requirements.txt
\`\`\`

---

## 💡 Usage

### Run inference on a single sample

\`\`\`python
from src.model import MyModel

model = MyModel.load("checkpoints/best_model.pth")
result = model.predict("path/to/input.jpg")
print(result)  # { "class": "cat", "confidence": 0.97 }
\`\`\`

### Run inference on a directory

\`\`\`bash
python inference.py \
  --checkpoint checkpoints/best_model.pth \
  --input data/test_images/ \
  --output predictions.csv
\`\`\`

### Use as a library

\`\`\`python
from src.pipeline import Pipeline

pipe = Pipeline.from_config("config.yaml")
results = pipe.run(dataset="data/processed/test")
\`\`\`

---

## 🏋️ Training

\`\`\`bash
python train.py \
  --data data/processed \
  --epochs 50 \
  --batch-size 32 \
  --lr 1e-4 \
  --output checkpoints/
\`\`\`

| Hyperparameter | Value           |
| -------------- | --------------- |
| Optimizer      | AdamW           |
| Learning Rate  | 1e-4            |
| Batch Size     | 32              |
| Epochs         | 50              |
| Scheduler      | CosineAnnealing |

---

## 📈 Evaluation

\`\`\`bash
python evaluate.py \
  --checkpoint checkpoints/best_model.pth \
  --data data/processed/test
\`\`\`

---

## 🔍 Inference

\`\`\`python
from src.model import MyModel

model = MyModel.load("checkpoints/best_model.pth")
result = model.predict("path/to/image.jpg")
print(result)
\`\`\`

---

## 📂 Project Structure

\`\`\`
ml-project/
├── data/
│   ├── raw/
│   └── processed/
├── src/
│   ├── model.py
│   ├── dataset.py
│   ├── transforms.py
│   └── utils.py
├── scripts/
│   ├── download_data.py
│   └── preprocess.py
├── notebooks/            # Exploratory analysis
├── checkpoints/          # Saved weights (gitignored)
├── train.py
├── evaluate.py
├── inference.py
├── requirements.txt
└── config.yaml
\`\`\`

---

## 🔬 Experiment Tracking

\`\`\`bash
wandb login
python train.py --track wandb
\`\`\`

---

## 🤝 Contributing

Reproducibility is required for all model changes. Include updated metrics, config, and a W&B run link in your PR. Read [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 📚 Citation

\`\`\`bibtex
@misc{yourname2024mlproject,
  title  = {ML Project Name},
  author = {Your Name},
  year   = {2024},
  url    = {https://github.com/username/ml-project}
}
\`\`\`

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 11. MONOREPO
  // ─────────────────────────────────────────────
  {
    id: "monorepo",
    name: "Monorepo",
    description:
      "For Turborepo / Nx monorepos. Covers workspace structure, shared packages, scripts, and CI.",
    category: "Monorepo",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/150" alt="Logo" width="150" />

  # 🏗️ Monorepo Name

  <p>A full-stack monorepo containing <em>web app, API, and shared packages</em>.</p>

  <img src="https://img.shields.io/badge/built_with-Turborepo-EF4444?style=flat-square" alt="Turborepo" />
  <img src="https://img.shields.io/badge/package_manager-pnpm-F69220?style=flat-square" alt="pnpm" />
  <img src="https://img.shields.io/github/license/username/monorepo.svg?style=flat-square" alt="License" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [What's Inside](#-whats-inside)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Workspace Structure](#-workspace-structure)
- [Shared Packages](#-shared-packages)
- [Available Scripts](#-available-scripts)
- [Adding a New App or Package](#-adding-a-new-app-or-package)
- [CI/CD](#-cicd)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧾 About

> **Tagline** — One sentence describing what lives in this monorepo.

2–3 sentences: what products or services this repo contains, why a monorepo was chosen, and who manages it.

Example:
> This monorepo houses the full platform for ProductName — including the customer-facing Next.js web app, the internal admin dashboard, and the shared Fastify API. A monorepo keeps shared types, UI components, and configs in sync across all products without publishing separate npm packages for every change.

---

## ⚙️ How It Works

\`\`\`
pnpm install (hoisted dependencies at root)
        │
        ▼
Turborepo reads turbo.json (pipeline config)
        │
        ├── build → runs in dependency order
        ├── test  → runs in parallel
        └── lint  → runs in parallel

Remote Cache stores task outputs → skips unchanged work on CI
\`\`\`

1. **Dependency Hoisting:** pnpm installs all packages from a single lockfile, deduplicating shared deps.
2. **Task Pipeline:** Turborepo knows which apps depend on which packages and runs builds in the correct order.
3. **Remote Caching:** Outputs are cached remotely — if nothing changed, tasks complete in milliseconds on CI.
4. **Cross-package imports:** Internal packages are referenced via \`workspace:*\` and resolved locally — no publishing required.

---

## 💼 Real-World Use Cases

- **Product Companies:** One repo for the marketing site, app, API, and internal tools. A single PR can update shared types and all consumers in one commit.
- **Design System Teams:** Ship the component library alongside the products that use it. Breaking changes in the library surface as CI failures in consuming apps before merge.
- **Agencies with Multiple Clients:** Shared config (ESLint, TypeScript, Tailwind presets) lives in \`packages/config\` and is consumed by each client project — one update propagates everywhere.

---

## 📦 What's Inside

### Apps

| App     | Description                   | Port |
| ------- | ----------------------------- | ---- |
| \`web\`   | Next.js frontend              | 3000 |
| \`api\`   | Fastify backend API           | 4000 |
| \`admin\` | React admin dashboard         | 3001 |
| \`docs\`  | Nextra documentation site     | 3002 |

### Packages

| Package           | Description                         |
| ----------------- | ----------------------------------- |
| \`@repo/ui\`        | Shared React component library      |
| \`@repo/config\`    | Shared ESLint and TypeScript configs |
| \`@repo/types\`     | Shared TypeScript types             |
| \`@repo/utils\`     | Shared utility functions            |
| \`@repo/db\`        | Prisma client and schema            |

---

## 📋 Prerequisites

- Node.js ≥ 18
- pnpm ≥ 9 — install with \`npm install -g pnpm\`
- Docker (for local databases)

---

## 🏁 Getting Started

\`\`\`bash
git clone https://github.com/username/monorepo.git
cd monorepo
pnpm install
pnpm dev          # Starts all apps concurrently
\`\`\`

---

## 💡 Usage

### Run a specific app

\`\`\`bash
pnpm dev --filter web       # Only the Next.js app
pnpm dev --filter api       # Only the API
pnpm build --filter web     # Build only the web app
\`\`\`

### Add a dependency to one app

\`\`\`bash
pnpm add lodash --filter web
\`\`\`

### Add a shared internal package to an app

In \`apps/web/package.json\`:
\`\`\`json
{
  "dependencies": {
    "@repo/ui": "workspace:*"
  }
}
\`\`\`

Then run \`pnpm install\` from the root.

### Use a shared component

\`\`\`tsx
import { Button, Card } from "@repo/ui";

export default function Page() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
\`\`\`

---

## 📂 Workspace Structure

\`\`\`
monorepo/
├── apps/
│   ├── web/
│   ├── api/
│   ├── admin/
│   └── docs/
├── packages/
│   ├── ui/
│   ├── config/
│   ├── types/
│   ├── utils/
│   └── db/
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
\`\`\`

---

## 📜 Available Scripts

| Script                        | Description                        |
| ----------------------------- | ---------------------------------- |
| \`pnpm dev\`                    | Start all apps in dev mode         |
| \`pnpm build\`                  | Build all apps and packages        |
| \`pnpm test\`                   | Run tests across all workspaces    |
| \`pnpm lint\`                   | Lint all workspaces                |
| \`pnpm format\`                 | Format all files with Prettier     |
| \`pnpm dev --filter web\`       | Start only the web app             |

---

## ➕ Adding a New App or Package

\`\`\`bash
# Scaffold a new app
mkdir apps/my-new-app && cd apps/my-new-app && pnpm init

# Create a new package
mkdir packages/my-package && cd packages/my-package && pnpm init
\`\`\`

---

## 🔁 CI/CD

\`\`\`yaml
# Only builds and tests what changed
- run: pnpm turbo build test lint --filter=[HEAD^1]
\`\`\`

Remote caching is configured via [Vercel Remote Cache](https://turbo.build/repo/docs/core-concepts/remote-caching).

---

## 🤝 Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). All changes must pass CI before merging.

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },

  // ─────────────────────────────────────────────
  // 12. DESIGN SYSTEM
  // ─────────────────────────────────────────────
  {
    id: "design-system",
    name: "Design System / Component Library",
    description:
      "For shared UI libraries. Covers Storybook, tokens, theming, components, and publishing.",
    category: "Design System",
    content: `
<div align="center">
  <img src="https://via.placeholder.com/150" alt="Logo" width="150" />

  # 🎨 DesignSystem Name

  <p>A themeable, accessible React component library for <em>your product family</em>.</p>

  <img src="https://img.shields.io/npm/v/@yourorg/design-system.svg?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/badge/storybook-published-FF4785?style=flat-square&logo=storybook" alt="Storybook" />
  <img src="https://img.shields.io/badge/a11y-WCAG%202.1%20AA-blue?style=flat-square" alt="Accessibility" />
  <img src="https://img.shields.io/github/license/username/design-system.svg?style=flat-square" alt="License" />
</div>

---

## 📑 Table of Contents

- [About](#-about)
- [How It Works](#-how-it-works)
- [Real-World Use Cases](#-real-world-use-cases)
- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Usage](#-usage)
- [Design Tokens](#-design-tokens)
- [Components](#-components)
- [Theming](#-theming)
- [Storybook](#-storybook)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Versioning](#-versioning)
- [License](#-license)

---

## 🧾 About

> **Tagline** — One sentence describing what this library provides.

2–3 sentences: what products consume this library, what consistency problem it solves, and who maintains it.

Example:
> DesignSystem Name is the shared component library and visual language for all web products at CompanyName. It replaces ad-hoc component duplication across four apps with a single, versioned source of truth — so a button change ships everywhere at once, and every product automatically passes accessibility audits.

---

## ⚙️ How It Works

\`\`\`
Design Tokens (colors, spacing, typography)
        │
        ▼
Base Components (built on Radix UI primitives)
        │
        ▼
Composed Components (Form, DataTable, Modal...)
        │
        ▼
ThemeProvider (injects CSS custom properties at runtime)
        │
        ▼
Consumer App wraps in <ThemeProvider> → consistent UI
\`\`\`

1. **Tokens:** Design decisions are encoded as CSS custom properties, not hardcoded values in components.
2. **Primitives:** Low-level components handle accessibility (ARIA, keyboard nav) via Radix UI.
3. **Composed Components:** Higher-level components combine primitives for common patterns (forms, tables, modals).
4. **Theming:** \`ThemeProvider\` swaps the token values at runtime — dark mode, custom brand colors, and whitelabeling all work the same way.

---

## 💼 Real-World Use Cases

- **Multi-product Companies:** A shared library means the same Button renders identically across the marketing site, the app, and the admin dashboard — with no copy-paste.
- **Design-Dev Handoff:** Designers define tokens in Figma; developers consume the same values via CSS custom properties. No more "that's not quite the right shade of blue."
- **Whitelabeling / SaaS:** Customers get a branded experience by passing a custom theme object to \`ThemeProvider\` — no forking required.
- **Accessibility Compliance:** Build WCAG 2.1 AA compliance into the library once, and every product inherits it automatically.

---

## ✨ Features

- 40+ accessible, composable React components
- Built on Radix UI primitives
- Design tokens for color, spacing, and typography
- Full dark mode via CSS custom properties
- Tree-shakeable — only import what you use
- TypeScript-first with full type exports
- WCAG 2.1 AA compliant

---

## 📦 Installation

\`\`\`bash
npm install @yourorg/design-system

# Peer dependencies
npm install react react-dom
\`\`\`

---

## 🚀 Quick Start

\`\`\`tsx
import { ThemeProvider, Button, Card } from "@yourorg/design-system";
import "@yourorg/design-system/styles.css";

function App() {
  return (
    <ThemeProvider theme="light">
      <Card>
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </Card>
    </ThemeProvider>
  );
}
\`\`\`

---

## 💡 Usage

### Importing components

\`\`\`tsx
import { Button, Input, Modal, Toast } from "@yourorg/design-system";
\`\`\`

### Button variants

\`\`\`tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive" size="sm">Delete</Button>
\`\`\`

### Form example

\`\`\`tsx
import { Input, Label, Button } from "@yourorg/design-system";

function LoginForm() {
  return (
    <form>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
      <Button type="submit" variant="primary">Sign In</Button>
    </form>
  );
}
\`\`\`

### Opening a Modal

\`\`\`tsx
import { Modal, Button } from "@yourorg/design-system";

function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Confirm Action">
        Are you sure you want to continue?
      </Modal>
    </>
  );
}
\`\`\`

> 📖 See all components in [Storybook](https://storybook.yourorg.com)

---

## 🎨 Design Tokens

\`\`\`css
:root {
  --color-primary-500: #3b82f6;
  --color-neutral-900: #111827;
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  --font-size-base: 1rem;
  --radius-md: 0.5rem;
}
\`\`\`

---

## 🧩 Components

| Component   | Description                     | Status    |
| ----------- | ------------------------------- | --------- |
| Button      | Clickable actions               | ✅ Stable  |
| Input       | Text input with validation      | ✅ Stable  |
| Select      | Dropdown selection              | ✅ Stable  |
| Modal       | Overlay dialogs                 | ✅ Stable  |
| Toast       | Notification messages           | ✅ Stable  |
| DataTable   | Sortable, filterable tables     | 🚧 Beta   |
| DatePicker  | Calendar date selection         | 🚧 Beta   |
| CommandMenu | ⌘K command palette             | 📋 Planned |

---

## 🎨 Theming

\`\`\`tsx
// Built-in themes
<ThemeProvider theme="dark">...</ThemeProvider>

// Custom brand colors
<ThemeProvider theme={{ colors: { primary: { 500: "#7c3aed" } } }}>
  ...
</ThemeProvider>
\`\`\`

---

## 📖 Storybook

\`\`\`bash
npm run storybook          # Run locally
npm run storybook:build    # Build static Storybook
\`\`\`

Live: [https://storybook.yourorg.com](https://storybook.yourorg.com)

---

## 📂 Project Structure

\`\`\`
design-system/
├── tokens/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── Button.test.tsx
│   │   └── ...
│   ├── hooks/
│   └── index.ts
├── .storybook/
└── package.json
\`\`\`

---

## 🤝 Contributing

New components require:
- [ ] TypeScript types and JSDoc comments
- [ ] Storybook stories (default, all variants, edge cases)
- [ ] Unit tests (≥ 80% coverage)
- [ ] ARIA roles and keyboard navigation
- [ ] Export added to \`src/index.ts\`

\`\`\`bash
npm run dev
npm run test
npm run a11y
\`\`\`

---

## 🔢 Versioning

This project follows [Semantic Versioning](https://semver.org). See [CHANGELOG.md](CHANGELOG.md).

\`\`\`bash
npm run release    # Maintainers only
\`\`\`

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
`.trim(),
  },
];
