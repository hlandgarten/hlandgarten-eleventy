---
layout: page.njk
title: Blog
permalink: /blog/
---



<ul>
  {% for post in collections.post %}
    <li>
      <a href="{{ post.url | url }}">{{ post.data.title }}</a><br>
      <small>{{ post.date | readableDate }}</small>
    </li>
  {% endfor %}
</ul>
