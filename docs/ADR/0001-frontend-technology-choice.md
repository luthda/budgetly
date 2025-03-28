# ADR-001: Frontend Technology Choice - React + Vite

**Date:** 2025-03-28  
**Status:** Accepted  
**Decider:** [Your Name]  
**Stakeholders:** [Your Name as Project Owner]

---

## Context and Problem Statement

The budgeting tool project aims to deliver a lightweight, intuitive, and maintainable application optimized for mobile web users. Initially, Next.js was considered due to its built-in features like SSR and API routes. However, since server-side rendering (SSR) and static site generation (SSG) are not required, Next.js may introduce unnecessary complexity and potential vendor lock-in.

We need a frontend solution that is:

- Simple and lightweight.
- Flexible without unnecessary complexity.
- Free of strong vendor lock-in.
- Fast and responsive on mobile devices.

---

## Options Considered

| Option                 | Pros                                                                                     | Cons                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Next.js**            | ✅ Built-in SSR/SSG, rapid development<br>✅ Rich ecosystem                              | ❌ Overkill for simple app<br>❌ Potential vendor lock-in |
| **React + Vite (SPA)** | ✅ Lightweight, rapid setup<br>✅ Simple architecture, less lock-in<br>✅ Widely adopted | ❌ Requires separate backend/API setup                    |
| **Svelte / SvelteKit** | ✅ Highly performant and simple<br>✅ Growing adoption                                   | ❌ Smaller ecosystem<br>❌ Learning curve if unfamiliar   |

---

## Decision

We choose **React with Vite** as our frontend framework.

---

## Rationale

- **Simplicity and Speed**: Vite significantly speeds up development and build times compared to traditional build tools.
- **Reduced Complexity**: Avoiding Next.js removes unnecessary features (SSR/SSG) and complexity.
- **Minimal Lock-In**: React + Vite provides flexibility, minimal lock-in, and clear separation of concerns.
- **Ecosystem and Support**: React and Vite have strong communities, extensive resources, and widespread adoption.

---

## Implications

- Separate backend API required (e.g., Node.js/Express).
- Routing managed via React Router instead of built-in Next.js routing.
- Authentication will rely on standalone services like Clerk or Auth0 rather than NextAuth.js.
- Static hosting providers such as Netlify or Cloudflare Pages recommended for frontend deployment.

---

## Risks and Mitigation

| Risk                            | Impact | Mitigation                                                                                        |
| ------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| **Separate Backend Complexity** | Medium | Clearly define backend API early; choose well-documented, simple backend frameworks like Express. |
| **Authentication Complexity**   | Medium | Adopt a reliable third-party authentication solution (Clerk/Auth0) to minimize complexity.        |

---

## Next Steps

- Implement initial React + Vite project structure.
- Set up routing (React Router) and styling (Tailwind CSS).
- Define and implement backend integration points clearly.
