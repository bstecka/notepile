import React, { Component } from "react";
import { Box } from 'grommet';
import Note from './Note.js';
import EmptyNotice from './EmptyNotice.js'
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
      const clearedNotes = this.state.notes.filter(note => note.id !== noteId);
      this.setState({ notes: clearedNotes });
    }

    render() {
      return (
        <Box
        direction="row"
        border={{ size: 'none' }}
        wrap
        justify="center"
        >
        { Array.isArray(this.state.notes) && this.state.notes.length ? 
          this.state.notes.map((note) => <Note key={note.id} noteData={note} clearRemovedNote={this.clearRemovedNote} />) :
          <EmptyNotice />
        }
        </Box>
      );
    }
}