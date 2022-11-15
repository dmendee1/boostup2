import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

function Coder(props) {
    const { title, path, onClick } = props;
    return (
        <CodeEditor
            value={props.code}
            language={props.language ? props.language : "java"}
            readOnly='true'
            placeholder="Please enter JS code."
            // onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
                fontSize: 12,
                backgroundColor: "#000",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
        />
    );
}

export default Coder;