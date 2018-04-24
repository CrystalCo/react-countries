import React from 'react';
import Button from 'material-ui/Button';
import {Icon} from "material-ui";
import Switch from 'material-ui/Switch';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';

export default function RcToolbar(props) {
    const onlyVisited = props.onlyVisited;

    return (
        <div className="RC-toolbar">
            <Button mini={true} variant="fab" color="primary" onClick={props.onDialogOpen}>
                <Icon>add</Icon>
            </Button>
            <Tooltip title="Only Visited" placement="bottom">
                <Switch checked={onlyVisited} onChange={(e) => props.onOnlyVisitedChange(e.target.checked)} color="secondary"/>
            </Tooltip>
            <Tooltip title="Show Map (WIP)" placement="bottom">
                <IconButton color="secondary">
                    <Icon>map</Icon>
                </IconButton>
            </Tooltip>
        </div>
    );
}