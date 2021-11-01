import TextInput from "../../../ui/TextInput"
import './todoAdder.css'
import { useRef, useState } from "react";
import { connect } from "react-redux";

import { addTodo } from "../../../store/ActionCreators/core";

const TodoAdder = (props) => {

  const {addTodo} = props;

  const [ text, setText ] = useState('');

  const textInputRef = useRef(null);

  const onChangeCallBack = (event) => {
    setText(event.target.value);
  }

  const onClickCallback = () => {
    addTodo(text);
    textInputRef.current.value = "";
  }
  return (
    <div className="todo-adder-wrapper">
      <TextInput
        placeholder={"Enter a TODO here ..."}
        onChangeCallBack={onChangeCallBack}
        ref={textInputRef}
      />
      <button className="add-todo-button" onClick={onClickCallback}>
        <span className="material-icons material-icons-outlined">add</span>
      </button>
    </div>
  );
}

export default connect(null, {addTodo})(TodoAdder);