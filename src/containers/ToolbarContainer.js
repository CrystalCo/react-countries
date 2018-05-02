import {connect} from 'react-redux'
import {addCountryDialogOpened, setOnlyVisited} from "../actions"
import RcToolbar from "../components/RcToolbar";

const mapStateToProps = state => ({
    onlyVisited: state.ui.onlyVisited
});

const mapDispatchToProps = dispatch => ({
    onOnlyVisitedChange: onlyVisited => dispatch(setOnlyVisited(onlyVisited)),
    onDialogOpen: () => dispatch(addCountryDialogOpened(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(RcToolbar)
