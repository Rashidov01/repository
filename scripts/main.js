console.log('working')

var modal = document.querySelector('.modal');
var modalOpener = document.querySelector('#modal-opener');
var overlayModal = document.querySelector('.overlay-modal');

modalOpener.addEventListener('click', ()=>{
  modal.classList.add('active');
  overlayModal.classList.add('active')
})

overlayModal.addEventListener('click', ()=>{
  modal.classList.remove('active');
  overlayModal.classList.remove('active')
})

