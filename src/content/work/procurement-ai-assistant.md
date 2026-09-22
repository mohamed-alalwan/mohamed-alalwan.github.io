---
title: Procurement AI Assistant
kicker: Personal project · AI analytics prototype
summary: Ask questions about a public procurement dataset and inspect the answers as charts and tables.
organization: Independent project
period: '2026'
focus: Natural-language data exploration
tags: [Python, FastAPI, MongoDB, LangChain, React, TypeScript, Recharts]
stats:
  - value: Prototype
    label: Personal trial using a public California procurement dataset
featured: false
order: 4
color: teal
disclosure: This is a personal experiment, not a Penny Software or KPMG product. The public dataset is downloaded separately; the repositories contain no live service or included data file.
---

## Why I built it

I wanted to try a more conversational way to explore procurement records: ask a question such as which departments spent the most in a given year, then see the underlying results instead of only a written answer. I used a public dataset of California state purchase-order line items from fiscal years 2012–2015.

## How it works

The FastAPI backend checks the question, generates a MongoDB aggregation pipeline, reviews the query result, summarizes it and suggests follow-up questions. It uses separate prompts and structured outputs for those steps. A React and TypeScript frontend sends the chat request and shows the returned data in charts and sortable tables.

## Scope

This was a hobby trial, not a deployed client system. The repositories contain the backend and frontend source; running the full assistant requires the public CSV dataset, MongoDB and an OpenAI API key. I have not published a live demo or measured production accuracy.

[Backend source on GitHub](https://github.com/mohamed-alalwan/procurement-ai-backend) · [Frontend source on GitHub](https://github.com/mohamed-alalwan/procurement-ai-frontend)
