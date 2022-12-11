import { EditorContextProvider } from "./contexts/context";
import TopBar from "./components/TopBar";
import { lazy, Suspense } from "react";

const CodeEditor = lazy(() => import("./components/CodeEditor"));

const App = () => {
    return (
        <div className="w-screen h-screen">
            <EditorContextProvider>
                <TopBar />
                <Suspense>
                    <CodeEditor />
                </Suspense>
            </EditorContextProvider>
        </div>
    );
};

export default App;
