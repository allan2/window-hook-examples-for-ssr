# Window Hook Examples for SSR

Code sandbox is [here](https://35k2z.sse.codesandbox.io/)

When using server-side rendering, window hooks often hit a snag on hydration.

Thanks to [Adrien Rahier](https://dev.to/adrien) for [highlighting the problem and the solution](https://dev.to/adrien/creating-a-custom-react-hook-to-get-the-window-s-dimensions-in-next-js-135k).

This repo shows some Next.js + TypeScript minimal working examples.
SSR is used on all of them. They are variants of a window resize hook.

It has four examples:
1. Not working (rooks)
2. Working (Adrien)
3. Not working (Reed)
4. Not working (Reed)
5. Working (rooks, lightly modified)

Most examples work when you build, with Ex. 3 being the exception. It's excluded from `build` in `next.config.js`.
Thanks to [shynome's issue comment](https://github.com/vercel/next.js/issues/8454#issuecomment-560432659) and [Kiran's SO answer](https://stackoverflow.com/questions/66872816/temporary-disable-next-js-pages-on-build) for this.

Interestingly, hydration errors are showing on the dev server only. I haven't figured out why yet.

To run the dev server:
```
npm run dev
```

To build:
```
npm run build
npm run start
```

