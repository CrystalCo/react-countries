import {connect} from 'react-redux'
import {removeCountry, setMessage, toggleCountry} from "../actions"
import RcList from "../components/RcList";
import {getVisibleCountries} from '../reducers';

const mapStateToProps = state => ({
    countries: getVisibleCountries(state)
});

const mapDispatchToProps = dispatch => ({
    onCountryVisitedChange: code => dispatch(toggleCountry(code)),
    onCountryDeleted: code => {
        dispatch(removeCountry(code));
        // TODO - how to show message when first dispatch is done (Ajax call finished for example)
        dispatch(setMessage("Country has been deleted"))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RcList)