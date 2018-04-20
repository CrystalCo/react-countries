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
import List, {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

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

                <Paper elevation={1}>
                    <List className="RC-list">
                        <ListItem>
                            <img src="https://restcountries.eu/data/col.svg" alt=""
                                 style={{width: "7%", height: "7%"}}/>
                            <ListItemText primary="Colombia" secondary="Bogota"/>
                            <ListItemSecondaryAction>
                                <Tooltip title="Visited" placement="left">
                                    <Checkbox/>
                                </Tooltip>
                                <IconButton color="secondary">
                                    <Icon>delete</Icon>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <img src="https://restcountries.eu/data/bra.svg" alt=""
                                 style={{width: "7%", height: "7%"}}/>
                            <ListItemText primary="Brazil" secondary="Brasília"/>
                            <ListItemSecondaryAction>
                                <Tooltip title="Visited" placement="left">
                                    <Checkbox/>
                                </Tooltip>
                                <IconButton color="secondary">
                                    <Icon>delete</Icon>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <img src="https://restcountries.eu/data/srb.svg" alt=""
                                 style={{width: "7%", height: "7%"}}/>
                            <ListItemText primary="Serbia" secondary="Belgrade"/>
                            <ListItemSecondaryAction>
                                <Tooltip title="Visited" placement="left">
                                    <Checkbox/>
                                </Tooltip>
                                <IconButton color="secondary">
                                    <Icon>delete</Icon>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </List>
                </Paper>


            </Paper>
        );
    }
}

export default ReactCountries;