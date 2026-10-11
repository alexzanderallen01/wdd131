const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');

    const isExpanded = !menu.classList.contains('hide');
    btn.setAttribute('aria-expanded', isExpanded);
}

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    const img = e.target;
    if (img.tagName !== 'IMG') {
        return;
    }
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('-sm', '-full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});
// Close modal if clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
});