import React from 'react';
import './Description.scss';

const Description = ({content, name}) => {

  return(
    <p className={`description ${name}`}>

      {content || 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}
    </p>
  )
}
export default Description;