import {connect} from 'react-redux'
import {addCountry, addCountryDialogOpened, countryToAddChanged, removeCountry, toggleCountry} from "../actions"
import RcAddCountryDialog from "../components/RcAddCountryDialog";
import {getAddCountryDialogOpened, getCountryToAdd, getSuggestions, getUserCountriesCode} from '../reducers'

const mapStateToProps = state => ({
    open: getAddCountryDialogOpened(state),
    countryCodeToAdd: getCountryToAdd(state),
    suggestions: getSuggestions(state),
    countryIds: getUserCountriesCode(state)
});

const mapDispatchToProps = dispatch => ({
    onCountryVisitedChange: code => dispatch(toggleCountry(code)),
    onCountryDeleted: code => dispatch(removeCountry(code)),

    onDialogClose: () => dispatch(addCountryDialogOpened(false)),
    onCountryToAddChanged: country => {
        if (country) {
            dispatch(countryToAddChanged(country.toLowerCase()))
        }
    },
    onCountryAdd: (code) => dispatch(addCountry(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(RcAddCountryDialog)
