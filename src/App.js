import React from 'react';
import './App.css';
import Todolist from './Todolist';
import AddNewitemForm from './AddNewitemForm';
import { connect } from 'react-redux';
import { addTodolistAC } from "./Redux/reducer";

class App extends React.Component {

    // componentDidMount() {
    //     this.restoreState();
    // }


    //проверка данных на сервере
    // restoreState = () => {
    //     let state = {
    //         tasks: [],
    //         filterValue: 'All'
    //     }
    //     let stateAsString = localStorage.getItem('todoLists');
    //     if (stateAsString) {
    //         state = JSON.parse(stateAsString);
    //         state.todoLists.forEach(t => {
    //             if (t.id >= this.nextItemId) {
    //                 this.nextItemId = t.id + 1
    //             }
    //         });
    //         this.setState(state);
    //     }
    //
    // }
    nextItemId = 0;
    addTodoList = (title) => {
        let newTodolist = {
            id: this.nextItemId,
            title: title,

        };
        //инкрементим (увеличиваем) id следующей таски на 1
        this.nextItemId++;
        this.props.addTodolist(newTodolist);
        //создаем копию todoLists
        // this.setState({
        //     todoLists: [...this.state.todoLists, newItem]
        // }, () => {
        //         this.saveState();
        // })
    }



    render = () => {
        debugger
        let todolists = this.props.todolists.map(tl => <Todolist id={tl.id} title={tl.title} tasks={tl.tasks} delete={tl.delete} />);

        return (
            <>
                <div>
                    <AddNewitemForm addItem={this.addTodoList} />
                </div>
                <div className="App">
                    {todolists}

                    {/* <div className="todoList">
                    <TodoListHeader addTask={this.addTask} />

                    <TodoListTasks tasks = {getFiltredTask(this.state.tasks, this.state.filterValue)}
                        changeStatus={this.changeStatus} changeTitle={this.changeTitle}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div> */}
                </div>
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        todolists: state.list.todolists
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodolist: (newTodolist) => {
            const action = addTodolistAC(newTodolist)
            dispatch(action)
        }
    }
}


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;

