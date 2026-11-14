const siteHeader = document.querySelector('.site-header');

function updateHeaderHeight() {
  const height = siteHeader.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--header-height', `${height}px`);
}

updateHeaderHeight();
new ResizeObserver(updateHeaderHeight).observe(siteHeader, { box: 'border-box' });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
