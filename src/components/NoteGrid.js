import React, { Component } from "react";
import { Box } from 'grommet';
import Note from './Note.js';
import EmptyNotice from './EmptyNotice.js'
import api from '../api'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value, clearRemovedNote}) => <Note key={value.id} noteData={value} clearRemovedNote={clearRemovedNote} />);

const SortableList = SortableContainer(({items, clearRemovedNote}) => {
  return (
    <Box
    direction="row"
    border={{ size: 'none' }}
    wrap
    justify="center"
    >
      {items.map((value, index) => (
        <SortableItem key={value.id} index={index} value={value} clearRemovedNote={clearRemovedNote} />
      ))}
    </Box>
  );
});

const arrayMoveMutate = (array, from, to) => {
	array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

const arrayMove = (array, from, to) => {
	array = array.slice();
	arrayMoveMutate(array, from, to);
	return array;
};

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

    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState(({notes}) => ({
        notes: arrayMove(notes, oldIndex, newIndex),
      }));
    };

    render() {
      return (
        <Box
        direction="row"
        border={{ size: 'none' }}
        wrap
        justify="center"
        >
        { Array.isArray(this.state.notes) && this.state.notes.length ? 
          <SortableList axis="xy" distance={2} items={this.state.notes} clearRemovedNote={this.clearRemovedNote} onSortEnd={this.onSortEnd} /> :
          <EmptyNotice />
        }
        </Box>
      );
    }
}