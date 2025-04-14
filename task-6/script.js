document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    let dragSrcEl = null;

    function handleDragStart(e) {
        this.classList.add('dragging');
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', '');
    }

    function handleDragOver(e) {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const dragging = document.querySelector('.dragging');

        if (!afterElement) {
            container.appendChild(dragging);
        } else {
            container.insertBefore(dragging, afterElement);
        }
    }

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.box:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - (box.top + box.height / 2);

            if (offset < 0 && offset > closest.offset) {
                return { offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    function handleDragEnd() {
        this.classList.remove('dragging');
    }

    const boxes = document.querySelectorAll('.container .box');
    boxes.forEach(box => {
        box.setAttribute('draggable', 'true');
        box.addEventListener('dragstart', handleDragStart);
        box.addEventListener('dragend', handleDragEnd);
    });

    container.addEventListener('dragover', handleDragOver);
});
