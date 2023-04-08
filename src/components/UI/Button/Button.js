import React,{useState} from 'react';
import '../../CourseGoals/CourseInput/CourseInput.css';

import './Button.css';

const Button = props => {


  return (
    <button type={props.type} className={`button ${!props.valid ? 'bt':''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
