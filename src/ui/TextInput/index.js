import React from 'react';
import './textInput.css';
const TextInput = React.forwardRef((props, ref) => {
  const {
    placeholder,
    onChangeCallBack,
  } = props;



  return (
    <div className="input-textbox-wrapper">
      <input type="text"
        ref={ref}
        className="input-textbox"
        placeholder={placeholder}
        onChange={onChangeCallBack}
      />
    </div>
  )
});

export default TextInput;