import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo,completedTodo } from './actions';
const TodoList = ({ todos = [],onRemovePressed,onCompletePressed }) => (
    <div className="todo-wrapper">
        <TodoForm />
        { todos.map(function(todo,index){
            return (<TodoListItem key={index} todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed} />);
        }) }
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completedTodo(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);