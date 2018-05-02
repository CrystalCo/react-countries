const ui = (state = {
    onlyVisited: false,
    addCountryDialogOpened: false,
    countryToAdd: '',
    msgOpen: false,
    msg: ''
}, action) => {
    switch (action.type) {
        case 'SET_ONLY_VISITED':
            return {...state, onlyVisited: action.onlyVisited};
        case 'ADD_COUNTRY_DIALOG_OPENED':
            let result = {...state, addCountryDialogOpened: action.opened};
            if (!action.opened) {
                result.countryToAdd = '' // TODO - remove this, ref?
            }
            return result;
        case 'SET_MESSAGE':
            return {...state, msg: action.msg, msgOpen: action.msg !== ''};
        case 'COUNTRY_TO_ADD_CHANGED':
            return {...state, countryToAdd: action.countryToAdd};
        default:
            return state
    }
};

export default ui;