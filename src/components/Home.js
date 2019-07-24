import React from 'react';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import Note from './Note.js';
import EditNote from './EditNote.js';
import NoteGrid from './NoteGrid.js';

const AppWrapper = styled.div`
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function Home() {
  return (
    <AppWrapper>
      <AppHeader>
      </AppHeader>
      <NoteGrid/>
    </AppWrapper>
  );
}

export default Home;
