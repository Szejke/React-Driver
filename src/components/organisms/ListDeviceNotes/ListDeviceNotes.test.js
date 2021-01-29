import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import ListDeviceNotes from './ListDeviceNotes';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));
const handleEditDeviceBarToggle = () => {};
describe(' Tests for Device Note', () => {
  it('Test loading', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ListDeviceNotes editState={handleEditDeviceBarToggle} />
      </Provider>,
    );
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});
