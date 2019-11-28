import React from 'react';


class TodoListHeader extends React.Component {

    newTasksTitleRef = React.createRef();

    onAddTaskButtoonClick = () => {
        let newText = this.newTasksTitleRef.current.value;
        this.newTasksTitleRef.current.value = '';
        this.props.addTask(newText)
    }

    render = () => {
        return (

            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name" ref={this.newTasksTitleRef} />
                    <button onClick={this.onAddTaskButtoonClick}>Add</button>
                </div>
            </div>

        );
    }
}

export default TodoListHeader;

