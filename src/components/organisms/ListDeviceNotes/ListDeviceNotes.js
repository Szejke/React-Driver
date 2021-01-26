import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import DeviceNote from 'components/molecules/DeviceNote/DeviceNote';
import { getDevicesAction } from 'redux/actions/devices';

const StyledWrapper = styled.div`
  display: flex;
  background: white;
  padding: 2%;
  flex-direction: column;
`;

const ListDeviceNotes = ({ devices, getDevices, deviceBarToggle }) => {
  const { loading, error, length } = devices;
  useEffect(() => {
    getDevices();
  }, []);

  return (
    <StyledWrapper>
      {loading && <p>Loading...</p>}
      {length === 0 && !loading && <p>No devices available!</p>}
      {error && !loading && <p>{error}</p>}

      {devices.length > 0 &&
        devices.map(({ _id, name, description, disabled }) => (
          <DeviceNote
            deviceBarToggle={deviceBarToggle}
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
  const { devices } = state.devices;
  return { devices };
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
  getDevices: PropTypes.func.isRequired,
  deviceBarToggle: PropTypes.func.isRequired,
};

ListDeviceNotes.defaultProps = {
  devices: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDeviceNotes);
