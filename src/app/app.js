document.querySelectorAll('[data-page]').forEach(btn =>
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-page]').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
    btn.classList.add('active')
    document.getElementById(btn.dataset.page)?.classList.add('active')
  }),
)

document
  .getElementById('sidebar-toggle')
  ?.addEventListener('click', () => document.getElementById('side').classList.toggle('collapsed'))
