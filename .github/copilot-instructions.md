🤖 GitHub Copilot Instructions
Creator Platform (Production-Grade · No Patch Policy)
1. Project Context

This repository contains a Creator Commerce Platform similar to Stan Store / SuperProfile, designed to allow:

Creators to build storefronts

Sell digital products & courses

Offer subscriptions

Use a drag-and-drop store builder

Run a public marketplace with featured, top-selling, and sponsored products

Support checkout, orders, earnings, CRM, and admin tools

Be future-ready for ads, payments, analytics, and scale

This is NOT a demo project.
All generated code must be production-aligned, scalable, and maintainable.

2. Absolute Rule: Proper Fixes Only (NON-NEGOTIABLE)

Copilot must NEVER apply patch-style fixes.

❌ Forbidden

Temporary workarounds

Band-aid fixes

Silent error swallowing

Defensive null checks added everywhere

Hardcoded fallbacks to hide bugs

Commenting out broken logic

“Quick fixes” that avoid root cause

Weakening types to silence errors

as any, as unknown as X

TODO-based production logic

✅ Required

Identify the root cause

Fix the issue at the correct architectural layer

Update types, validation, and contracts

Refactor related code if necessary

Keep behavior consistent across FE & BE

Remove obsolete or incorrect logic

If a fix looks like a patch, it is wrong.

3. Tech Stack (STRICT)
Frontend

Next.js 16 (App Router)

TypeScript (strict mode, no any)

Tailwind CSS 4

Zustand for state management

Server & Client Components separation

Centralized theme & design tokens

Backend

Node.js + TypeScript

Fastify (preferred) or Express

REST APIs under /api/v1

Layered architecture:

Controller → Service → Repository

JWT-based authentication

Mock database (in-memory or JSON files)

4. Global Coding Standards

Copilot MUST:

Follow SOLID principles

Separate concerns cleanly

Write reusable, composable code

Use meaningful naming

Prefer clarity over cleverness

Optimize for long-term maintainability

Copilot MUST NOT:

Mix UI, business logic, and data access

Create monolithic components

Hardcode configuration or business rules

5. Frontend Architecture Rules
Folder Structure
app/
components/
features/
stores/
services/api/
hooks/
styles/
types/
utils/

UI / UX Rules

Mobile-first

Premium, clean, modern UX

Smooth micro-interactions

Skeleton loaders instead of spinners

Accessibility first (ARIA, focus, contrast)

Checkout UX must be frictionless

State Management

Use Zustand only, with separate stores for:

Auth

Theme

Store Builder

Cart / Checkout

Notifications

6. Centralized Theme & Styling (MANDATORY)

Copilot MUST:

Never hardcode colors in components

Use centralized theme tokens

Support:

Light / Dark / Auto theme

Multiple color palettes

Font switching

Allow entire site theme change from one config

7. Marketplace Requirements

Copilot must support:

Marketplace Sections

Featured products

New arrivals

Top most bought products

Trending products (sales-based)

Sponsored products (ads-ready)

Sponsored Products (Ads Perspective)

Clear “Sponsored” badge

Separate flag or data source

Priority ordering logic

Admin configurable

Pricing model placeholders (CPC / CPM / Flat)

Ads logic isolated from core product logic

8. Product & Course Rules
Product Types

Digital Product

Course

Subscription

Course Features

Curriculum structure

Sections & lessons

Lesson ordering

Progress tracking (mock)

Locked content for unpaid users

Resume last lesson

Certificate placeholder

Courses must be treated as first-class products, not add-ons.

9. Checkout & Orders
Checkout

Copilot must implement:

Dedicated checkout page

One-click checkout option

Optional product details page before checkout

Guest checkout

Logged-in checkout

Coupon UI (logic ready)

Success & failure flows

Mobile-optimized UX

Orders

Order lifecycle management

Buyer order history

Creator earnings dashboard

Revenue aggregation (mock)

Payment provider abstraction (Stripe-ready)

10. Backend Architecture Rules
Folder Structure
src/
  modules/
    auth/
    products/
    courses/
    orders/
    marketplace/
    ads/
  common/
    middleware/
    utils/
    config/
  data/        # mock DB

Mock Database Rules

In-memory or JSON file based

Repository abstraction required

No direct data access in services

Must be easily replaceable with Mongo/Postgres later

11. API Standards

RESTful endpoints

/api/v1

Consistent response format:

{
  "success": true,
  "data": {},
  "error": null
}


Explicit error handling

Validation at API boundaries

No silent failures

12. Authentication & Roles
Roles

User

Creator

Admin

Rules

JWT-based authentication

Role-based access control

Protected routes

Admin-only APIs for:

Sponsored products

Platform settings

Revenue & analytics

13. Fixing & Refactoring Rules

When fixing a bug, Copilot MUST:

Identify the root cause

Fix it at the correct layer

Update types and contracts

Refactor related logic if needed

Remove dead or incorrect code

Keep system behavior consistent

Copilot MUST NOT:

Add defensive hacks

Add unnecessary optional chaining

Silence errors to “make it work”

14. Performance & Quality

Copilot must:

Use dynamic imports where needed

Optimize images via Next.js Image

Prevent unnecessary re-renders

Follow SEO best practices

Use error boundaries properly

15. Testing Readiness

All code must be:

Unit-test friendly

Integration-test friendly

Deterministic

Mockable

Free from hidden dependencies

16. Documentation Expectations

Copilot should:

Comment complex logic clearly

Avoid obvious comments

Update docs when behavior changes

Keep README / SETUP guides accurate

17. Final Enforcement Instruction

Copilot must behave like a senior staff engineer building a real SaaS product expected to run and evolve for 5+ years.

Correctness, architecture, and maintainability always win over speed.