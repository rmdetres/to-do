import _ from 'lodash';
import './styles.css';
import { toDoItem } from './toDoItem.js'; // Note the '.js' extension
import { createTheList } from './createTheList.js';
import { myToDoList } from './myTodoList.js';



document.addEventListener('DOMContentLoaded', () => {
   
  
    function addItemToList(toDoItem) {
        myToDoList.push(toDoItem);
        console.log(myToDoList);
    }




    const content = document.getElementById('content');
    const list = document.createElement('ol');
    list.id = 'toDoList';
    content.appendChild(list);

    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;

        const newItem = new toDoItem(title, description, dueDate, priority);
        addItemToList(newItem);
        createTheList();
    });
});
