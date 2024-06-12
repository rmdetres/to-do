import { myToDoList } from './myTodoList.js';


function createTheList() {

    
    const list = document.getElementById('toDoList');
    list.innerHTML = ''; // Clear the list

    for (let i = 0; i < myToDoList.length; i++) {
        const item = myToDoList[i];
        const listItem = document.createElement('li');
        listItem.textContent = item.info();

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            myToDoList.splice(i, 1); // Remove item from array
            createTheList(); // Recreate the list
        });

        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    }
}

export {createTheList};