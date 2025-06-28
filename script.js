function filterPersons() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const cityValue = document.getElementById('citySelect').value;
  const persons = document.querySelectorAll('.person');

  persons.forEach((person) => {
    const text = person.textContent.toLowerCase();
    const city = person.getAttribute('data-city');
    const matchesSearch = text.includes(searchValue);
    const matchesCity = cityValue === '' || city === cityValue;
    person.style.display = matchesSearch && matchesCity ? 'block' : 'none';
  });
}

document.querySelectorAll('.person').forEach((card) => {
  const openBtn = card.querySelector('.open-btn');
  const closeBtn = card.querySelector('.close-btn');
  const details = card.querySelector('.details');

  openBtn.addEventListener('click', () => {
    details.classList.add('show');
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    details.classList.remove('show');
    closeBtn.classList.add('hidden');
    openBtn.classList.remove('hidden');
  });
});

document.getElementById('searchInput').addEventListener('input', filterPersons);
document.getElementById('citySelect').addEventListener('change', filterPersons);

window.addEventListener('DOMContentLoaded', () => {
  const persons = document.querySelectorAll('.person');
  persons.forEach((person, index) => {
    setTimeout(() => {
      person.classList.add('visible');
    }, index * 150);
  });
});
