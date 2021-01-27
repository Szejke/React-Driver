import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SetDeviceNote from './SetDeviceNote';

storiesOf('organisms/SetDeviceNote', module)
  .addDecorator(withKnobs)
  .add('SetDeviceNote', () => {
    return <SetDeviceNote />;
  });
