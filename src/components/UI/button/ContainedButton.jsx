import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ContainedButton = ({children, ...props}) =>  {
  return (
    <Stack direction="row" spacing={2}>
      <Button {...props} variant="contained" href="#contained-buttons">
        {children}
      </Button>
    </Stack>
  );
}


export default ContainedButton;