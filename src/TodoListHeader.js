import React from 'react';
import AddNewitemForm from './AddNewitemForm';
import TodoListTitle from './TodoListTitle';


class TodoListHeader extends React.Component {

    //отслеживание по ссылки и запись значения
    newTasksTitleRef = React.createRef();



    render = () => {
        //если привязываем state к css .error

        return (
            <div className="todoList-header">
                <TodoListTitle title={this.props.title} />
                <AddNewitemForm addItem={this.props.addTask} />
            </div>

        );
    }
}

export default TodoListHeader;