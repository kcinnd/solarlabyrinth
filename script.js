document.addEventListener('DOMContentLoaded', () => {
    // Initialize mirror rotation
    const mirrors = document.querySelectorAll('.mirror');
    mirrors.forEach(mirror => {
        mirror.addEventListener('click', rotateMirror);
    });

    // Initialize lens drag-and-drop
    const lenses = document.querySelectorAll('.lens');
    lenses.forEach(lens => {
        lens.addEventListener('mousedown', startDragLens);
    });

    // Global mouse event listeners for lens movement
    document.addEventListener('mouseup', stopDragLens);
    document.addEventListener('mousemove', dragLens);
});

let selectedLens = null;
let offsetX = 0;
let offsetY = 0;

// Rotate Mirror Function
function rotateMirror(event) {
    let angle = parseInt(event.target.dataset.angle) || 0;
    angle += 90; // Increment angle by 90 degrees
    event.target.style.transform = `rotate(${angle}deg)`;
    event.target.dataset.angle = angle; // Store the new angle for future rotations
}

// Start Dragging Lens Function
function startDragLens(event) {
    selectedLens = event.target;
    offsetX = event.clientX - selectedLens.getBoundingClientRect().left;
    offsetY = event.clientY - selectedLens.getBoundingClientRect().top;
    selectedLens.classList.add('dragging'); // Optional: Visual cue for dragging
}

// Drag Lens Function
function dragLens(event) {
    if (!selectedLens) return;
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;
    selectedLens.style.position = 'absolute';
    selectedLens.style.left = `${newX}px`;
    selectedLens.style.top = `${newY}px`;
}

// Stop Dragging Lens and Snap to Grid Function
function stopDragLens() {
    if (!selectedLens) return;
    snapLensToGrid(selectedLens);
    selectedLens.classList.remove('dragging');
    selectedLens = null;
}

// Snap Lens to Grid Function
function snapLensToGrid(lens) {
    const gridCellSize = 50; // Adjust based on your grid cell size
    const rect = lens.getBoundingClientRect();
    const gridX = Math.round((rect.left - maze.offsetLeft) / gridCellSize) * gridCellSize;
    const gridY = Math.round((rect.top - maze.offsetTop) / gridCellSize) * gridCellSize;
    lens.style.left = `${gridX + maze.offsetLeft}px`;
    lens.style.top = `${gridY + maze.offsetTop}px`;
}
