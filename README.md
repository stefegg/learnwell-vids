## Getting Started Locally

First, create a .env file in the project root.  You need to set USER_ID, you may use any value, or my name for some preloaded data.
```bash
USER_ID=stephen_egbert
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building the Application to the Web

This project is currently deployed on Vercel at [https://learnwell-vids.vercel.app/(https://learnwell-vids.vercel.app/)].  

Any branch that is pushed to this repo will be deployed to a preview environment with a dynamic deployment address.  This deployment can be accessed by navigating through the project interface on Github, or on Vercel.

Any branch that is merged into the 'main' branch, will be deployed to Production.

