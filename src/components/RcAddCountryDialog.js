import React from 'react';
import './ReactCountries.css';
import Button from 'material-ui/Button';
import './RotatingEarth';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import ReactSelect from './ReactSelect'

class RcAddCountryDialog extends React.Component {
    render() {
        return (
            <div>
                <Dialog open={this.props.open} onClose={this.props.onDialogClose} fullWidth={true}>
                    <DialogTitle id="form-dialog-title">Add Country</DialogTitle>
                    <DialogContent>
                        <ReactSelect suggestions={this.props.suggestions} placeholder="Search a country" autofocus={true} value={this.props.countryToAdd} onChange={this.props.onCountryToAddChanged}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.onDialogClose} color="primary">Cancel</Button>
                        <Button onClick={this.props.onCountryAdd} color="primary">Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default RcAddCountryDialog;