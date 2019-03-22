import React from 'react';
import convert from 'xml-js';
import './styles.css';

import { connect } from 'react-redux';
import { notifyAddItem, notifyDeleteItem, resetStore, sortKeys, sortValues } from '../../actions/index';
import store from '../../store/index';

function mapDispatchToProps(dispatch) {
    return {
        notifyAddItem: () => dispatch(notifyAddItem()),
        notifyDeleteItem: () => dispatch(notifyDeleteItem()),
        resetStore: () => dispatch(resetStore()),
        sortKeys: (payload) => dispatch(sortKeys(payload)),
        sortValues: (payload) => dispatch(sortValues(payload))
    }
}

class SecondColumn extends React.Component {
    constructor() {
        super();
        this.notifyAddItem = this.notifyAddItem.bind(this);
        this.notifyDeleteItem = this.notifyDeleteItem.bind(this);
        this.clear = this.clear.bind(this);
        this.exportXML = this.exportXML.bind(this);
        this.sortKeys = this.sortKeys.bind(this);
        this.sortValues = this.sortValues.bind(this);

        this.state = {
            isKeyAsc: true,
            isValueAsc: true
        }
    }

    notifyAddItem(e) {
        e.preventDefault();
        this.props.notifyAddItem();
    }

    notifyDeleteItem(e) {
        e.preventDefault();
        this.props.notifyDeleteItem();
    }

    clear(e) {
        e.preventDefault();
        this.props.resetStore();
    }

    exportXML(e) {
        if(!store.getState().data) {
            return;
        }
        let content = convert.js2xml(store.getState().data, {compact: true, ignoreComment: true, spaces: 4});
        this.refs.export.setAttribute('href', 'data:text/plain,' + encodeURIComponent(content));
        this.refs.export.setAttribute('download', 'result.xml');
        this.refs.export.click();
    }

    sortKeys(e) {
        e.preventDefault();
        if(this.state.isKeyAsc) {
            this.props.sortKeys('asc');
            this.setState({
                isKeyAsc: false
            })
        } else {
            this.props.sortKeys('desc');
            this.setState({
                isKeyAsc: true
            });
        }
    }

    sortValues(e) {
        e.preventDefault();
        if(this.state.isValueAsc) {
            this.props.sortValues('asc');
            this.setState({
                isValueAsc: false
            })
        } else {
            this.props.sortValues('desc');
            this.setState({
                isValueAsc: true
            });
        }
    }

    render() {
        return (
            <div>
                <button class="button" onClick={this.notifyAddItem}>Add</button>
                <br />
                <button class="button" onClick={this.notifyDeleteItem}>Remove Selected</button>
                <br />
                <button class="button" onClick={this.clear}>Clear</button>
                <br />
                <button class="button" onClick={this.exportXML}>Export to XML</button>
                <br />
                <button class="button" onClick={this.sortKeys}>Sort by Name</button>
                <br />
                <button class="button" onClick={this.sortValues}>Sort by Value</button>
                <a ref='export' id='download'></a>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(SecondColumn);