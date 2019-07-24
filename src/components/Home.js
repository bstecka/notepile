import React from 'react';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import NoteGrid from './NoteGrid.js';
import Binder from './Binder.js';
import { Paragraph, Box, base } from 'grommet';
import CategorySelectionArea from './CategorySelectionArea';
import Header from './Header';

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
      <Header />
      <NoteGrid/>
    </AppWrapper>
  );
}

export default Home;
