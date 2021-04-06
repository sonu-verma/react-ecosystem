import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo,onRemovePressed,onCompletePressed  }) => (
    <div className="todo-list-item">
        <div style={{width:'50%'}}>
            <h3>{todo.text}</h3>
        </div>
        <div style={{width:'50%'}} className="button-container"> 
            {todo.isCompleted ? null : <button onClick={()=> onCompletePressed(todo.text) } className="completed-button btn">Mark as Completed</button> }
            <button onClick={() => onRemovePressed(todo.text)} className="remove-button">Remove</button>
        </div>
    </div>
);

export default TodoListItem;