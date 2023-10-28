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

This week I redid my website (because I don't own a home). When I first made my personal website, I used [Hugo](https://gohugo.io/) and the [hugo-profile](https://github.com/gurusabarish/hugo-profile) template. I practically optimize decisions as a hobby, so I thought long and hard about this choice. I considered going with plain HTML and CSS - in my experience, the less stuff you depend on, the less that things 'randomly' (from your point of view) break over time, and the more easily you can fix things. There were only two problems with this approach:

1. I don't get to learn something shiny (!!!)
2. While this would have worked fine for the personal website side of things, I entertained delusions about having a blog, and the appeal of using a [Static Site Generator](https://byteofdev.com/posts/static-site-generators/) to turn markdown files into tagged blog posts, was too great.

I chose Hugo after reading multiple Reddit threads/HN posts comparing the different options, more or less because of its speed (a bad reason - there's no way my website will ever be big enough to take much time to build) and because I thought that the Go ecosystem would be less prone to dependency rot over time than alternatives in the JavaScript ecosystem.

However, I found Hugo tough to get started with when it came to making my own theme. I thought I found a flexible enough profile in [hugo-profile](https://github.com/gurusabarish/hugo-profile) - and it is really rather very good - and for some time, all was well. But this week I found myself ~~with some spare time~~ needing more than a premade template could offer, and I went looking for an alternative framework where making my own theme would feel enjoyable.

## Eleventy, and how to get started

This [6 minute video](https://www.youtube.com/watch?v=kzf9A9tkkl4) is one of the best quickstart guides I've seen for any framework. No beating around the bush, just packs in all the content you need to feel excited about 11ty. Go watch it!

Then, if you have some more time, [this next video](https://www.youtube.com/watch?v=VcW3T9EOo5M) goes into a lot more detail
