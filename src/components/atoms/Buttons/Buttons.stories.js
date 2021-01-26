import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import Fab from './Fab';
import IconButton from './IconButton';

storiesOf('atoms/Button', module).add('primary button', () => {
  return <Button>Primary</Button>;
});

storiesOf('atoms/Button', module).add('Fab', () => {
  return <Fab>+</Fab>;
});

storiesOf('atoms/Button', module).add('iconButton', () => {
  return <IconButton>+</IconButton>;
});
