import React from 'react';
import './App.css';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
import AddNewitemForm from './AddNewitemForm';
import TodoListTitle from './TodoListTitle';
import { connect } from "react-redux";
import { addTaskAC, updateTaskAC, deleteTaskAC, deleteTodolistAC } from "./Redux/reducer";

class Todolist extends React.Component {
    constructor(props) {
        super(props)
        this.newTasksTitleRef = React.createRef();
    }

    state = {
        tasks: [
            // { id: 0, title: "CSS", isDone: true, priority: "low" },
            // { id: 1, title: "HTML", isDone: true, priority: "medium" },
            // { id: 2, title: "JS", isDone: true, priority: "low" },
            // { id: 3, title: "React", isDone: false, priority: "high" }
        ],

        filterValue: "Active"
    }

    nextTaskId = 0;

    //ВОССТАНОВЛЕНИЕ STATE!!!
    // componentDidMount() {
    //     this.restoreState();
    // }
    // //localStorage
    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem('STATE-' + this.props.id, stateAsString);
    // }
    //
    // //проверка данных на сервере
    // restoreState = () => {
    //     let state = {
    //         tasks: [],
    //         filterValue: 'All'
    //     }
    //     let stateAsString = localStorage.getItem('STATE-' + this.props.id);
    //     if (stateAsString) {
    //         state = JSON.parse(stateAsString);
    //         state.tasks.forEach(t => {
    //             if (t.id >= this.nextTaskId) {
    //                 this.nextTaskId = t.id + 1
    //             }
    //         });
    //         this.setState(state);
    //     }
    // }
    //добавление item в массив
    addItem = (newText) => {
        debugger
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low",
            delete: this.delete
        };
        //инкрементим (увеличиваем) id следующей таски на 1
        this.nextTaskId++;

        this.props.addTask(this.props.id, newTask);

    }



    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
    }
    //стату таски true или false
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, { isDone: isDone })

    }
    //редактирование таски
    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, { title: newTitle })

    }

    //универсальный метод для title и isDone
    changeTask = (taskId, obj) => {
        this.props.updateTask(this.props.id, taskId, obj)
    }

    deleteTodolist = () => {

        this.props.deleteTodolist(this.props.id)
    }
    deleteTask = (taskId) => {

        this.props.deleteTask(this.props.id, taskId)
    }




    render = () => {
        const getFiltredTask = (tasks, filter) => {
            return tasks.filter(t => {
                switch (filter) {
                    case "All": return true;
                    case "Completed": return t.isDone;
                    case "Active": return !t.isDone;

                }
            })
        };
        return (
            <div className="todoList">
                <TodoListTitle title={this.props.title} delete={this.props.delete} deleteTodolist={this.deleteTodolist} />
                <AddNewitemForm addItem={this.addItem} />
                <TodoListTasks tasks={getFiltredTask(this.props.tasks, this.state.filterValue)}
                    changeStatus={this.changeStatus} changeTitle={this.changeTitle} deleteTask={this.deleteTask} />
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
            </div>
        );
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (todolistId, newTask) => {
            dispatch(addTaskAC(todolistId, newTask))
        },

        updateTask(todolistId, taskId, obj) {

            const action = updateTaskAC(todolistId, taskId, obj)
            dispatch(action);
        },
        deleteTodolist(todolistId) {
            const action = deleteTodolistAC(todolistId)
            dispatch(action);
        },
        deleteTask(todolistId, taskId) {
            const action = deleteTaskAC(todolistId, taskId)
            dispatch(action);
        }
    }
}


const connectedTodoList = connect(null, mapDispatchToProps)(Todolist);
export default connectedTodoList;


