import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import DeviceNote from './DeviceNote';

storiesOf('molecules/DeviceNote', module)
  .addDecorator(withKnobs)
  .add('DeviceNote', () => {
    const labelName = 'labelName';
    const labelDescription = 'labelDescription';
    const labelDisabled = 'labelDisabled';

    const defaultNameValue = 'defaultValueTitle';
    const defaultDescriptionValue = 'defaultValueMail';
    const defaultDisabledValue = true;
    const groupId = 'GROUP-ID1';

    const nameValue = text(labelName, defaultNameValue, groupId);
    const descriptionValue = text(labelDescription, defaultDescriptionValue, groupId);
    const disabledValue = boolean(labelDisabled, defaultDisabledValue, groupId);

    return <DeviceNote name={nameValue} description={descriptionValue} disabled={disabledValue} />;
  });
