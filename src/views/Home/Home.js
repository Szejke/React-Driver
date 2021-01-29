import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ListDeviceNotes from 'components/organisms/ListDeviceNotes/ListDeviceNotes';
import Fab from 'components/atoms/Buttons/Fab';
import BarDeviceNote from 'components/organisms/BarDeviceNote/BarDeviceNote';

const StyledWrapper = styled.div`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.backgroundBar};
`;

const StyledButton = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: 20px;
  margin-right: 20px;
  z-index: 900;
`;

const StyledNewDeviceNote = styled.div`
  z-index: 500;
  position: fixed;
  display: flex;
  padding: 100px 50px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 40%;
  box-shadow: 0 8px 100px rgba(36, 36, 36, 0.11);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;

const Home = () => {
  const [deviceBarVisible, setDeviceBarVisible] = useState(false);
  const [stateEdit, setStateEdit] = useState('');

  const handleNewDeviceBarToggle = () => {
    setDeviceBarVisible(!deviceBarVisible);
    setStateEdit('');
    return deviceBarVisible;
  };

  const handleEditDeviceBarToggle = (deviceId) => {
    if (deviceId.id !== stateEdit.id) {
      setDeviceBarVisible(true);
    } else {
      setDeviceBarVisible(!deviceBarVisible);
    }
    setStateEdit(deviceId);
  };

  return (
    <StyledWrapper>
      <ListDeviceNotes editState={handleEditDeviceBarToggle} />
      <StyledButton>
        <Fab onClick={handleNewDeviceBarToggle}>{deviceBarVisible ? '-' : '+'} </Fab>
      </StyledButton>
      <StyledNewDeviceNote isVisible={deviceBarVisible}>
        <BarDeviceNote toogle={handleNewDeviceBarToggle} deviceId={stateEdit.id} />
      </StyledNewDeviceNote>
    </StyledWrapper>
  );
};

export default Home;
