import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import store from '../../store/index';

import { removeKeyValue, resetDeleteButtonClicked } from '../../actions/index'; 

function mapDispatchToProps(dispatch) {
  return {
    removeKeyValue: (payload) => dispatch (removeKeyValue(payload)),
    resetDeleteButtonClicked: () => dispatch(resetDeleteButtonClicked())
  }
}

class ThirdColumn extends React.Component {
  state = {
    previousSelect: null
  }

  handleSelect(e) {
    if(this.state.previousSelect) {
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
        if(store.getState().deleteButtonClicked) {
          this.props.resetDeleteButtonClicked();
          let key = this.refs[this.state.previousSelect] ? this.refs[this.state.previousSelect].textContent.split('=')[0] : '';
          this.props.removeKeyValue(key);
        }
        let keyValues = store.getState().data;
        let rowIndex = 0;

        for(var i = 0; i < 15; i++) {
          this.refs['output-row-' + i].textContent = '';
        }
        for (var key in keyValues) {
          this.refs['output-row-' + rowIndex].textContent = key + '=' + keyValues[key];
          rowIndex++;
        }
      })

      const items = [];

      for(var i = 0; i < 15; i++) {
        let id = 'output-row-' + i;
        items.push(<tr><td class="output-row" id={id} ref={id}
        onClick={this.handleSelect.bind(this)}></td></tr>)
      }
      
      return (
          <table class="column3" border="1">
            <tbody>
              {items}
            </tbody>
          </table>
      )
  }
}

export default connect(null, mapDispatchToProps)(ThirdColumn);