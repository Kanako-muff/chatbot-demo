import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Answer = (props) => {
    return(
        <Button size="large" variant="contained" onClick={() => props.select(props.content, props.nextId)}>
            {props.content}
        </Button>
    );
}

export default Answer;