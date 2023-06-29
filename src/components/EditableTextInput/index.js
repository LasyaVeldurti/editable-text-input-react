import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {inputText: '', displayText: false}

  displayText = () => {
    this.setState({displayText: true})
  }

  editText = () => {
    this.setState({displayText: false})
  }

  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText, displayText} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {displayText ? (
              <>
                <p className="text">{inputText} </p>
                <button
                  onClick={this.editText}
                  className="save-btn"
                  type="button"
                >
                  Edit
                </button>
              </>
            ) : (
              <>
                <input
                  onChange={this.onChangeInputText}
                  value={inputText}
                  className="input-field"
                  type="text"
                />
                <button
                  onClick={this.displayText}
                  className="save-btn"
                  type="button"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
