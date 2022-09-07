const openBtn = document.querySelector('.button');
const closeBtn = document.querySelector('.closeBtn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', openModal);
function openModal () {
  modal.style.display = 'flex'
}

closeBtn.addEventListener('click', closeModal)
function closeModal() {
  modal.style.display = 'none'
}
