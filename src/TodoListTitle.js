import React from 'react';


class TodoListTitle extends React.Component {





    render = () => {
        //если привязываем state к css .error

        return (
            <>
                <h3 className="todoList-header__title">{this.props.title}</h3>
            </>

        );
    }
}

export default TodoListTitle;

