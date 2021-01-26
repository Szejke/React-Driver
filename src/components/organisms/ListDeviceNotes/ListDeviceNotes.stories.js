import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import ListDeviceNotes from './ListDeviceNotes';

storiesOf('organisms/ListDeviceNotes', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('ListDeviceNotes', () => {
    return <ListDeviceNotes />;
  });
