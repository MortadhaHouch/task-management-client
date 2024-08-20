import { Editor as TaskEditor } from'@tinymce/tinymce-react';
import { DialogComponent } from '../main/Dialog';
import { useRef, useState } from 'react';
export default function Editor() {
    const editorRef = useRef<TaskEditor|null>(null);
    let [isVisible,setIsVisible] = useState<boolean>(true);
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
                    plugins: ["removeformat","anchor","autolink","charmap","codesample","emoticons","image","link","lists","media","search","replace","table","visualblocks","wordcount","checklist","mediaembed","casechange","export","formatpainter","pageembed","linkchecker","a11ychecker","tinymcespellchecker","permanentpen","powerpaste","advtable","advcode","editimage","advtemplate","ai","mentions","tinycomments","tableofcontents","footnotes","mergetags","autocorrect","typography","inlinecss","markdown,toolbar:","'undo","redo","blocks","fontfamily","fontsize","bold","italic","underline","strikethrough","link","image","media","table","mergetags","addcomment","showcomments","spellcheckdialog","a11ycheck","typography","align","lineheight","checklist","numlist","bullist","indent","outdent","emoticons","charmap","removeformat","paste"],
                    forced_plugins:["anchor","autolink","charmap","codesample","emoticons","image","link","lists","media","search","replace","table","visualblocks","wordcount","checklist","mediaembed","casechange","export","formatpainter","pageembed","linkchecker","a11ychecker","tinymcespellchecker","permanentpen","powerpaste","advtable","advcode","editimage","advtemplate","ai","mentions","tinycomments","tableofcontents","footnotes","mergetags","autocorrect","typography","inlinecss","markdown,toolbar:","'undo","redo","blocks","fontfamily","fontsize","bold","italic","underline","strikethrough","link","image","media","table","mergetags","addcomment","showcomments","spellcheckdialog","a11ycheck","typography","align","lineheight","checklist","numlist","bullist","indent","outdent","emoticons","charmap","removeformat","paste"],
                    width:"100%",
                    min_height:1000,
                    skin: "oxide-dark",
                    content_css: "dark",
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
