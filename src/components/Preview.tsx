import { FC } from "react";

interface PreviewProps {
    code: string;
}

const Preview: FC<PreviewProps> = ({ code }) => {
    return <iframe className="w-1/2 h-1/2" srcDoc={code} frameBorder={0} />;
};

export default Preview;
