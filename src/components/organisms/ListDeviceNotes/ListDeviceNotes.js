import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import DeviceNote from 'components/molecules/DeviceNote/DeviceNote';

const StyledWrapper = styled.div`
  display: flex;
  background: white;
  padding: 2%;
  flex-direction: column;
`;

const ListPersonNote = ({ devices }) => {
  return (
    <StyledWrapper>
      {devices.map(({ _id, name, description, disabled }) => (
        <DeviceNote key={_id} name={name} description={description} disabled={disabled} />
      ))}
    </StyledWrapper>
  );
};

ListPersonNote.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      disabled: PropTypes.string.isRequired,
    }),
  ),
};

ListPersonNote.defaultProps = {
  devices: [
    {
      _id: '',
      name: '',
      description: '',
      disabled: false,
    },
  ],
};

export default ListPersonNote;
