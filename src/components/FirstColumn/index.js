import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

import store from '../../store/index';
import { resetAddButtonClicked, addKeyValue, resetDeleteButtonClicked, removeKeyValue, resetClearButtonClicked } from '../../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    resetAddButtonClicked: () => dispatch(resetAddButtonClicked()),
    resetDeleteButtonClicked: () => dispatch(resetDeleteButtonClicked()),
    addKeyValue: (payload) => dispatch(addKeyValue(payload)),
    removeKeyValue: (payload) => dispatch(removeKeyValue(payload)),
    resetClearButtonClicked: () => dispatch(resetClearButtonClicked())
  }
}

class FirstColumn extends React.Component {
  state = {
    previousSelect: this.refs['input-row-0'],
  }

  handleSelect(e) {
    if (this.state.previousSelect) {
      let previousSelect = this.refs[this.state.previousSelect];
      previousSelect.style.backgroundColor = 'white';
      previousSelect.style.color = 'black';
    }
    e.target.style.backgroundColor = '#1818C6';
    e.target.style.color = 'white';
    this.setState({
      ...this.state,
      previousSelect: e.target.getAttribute("id")
    });
  }

  render() {
    store.subscribe(() => {
      let input = this.refs[this.state.previousSelect] ? this.refs[this.state.previousSelect].textContent : '';
      input = input.replace(/\s*=/, '=').replace(/=\s*/, '=');
      let keyValue = input.split('=');

      if (store.getState().addButtonClicked) {
        this.props.resetAddButtonClicked();
        if (/[^a-zA-Z0-9]/.test(keyValue[0]) || /[^a-zA-Z0-9]/.test(keyValue[1])) {
          alert('Invalid input. Only alpha numeric characters are accepted');
          return;
        }
        this.props.addKeyValue({ [keyValue[0]]: keyValue[1] });
      } else if (store.getState().deleteButtonClicked && this.refs[this.state.previousSelect].textContent) {
        this.refs[this.state.previousSelect].textContent = '';
      } else if (store.getState().clearButtonClicked) {
        this.props.resetClearButtonClicked();
        for (var i = 0; i < 15; i++) {
          this.refs['input-row-' + i].textContent = '';
        }
      }
    })

    // Populate rows
    const items = [];
    for (var i = 0; i < 15; i++) {
      let id = 'input-row-' + i;
      items.push(<tr><td contenteditable="true" class="input-row" id={id} ref={id}
        onClick={this.handleSelect.bind(this)}></td></tr>)
    }


    return (
      <table class="column1" border="1">
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
}

export default connect(null, mapDispatchToProps)(FirstColumn);