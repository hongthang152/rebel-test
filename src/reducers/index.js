import { NOTIFY_ADD_ITEM, RESET_STORE, RESET_ADD_BUTTON_CLICKED, ADD_KEY_VALUE, NOTIFY_DELETE_ITEM, RESET_DELETE_BUTTON_CLICKED, REMOVE_KEY_VALUE, RESET_CLEAR_BUTTON, SORT_KEYS, SORT_VALUES } from '../constants/action-types';
import sortValues from 'sort-values';

const initialState = {
    data: {}
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case NOTIFY_ADD_ITEM:
            return Object.assign({}, state, {
                addButtonClicked: true
            })
        case RESET_ADD_BUTTON_CLICKED:
            return Object.assign({}, state, {
                addButtonClicked: false
            })
        case RESET_STORE:
            return Object.assign({}, initialState, {
                clearButtonClicked: true
            })
        case RESET_CLEAR_BUTTON:
            return Object.assign({}, state, {
                clearButtonClicked: false
            })
        case ADD_KEY_VALUE:
            return Object.assign({}, state, {
                data: {
                    ...state.data,
                    ...action.payload
                }
            })
        case NOTIFY_DELETE_ITEM:
            return Object.assign({}, state, {
                deleteButtonClicked: true
            })
        case RESET_DELETE_BUTTON_CLICKED:
            return Object.assign({}, state, {
                deleteButtonClicked: false
            })
        case REMOVE_KEY_VALUE:
            delete state.data[action.payload]
            return Object.assign({}, state, {
                data: state.data
            })
        case SORT_KEYS:
            let ordered = {};
            if(action.payload === 'asc') {
                Object.keys(state.data).sort().forEach(key => {
                    ordered[key] = state.data[key]
                })
            } else if (action.payload === 'desc') {
                Object.keys(state.data).sort().reverse().forEach(key => {
                    ordered[key] = state.data[key]
                })
            }
            return Object.assign({}, state, {
                data: ordered
            })
        case SORT_VALUES:
            if (action.payload === 'asc') {
                ordered = sortValues(state.data);
            } else if (action.payload === 'desc') {
                ordered = sortValues(state.data, 'desc');
            }         
            return Object.assign({}, state, {
                data: ordered
            }) 
        default:
          return state
      }
};

export default rootReducer;