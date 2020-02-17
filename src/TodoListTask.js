import React from 'react';
import './App.css';
import TodoListHeader from './TodoListTitle';
import TodoListFooter from './TodoListFooter';


class TodoListTask extends React.Component {

    state = {
        editMode: true
    }
    activatedEditmode = () => {
        this.setState({ editMode: true })
    }
    deActivatedEditmode = () => {
        this.setState({ editMode: false })
    }
    onIsDoneChanged = (e) => {

        this.props.changeStatus(this.props.task.id, e.currentTarget.checked);
    }
    onTitleChange = (e) => {

        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }
    render = () => {
        let classForTask = this.props.task.isDone ? 'todoListTask Done' : 'todoList-task'


        return (
            <div className={classForTask}>
                <input type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.onIsDoneChanged} />
                {this.state.editMode
                    ? <input autoFocus={true}
                        value={this.props.task.title}
                        onBlur={this.deActivatedEditmode}
                        onChange={this.onTitleChange} />
                    : <span onClick={this.activatedEditmode}>{this.props.task.id} - {this.props.task.title} </span>}
                , priority: {this.props.task.priority}
            </div>
        );
    }
}

export default TodoListTask;