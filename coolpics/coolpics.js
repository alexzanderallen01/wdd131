const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');

    const isExpanded = !menu.classList.contains('hide');
    btn.setAttribute('aria-expanded', isExpanded);
}


// Image gallery and dialog
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Open the dialog when an image is clicked
gallery.addEventListener('click', openModal);

function openModal(event) {
    const img = event.target;

    // Only open the dialog when an image is clicked
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

// Close the dialog with the X button
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close the dialog when clicking its background
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});