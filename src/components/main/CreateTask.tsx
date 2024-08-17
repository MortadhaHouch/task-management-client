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
import { Strikethrough, Subscript, Superscript } from 'lucide-react';
export default function CreateTask() {
    const [content, setContent] = useState('');
    const [value, setValue] = useState('');
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
    
    useEffect( () => {
        setMounted( true );

        return () => {
            setMounted( false );
        };
    }, [] );
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-28">
            <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                    licenseKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                    // tinymceScriptSrc="/client/public/tinymce.min.js"
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media search replace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name',
                        mergetags_list: [
                            { value: 'First.Name', title: 'First Name' },
                            { value: 'Email', title: 'Email' },
                        ],
                        ai_request: (request:any, respondWith:any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue="Welcome to TinyMCE!"
                    />
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
                <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            plugins: [
                                Bold, Essentials, Italic, Paragraph, Paragraph, Undo,Autosave,FindAndReplace,Undo,Heading,FontColor,FontFamily,FontSize,FontColor,FontColorEditing,FontBackgroundColor,Strikethrough,StrikethroughEditing,Subscript,Superscript,CodeBlock,MediaEmbed,Link,LinkEditing,Table,TableEditing,TableToolbar,TablePropertiesEditing,TableColumnResize,TableCellProperties,Indent,TodoList,TodoListEditing,TodoListUI,ImageUploadUI
                            ],
                            toolbar: [
                                'undo', 'redo',
                                '|',
                                'heading',
                                '|',
                                'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                                '|',
                                'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                                '|',
                                'link', 'uploadImage', 'blockQuote', 'codeBlock',
                                '|',
                                'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
                            ],
                            autosave:{
                                save( editor ) {
                                    return saveData( editor.getData() );
                                },
                                waitingTime: 5000,
                            }
                        } }
                        data='<p>Hello from the first editor working with the context!</p>'
                        onReady={ ( editor ) => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor 1 is ready to use!', editor );
                        }}
                    />
                    <CKEditor
                        editor={ ClassicEditor }
                        config={ {
                            toolbar: {
                                items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                            },
                            plugins: [
                                Bold, Essentials, Italic, Mention, Paragraph, Undo
                            ],
                            initialData: '<p>Hello from CKEditor 5 in React!</p>'
                        } }
                    />
                    { isMounted && (
                    <CKEditor
                        editor={ DecoupledEditor }
                        data='<p>Hello from CKEditor 5 decoupled editor!</p>'
                        config={ {
                            plugins: [ Bold, Italic, Paragraph, Essentials ],
                            toolbar: [ 'undo', 'redo', '|', 'bold', 'italic' ]
                        } }
                        onReady={ ( editor:any ) => {
                            if ( editorToolbarRef.current ) { 
                                editorToolbarRef.current.appendChild( editor.ui.view.toolbar.element );
                            }
                        }}
                        onAfterDestroy={ ( editor ) => {
                            if ( editorToolbarRef.current ) {
                                Array.from( editorToolbarRef.current.children ).forEach( (child:any) => child.remove() );
                            }
                        }}
                    />
                ) }
            </div>
        </div>
    );
}

// Import your custom buildimportCustomBalloonEditorfrom'path-to-your-custom-build'; // Adjust this path to where your custom build is located 
// export default function CreateTask() {
//     return (
//         <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center"><CKEditor
//                 editor={BalloonEditor}  // Use the custom build
//                 config={{
//                     toolbar: [
//                         'heading', 'bold', 'italic', 'link', 'blockQuote',
//                         'insertTable', 'undo', 'redo', 'numberedList', 'bulletedList',
//                         'uploadImage', 'mediaEmbed'
//                     ],
//                     image: {
//                         toolbar: ['imageStyle:inline', 'imageStyle:block', 'imageTextAlternative'],
//                     },
//                     table: {
//                         contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
//                     },
//                     ckfinder: {
//                         // CKFinder configuration (if needed)
//                         uploadUrl: '/uploads',
//                     },
//                 }}
//                 data="<p>Custom toolbar for Balloon Block Editor with plugins!</p>"
//                 onChange={(event, editor) => {
//                     const data = editor.getData();
//                     console.log('Editor data:', data);
//                 }}
//             />
//         </div>
//     );
// }
