import React from 'react';


class AddNewitemForm extends React.Component {
    state = {
        error: true,
        title: ''
    }
    onAddItemButtoonClick = () => {
        let newText = this.state.title;
        this.setState({ title: '' });
        if (newText.trim() === '') {
            this.setState({ error: true })
        }
        else {
            this.setState({ error: false })
            //передаем новый текст
            this.props.addItem(newText)
        }
    }
    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddItemButtoonClick()
        }

    }

    render = () => {

        const classForInput = this.state.error ? 'error' : '';
        return (
            <div className="todoList-newTaskForm">
                <input type="text" onKeyPress={this.onKeyPress} onChange={this.onTitleChanged} className={classForInput} placeholder="New item name" value={this.state.title} />
                <button onClick={this.onAddItemButtoonClick}>Add</button>
            </div>
        );

    }
}
export default AddNewitemForm;