import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import BarDeviceNote from './BarDeviceNote';

storiesOf('organisms/BarDeviceNote', module)
  .addDecorator(withKnobs)
  .add('NewDeviceNote', () => {
    const [deviceBarVisible, setDeviceBarVisible] = useState(false);
    const [setStateEdit] = useState('');

    const handleNewDeviceBarToggle = () => {
      setDeviceBarVisible(!deviceBarVisible);
      setStateEdit('');
      return deviceBarVisible;
    };

    return <BarDeviceNote toogle={handleNewDeviceBarToggle} />;
  });
