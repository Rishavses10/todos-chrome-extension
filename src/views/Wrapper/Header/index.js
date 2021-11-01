import { connect } from 'react-redux';

import { setAppTheme } from '../../../store/ActionCreators/core'
import ToggleButton from '../../../ui/ToggleButton';
import './header.css';
import '../../../styles/utilities.css'

const Header = (props) => {

  const {setAppTheme} = props;

  const setTheme = (checked) => {
    console.log(checked);
    if(checked){
      setAppTheme('dark');
    }
    else{
      setAppTheme('light');
    }
  }
  return (
    <div className="header">
      <div className="app-name primary-text">
        TODOs
      </div>
      <div>
        <ToggleButton
          onChangeCallback={setTheme}
        />
      </div>
    </div>
  )
}


export default connect(null,{setAppTheme})(Header);