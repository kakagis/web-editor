import { EditorContext } from "../contexts/context";
import { useContext } from "react";
import build from "../util/build";
import Preview from "./Preview";
import Editor from "./Editor";

const CodeEditor = () => {
    const { html, css, js, setHtml, setCss, setJs } = useContext(EditorContext);
    const result = build(html, css, js);

    return (
        <div className="w-screen h-[95%] flex flex-wrap overflow-hidden">
            {/* prettier-ignore */}
            <Editor title="HTML" language="html" onChange={setHtml} value={html}/>
            {/* prettier-ignore */}
            <Editor title="CSS" language="css" onChange={setCss} value={css} />
            {/* prettier-ignore */}
            <Editor title="JS" language="javascript" onChange={setJs} value={js} />
            {/* prettier-ignore */}
            <Preview code={result} />
        </div>
    );
};

export default CodeEditor;
