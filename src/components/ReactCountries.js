import React, {Component} from 'react';
import './ReactCountries.css';
import Button from 'material-ui/Button';
import './RotatingEarth';
import RotatingEarth from "./RotatingEarth";
import {Icon} from "material-ui";
import Paper from 'material-ui/Paper';
import Switch from 'material-ui/Switch';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';

class ReactCountries extends Component {
    render() {
        return (
            <Paper className="RC" elevation={4}>
                <RotatingEarth/>
                <div className="RC-toolbar">
                    <Tooltip title="Add Country" placement="bottom">
                        <Button mini="small" variant="fab" color="primary">
                            <Icon>add</Icon>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Only Visited" placement="bottom">
                        <Switch
                            /*checked={this.state.checkedB}
                            onChange={this.handleChange('checkedB')}
                            value="checkedB"*/
                            color="secondary"
                        />
                    </Tooltip>
                    <Tooltip title="Show Map" placement="bottom">
                        <IconButton color="secondary">
                            <Icon>map</Icon>
                        </IconButton>
                    </Tooltip>

                </div>
            </Paper>
        );
    }
}

export default ReactCountries;