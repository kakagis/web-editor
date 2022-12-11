import { EditorContext } from "../contexts/context";
import download from "../util/download";
import { useContext } from "react";

const TopBar = () => {
    const { format, html, css, js } = useContext(EditorContext);

    return (
        <header className="w-screen h-[5%] bg-[#1e1e1e] text-white flex items-center justify-between px-2">
            <h1 className="text-lg font-semibold">Code Editor</h1>
            <div>
                <button
                    onClick={format}
                    className="bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded-sm"
                >
                    Format
                </button>
                <button
                    onClick={() => download(html, css, js)}
                    className="bg-blue-600 hover:bg-blue-700 py-1 px-2 rounded-sm ml-1"
                >
                    Download
                </button>
            </div>
        </header>
    );
};

export default TopBar;
