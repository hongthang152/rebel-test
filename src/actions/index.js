import * as ACTIONS from "../constants/action-types";

// export function addArticle(payload) {
//     return { type: ADD_ARTICLE, payload }
// }

export function notifyAddItem(payload) {
    return { type: ACTIONS.NOTIFY_ADD_ITEM, payload }
}

export function resetStore() {
    return { type: ACTIONS.RESET_STORE }
}

export function resetAddButtonClicked() {
    return { type: ACTIONS.RESET_ADD_BUTTON_CLICKED }
}

export function addKeyValue(payload) {
    return { type: ACTIONS.ADD_KEY_VALUE, payload }
}

export function notifyDeleteItem() {
    return { type: ACTIONS.NOTIFY_DELETE_ITEM }
}

export function resetDeleteButtonClicked() {
    return { type: ACTIONS.RESET_DELETE_BUTTON_CLICKED }
}

export function removeKeyValue(payload) {
    return { type: ACTIONS.REMOVE_KEY_VALUE, payload }
}

export function resetClearButtonClicked() {
    return { type: ACTIONS.RESET_CLEAR_BUTTON }
}

export function sortKeys(payload) {
    return { type: ACTIONS.SORT_KEYS, payload }
}

export function sortValues(payload) {
    return { type: ACTIONS.SORT_VALUES, payload }
}