window.addEventListener('load', function () {
    let likeOutput = document.getElementById("like_plus");
    let count = 0;
    let button = document.getElementById("like_btn");
    button.addEventListener('click', function (e) {
        e.preventDefault();
        count += 1;
        likeOutput.innerHTML = "&nbsp;" + count;
    });

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    let $modal = document.getElementById('open_modal');
    const $openModal = document.getElementById('modal_body');
    $modal.addEventListener('click', (e) => {
        const target = e.target;
        $openModal.classList.toggle('is-active');

    });


});

function closeModal(e) {
    const $openModal = document.getElementById('modal_body');
    $openModal.classList.remove('is-active');
}