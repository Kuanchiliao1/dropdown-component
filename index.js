const dropdownBtn = document.querySelector('.dropdown-btn');

dropdownBtn.addEventListener('click', function() {
  const container = document.querySelector('.dropdown-option-container');
  container.classList.toggle('expanded')
  dropdownBtn.setAttribute('aria-expanded',
    !(dropdownBtn.getAttribute('aria-expanded') === "true"))
    console.log(!dropdownBtn.getAttribute('aria-expanded'))
})