import React, { Component } from "react";
import { Box, Stack, Menu, Button } from 'grommet';
import { Link, Checkmark } from 'grommet-icons';
import styled from 'styled-components';
import PlainNote from './PlainNote.js';
import EditNote from './EditNote.js';

export default class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isInEditMode: false,
          content : `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`
        };
      }

    onEditSave = () => {
        this.setState({ isInEditMode: false });
    }

    onEditNoteOption = () => {
        this.setState({ isInEditMode: true });
    }

    updateContent = (content) => {
        this.state.content = content;
    }

    render() {
      return (
        <Box
        direction="column"
        border={{ color: 'brand', size: 'none' }}
        width="medium"
        pad="medium"
        >
            { this.state.isInEditMode ? 
                <EditNote content={this.state.content} updateContent={this.updateContent} /> : 
                <PlainNote content={this.state.content} url="https://twitter.com/" />
            }
            <Box pad="xsmall" background="light-3" flex="shrink">
            { this.state.isInEditMode ? 
                <Button
                icon={<Checkmark />}
                alignSelf="end"
                onClick={this.onEditSave}
                /> :
                <Menu
                margin="none"
                alignSelf="end"
                items={[
                    { label: 'Edit note', onClick: this.onEditNoteOption },
                    { label: 'Remove note', onClick: () => {} },
                ]}/>
            }
            </Box>
        </Box>
      );
    }
}