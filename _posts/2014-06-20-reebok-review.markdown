---
layout: post
title:  "Reebok Something Review"
date:   2014-06-20 09:11:03
categories: reviews
description: Phasellus hendrerit. Pellent aliquet nibh nec urna. In nis aliquet vel, dapibus id,mattis.
thumbnail: /assets/img/thumbnails/paint.jpg
caption: If you have a caption for an image, you should write it here

# Information for the author block
author: John Doe
authorTitle: Product Reviews and Recipes
authorBio: From product reviews to five-star restaurant critiques, John Doe's curiosity lends itself well to nearly every topic.
# Link up the author's social media
authorFacebook:
authorTwitter:
authorGoogle:
---

A Jekyll theme for blogging. With the ability to sort posts by category and list various authors in an authors block, this theme is perfect for collaborative projects.

# How to use it
1. Star & fork the [repo][repo]
2. Rename the repo and clone the master branch to your local directory
3. Customize the `_config.yml` file to represent you
4. Download [Gulp][Gulp]

* * *
##Author blocks
Author blocks are populated based on each post in the `_posts` folder. The author **name**, **title**, **bio**, and **social media** links are all defined in the YAML at the top of ever post page.

If you're only going to feature posts from one author, or default to that author primarily, you can define these values in the `_config.yml` file, just like you do for url, and sitename. This will require you change the tags in the `_layouts/posts.html` file.

##Category Pages
To add a page that lists all posts in a given category, copy one of the existing pages in the `categories` folder and change the `for post in site.categories.advice` loop to the category you want.

[repo]: http://github.com/ninapetrop/Jekyll-Testing-Site
[Gulp]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
