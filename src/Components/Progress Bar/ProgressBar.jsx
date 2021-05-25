import React from 'react'

const ProgressBar = ({val,max}) => {

    return(
        <progress value={val} max={max} />
    )
  };

  
  export default ProgressBar;
