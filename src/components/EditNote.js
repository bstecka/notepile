import React, { Component } from "react";
import { Box, Paragraph, Heading, Button, Grommet, base } from 'grommet';
import { Ascend, Bold, Italic, Underline, List, Code, Checkmark } from 'grommet-icons';
import {Editor, EditorState, RichUtils, convertFromHTML, ContentState} from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';

const styleMap = {
    'CODE': {
      backgroundColor: base.global.colors['light-3'],
      fontFamily: '"Inconsolata", "Consolas", monospace',
      fontSize: 16,
      padding: 3
    },
  };

export default class EditNote extends Component {

    constructor(props) {
        super(props);
        const html = `${this.props.content}`
        const contentState = stateFromHTML(html);
        this.state = { 
            editorState: EditorState.createWithContent(contentState)
        }
        this.onChange = (editorState) => {
            this.setState({editorState}, this.passHTMLUpwards);
        }
    }

    passHTMLUpwards = () => {
        const html = stateToHTML(this.state.editorState.getCurrentContent());
        this.props.updateContent(html);
    }

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
        return 'not-handled';
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    onHeaderClick = () => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-three'));
    }

    onListClick = () => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item'));
    }

    onCodeClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'CODE'));
    }

    render() {
      return (
            <Box pad="small" background="brand" border={{ color: 'brand', size: '' }} >
                <Box
                direction="row"
                border={{ size: 'none' }}
                pad="none"
                justify="center"
                >
                    <Button
                    icon={<Ascend />}
                    hoverIndicator={{color: "black"}}
                    onClick={this.onHeaderClick}
                    />
                    <Button
                    icon={<Bold />}
                    hoverIndicator={{color: "black"}}
                    onClick={this.onBoldClick}
                    />
                    <Button
                    icon={<Italic />}
                    hoverIndicator={{color: "black"}}
                    onClick={this.onItalicClick}
                    />
                    <Button
                    icon={<Underline />}
                    hoverIndicator={{color: "black"}}
                    onClick={this.onUnderlineClick}
                    />
                    <Button
                    icon={<List />}
                    hoverIndicator={{color: "black"}}
                    onClick={this.onListClick}
                    />
                    <Button
                    icon={<Code />}
                    hoverIndicator={{color: "black"}}
                    onClick={this.onCodeClick}
                    />
                </Box>
                <Box
                background="white"
                round="xsmall"
                border={{ color: 'brand', size: 'none' }}
                pad="medium"
                >
                <Editor 
                editorState={this.state.editorState}
                customStyleMap={styleMap}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange} />
                </Box>
            </Box>
      );
    }
}