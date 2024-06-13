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

## My approach

First - I played with the API for a while just to get familiar with datashapes and operations, I didn't want to overlook anything

Then I loaded the logo into a palette generator to get a color palette for the site, I selected a font by googling the top fonts for learning based websites in 2023, and setup my tailwind.config and my layout.

For the landing, I wanted to focus on things I know people love to learn about - Space, Dinosaurs and Ancient Civilzations immediately came to mind.  There was going to be a nature panel at one point as well, but I thought the 3 main ones covered things.

Then I got to work on the landing page, I wanted to make a great impression here, so I included a lot of thematic animations.  I was able to confidently spend time on this, because I had previously spent time playing with the API, and didn't feel I would have any problems with fetching and displaying data.

Then I went to work on the Video list, keeping with the established theme, and adding a little flare with the header animation, and the scale change when hovering over videos.  It wasn't required, but I added a search bar that filters on the video titles.  While there aren't that many videos right now, I figured this would be helpful in a real world situation with lots of real users uploading videos frequently.

On the video page itself, I set up an iframe component that can handle videos from vimeo and youtube.  These were the main video sites among the top video sites that actually had educational videos. Twitch for example also showed up on a top video site list, but they don't seem to have traditional educational videos on there.  Although there is certainly some schooling going on.  

Next I moved onto the comments section, I built the slider for adding new comments, and then went to work on displaying additional comments.  That's about it, as I'm writing this I am generally done, but am still going to make another styling pass to check on some responsiveness, and to tweak some things I'm not entirely happy with.

All in all I'm proud of the work I put into the project, I think the landing page will get people excited to learn, and that the site is informative throughout on how to use it.  

## Screenshots

<img width="1440" alt="Screenshot 2024-06-13 at 5 42 46 PM" src="https://github.com/stefegg/learnwell-vids/assets/38544233/8c17d3ab-3f4c-4922-8c38-7c5b91da5f4b">
<img width="1440" alt="Screenshot 2024-06-13 at 5 42 59 PM" src="https://github.com/stefegg/learnwell-vids/assets/38544233/0cf53c78-5575-47c9-b2d6-a2fb24bfb46a">
<img width="1440" alt="Screenshot 2024-06-13 at 5 43 12 PM" src="https://github.com/stefegg/learnwell-vids/assets/38544233/2936935f-02f3-4dbb-a147-8fcf77cad5af">
<img width="1440" alt="Screenshot 2024-06-13 at 5 43 21 PM" src="https://github.com/stefegg/learnwell-vids/assets/38544233/f5038e73-abbc-4f00-9078-588a817f4ee4">
<img width="1440" alt="Screenshot 2024-06-13 at 5 44 16 PM" src="https://github.com/stefegg/learnwell-vids/assets/38544233/fef3e8d1-e373-4bd4-82bb-4587607f1e1c">
<img width="1440" alt="Screenshot 2024-06-13 at 5 45 57 PM" src="https://github.com/stefegg/learnwell-vids/assets/38544233/bcf2311d-29e5-4959-a1bb-8a11b2e5005d">
<img width="1440" alt="Screenshot 2024-06-13 at 5 46 14 PM" src="https://github.com/stefegg/learnwell-vids/assets/38544233/af438f73-6b91-4f65-8245-9e047290f0fe">
<img width="1440" alt="Screenshot 2024-06-13 at 5 46 28 PM" src="https://github.com/stefegg/learnwell-vids/assets/38544233/f5ef7d06-c2ef-468d-94aa-d5ae535c7d3c">
