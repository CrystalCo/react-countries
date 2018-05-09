import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import ReactSelect from './ReactSelect'

export default function RcAddCountryDialog(props) {
    return (
        <div>
            <Dialog open={props.open} onClose={props.onDialogClose} fullWidth={true}>
                <DialogTitle id="form-dialog-title">Add Country</DialogTitle>
                <DialogContent>
                    <ReactSelect suggestions={props.suggestions} placeholder="Search a country" autofocus={true} value={props.countryCodeToAdd} onChange={props.onCountryToAddChanged}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onDialogClose} color="primary">Cancel</Button>
                    <Button onClick={() => {
                        if (props.countryCodeToAdd && props.countryIds.indexOf(props.countryCodeToAdd) === -1)
                            props.onCountryAdd(props.countryCodeToAdd)
                    }} color="primary">Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}