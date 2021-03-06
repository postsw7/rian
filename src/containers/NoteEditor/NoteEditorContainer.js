import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RichEditor from '../../components/NoteEditor/containers/RichEditor.js';
import * as actions from '../../actions/NoteEditorActions.js';

class NoteEditorContainer extends Component {
  
  render() {
    
    return (
      <div className="NoteEditor">
        <Richditor editorState={this.props.editorState} puttext={this.props.puttext}/>
      </div>
    );
  }
}

function mapState(state) {
  return { 
    data: state.NoteEditor.data 
  }
}

function mapDispatch(dispatch) {
  return {
    onChangeDispatch: (value) => dispatch(actions.onChangeDispatch(value)) 
  };
}

export default connect(mapState, mapDispatch)(RichEditor);