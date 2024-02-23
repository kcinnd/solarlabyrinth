document.addEventListener('DOMContentLoaded', () => {
    const mirrors = document.querySelectorAll('.mirror');
    mirrors.forEach(mirror => {
        mirror.addEventListener('click', rotateMirror);
    });

    const lenses = document.querySelectorAll('.lens');
    lenses.forEach(lens => {
        lens.addEventListener('click', moveLens);
    });
});

function rotateMirror(event) {
    // Placeholder for mirror rotation logic
    console.log('Mirror rotated', event.target);
}

function moveLens(event) {
    // Placeholder for lens movement logic
    console.log('Lens moved', event.target);
}
