import { connect } from 'react-redux';
import { removeTodo } from '../../store/ActionCreators/core';
import './todoCard.css';
const TodoCard = (props) => {
  const {
    text,
    uid,
    removeTodo
  } = props;

  const handleDeleteCard = (uid) => {
    console.log('delete', uid);
    removeTodo(uid);
  }

  return (
    <div className="todo-card-wrapper">
      <div className="todo-text">{text}</div>
      <div className="options">
        <input type="checkbox"/>
        <span className="delete-button material-icons material-icons-outlined"
          onClick={() => handleDeleteCard(uid)}
        >delete</span>
      </div>
    </div>
  );
} 

export default connect(null, {removeTodo})(TodoCard);