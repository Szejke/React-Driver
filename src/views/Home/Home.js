import React, { useState } from 'react';
import styled from 'styled-components/macro';
import ListDeviceNotes from 'components/organisms/ListDeviceNotes/ListDeviceNotes';
import Fab from 'components/atoms/Buttons/Fab';
import NewDeviceNote from 'components/organisms/NewDeviceNote/NewDeviceNote';

const StyledWrapper = styled.div`
  margin-top: 20px;
`;

const StyledButton = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: 20px;
  margin-right: 20px;
  z-index: 800;
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
  background-color: white;
  box-shadow: 0 8px 100px rgba(36, 36, 36, 0.11);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;

const Home = () => {
  const [deviceBarVisible, setDeviceBarVisible] = useState(false);
  const handleNewDeviceBarToggle = () => setDeviceBarVisible(!deviceBarVisible);

  return (
    <StyledWrapper>
      <ListDeviceNotes deviceBarToggle={handleNewDeviceBarToggle} />
      <StyledButton>
        <Fab onClick={handleNewDeviceBarToggle}>{deviceBarVisible ? '-' : '+'}</Fab>
      </StyledButton>
      <StyledNewDeviceNote isVisible={deviceBarVisible}>
        <NewDeviceNote handleClose={handleNewDeviceBarToggle} />
      </StyledNewDeviceNote>
    </StyledWrapper>
  );
};

export default Home;
