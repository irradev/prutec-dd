/*
* --------------------------------------------------
* MARK: VARIABLES
* --------------------------------------------------
*/

const modalId = 'modal-packs';

const $modal = document.getElementById(modalId);
const $modalContent = $modal.children[0];
const $modalBackdrop = document.querySelector('.modal-backdrop');
const $closeModalBtn = document.getElementById(modalId + '-close-modal');

const $btnShowPacks = document.getElementById('btn-show-packs');
const $btnToggleTheme = document.querySelector('.btn-toggle-theme');

const $body = document.querySelector('body');


/*
* --------------------------------------------------
* MARK: FUNCTIONS
* --------------------------------------------------
*/
function closeModal() {
    $modal.classList.add('visible-animated');
    $modalBackdrop.classList.add('opacity-0');

    setTimeout(() => {
        $modal.classList.remove('visible-animated');
        $modal.classList.add('hidden-animated');
        $modalBackdrop.classList.add('hidden');
        $modalBackdrop.classList.add('opacity-0');
    }, 500);
}

function openModal() {
    $modal.classList.remove("hidden-animated");
    $modalBackdrop.classList.toggle('hidden');

    setTimeout(() => {
        $modalBackdrop.classList.remove('opacity-0');
    }, 200);
}

function toggleTheme() {
    $body.classList.toggle('dark-mode');
}


/*
* --------------------------------------------------
* MARK: EVENTS
* --------------------------------------------------
*/
$closeModalBtn.addEventListener('click', () => {
    closeModal();
});

$modal.addEventListener('click', (event) => {
    event.stopPropagation();
    closeModal();
});
$modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
});

$btnShowPacks.addEventListener('click', () => {
    openModal();
});

$btnToggleTheme.addEventListener('click', () => {
    console.log('0here');
    toggleTheme();
});

