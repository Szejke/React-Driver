import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import DeviceNote from './DeviceNote';

describe(' Tests for Device Note', () => {
  it('Test check Descriptions for Device', () => {
    const name = 'defaultValueTitle';
    const description = 'defaultValueMail';
    const disabled = true;
    const id = '123';

    const handleEditDeviceBarToggle = () => {};

    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <DeviceNote
          id={id}
          name={name}
          description={description}
          disabled={disabled}
          editState={handleEditDeviceBarToggle}
        />
      </Provider>,
    );

    if (disabled) expect(getByTestId('iconTrue')).toBeInTheDocument();
    else expect(getByTestId('iconFalse')).toBeInTheDocument();

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });
});
