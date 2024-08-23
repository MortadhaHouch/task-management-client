import { Editor as TaskEditor } from'@tinymce/tinymce-react';
import { DialogComponent } from '../main/Dialog';
import { useRef, useState } from 'react';
import { useTheme } from 'next-themes';
export default function Editor() {
    const editorRef = useRef<TaskEditor|null>(null);
    let [isVisible,setIsVisible] = useState<boolean>(true);
    let {theme} = useTheme()
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
        const choice = prompt('Select an option:\n' + suggestions.map(s => s.title).join('\n'));
        const selectedOption = suggestions.find(s => s.title === choice);
        if (selectedOption) {
            editor.insertContent(selectedOption.content);
        }
    }
    function insertElementAtCaret(editor:any) {
        const htmlContent = '<div style="border: 1px solid #ddd; padding: 10px;">Inserted Element</div>';
        editor.insertContent(htmlContent);
    }
    return (
        <div>
            <TaskEditor
                ref={editorRef}
                apiKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                licenseKey={process.env.NEXT_PUBLIC_TINY_MCE_API_KEY}
                tinymceScriptSrc="tinymce/tinymce.min.js"
                init={{
                    width:"100vw",
                    min_height:1000,
                    height:"100vh",
                    contextmenu_never_use_native:false,
                    setup: function (editor) {
                        editor.on('keydown', function (event) {
                            if (event.key === '/') {
                                event.preventDefault();
                                showCommandMenu(editor);
                                setIsVisible(true)
                            }
                        });
                        editor.ui.registry.addButton('customInsert', {
                            text: 'Insert Element',
                            onAction: function () {
                                insertElementAtCaret(editor);
                            }
                        });
                    },
                    file_picker_callback: function (callback, value, meta) {
                        const input = document.createElement("input");
                        input.setAttribute("type", "file");
                        input.setAttribute("accept", "image/*");
                        input.onchange = function () {
                            const file = input.files?.[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = function (e) {
                                if (e.target) {
                                    const imgSrc = e.target.result as string;
                                    callback(imgSrc, { alt: file.name });
                                }
                                };
                                reader.readAsDataURL(file);
                            }
                        };
                        input.click();
                    },
                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: 'file image media',
                    paste_block_drop:false,
                    paste_data_images: true,
                    ai_request: (request:any, respondWith:any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                }}
                onEditorChange={handleEditorChange}
                initialValue="<h1>Hello world</h1>"
            />
            {
                isVisible && (
                    <DialogComponent/>
                )
            }
        </div>
    )
}
