"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Editor } from'@tinymce/tinymce-react';
// import "@tinymce/tinymce-react/lib/es2015/main/ts/"; // Update the path 
import ReactQuill from'react-quill';
import 'ckeditor5/ckeditor5.css';
import {
	BalloonEditor,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Base64UploadAdapter,
	CKFinder,
	CKFinderUploadAdapter,
	CloudServices,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	PictureEditing,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	Mention,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	BlockToolbar,
    DecoupledEditor,
    Undo,
    ClassicEditor,
    ImageUploadUI,
    TablePropertiesEditing,
    TableColumnResize,
    TableCellProperties,
    TodoList,
    TodoListEditing,
    TodoListUI,
    TableEditing,
    LinkEditing,
    CodeBlock,
    FontFamily,
    FontSize,
    FontColor,
    FontColorEditing,
    FontBackgroundColor,
    StrikethroughEditing,
    FindAndReplace,
    Autosave,
    ContextWatchdog,
    Context,
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
// import { EditorState } from 'prosemirror-state';
// import { EditorView } from 'prosemirror-view';
// import { Schema } from 'prosemirror-model';
// import { schema } from 'prosemirror-schema-basic';
// import { keymap } from 'prosemirror-keymap';
import 'ckeditor5/ckeditor5.css';
import 'quill-image-resize-module-react/src/ImageResize';
import 'ckeditor5/ckeditor5.css';
import Quill,{Delta} from 'quill';
import "quill/modules/clipboard";
import "quill/modules/formula";
import "quill/modules/history";
import "quill/modules/keyboard";
import "quill/modules/syntax";
import "quill/modules/toolbar";
import "quill/themes/base";
import "quill/themes/bubble";
import "quill/themes/snow";
import "quill/ui/color-picker";
import "quill/ui/icon-picker";
import "quill/ui/icons";
import "quill/ui/picker";
import "quill/ui/tooltip";
import "quill/dist/quill.core.css";
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from '../ui/button';
import { DialogComponent } from './Dialog';
export default function CreateTask() {
    const [content, setContent] = useState<string>('');
    const [value, setValue] = useState<string>('');
    let [isVisible,setIsVisible] = useState<boolean>(true);
    const formats = [
        'header', 'fontfamily', "lineheight",'fontsize',"align","background","blockquote","code","color",
        'bold', 'italic', 'underline', 'strike',"direction","script",'list', 'bullet', 'indent','link', 'image',"video","media","table",'clean',"undo","redo","search","replace","addcomment", "showcomments","emoticons"
    ];
    BalloonEditor.create(
        "#editor",
        {
            plugins: [
                Autoformat,
                BlockQuote,
                BlockToolbar,
                Bold,
                CKFinder,
                CKFinderUploadAdapter,
                CloudServices,
                Essentials,
                Heading,
                Image,
                ImageCaption,
                ImageStyle,
                ImageToolbar,
                ImageUpload,
                Base64UploadAdapter,
                Indent,
                IndentBlock,
                Italic,
                Link,
                List,
                MediaEmbed,
                Mention,
                Paragraph,
                PasteFromOffice,
                PictureEditing,
                Table,
                TableToolbar,
                TextTransformation,
            ],
            blockToolbar: [
                'undo',
                'redo',
                '|',
                'heading',
                '|',
                'uploadImage',
                'insertTable',
                'blockQuote',
                'mediaEmbed',
                '|',
                'bulletedList',
                'numberedList',
                'outdent',
                'indent',
            ],
            toolbar: {
                items: ['bold', 'italic', 'link'],
            },
            heading: {
                options: [
                    {
                        model: 'paragraph',
                        title: 'Paragraph',
                        class: 'ck-heading_paragraph',
                    },
                    {
                        model: 'heading1',
                        view: 'h1',
                        title: 'Heading 1',
                        class: 'ck-heading_heading1',
                    },
                    {
                        model: 'heading2',
                        view: 'h2',
                        title: 'Heading 2',
                        class: 'ck-heading_heading2',
                    },
                    {
                        model: 'heading3',
                        view: 'h3',
                        title: 'Heading 3',
                        class: 'ck-heading_heading3',
                    },
                    {
                        model: 'heading4',
                        view: 'h4',
                        title: 'Heading 4',
                        class: 'ck-heading_heading4',
                    },
                ],
            },
            image: {
                toolbar: [
                    'imageStyle:inline',
                    'imageStyle:block',
                    '|',
                    'toggleImageCaption',
                    'imageTextAlternative',
                ],
            },
            link: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
            },
            table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
            },
        }
    )
    .then((editor) => {
        //window.editor = editor;
    })
    .catch((error) => {
        console.error(error.stack);
    });
    function saveData( data:any ) {
        return new Promise( resolve => {
            setTimeout( () => {
                console.log( 'Saved', data );
    
                resolve(data);
            }, 5000 );
        } );
    }
    const editorToolbarRef = useRef<HTMLDivElement|null>( null );
    const [ isMounted, setMounted ] = useState( false );
    const editorRef = useRef<Editor|null>(null);
    useEffect( () => {
        setMounted( true );

        return () => {
            setMounted( false );
        };
    }, [] );
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.props.plugins);
        }
    };
    const handleEditorChange = (content:any, editor:any) => {
        console.log("Content was updated:", content);
    };
    function showCommandMenu(editor:any) {
        const suggestions = [
            { title: 'Heading 1', content: '<h1>Heading 1</h1>' },
            { title: 'Heading 2', content: '<h2>Heading 2</h2>' },
            { title: 'Bold Text', content: '<strong>Bold Text</strong>' },
            { title: 'Italic Text', content: '<em>Italic Text</em>' },
        ];
        // Display a prompt or custom menu to select an option
        const choice = prompt('Select an option:\n' + suggestions.map(s => s.title).join('\n'));
        const selectedOption = suggestions.find(s => s.title === choice);
        if (selectedOption) {
            editor.insertContent(selectedOption.content);
        }
    }
      // Function to insert content at caret position
    function insertElementAtCaret(editor:any) {
        // Example HTML element to insert at caret
        const htmlContent = '<div style="border: 1px solid #ddd; padding: 10px;">Inserted Element</div>';
        // Insert the content at the caret position
        editor.insertContent(htmlContent);
    }
    return (
        <div className="w-full h-min-[150vh] flex flex-col justify-center items-center p-28">
            <Editor
                ref={editorRef}
                apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                licenseKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                tinymceScriptSrc="tinymce/tinymce.min.js"
                onFocus={(e)=>console.log(e)}
                init={{
                    plugins: ["removeformat","anchor","autolink","charmap","codesample","emoticons","image","link","lists","media","search","replace","table","visualblocks","wordcount","checklist","mediaembed","casechange","export","formatpainter","pageembed","linkchecker","a11ychecker","tinymcespellchecker","permanentpen","powerpaste","advtable","advcode","editimage","advtemplate","ai","mentions","tinycomments","tableofcontents","footnotes","mergetags","autocorrect","typography","inlinecss","markdown,toolbar:","'undo","redo","blocks","fontfamily","fontsize","bold","italic","underline","strikethrough","link","image","media","table","mergetags","addcomment","showcomments","spellcheckdialog","a11ycheck","typography","align","lineheight","checklist","numlist","bullist","indent","outdent","emoticons","charmap","removeformat","paste"],
                    forced_plugins:["anchor","autolink","charmap","codesample","emoticons","image","link","lists","media","search","replace","table","visualblocks","wordcount","checklist","mediaembed","casechange","export","formatpainter","pageembed","linkchecker","a11ychecker","tinymcespellchecker","permanentpen","powerpaste","advtable","advcode","editimage","advtemplate","ai","mentions","tinycomments","tableofcontents","footnotes","mergetags","autocorrect","typography","inlinecss","markdown,toolbar:","'undo","redo","blocks","fontfamily","fontsize","bold","italic","underline","strikethrough","link","image","media","table","mergetags","addcomment","showcomments","spellcheckdialog","a11ycheck","typography","align","lineheight","checklist","numlist","bullist","indent","outdent","emoticons","charmap","removeformat","paste"],
                    width:"100%",
                    min_height:1000,
                    setup: function (editor) {
                        editor.on('keydown', function (event) {
                            if (event.key === '/') {
                                event.preventDefault(); // Prevent the default forward slash behavior
                                showCommandMenu(editor); // Show the command menu
                                setIsVisible(true)
                            }
                        });
                          // Adding a custom button to test the insertion
                        editor.ui.registry.addButton('customInsert', {
                            text: 'Insert Element',
                            onAction: function () {
                                insertElementAtCaret(editor); // Call the function to insert at caret position
                            }
                        });
                    },
                    file_picker_callback: function (callback, value, meta) {
                        // Create an input element to choose files
                        const input = document.createElement("input");
                        input.setAttribute("type", "file");
                        input.setAttribute("accept", "image/*");
                        
                        // Add an event listener to handle the file when it's selected
                        input.onchange = function () {
                          const file = input.files?.[0]; // Get the selected file
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = function (e) {
                                if (e.target) {
                                    const imgSrc = e.target.result as string; // Get base64 encoded image
                                    callback(imgSrc, { alt: file.name }); // Insert the image into TinyMCE
                                }
                                };
                                reader.readAsDataURL(file); // Convert file to base64 for display in the editor
                            }
                        };
                        // Trigger the file picker
                        input.click();
                    },
                    image_title: true, // Allow image titles
                    automatic_uploads: true,
                    file_picker_types: 'file image media',
                    paste_block_drop:false,
                    paste_data_images: true, // Allow pasting images as base64
                    ai_request: (request:any, respondWith:any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                }}
                onEditorChange={handleEditorChange}
                initialValue="<h1>Hello world</h1>"
                />
                <Button onClick={log}>show editor data</Button>
                <ReactQuill value={value} onChange={setValue}modules={{toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],        // toggledbuttons
                    ['blockquote', 'code-block'],
                    ['link', 'image', 'video', 'formula'],
                    [{ 'header':1 }, { 'header':2 }],               // custombuttonvalues
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],     // superscript/subscript
                    [{ 'indent': '-1' }, { 'indent': '+1' }],         // outdent/indent
                    [{ 'direction': 'rtl' }],                         // textdirection
                    [{ 'size': ['small', false, 'large', 'huge'] }],  // customdropdown
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],          // dropdownwithdefaultsfromtheme
                    [{ 'font': [] }],
                    ['clean']                                         // removeformatting
                ]
            }}
            formats={formats} style={{width: "700px", height: "800px" }}
        />
        <div ref={ editorToolbarRef }></div>
                <div ref={editorToolbarRef} style={{width:"800px",height:"1000px"}} id='editor'>
                <CKEditorContext context={ Context } contextWatchdog={ ContextWatchdog }>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                        plugins: [ Essentials, Bold, Italic, Paragraph ],
                        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                        } }
                        data='<p>Hello from the first editor working with the context!</p>'
                        onReady={ ( editor ) => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor 1 is ready to use!', editor );
                        } }
                    />
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                        plugins: [ Essentials, Bold, Italic, Paragraph ],
                        toolbar: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                        } }
                        data='<p>Hello from the second editor working with the context!</p>'
                        onReady={ ( editor ) => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor 2 is ready to use!', editor );
                        } }
                    />
                    </CKEditorContext>
                {
                    isVisible && (
                        <DialogComponent/>
                    )
                }
            </div>
        </div>
    );
}
