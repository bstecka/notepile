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

const NoteText = styled.span`
`;

const sanitizer = dompurify.sanitize;

export default class PlainNote extends Component {

  onLinkClick = () => {
    window.open(this.props.src, "_blank");
  }

  render() {
    return (
      <Box pad="small" background="brand" border={{ color: "brand", size: "" }} >
        <LinkIcon onClick={this.onLinkClick} title={this.props.src}><Link/></LinkIcon>
        <Box pad={{ horizontal: "small"}}>
          <NoteText margin="none" dangerouslySetInnerHTML={{__html: sanitizer(this.props.text)}} />
        </Box>
      </Box>
    );
  }
}