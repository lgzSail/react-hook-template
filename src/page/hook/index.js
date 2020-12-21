import React from 'react';
import {connect} from 'react-redux';
import { dispatchProps } from '../../redux/reducer';

function hook (props) {
  console.log(props)
  return (
    <div>
      123
    </div>
  )
}

const stateProps = (state) => {
  return {
    ...state
  }
}

export default connect(stateProps, dispatchProps)(hook);
