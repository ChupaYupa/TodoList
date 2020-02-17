import React from 'react';


class TodoListFooter extends React.Component {
    state = {
        isHidden: true
    }
    onAllFilterClick = () => {this.props.changeFilter('All')}
    onCompletedClick = () => {this.props.changeFilter('Completed')}
    onActiveClick = () => {this.props.changeFilter('Active') }
    onHideClick = () => { this.setState({ isHidden: true})}
    onShowClick = () => { this.setState({ isHidden: false})}

    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                {!this.state.isHidden &&
                    <div>
                        <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                        <button onClick={this.onCompletedClick} className={classForCompleted}>Completed</button>
                        <button onClick={this.onActiveClick} className={classForActive}>Active</button>
                    </div>}
        {/* показ и скрытие footer */}
                {!this.state.isHidden && <span onClick={this.onHideClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onShowClick}>show</span>}
            </div>
        );
    }
}

export default TodoListFooter;

