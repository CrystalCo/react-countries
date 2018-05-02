import {connect} from 'react-redux'
import {removeCountry, setMessage, toggleCountry} from "../actions"
import RcList from "../components/RcList";

const mapStateToProps = state => ({
    countries: state.countries.filter(c => c.visited || !state.ui.onlyVisited)
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
