import React, { Component } from "react";
import { Box, Stack, Menu, Button } from 'grommet';
import styled from 'styled-components';
import Note from './Note.js';
import api from '../api'

export default class NoteGrid extends Component {

    constructor(props) {
      super(props);
      this.state = {
        notes: null,
      };
    }

    componentDidMount() {
      fetch(api.notes)
        .then(response => response.json())
        .then(data => { this.setState({ notes: data });});
    }

    clearRemovedNote = (noteId) => {
      console.log('clearNote');
      const clearedNotes = this.state.notes.filter(note => note.id !== noteId);
      console.log(clearedNotes);
      this.setState({ notes: clearedNotes });
    }

    render() {
      return (
        <Box
        direction="row"
        border={{ size: 'none' }}
        wrap="true"
        justify="center"
        >
        { this.state.notes ? this.state.notes.map((note) => <Note key={note.id} noteData={note} clearRemovedNote={this.clearRemovedNote} />) : '' }
        </Box>
      );
    }
}