import { EditorContextProvider } from "./contexts/context";
import CodeEditor from "./components/CodeEditor";
import TopBar from "./components/TopBar";

const App = () => {
    return (
        <div className="w-screen h-screen">
            <EditorContextProvider>
                <TopBar />
                <CodeEditor />
            </EditorContextProvider>
        </div>
    );
};

export default App;
