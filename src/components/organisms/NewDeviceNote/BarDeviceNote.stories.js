import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import NewDeviceNote from './BarDeviceNote';

storiesOf('organisms/NewDeviceNote', module)
  .addDecorator(withKnobs)
  .add('NewDeviceNote', () => {
    return <NewDeviceNote />;
  });
