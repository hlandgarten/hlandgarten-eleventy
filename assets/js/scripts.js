document.addEventListener("DOMContentLoaded", () => {
  // Rotating taglines
  const taglines = window.taglines || [];
  if (taglines.length > 0) {
    const titleEl = document.querySelector(".hero-title");
    const subtitleEl = document.querySelector(".hero-subtitle");
    let index = 0;

    const updateTagline = () => {
      const tagline = taglines[index];
      if (titleEl && subtitleEl) {
        titleEl.textContent = tagline.title;
        subtitleEl.textContent = tagline.subtitle;
      }
      index = (index + 1) % taglines.length;
    };

    updateTagline();
    setInterval(updateTagline, 10000);
  }

  // Expand images on click (lightbox)
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100vw";
      overlay.style.height = "100vh";
      overlay.style.background = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.zIndex = "9999";
      overlay.style.cursor = "zoom-out";

      const zoomImg = document.createElement("img");
      zoomImg.src = img.src;
      zoomImg.style.maxWidth = "90%";
      zoomImg.style.maxHeight = "90%";
      zoomImg.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
      overlay.appendChild(zoomImg);

      overlay.addEventListener("click", () => document.body.removeChild(overlay));
      document.body.appendChild(overlay);
    });
  });
});