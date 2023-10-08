# allora Starter Platform on Next.js 13

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups
- Data Fetching, Caching and Mutation
- Loading UI
- Server and Client Components
- API Routes and Middlewares
- Admin view with super admins
- Authentication using **NextAuth.js**
- Transactional emails using **react.email**
- ORM using **Prisma**
- Database on **PlanetScale**
- Subscriptions using **Stripe**
- Styled using **Tailwind CSS**
- Error monitoring using **Sentry**
- Validations using **Zod**
- Written in **TypeScript**

## Things to setup to get it all working

Start by copy/pasting the env variables to `.env` using:

```sh
cp .env.example .env
```

Then follow this checklist to get everything set up:

### 1. General settings

1. Add a next-auth random secret (using [this](https://toolkit.vercel.app/sha-256/))
2. Go through and update your settings in [config/](./config/)
3. Update contact details in [security.txt](./public/.well-known/security.txt) 
4. Update favicons, logo and default Open Graph image in [public](./public/) using [FaviconGenerator](https://realfavicongenerator.net/)

### 2. Setting up PlanetScale

1. Create an account on [PlanetScale](https://www.planetscale.com)
2. Set up a MySQL database in your closest region
3. Update `DATABASE_URL` in env vars
4. Run `yarn update_db_schema`


### 3. Setting up AWS SES (or mailtrap.io)

1. Create an AWS account on [AWS](https://console.aws.amazon.com)
2. Go to AWS SES and create a verified email (e.g. no-reply@example.com)
3. Create SMTP credentials
4. Update `SMTP_FROM` and `EMAIL_SERVER` in env vars


### 4. Setting up Sentry

1. Create a Sentry account on [Sentry](https://sentry.io)
2. Create a next.js project
3. Run `npx @sentry/wizard@latest -i nextjs`

### 5. Setting up Stripe

❓ TBD ❓

#### Getting Stripe working localhost

1. Follow the instructions here: https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local

2. Once installed, type `stripe listen --forward-to localhost:3000/api/webhooks/stripe` to start Stripe ngrokish listener

### 6. Setting up Google Login

❓ TBD ❓


> ⚠️ _Before building_
> Ensure that everything is working, including Google Login, Email Login, Stripe subscription management, transactional emails and error reporting.

This template is hevaily based on Taxonomy Next.js 13 template built by [@shadcn](https://twitter.com/shadcn). 


## License

allora-starter-web and Taxonomy is licensed under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).

