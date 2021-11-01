import { connect } from "react-redux";
import TodoCard from "../../../ui/TodoCard";
const TodoList = (props) => {
  const {todos} = props;

  const renderTodoCard = (todoData, index) => {
    return <TodoCard key={index} text={todoData.text} uid={todoData.uid}/>
  }
  return(
    <div>
      {todos.map((todo, index) => renderTodoCard(todo, index)
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);