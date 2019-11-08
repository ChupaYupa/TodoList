import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListFooter from './TodoListFooter';

const TodoListTask = (props) => {
        return (        
                <div className="todoList-task">
                    <input type="checkbox" checked={props.isDone} />
                    <span>{props.title}, priority: {props.priority}</span>
                </div>                
        );
    }

export default TodoListTask;