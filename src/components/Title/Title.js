import React from 'react';
import './Title.scss';


const Title = ({content, name}) => {

  return(
      <div className={`title ${name}`}>{content}</div>
  )
}

export default Title;