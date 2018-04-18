import React, {Component} from 'react';
import './ReactCountries.css';
import Button from 'material-ui/Button';

class ReactCountries extends Component {
    render() {
        return (
            <div className="RC">
                <Button variant="raised" color="primary">
                    Material UI
                </Button>
            </div>
        );
    }
}

export default ReactCountries;