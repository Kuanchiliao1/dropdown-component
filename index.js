const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(dropdownBtn => {
  dropdownBtn.addEventListener('click', function() {
    // const container = document.querySelector('.dropdown-option-container');
    const container = dropdownBtn.nextElementSibling
    container.classList.toggle('expanded')
    dropdownBtn.setAttribute('aria-expanded',
      !(dropdownBtn.getAttribute('aria-expanded') === "true"))
      console.log(!dropdownBtn.getAttribute('aria-expanded'))
  })
})
