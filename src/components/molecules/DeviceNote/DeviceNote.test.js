import React from 'react';
import { render } from '@testing-library/react';
import DeviceNote from './DeviceNote';

describe(' Tests for Device Note', () => {
  it('Test check Descriptions for Device', () => {
    const name = 'defaultValueTitle';
    const description = 'defaultValueMail';
    const disabled = true;

    const { getByTestId, getByText } = render(
      <DeviceNote name={name} description={description} disabled={disabled} />,
    );

    if (disabled) expect(getByTestId('iconTrue')).toBeInTheDocument();
    else expect(getByTestId('iconFalse')).toBeInTheDocument();

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });
});
