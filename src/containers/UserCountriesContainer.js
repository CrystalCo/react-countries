import {connect} from 'react-redux'
import {fetchUserCountries, removeCountry, setMessage, toggleCountry} from "../actions"
import RcList from "../components/RcList";
import {getIsFetching, getVisibleCountries, getErrorMessage, getOnlyVisited} from '../reducers';

const mapStateToProps = state => ({
    countries: getVisibleCountries(state),
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
    onlyVisited: getOnlyVisited(state)
});

const mapDispatchToProps = dispatch => ({
    onCountryVisitedChange: code => dispatch(toggleCountry(code)),
    onCountryDeleted: code => {
        dispatch(removeCountry(code));
        // TODO - how to show message when first dispatch is done (Ajax call finished for example)
        dispatch(setMessage("Country has been deleted"))
    },
    fetchUserCountries: (onlyVisited) => dispatch(fetchUserCountries(onlyVisited))
});

export default connect(mapStateToProps, mapDispatchToProps)(RcList)