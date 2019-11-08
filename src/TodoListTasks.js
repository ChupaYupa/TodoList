import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListFooter from './TodoListFooter';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {
    render = () => {
        const tasksElement = this.props.tasks.map(task => {
            return <TodoListTask title ={task.title} isDone={task.isDone} priority={task.priority}/>
        });
        return (
            <div className="todoList-tasks">
                {tasksElement}
                {/*<TodoListTask title={this.props.tasks[0].title} isDone={this.props.tasks[0].isDone}/>
                <TodoListTask title={this.props.tasks[1].title} isDone={this.props.tasks[1].isDone}/>
                <TodoListTask title={this.props.tasks[2].title} isDone={this.props.tasks[2].isDone}/>
        <TodoListTask title={this.props.tasks[3].title} isDone={this.props.tasks[3].isDone}/>*/}
            </div>
        );
    }
}

export default TodoListTasks;

