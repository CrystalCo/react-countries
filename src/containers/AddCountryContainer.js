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

const mapStateToProps = state => ({
    open: state.ui.addCountryDialogOpened,
    suggestions: state.allCountries.map(country => ({
        value: country.alpha3Code.toLowerCase(),
        label: country.name
    })),
    allCountries: state.allCountries,
    countryToAdd: state.ui.countryToAdd
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
