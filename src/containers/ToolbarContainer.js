import {connect} from 'react-redux'
import {addCountryDialogOpened, setOnlyVisited, fetchUserCountries, setCountries} from "../actions"
import RcToolbar from "../components/RcToolbar";
import {getOnlyVisited} from '../reducers';

const mapStateToProps = state => ({
    onlyVisited: getOnlyVisited(state)
});

const mapDispatchToProps = dispatch => ({
    onOnlyVisitedChange: onlyVisited => {
        dispatch(setOnlyVisited(onlyVisited));
        dispatch(setCountries([])); // Calling this to clear the table immediately
        dispatch(fetchUserCountries(onlyVisited));
    },

    onDialogOpen: () => dispatch(addCountryDialogOpened(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(RcToolbar)

// Another way without writing mapDispatchToProps if callback and action creator args are the same
/*export default connect(
    mapStateToProps,
    {onOnlyVisitedChange: setOnlyVisited}
)(RcToolbar)*/
