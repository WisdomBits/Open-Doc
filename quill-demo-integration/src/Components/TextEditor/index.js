import React, { useCallback } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"
import "./style.css"

const TextEditor = () => {

    // useEffect(() => {
    //     let editor = document.createElement('div')
    //     editorContainerRef.current.append(editor) // to avoid multiple instances of editor
    //     new Quill(editor, {
    //         theme: 'snow'
    //       });
    //       //sddsf
    //     return () => {
    //         editorContainerRef.current.innerHTML = ""
    //     }
    // },[])
    // Alternate of above useEffect
    const editorContainerRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapper.innerHTML = '' // to avoid multiple instances of editor
        let editor = document.createElement('div')
        wrapper.append(editor) 
        new Quill(editor, {
            theme: 'snow'
        });
    })
  return (<>
  <div id='container' ref={editorContainerRef}></div>
  </>)
}

export default TextEditor