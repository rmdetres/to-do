function toDoItem(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;

    this.info = function() {
        return `${this.title}. ${this.description}, ${this.date}, ${this.priority}`;
    };
}

export{toDoItem};