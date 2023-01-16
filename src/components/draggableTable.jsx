import React, { useState, useRef } from 'react';

export default function DraggableTable() {
    const [draggedElement, setDraggedElement] = useState(null);
    const dragElement = useRef(null);

    function handleDragStart(e, element) {
        dragElement.current = element;
        setDraggedElement(element);
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragEnd(e) {
        setDraggedElement(null);
    }

    function handleDrop(e) {
        e.preventDefault();
        if (dragElement.current !== e.target) {
            // Replace the dropped element with the dragged element
            e.target.parentNode.insertBefore(dragElement.current, e.target);
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    return (
        <table>
            <colgroup>
                <col
                    ref={dragElement}
                    draggable
                    onDragStart={(e) => handleDragStart(e, e.target.parentNode)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                />
                <col
                    ref={dragElement}
                    draggable
                    onDragStart={(e) => handleDragStart(e, e.target.parentNode)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                />
                <col
                    ref={dragElement}
                    draggable
                    onDragStart={(e) => handleDragStart(e, e.target.parentNode)}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                />
            </colgroup>
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1 Cell 1</td>
                    <td>Row 1 Cell 2</td>
                    <td>Row 1 Cell 3</td>
                </tr>
                <tr>
                    <td>Row 2 Cell 1</td>
                    <td>Row 2 Cell 2</td>
                    <td>Row 2 Cell 3</td>
                </tr>
            </tbody>
        </table>
    );
}

