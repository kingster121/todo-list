function todoFactory(title, description, dueDate, checkList) {
    let todoTitle = title;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoCheckList = checkList;
    function isValidTitle(title) {
        return title.trim().length > 0;
    }
    function isBoolean(bool) {
        if (typeof bool === "boolean") {
            return true;
        }
        return false;
    }

    // object being returned
    return {
        get title() {
            return todoTitle;
        },

        set title(newTitle) {
            if (isValidTitle(newTitle)) {
                todoTitle = newTitle;
            }
        },

        get description() {
            return todoDescription;
        },

        set description(newDescription) {
            todoDescription = newDescription;
        },

        get dueDate() {
            return todoDueDate;
        },

        set dueDate(newDueDate) {
            todoDueDate = newDueDate;
        },

        get checkList() {
            return todoCheckList;
        },

        set checkList(newCheckList) {
            if (isBoolean(newCheckList)) {
                todoCheckList = newCheckList;
            }
        }
    }
}

export { todoFactory };