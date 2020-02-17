import React from 'react';
import './App.css';
import TodoListFooter from './TodoListFooter';
import TodoListTasks from './TodoListTasks';
import AddNewitemForm from './AddNewitemForm';
import TodoListTitle from './TodoListTitle';


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
    componentDidMount() {
        this.restoreState();
    }
    //localStorage
    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('STATE-' + this.props.id, stateAsString);
    }

    //проверка данных на сервере
    restoreState = () => {
        let state = {
            tasks: [],
            filterValue: 'All'
        }
        let stateAsString = localStorage.getItem('STATE-' + this.props.id);
        if (stateAsString) {
            state = JSON.parse(stateAsString);
            state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            });
            this.setState(state);
        }
    }
    //добавление item в массив
    addItem = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };
        //инкрементим (увеличиваем) id следующей таски на 1
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        },
            () => { this.saveState() })
    }



    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        }, () => { this.saveState() });
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
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return { ...t, ...obj };
            }
            else {

                return t;
            }
        });
        this.setState({ tasks: newTasks }, () => { this.saveState() })
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
                <TodoListTitle title={this.props.title} />
                <AddNewitemForm addItem={this.addItem} />
                <TodoListTasks tasks={getFiltredTask(this.state.tasks, this.state.filterValue)}
                    changeStatus={this.changeStatus} changeTitle={this.changeTitle} />
                <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
            </div>
        );
    }
}

export default Todolist;

