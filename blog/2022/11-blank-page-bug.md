---
title: "Blank Page Bug (React/Express)"
date: 2022-11-11
tags:
  - react
  - node
  - express
  - bug
  - cache
description: Troubleshooting a bug in React / NodeJS / Express that presents a blank page until hard refresh."
---

## The bug

Recently I came across an issue while working on a single page application in React, with a backend in Node/Express, and deployed via Google Cloud's (managed and serverless) App Engine service. I was serving the web app by building it to its minified version, and using Express to serve the built `index.html` file. To be precise, my Express code included something like this:

```js
const publicPath = path.join(__dirname, "/react-frontend/build");
app.use(express.static(publicPath, { index: false }));

app.get("/search", function (req, res) {
  res.sendFile(path.join(publicPath, "index.html"));
});
```

Everything worked fine locally, but in production I ran into the following issue: once in a while, navigating to the app's URL would present me with a blank white page. Refreshing had no effect, but a _hard_ refresh (Ctrl/Apple + Shift + R) fixed the problem. What's more, checking the console showed me the following error: `Uncaught SyntaxError: Unexpected token '<' (at main.5ae0dc71.js:1:1)` which made it seem like a JavaScript file was unexpectedly returning HTML content.

## The red herring

I ran a quick internet search for this issue, and a common fix I saw was to add the `<base href="/">` tag to the header of my `public/index.html` file. I tried this out of curiosity the next time I encountered the issue and it appeared to work: after adding this, rebuilding, and redeploying, the blank white page was replaced by my web app without a hard refresh being needed.

But I was suspicious - I couldn't see why this should work:

- When I looked at my built `index.html` file, it was requesting static files with an absolute URL: `<script src=/static/js/..>` , wherease the `base` tag appeared to only have any effect whatsoever on relative URLs.
- And reading the documentation for the `express.static()` middleware had confirmed that I was using it correctly: the links should be correctly resolved.
- What's more, the links _were_ being correctly resolved locally, and in production after a hard refresh. If this was the issue, why would a hard refresh fix anything?

## The fix

And indeed, at some point the same issue presented itself. This time I tried something else: the fact that a hard refresh fixed anything indicated that there was some sort of caching problem. I looked at the network requests (tab of the dev tools), and yes, when I landed on a blank page my browser was requesting `/static/js/main.a2480ec7.js` but after a hard refresh the request was for `/static/js/main.3e97e4f2.js`. It seemed like my browser was caching the `index.html` file between builds, and so even though the name of the JS file changed, my browser still requested the old name. This would also explain the nature of the `Unexpected token '<'` error I was seeing: presumably the server was returning a '404 not found' HTML page. I was able to reproduce the issue along these lines: by making some changes to the JS files such that the built filenames changed, but leaving the `public/index.html` file untouched.

Armed with this new theory, I ran another Google search and came across [this excellent GitHub Issue thread](https://github.com/vuejs-templates/pwa/issues/165) where some others had come across the same issue, and suggested a quick solution: adding a `<meta version="1.0.1">` tag to the public `index.html` file's header, and updating this each time you wanted to rebuild and redeploy. This change forced my browser to refresh the cached version of the page and update the links to the JS files. Incidentally, this also explained why adding the `base` tag might have worked at first: it also served as a change to the HTML file in the same way.

## The sequel?

This still leaves a few questions unanswered for me. Presumably when the filenames of the built JS files change, the content of the built `index.html` file changes too, as the script links in this file update. How come these changes, to the content of the HTML file that ends up being deployed, aren't sufficient to force my browser to refresh its cache of the file? And if this is the fix, is there some way to do it that's (both semantically and logistically) cleaner? Maybe by using a cache revalidation tag/timestamp?

At this point I had to move on to the next task, but maybe some day I'll find out. Bugs that only show up in production and aren't clearly reproducible are always tricky to figure out, but I'm glad I got a handle on this one.
