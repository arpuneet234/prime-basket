# Prime Basket

Modern grocery e-commerce demo built with React, Redux Toolkit, React Router, and Tailwind CSS.

## Live demo

**https://prime-basket-eta.vercel.app**

## Features

- Product catalog with search, filters, and sorting
- Product detail pages with reviews
- Redux cart with order summary
- Dark mode
- AI support chat (Groq free tier or OpenAI)
- Responsive layout

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:1234`

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy (Vercel — recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import `prime-basket`
3. Framework: **Other** · Build: `npm run build` · Output: `dist`
4. Deploy

Optional env vars (Project Settings → Environment Variables):

- `GROQ_API_KEY` — free AI chat at [console.groq.com](https://console.groq.com/keys)

## Tech stack

React 19 · Redux Toolkit · React Router · Parcel · Tailwind CSS v4 · DummyJSON API
