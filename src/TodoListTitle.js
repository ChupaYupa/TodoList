import React from 'react';


class TodoListTitle extends React.Component {





    render = () => {
        debugger
        //если привязываем state к css .error

        return (
            <>
                <h3 className="todoList-header__title">{this.props.title}<button onClick={this.props.deleteTodolist}>X</button></h3>

            </>

        );
    }
}

export default TodoListTitle;

