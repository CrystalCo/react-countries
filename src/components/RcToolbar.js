import React from 'react';
import Button from '@material-ui/core/Button';
import {Icon} from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
//import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

export default function RcToolbar({onDialogOpen, onlyVisited, onOnlyVisitedChange}) {
    //console.log("AAA " + onlyVisited);

    return (
        <div className="RC-toolbar">
            <Button mini={true} variant="fab" color="primary" onClick={onDialogOpen}>
                <Icon>add</Icon>
            </Button>
            <Tooltip title="Only Visited" placement="bottom">
                <Switch checked={onlyVisited} onChange={(e) => onOnlyVisitedChange(e.target.checked)} color="secondary"
                        classes={{
                            root: 'switchRoot',
                            checked: 'switchChecked',
                            iconChecked: 'switchChecked'
                        }}/>
            </Tooltip>
            {/*<Tooltip title="Show Map (WIP)" placement="bottom">
                <IconButton color="secondary">
                    <Icon>map</Icon>
                </IconButton>
            </Tooltip>*/}
        </div>
    );
}