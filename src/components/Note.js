import React, { Component } from "react";
import { Box, Menu, Button } from 'grommet';
import { Checkmark } from 'grommet-icons';
import PlainNote from './PlainNote.js';
import EditNote from './EditNote.js';
import api from '../api'

export default class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isInEditMode: false,
          noteData : this.props.noteData,
          text : this.props.noteData ? this.props.noteData.text :
          `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`
        };
      }

    onEditSave = () => {
        this.setState({ isInEditMode: false });
        fetch(`${api.notes}${this.props.noteData.id}/`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.noteData),
        })
        .then(response => response.json())
        .then();
    }

    onRemoveNoteOption = () => {
        fetch(`${api.notes}${this.props.noteData.id}/`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
        })
        .then()
        .then(() => { this.props.clearRemovedNote(this.props.noteData.id); });
    }

    onEditNoteOption = () => {
        this.setState({ isInEditMode: true });
    }

    updateContent = (content) => {
        this.state.text = content;
        this.state.noteData.text = content;
    }

    render() {
      return (
        <Box
        direction="column"
        border={{ size: "none" }}
        width="medium"
        pad="medium"
        >
            { this.state.isInEditMode ? 
                <EditNote text={this.state.text} updateContent={this.updateContent} /> : 
                <PlainNote text={this.state.text} src={this.state.noteData.src} />
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
                    { label: "Edit note", onClick: this.onEditNoteOption },
                    { label: "Remove note", onClick: this.onRemoveNoteOption },
                ]}/>
            }
            </Box>
        </Box>
      );
    }
}