import { connect } from "react-redux";
import Header from "./Header";
import TodoAdder from "./TodoAdder";
import TodoList from "./TodoList";

import './wrapper.css';

const Wrapper = (props) => {

  const { appTheme } = props;
  const themeClass = (appTheme === 'light')? 'app-theme-light' : 'app-theme-dark';
  console.log(themeClass);
  return(
    <div className={`wrapper ${themeClass}`}>
      <Header />
      <div className="app-body">
        <TodoList/>
        <TodoAdder/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    appTheme: state.appTheme
  }
}

export default connect(mapStateToProps, null)(Wrapper);