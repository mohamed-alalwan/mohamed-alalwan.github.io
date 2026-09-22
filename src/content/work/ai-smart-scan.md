---
title: AI Smart Scan for invoice review
kicker: Product engineering · Document AI
summary: Invoice extraction and mismatch review in Penny Software's Bill module.
organization: penny.
period: '2026'
focus: AI full-stack delivery
tags: [Angular, NestJS, TypeScript, Python, REST APIs, Document AI]
stats:
  - value: Shipped
    label: Available in a live procurement SaaS product
featured: true
order: 1
color: teal
disclosure: No customer data, internal screenshots or employer-owned code are included.
---

## The workflow

The Bill module holds payment details, while the invoice arrives as an uploaded document. Reviewing the two means checking whether the values match.

## My contribution

I shipped **AI Smart Scan** for the Bill module at Penny Software. It extracts values from an uploaded invoice and helps users identify differences against bill data already in the system. I worked across the Angular interface, NestJS/TypeScript backend APIs and a separate Python AI service.

## Outcome

The feature is part of Penny Software's procurement product. Users can compare the extracted invoice values with the bill information already stored there.
