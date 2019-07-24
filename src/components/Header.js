import React, { Component } from "react";
import Binder from './Binder.js';
import { Paragraph, Box, Accordion, AccordionPanel, Text, base } from 'grommet';
import CategorySelectionArea from './CategorySelectionArea';
import styled from 'styled-components';
import Note from './Note.js';
import EmptyNotice from './EmptyNotice.js'
import api from '../api'

const SettingsLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: black;

  &:hover {
    cursor: pointer;
    color: ${base.global.colors['brand']};
  }

  @media (max-width: 500px) { 
    display: none;
  }
`;

const Settings = styled.div`
  align-items: flex-start;
  display: flex;

  &:hover {
    cursor: pointer;
    color: ${base.global.colors['brand']};
  }

  @media (max-width: 500px) { 
    display: none;
  }
`;

const LinkContainer = styled.div`
  width: 100%;
  padding: 1em 1em 1em 1.2em;
  border-bottom: 1px ${base.global.colors['dark-4']} solid;

  &:hover ${SettingsLink} {
    cursor: pointer;
    color: ${base.global.colors['brand']};
  }

  @media (max-width: 500px) { 
    display: none;
  }
`;

export default class Header extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Box
        direction="row"
        border={{ size: 'none' }}
        justify="between"
        >
          <Box
          direction="row"
          pad="small"
          width="medium"
          border={{ size: 'none' }}
          >
          </Box>
          <CategorySelectionArea/>
          <Box
          direction="row"
          pad="none"
          width="medium"
          wrap
          justify="end"
          border={{ size: 'none' }}
          >
            <Settings>
              <LinkContainer>
                <SettingsLink href="">Options</SettingsLink>
              </LinkContainer>
            </Settings>
          </Box>
        </Box>
      );
    }
}