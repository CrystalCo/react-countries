import React from 'react';
import './ReactCountries.css';
import Button from 'material-ui/Button';
import './RotatingEarth';
import {Icon} from "material-ui";
import Switch from 'material-ui/Switch';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';

class RcToolbar extends React.Component {
    handleOnlyVisitedChange = (e) => {
        this.props.onOnlyVisitedChange(e.target.checked);
    };

    render() {
        const onlyVisited = this.props.onlyVisited;

        return (
            <div className="RC-toolbar">
                <Button mini={true} variant="fab" color="primary" onClick={this.props.onDialogOpen}>
                    <Icon>add</Icon>
                </Button>
                <Tooltip title="Only Visited" placement="bottom">
                    <Switch checked={onlyVisited} onChange={this.handleOnlyVisitedChange} color="secondary"/>
                </Tooltip>
                <Tooltip title="Show Map (WIP)" placement="bottom">
                    <IconButton color="secondary">
                        <Icon>map</Icon>
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
}

export default RcToolbar;