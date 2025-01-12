import React, { useCallback } from 'react'
import Quill from "quill"
import "quill/dist/quill.snow.css"
import "./style.css"

const TextEditor = () => {

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        ['link', 'image', 'video', 'formula'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      
        ['clean']                                         // remove formatting button
      ];
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
            theme: 'snow',
            modules: {
                toolbar: toolbarOptions
              },
        });
    })
  return (<>
  <div id='container' ref={editorContainerRef}></div>
  </>)
}

export default TextEditor