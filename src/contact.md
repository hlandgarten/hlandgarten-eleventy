---
layout: page.njk
title: Contact
permalink: /contact/
---

## Get in Touch

You can reach me by email at [you@example.com](mailto:you@example.com).

Or connect with me on:

- [LinkedIn](https://linkedin.com/in/yourname)
- [GitHub](https://github.com/yourusername)

---

<form name="contact" method="POST" data-netlify="true">
  <label>
    Name:<br>
    <input type="text" name="name" required>
  </label><br><br>
  <label>
    Email:<br>
    <input type="email" name="email" required>
  </label><br><br>
  <label>
    Message:<br>
    <textarea name="message" rows="5" required></textarea>
  </label><br><br>
  <button type="submit">Send</button>
</form>
