import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { BrightnessAltHighFill, BrightnessAltLow } from 'react-bootstrap-icons';

const StyledWrapper = styled.div`
  display: flex;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
  border-radius: 10px;
  padding: 2%;
  max-width: 70rem;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledParagraphs = styled.div`
  margin-left: 30px;
`;

const StyledH1 = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colorPrimary};
`;

const DeviceNote = ({ name, description, disabled }) => {
  return (
    <StyledWrapper>
      <StyledParagraphs>
        <StyledH1>{name}</StyledH1>
        <p>{description}</p>
        {disabled ? (
          <BrightnessAltHighFill data-testid="iconTrue" size={48} />
        ) : (
          <BrightnessAltLow data-testid="iconFalse" size={48} />
        )}
      </StyledParagraphs>
    </StyledWrapper>
  );
};

DeviceNote.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default DeviceNote;
