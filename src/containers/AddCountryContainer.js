import {connect} from 'react-redux'
import {
    addCountry,
    addCountryDialogOpened,
    countryToAddChanged,
    removeCountry,
    setMessage,
    toggleCountry
} from "../actions"
import RcAddCountryDialog from "../components/RcAddCountryDialog";
import {getAddCountryDialogOpened, getAllCountries, getCountryToAdd, getSuggestions} from '../reducers'

const mapStateToProps = state => ({
    open: getAddCountryDialogOpened(state),
    countryToAdd: getCountryToAdd(state),
    suggestions: getSuggestions(state),
    allCountries: getAllCountries(state)
});

const mapDispatchToProps = dispatch => ({
    onCountryVisitedChange: code => dispatch(toggleCountry(code)),
    onCountryDeleted: code => {
        dispatch(removeCountry(code));
        dispatch(setMessage("Country has been deleted"))
    },

    onDialogClose: () => dispatch(addCountryDialogOpened(false)),
    onCountryToAddChanged: country => {
        if (country) {
            dispatch(countryToAddChanged(country.toLowerCase()))
        }
    },
    onCountryAdd: (code, allCountries) => {
        dispatch(addCountry(code, allCountries));
        // TODO - how to show message only in case something was really selected before Add? Need info from reducer..
        //dispatch(setMessage("Country has been added"));

        // TODO - same problem, now I always close, but how to close when first dispatch is done and only if something added
        dispatch(addCountryDialogOpened(false))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RcAddCountryDialog)
