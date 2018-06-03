import React from 'react';
import Button from '@material-ui/core/Button';

const FetchError = ({message, onRetry}) => (
    <div className="RC-error">
        <p>Could not fetch countries (simulated API call error). {message}</p>
        <Button variant="raised" size="small" color="primary" onClick={onRetry}>Retry</Button>
    </div>
);

export default FetchError;