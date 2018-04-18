import React, {Component} from 'react';
import './ReactCountries.css';
import Button from 'material-ui/Button';
import './RotatingEarth';
import RotatingEarth from "./RotatingEarth";

class ReactCountries extends Component {
    render() {
        return (
            <div className="RC">
                {/* TODO - move as component? */}
                <div className="RC-toolbar">
                    <Button variant="raised" color="primary">
                        Add Country
                    </Button>
                    <RotatingEarth/>
                </div>
            </div>
        );
    }
}

export default ReactCountries;