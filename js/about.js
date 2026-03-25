(function() {
  function initAboutPage() {
    var page = document.getElementById('aboutPage');
    if (!page) return;

    // Add class to parent container to hide default title & restyle
    var container = page.closest('.page-template-container');
    if (container) container.classList.add('about-page-active');

    // Fix avatar lazy loading (Redefine rewrites src to loading.svg)
    var avatar = document.querySelector('.about-avatar');
    if (avatar && avatar.dataset && avatar.dataset.src) {
      avatar.src = avatar.dataset.src;
    }

    // Load random anime wallpaper
    var hero = document.getElementById('aboutHero');
    if (hero && !hero.classList.contains('loaded')) {
      var bgImg = new Image();
      bgImg.onload = function() {
        hero.style.backgroundImage = 'url(' + bgImg.src + ')';
        hero.classList.add('loaded');
      };
      bgImg.onerror = function() {
        hero.classList.add('loaded');
      };
      bgImg.src = 'https://t.mwm.moe/fj?' + Date.now();
    }
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutPage);
  } else {
    initAboutPage();
  }

  // Re-run after swup page transitions
  document.addEventListener('swup:contentReplaced', initAboutPage);
})();
