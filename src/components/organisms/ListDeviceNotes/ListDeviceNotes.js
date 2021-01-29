import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import DeviceNote from 'components/molecules/DeviceNote/DeviceNote';
import { getDevicesAction } from 'redux/actions/devices';
import { getDevice } from 'redux/selector/device';
import { useTranslation } from 'react-i18next';

const StyledWrapper = styled.div`
  display: flex;
  padding: 2%;
  flex-direction: column;
`;

const ListDeviceNotes = ({ devices, getDevices, editState, loading, error }) => {
  const { t } = useTranslation();
  const { length } = devices;
  useEffect(() => {
    getDevices();
  }, []);

  return (
    <StyledWrapper>
      {loading && <p data-testid="loading">{t('Loading')}</p>}
      {length === 0 && !loading && <p>{t('noDevicesAvailable')}</p>}
      {error && !loading && <p>{error}</p>}

      {length > 0 &&
        devices.map(({ _id, name, description, disabled }) => (
          <DeviceNote
            editState={editState}
            key={_id}
            id={_id}
            name={name}
            description={description}
            disabled={disabled}
          />
        ))}
    </StyledWrapper>
  );
};

const mapStateToProps = (state) => {
  const { devices, loading, error } = getDevice(state);
  return { devices, loading, error };
};

const mapDispatchToProps = (dispatch) => ({
  getDevices: () => dispatch(getDevicesAction()),
});

ListDeviceNotes.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      disabled: PropTypes.bool.isRequired,
    }),
  ),

  loading: PropTypes.bool,
  error: PropTypes.string,
  getDevices: PropTypes.func.isRequired,
  editState: PropTypes.func.isRequired,
};

ListDeviceNotes.defaultProps = {
  devices: [],
  loading: false,
  error: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDeviceNotes);
