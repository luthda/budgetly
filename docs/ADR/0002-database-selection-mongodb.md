# ADR-002: Database Selection - MongoDB

**Date:** 2025-03-28  
**Status:** Accepted  
**Decider:** [Your Name]  
**Stakeholders:** [Your Name as Project Owner]

---

## Context and Problem Statement

We need a database suitable for our budgeting app, which prioritizes simplicity, flexibility, and rapid development. Initial considerations included PostgreSQL due to its strong relational capabilities. However, given our low relational complexity, we are reconsidering a NoSQL alternative, specifically MongoDB, to complement the MEAN stack (MongoDB, Express, Angular/React, Node.js).

---

## Options Considered

| Option         | Pros                                                     | Cons                                       |
| -------------- | -------------------------------------------------------- | ------------------------------------------ |
| **PostgreSQL** | ✅ Data integrity, relational queries, analytics support | ❌ Schema migrations, relational overhead  |
| **MongoDB**    | ✅ Flexibility, rapid prototyping, JSON compatibility    | ❌ Less intuitive for relational analytics |

---

## Decision

We select **MongoDB** as our database solution.

---

## Rationale

- **Flexibility & Rapid Development**: MongoDB's schema flexibility accelerates development and prototyping.
- **MEAN Stack Compatibility**: Seamless integration into Node.js/Express environment.
- **JSON-Based Data Storage**: Excellent compatibility with frontend JavaScript frameworks.
- **Low Relational Complexity**: Our app's simplicity means we won't extensively leverage relational database benefits.

---

## Implications

- Analytics and aggregation queries will require careful planning.
- Application-side data integrity checks become critical.
- Reduced complexity around database schema management.

---

## Risks and Mitigations

| Risk                     | Impact | Mitigation                                        |
| ------------------------ | ------ | ------------------------------------------------- |
| **Data Consistency**     | Medium | Implement strict validation rules in backend APIs |
| **Analytics Complexity** | Medium | Leverage MongoDB aggregation pipeline clearly     |

---

## Next Steps

- Set up MongoDB Atlas for managed, cloud-hosted database.
- Define initial schema structures clearly in project documentation.
