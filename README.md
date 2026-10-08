# Tayyab.VA — Professional Virtual Assistant Website

A multi-page, dark-themed portfolio and lead-generation website for **Tayyab**, a professional Virtual Assistant based in **Lahore, Pakistan**. The site presents his services, pricing, working process, skills, certifications, tools and client reviews, and gives international clients several easy ways to get in touch.

Built with plain **HTML, CSS and vanilla JavaScript**. No framework, no build step and no package manager are needed.

---

## Table of Contents

1. [Overview](#1-overview)
2. [Pages](#2-pages)
3. [Page Details](#3-page-details)
4. [Services and Pricing](#4-services-and-pricing)
5. [Skills, Languages and Certifications](#5-skills-languages-and-certifications)
6. [Tools and Platforms](#6-tools-and-platforms)
7. [Working Process and FAQ](#7-working-process-and-faq)
8. [Client Reviews](#8-client-reviews)
9. [Tech Stack](#9-tech-stack)
10. [Project Structure](#10-project-structure)
11. [JavaScript and CSS Modules](#11-javascript-and-css-modules)
12. [Media Files](#12-media-files)
13. [Design System](#13-design-system)
14. [Features](#14-features)
15. [Running Locally and Deployment](#15-running-locally-and-deployment)
16. [Contact Information](#16-contact-information)

---

## 1. Overview

| Item | Details |
|------|---------|
| Brand | Tayyab.VA |
| Owner | Tayyab, Virtual Assistant |
| Location | Lahore, Punjab, Pakistan |
| Timezone | Pakistan Standard Time (PKT, UTC+5) |
| Working days | Monday to Saturday |
| Working hours | 9:00 AM to 9:00 PM PKT |
| Target clients | Entrepreneurs, coaches, consultants, agencies and small business owners in the USA, UK, Australia, Canada, UAE, Europe and beyond |
| Languages | English (professional proficiency), Urdu (native) |
| Site type | Static multi-page website (9 pages) |
| Main goal | Present services and build trust, then convert visitors into enquiries via the contact form, WhatsApp or email |

---

## 2. Pages

| # | File | Page | Purpose |
|---|------|------|---------|
| 1 | `index.html` | Home | Hero with intro video, stats, services overview, "Who Is Tayyab?", testimonials, call to action |
| 2 | `about.html` | About | Personal story, values, skill bars, languages, certifications preview |
| 3 | `services.html` | Services | All 7 service areas in detail and 3 pricing plans |
| 4 | `how-it-works.html` | How It Works | 5-step process timeline and FAQ accordion |
| 5 | `why-me.html` | Why Me | Comparison table, client commitments, key stats, personal note |
| 6 | `skills.html` | Skills | Technical skills, professional qualities, languages, 13 certifications |
| 7 | `tools.html` | Tools | 8 categories of tools with proficiency levels |
| 8 | `portfolio.html` | Portfolio | 12 client reviews with service filter |
| 9 | `contact.html` | Contact | Contact details and enquiry form |
| – | `sitemap.xml` | Sitemap | URLs and priorities for search engines |
| – | `robots.txt` | Robots | Crawler rules and sitemap location |

---

## 3. Page Details

### Home (`index.html`)

| Section | Content |
|---------|---------|
| Hero | "Hi, I'm Tayyab. Virtual Assistant." with an availability badge, short pitch, a typing effect listing the services currently handled, and two buttons (Work With Me, View My Work). The profile photo has a play button that opens a 10-second intro video in a popup. Two floating cards show "5-Star Rated VA" and "20+ Hours Saved Per Client Weekly". |
| Stats strip | 20+ hours saved per client weekly, 24h response time, 6 core service areas, 100% remote worldwide |
| What I Do For You | Service cards with a short description and a Learn More link |
| Who Is Tayyab? | Profile photo, short bio, location, languages, timezone and a link to the full story |
| What Clients Say | 3 featured reviews and a link to all reviews |
| Final call to action | "Ready to Delegate and Focus on Growth?" with a button to book a free discovery call |

### About (`about.html`)

| Section | Content |
|---------|---------|
| Sidebar | Photo, name, title, location, working hours and availability badge (sticky on desktop) |
| My Story | Four paragraphs on background, motivation and approach |
| My Values | Reliability, Quality, Communication |
| Skill Proficiency | 8 animated skill bars (see table in section 5) |
| Languages | English and Urdu |
| Certifications | Timeline preview of 4 certifications and a link to all 13 |

### Services (`services.html`)

Seven numbered service blocks (what is included, platforms, best for, enquiry button) followed by three pricing cards and a free consultation call to action. Full details are in section 4.

### How It Works (`how-it-works.html`)

Zig-zag timeline of 5 steps and an 8-question FAQ accordion. Full details are in section 7.

### Why Me (`why-me.html`)

| Section | Content |
|---------|---------|
| Comparison table | Tayyab vs hiring in-house vs a random freelancer across 10 features |
| Commitments | 6 cards (24-hour response, unlimited revisions, strict confidentiality, on-time delivery, proactive communication, quality before delivery) |
| Big stats | Animated counters |
| A Note From Tayyab | Personal statement and a button to start a conversation |

Comparison table:

| Feature | Hiring In-House | Random Freelancer | Tayyab |
|---------|-----------------|-------------------|--------|
| Monthly cost | $2,000–5,000 | Varies widely | $100–$300 per month |
| Response speed | Business hours | Unpredictable | Within 4 hours |
| Onboarding time | 2–4 weeks | 1–2 weeks | 24–48 hours |
| Confidentiality | Contract-bound | Sometimes | NDA always available |
| Communication style | In-person | Email-only | Daily updates, your channel |
| Flexibility | Fixed schedule | Limited | Fully flexible |
| Revision policy | N/A | Limited | Unlimited revisions |
| Service range | Single role | Usually 1–2 | 7 complete service areas |
| Long-term commitment | Required | Varies | Month-to-month, no lock-in |
| Timezone coverage | Local only | Limited | PKT, covers USA/UK/AU |

Key stats:

| Number | Label |
|--------|-------|
| 50+ | Tasks handled per month |
| 15+ | Clients served to date |
| 20 | Hours saved per client per week |
| 4 hrs | Average response time |

### Skills (`skills.html`), Tools (`tools.html`), Portfolio (`portfolio.html`)

Covered in sections 5, 6 and 8.

### Contact (`contact.html`)

Two columns: contact details on the left, enquiry form on the right.

| Contact detail | Value |
|----------------|-------|
| Location | Lahore, Punjab, Pakistan |
| Timezone | Pakistan Standard Time (UTC+5) |
| Availability | Monday to Saturday |
| Working hours | 9:00 AM to 9:00 PM PKT |
| Response time | Within 24 hours |
| Email | ichbintayyab@gmail.com |
| WhatsApp | +92 312 4581964 |

Enquiry form fields:

| Field | Type | Required | Options |
|-------|------|----------|---------|
| Full Name | Text | Yes | – |
| Email Address | Email | Yes | – |
| Company or Business | Text | No | – |
| Country | Dropdown | Yes | Australia, Canada, France, Germany, India, Ireland, Pakistan, Spain, United Arab Emirates, United Kingdom, United States, Other |
| Service Needed | Dropdown | Yes | Social Media Management, Email Management, Data Entry and Research, Content Creation, Professional Writing, Executive Assistance, Recruitment and HR Support, Multiple Services / Custom Package |
| Budget Range | Dropdown | Yes | $100–150 per month, $150–200 per month, $200–300 per month, $25 per day (pay as you go), Fixed price project, Not sure yet |
| Hours Needed Per Week | Dropdown | Yes | Less than 5, 5 to 10, 10 to 20, More than 20, Discuss based on workload |
| Message / Project Description | Textarea | Yes | – |

On submit, the form is replaced by a "Message Received" confirmation with a button to send another message. A "Book a Free 15-Minute Discovery Call" button scrolls to the form.

---

## 4. Services and Pricing

### Services

| # | Service | What is included | Platforms / tools | Best for |
|---|---------|------------------|-------------------|----------|
| 01 | **Social Media Management** | Monthly content calendar, Canva post design, captions and hashtags, scheduling, comment and DM replies, growth strategy, monthly analytics report | Instagram, Facebook, LinkedIn, TikTok, Pinterest; Buffer, Hootsuite | Coaches, creators, small businesses |
| 02 | **Email Management** | Daily inbox triage, categorization and folders, replies on your behalf, custom templates, follow-up sequences, spam and unsubscribe cleanup, CRM updates, weekly summary | Gmail, Outlook | Founders and consultants drowning in email |
| 03 | **Data Entry and Research** | Accurate data entry, web research, lead lists with contact details, data cleaning and duplicate removal, competitor research, market research reports, database maintenance, spreadsheet formatting and formulas | Google Sheets, Excel, CRMs | Sales teams, agencies, researchers |
| 04 | **Content Creation** | SEO-aware blog posts, social captions, newsletters, website copy, product descriptions, Canva graphics, content calendar, proofreading and editing | Canva, Google Docs | Businesses that need regular content |
| 05 | **Professional Writing** | Business proposals, cold email campaigns and sequences, sales and marketing copy, executive summaries and reports, business correspondence, LinkedIn profile copy, pitch deck text, ghostwriting | Google Docs, Word | Agencies and founders needing persuasive writing |
| 06 | **Executive Assistance** | Calendar management, meeting scheduling, travel planning, document preparation, expense tracking, invoicing and follow-up, CRM setup, meeting notes and action items, vendor research, basic bookkeeping, task tracking, personal admin | Google/Outlook calendar, HubSpot, Zoho, QuickBooks, Trello, Asana | Executives and business owners |
| 07 | **Recruitment and HR Support** | Job posting creation and distribution, resume screening, candidate shortlisting, interview scheduling, candidate communication, reference checks, onboarding documents, new hire checklist and welcome pack | LinkedIn, Indeed, Calendly | Founders and small teams without an HR department |

### Pricing plans

Monthly plans range from **$100 to $300**. For short-term needs there is a pay-as-you-go option at **$25 per day**.

| | **Starter** | **Professional** (Most Popular) | **Premium** |
|---|---|---|---|
| Price | $100 / month | $200 / month | $300 / month |
| Hourly option | $5 / hour | $4 / hour | – |
| For | Individuals and solopreneurs | Small business owners | Executives and agencies |
| Hours | Up to 20 hours/month | Up to 50 hours/month | Up to 80 hours/month |
| Service areas | 1 core service area | Up to 3 service areas | All 7 services |
| Support | Email support | Priority response | Same-day response |
| Check-ins | Weekly check-in | Daily check-ins | Dedicated availability |
| Extras | – | Monthly report | NDA included |

---

## 5. Skills, Languages and Certifications

### Skill proficiency (About page)

| Skill | Level |
|-------|-------|
| English Communication | 92% |
| Time Management | 96% |
| Social Media Management | 88% |
| Email Management | 94% |
| Content Writing | 86% |
| Data Entry Accuracy | 98% |
| Client Communication | 93% |
| Tool Adaptability | 90% |

### Technical competencies (Skills page)

| Skill | Level | Skill | Level |
|-------|-------|-------|-------|
| Social Media Management | 88% | Business Writing | 89% |
| Email Management | 94% | Market and Lead Research | 90% |
| Content Writing | 86% | Video Conferencing Tools | 96% |
| Canva Design | 84% | Google Workspace Suite | 95% |
| Data Entry and Research | 97% | Microsoft Office Suite | 88% |
| Project Management Tools | 91% | Administrative Tasks | 93% |
| CRM Management | 82% | Client Communication | 95% |
| Email Marketing Platforms | 85% | Recruitment and Candidate Screening | 87% |
| WordPress Management | 78% | Bookkeeping and Invoicing | 85% |

### Professional qualities

Professional Communication, Time Management and Prioritization, Attention to Detail, Confidentiality and Discretion, Self-Motivation (Remote), Adaptability, Problem Solving, Client Relationship Management.

### Languages

| Language | Level |
|----------|-------|
| English | Professional working proficiency |
| Urdu | Native / full professional proficiency |

### Certifications (13)

| # | Issuer | Certification | Focus |
|---|--------|---------------|-------|
| 1 | Alison | Virtual Assistant Diploma | VA fundamentals, administrative support, scheduling, remote work |
| 2 | Coursera / Google | Google Project Management Certificate | Agile, Scrum, stakeholder communication |
| 3 | HubSpot Academy | Social Media Marketing Certification | Platform strategy, content planning, community management, analytics |
| 4 | HubSpot Academy | Email Marketing Certification | Segmentation, email copywriting, automation, deliverability |
| 5 | HubSpot Academy | Content Marketing Certification | Content strategy, editorial planning, SEO basics, performance |
| 6 | Google Digital Garage | Digital Marketing Fundamentals | Search, social, email and analytics |
| 7 | DigiSkills Pakistan | Virtual Assistant Training Course | VA training for Pakistani remote workers |
| 8 | Hootsuite Academy | Hootsuite Platform Certification | Scheduling, monitoring, reporting, team collaboration |
| 9 | Canva (Official Course) | Canva Design Fundamentals | Social graphics, presentations, brand kits |
| 10 | LinkedIn Learning | Administrative Professional Certificate | Calendar management, business writing, document management |
| 11 | Coursera / University of Colorado | Business Writing Certificate | Emails, reports, proposals, tone and clarity |
| 12 | LinkedIn Learning | Time Management Fundamentals | Prioritization, time blocking, remote workload |
| 13 | HubSpot Academy | CRM and HubSpot Platform | Contact management, deal tracking, pipeline reporting |

Currently learning: AI Workflow Tools, Advanced CRM Automation, SEO Content Strategy.

---

## 6. Tools and Platforms

| Category | Tools (proficiency) |
|----------|---------------------|
| Communication and Collaboration | Slack (Expert), Zoom (Expert), Google Meet (Expert), Microsoft Teams (Advanced), WhatsApp Business (Expert), Skype (Intermediate) |
| Email Platforms | Gmail (Expert), Outlook (Advanced), Apple Mail (Intermediate), Yahoo Mail (Advanced) |
| Project and Task Management | Trello (Expert), Notion (Advanced), Asana (Advanced), ClickUp (Intermediate), Monday.com (Intermediate), Basecamp (Intermediate) |
| Design and Content Creation | Canva (Advanced), Adobe Express (Intermediate), Google Slides (Expert), Loom (Advanced), Veed.io (Intermediate) |
| Social Media Management | Buffer (Advanced), Hootsuite (Advanced), Meta Business Suite (Expert), Later (Intermediate), LinkedIn Campaign Manager (Intermediate) |
| Data and Office Tools | Google Sheets (Expert), Microsoft Excel (Advanced), Google Docs (Expert), Microsoft Word (Expert), Airtable (Intermediate), HubSpot CRM (Intermediate), Zoho CRM (Beginner) |
| AI and Writing Tools | ChatGPT (Expert), Claude AI (Expert), Grammarly (Expert), Hemingway Editor (Advanced), Jasper AI (Intermediate) |
| Recruitment and HR Tools | LinkedIn Recruiter (Advanced), Indeed (Expert), Calendly (Expert), BambooHR (Intermediate), QuickBooks (Intermediate) |

New tools not listed are learned systematically (documentation, key functions, practice) and reached proficiency within 1–3 business days.

---

## 7. Working Process and FAQ

### 5-step process

| Step | Timing | Title | What happens |
|------|--------|-------|--------------|
| 1 | Day 1 | You Reach Out | Message via the contact form, WhatsApp or email. No formal brief needed. |
| 2 | Day 1–2 | Free 15-Minute Call | Short video call on Zoom or Google Meet to understand needs and bottlenecks. |
| 3 | Day 2–3 | Clear Proposal | Written proposal within 24 hours: services, scope, deliverables, pricing, expected outcomes. |
| 4 | Day 3–5 | Quick Onboarding | Shared tools, access, communication channels and workflow preferences set up. Most clients are operational in under 48 hours. |
| 5 | Day 5 onward | Tasks Handled | Daily progress updates and a weekly summary report every Friday (work done, hours used, upcoming tasks). |

### FAQ

| Question | Answer |
|----------|--------|
| What are your working hours? | Monday to Saturday, 9 AM to 9 PM PKT (UTC+5). Client time zones are accommodated where possible. |
| How do we communicate daily? | Slack, email or WhatsApp, whichever the client prefers, plus a weekly summary every Friday. |
| Which payment methods do you accept? | Payoneer, Wise and direct bank transfer. Upwork and Fiverr are supported for clients hiring through those platforms. |
| Can I hire you for just a few hours? | Yes. Flexible hourly arrangements with no minimum contract for new clients, plus a pay-as-you-go option at $25 per day. Trial projects are welcome. |
| Do you sign an NDA? | Yes, an NDA can be signed before any work begins. |
| What tools do I need to give access to? | Only the tools relevant to the service, with credentials documented securely. |
| How quickly can you start? | Within 24–48 hours of onboarding. A same-day start is possible in some cases. |
| What if I am not satisfied? | Unlimited revisions. The arrangement can be ended with 3 days notice, with no lock-in. |

---

## 8. Client Reviews

The Portfolio page lists **12 five-star reviews** with the client's name, country, profession, service, a "Verified Client" label, the review text and the date. Reviews can be filtered by service.

| Filter | Reviews |
|--------|---------|
| All | 12 |
| Social Media | 3 |
| Email Management | 1 |
| Content Creation | 2 |
| Data Entry | 2 |
| Executive Assistance | 2 |
| Professional Writing | 2 |

Clients are from the United States, United Kingdom, Australia, Canada, India, Spain, United Arab Emirates, France and Ireland. The Home page features 3 of these reviews.

---

## 9. Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 with custom properties, Grid, Flexbox and glassmorphism cards |
| Scripting | Vanilla JavaScript (modular files) |
| Animation | GSAP 3.12.5 and ScrollTrigger (CDN) |
| Smooth scroll | Lenis 1.0.42 (CDN) |
| Text effect | Splitting.js 1.0.6 (CDN, home page) |
| Fonts | Google Fonts: Sora (headings), Inter (body), JetBrains Mono (labels) |

---

## 10. Project Structure

```
/
├── index.html
├── about.html
├── services.html
├── how-it-works.html
├── why-me.html
├── skills.html
├── tools.html
├── portfolio.html
├── contact.html
├── sitemap.xml
├── robots.txt
├── README.md
└── assets/
    ├── css/
    │   ├── variables.css
    │   ├── reset.css
    │   ├── global.css
    │   ├── nav.css
    │   ├── footer.css
    │   ├── transitions.css
    │   ├── animations.css
    │   └── responsive.css
    ├── js/
    │   ├── main.js
    │   ├── nav.js
    │   ├── transitions.js
    │   ├── animations.js
    │   ├── accordion.js
    │   ├── counter.js
    │   ├── filter.js
    │   ├── form.js
    │   └── typing.js
    ├── images/
    │   ├── tayyab-profile.png
    │   ├── tayyab-about.png
    │   ├── logo.svg
    │   ├── favicon.ico
    │   ├── og-image.jpg
    │   └── clients/
    └── videos/
        └── tayyab-intro.mp4
```

Every page shares the same navigation bar, mobile menu, footer and floating WhatsApp button, and loads the shared CSS files. Page-specific styles are in a `<style>` block inside each page.

---

## 11. JavaScript and CSS Modules

### JavaScript (`assets/js/`)

| File | Used on | What it does |
|------|---------|--------------|
| `main.js` | All pages | Registers GSAP ScrollTrigger and starts Lenis smooth scrolling |
| `nav.js` | All pages | Sticky navbar style on scroll, active-link highlight, hamburger menu and slide-in overlay |
| `transitions.js` | All pages | Hides the page loader, fades page content in, adds fade transitions between pages |
| `animations.js` | All pages | Scroll-reveal with stagger, skill bar fills, timeline node pop, magnetic buttons, hero text split animation |
| `accordion.js` | How It Works | FAQ accordion (one item open at a time, `aria-expanded` support) |
| `counter.js` | Home, Why Me | Animated number counters triggered on scroll |
| `filter.js` | Portfolio | Filters review cards by service with a fade effect |
| `form.js` | Contact | Handles form submission and shows the confirmation message |
| `typing.js` | Home | Typing effect that cycles through the 7 service names |

### CSS (`assets/css/`)

| File | Purpose |
|------|---------|
| `variables.css` | Colors, fonts, type scale, spacing, radius and easing tokens |
| `reset.css` | CSS reset and reduced-motion rules |
| `global.css` | Base styles, containers, buttons, glass cards, chips, badges, forms, WhatsApp button |
| `nav.css` | Navbar, hamburger and mobile overlay |
| `footer.css` | Footer grid |
| `transitions.css` | Page loader and page transition overlay |
| `animations.css` | Skill bars, floating cards, typing cursor |
| `responsive.css` | Shared breakpoint overrides |

---

## 12. Media Files

| File | Folder | Size | Used on |
|------|--------|------|---------|
| `tayyab-profile.png` | `assets/images/` | 1200 × 1200 (1:1) | Home hero and "Who Is Tayyab?" |
| `tayyab-about.png` | `assets/images/` | 1200 × 1500 (4:5) | About page sidebar |
| `tayyab-intro.mp4` | `assets/videos/` | 1080 × 1080, about 10 seconds | Hero intro video popup |
| `og-image.jpg` | `assets/images/` | 1200 × 630 | Social sharing preview (all pages) |
| `favicon.ico` | `assets/images/` | 32 × 32 | Browser tab icon (all pages) |
| `logo.svg` | `assets/images/` | Vector | Brand logo |

### Client photos (`assets/images/clients/`, 200 × 200 px)

| Client | File |
|--------|------|
| Sarah Mitchell | `sarah-mitchell.jpg` |
| James Thornton | `james-thornton.jpg` |
| Maria Santos | `maria-santos.jpg` |
| David Okafor | `david-okafor.jpg` |
| Priya Sharma | `priya-sharma.jpg` |
| Tom Harrington | `tom-harrington.jpg` |
| Emma Clarke | `emma-clarke.jpg` |
| Lucas Fernandez | `lucas-fernandez.jpg` |
| Nadia Al-Hassan | `nadia-al-hassan.jpg` |
| Michael Chen | `michael-chen.jpg` |
| Isabelle Martin | `isabelle-martin.jpg` |
| Ryan O'Brien | `ryan-o-brien.jpg` |

### Intro video script (about 10 seconds)

> "Hi, I'm Tayyab, a virtual assistant from Pakistan. I help business owners save time by handling daily digital tasks. Let's work together!"

---

## 13. Design System

All tokens are defined in `assets/css/variables.css`.

| Token | Value |
|-------|-------|
| Base background | `#07090F` |
| Primary background | `#0B0F1A` |
| Secondary background | `#101525` |
| Card background | `#141D2E` |
| Accent (primary) | `#4361EE` |
| Accent violet / cyan / green / gold | `#7C3AED` / `#06B6D4` / `#10B981` / `#F59E0B` |
| Text primary / secondary / dim | `#E2E8F0` / `#94A3B8` / `#64748B` |
| Heading font | Sora |
| Body font | Inter |
| Label / mono font | JetBrains Mono |
| Max content width | 1200px |
| Card radius / button radius | 16px / 10px |

| Breakpoint | Behavior |
|------------|----------|
| 1024px | Tablet: columns collapse, card grids become 2 columns |
| 768px | Desktop nav is replaced by the hamburger menu |
| 640px | Mobile: single column, reduced section spacing |

---

## 14. Features

| Feature | Description |
|---------|-------------|
| Page loader and transitions | Branded loader and smooth fade between pages |
| Smooth scrolling | Lenis integrated with GSAP ScrollTrigger |
| Scroll-reveal animation | Staggered fade-up for sections and cards |
| Animated skill bars and counters | Fill and count up when scrolled into view |
| Sticky navbar | Changes style on scroll and highlights the active page |
| Mobile menu | Full-screen slide-in overlay listing all 9 pages |
| Intro video popup | Play button on the hero photo opens the video; Esc, the close button or a tap outside closes it and pauses playback |
| Typing effect | Cycles through the services in the hero |
| FAQ accordion | Accessible expand/collapse answers |
| Review filter | Filter reviews by service |
| Floating WhatsApp button | Pulsing button on every page linking to WhatsApp chat |
| Accessibility | Focus outlines, ARIA labels, and `prefers-reduced-motion` support |
| SEO | Meta description, Open Graph tags, canonical links, sitemap and robots.txt |

---

## 15. Running Locally and Deployment

### Run locally

No installation is needed. Serve the folder with any static server:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then open `http://localhost:8000`. An internet connection is required for the fonts and CDN scripts.

### Deploy

The site is fully static and works on any static host:

| Host | How |
|------|-----|
| Netlify | Drag and drop the folder or connect a Git repo |
| Vercel | Import the project |
| GitHub Pages | Push to a repo and enable Pages |
| Cloudflare Pages | Connect the repo |
| Shared hosting | Upload via FTP or cPanel |

Keep the `assets/` folder structure intact.

---

## 16. Contact Information

| | |
|---|---|
| Name | Tayyab |
| Role | Professional Virtual Assistant |
| Location | Lahore, Punjab, Pakistan |
| Timezone | PKT (UTC+5) |
| Availability | Monday to Saturday, 9:00 AM to 9:00 PM PKT |
| Email | ichbintayyab@gmail.com |
| WhatsApp | +92 312 4581964 (https://wa.me/923124581964) |

---

© Tayyab.VA. All rights reserved.
