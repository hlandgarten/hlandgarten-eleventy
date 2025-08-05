document.addEventListener("DOMContentLoaded", () => {
  function tryInjectTagline(retries = 10) {
    if (window.taglines && Array.isArray(window.taglines)) {
      const { title, subtitle } = window.taglines[Math.floor(Math.random() * window.taglines.length)];
      const heroTitle = document.querySelector(".hero-title");
      const heroSubtitle = document.querySelector(".hero-subtitle");
      if (heroTitle) heroTitle.textContent = title;
      if (heroSubtitle) heroSubtitle.textContent = subtitle;
    } else if (retries > 0) {
      // Try again in 50ms in case taglines aren't defined yet
      setTimeout(() => tryInjectTagline(retries - 1), 50);
    }
  }

  tryInjectTagline();
});
