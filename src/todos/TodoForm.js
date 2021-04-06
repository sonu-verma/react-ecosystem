import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './TodoForm.css';

const TodoForm = ({ todos ,onCreatePressed }) => {
    
    const [inputValue,setInputValue] = useState("");


    return (
        <div className="todo-form">
            <input 
                type="text" 
                className="todo-form-input" 
                placeholder="enter your new todo here"
                value={inputValue}
                onChange={ e => setInputValue(e.target.value)}
            />
            <button 
                onClick={() => {
                    const isDuplicate = todos.some(todo => (todo.text).trim() === inputValue.trim());
                    if(!isDuplicate){
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }else{
                        alert("Already exists.");
                        return false;
                    }
                }}
                className="todo-form-button btn">
                Add New Todo
            </button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);