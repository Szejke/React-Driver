import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import BarDeviceNote from './BarDeviceNote';

storiesOf('organisms/BarDeviceNote', module)
  .addDecorator(withKnobs)
  .add('NewDeviceNote', () => {
    return <BarDeviceNote />;
  });
