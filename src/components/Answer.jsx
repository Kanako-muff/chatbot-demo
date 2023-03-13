import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Answer = (props) => {
    return(
        <Stack direction="row" spacing={2}>
            <Button size="large" variant="contained">
                {props.content}
            </Button>
        </Stack>
    );
}

export default Answer;