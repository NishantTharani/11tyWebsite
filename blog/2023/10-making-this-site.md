---
title: "Making a Personal Website and Blog using 11ty and Tailwind CSS"
date: 2023-10-27
tags:
  - web-dev
  - eleventy
  - tailwind
description: Or - how I made this website.
---

_Note: this is a chronicle of my experience, not a tutorial, although I do link to some resources I found useful._

## Skip this if you don't want ~~my life story~~ the background

This week I redid my website (because I don't own a home). When I first made my personal website, I used [Hugo](https://gohugo.io/) and the [hugo-profile](https://github.com/gurusabarish/hugo-profile) template. I had considered going with plain HTML and CSS - in my experience, the less stuff you depend on, the less that things 'randomly' (from your point of view) break over time, and the more easily you can fix things. There were only two problems with this approach:

1. I wouldn't get to learn something shiny (!!!)
2. I entertained delusions about having a blog, and faced the irresistable appeal of using a [Static Site Generator](https://byteofdev.com/posts/static-site-generators/) to generate a blog out of markdown files.

I chose Hugo after reading multiple Reddit threads/HN posts comparing the different options, more or less because of its speed (a bad reason - there's no way my website will ever be big enough to take much time to build) and because I thought that the Go ecosystem would be less prone to dependency rot over time than alternatives in the JavaScript ecosystem.

However, I found Hugo tough to get started with when it came to making my own theme. I thought I found a flexible enough profile in [hugo-profile](https://github.com/gurusabarish/hugo-profile) - and it is really rather very good - and for some time, all was well. But this week I found myself ~~with some spare time~~ needing more than a premade template could offer, and I went looking for an alternative framework where making my own theme would feel enjoyable.

## Eleventy, and how I got started

This [6 minute video](https://www.youtube.com/watch?v=kzf9A9tkkl4) is one of the best quickstart guides I've seen for any framework. No beating around the bush, just all the content you need to feel excited about 11ty. Go watch it! 

I didn't want to use a premade template this time - the main draw of Eleventy was how intuitive designing my own templates was (I used Liquid, which is the default). This meant I had to style them, and I opted to use [Tailwind CSS](https://tailwindcss.com/) rather than roll my own CSS. I'd heard a lot about Tailwind CSS and so far it seems to strike a good balance between abstracting away the CSS implementation, and having many classes that are low-level enough so that you don't feel constrained by the framework - something that Bootstrap made me feel. [This next video](https://www.youtube.com/watch?v=VcW3T9EOo5M) showed me how to get started with integrating Tailwind into an 11ty project.

Those two videos were enough to get me started, and all of these frameworks have superb documentation:
- [11ty Docs](https://www.11ty.dev/docs/collections/)
- [Tailwind Docs](https://tailwindcss.com/docs/flex-basis)
- [Liquid Docs](https://shopify.github.io/liquid/) - Liquid is the templating language used as 11ty's default

Finally, Eleventy has a useful [starter repository](https://github.com/11ty/eleventy-base-blog) that showcases a basic blog, and I'd recommend checking it out to get a sense of how they use collections and pagination to implement tagging features. And if you see something here that you liked, the source code for this website is [available online](https://github.com/NishantTharani/11tyWebsite) too. Happy website building!
