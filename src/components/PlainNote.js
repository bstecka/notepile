import React, { Component } from "react";
import { Box, Paragraph, Menu, Heading, Grommet, Button } from 'grommet';
import { Edit, Link } from 'grommet-icons';
import styled from 'styled-components';
import dompurify from 'dompurify';

const LinkIcon = styled.button`
  background: none;
  border: none;
  align-self: start;
  height: 36px;
  width: 36px;
  border-radius: 50%;

  &:hover {
    background: black;
    cursor: pointer;
  }
`;

const NoteParagraph = styled(Paragraph)`
`;

const sanitizer = dompurify.sanitize;

export default class PlainNote extends Component {

  onLinkClick = () => {
    window.open(this.props.url, "_blank");
  }

  render() {
    return (
      <Box pad="small" background="brand" border={{ color: 'brand', size: '' }} >
        <LinkIcon onClick={this.onLinkClick}><Link/></LinkIcon>
        <Box pad={{ bottom: 'x-small', horizontal: 'small'}}>
          <NoteParagraph margin="none" dangerouslySetInnerHTML={{__html: sanitizer(this.props.content)}} />
        </Box>
      </Box>
    );
  }
}