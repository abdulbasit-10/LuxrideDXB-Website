export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector('header');
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({ top, behavior: 'smooth' });
}
