import MonacoEditor from "@monaco-editor/react";
import { FC } from "react";

interface EditorProps {
    title: string;
    value: string;
    onChange: (value: string) => void;
    language: string;
}

const Editor: FC<EditorProps> = (p) => {
    return (
        <div className="w-1/2 h-1/2">
            <div className="bg-[#1e1e1e] h-[10%] text-white mt-0">
                <h3 className="font-semibold ml-1 mr-1">{p.title}</h3>
            </div>
            <MonacoEditor
                width="100%"
                height="90%"
                theme="vs-dark"
                language={p.language}
                onChange={(v) => p.onChange(v ?? "")}
                value={p.value}
                wrapperProps={{ className: "bg-[#1e1e1e]" }}
            />
        </div>
    );
};

export default Editor;
