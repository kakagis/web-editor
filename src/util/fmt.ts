import parserBabel from "prettier/parser-babel";
import parserCss from "prettier/parser-postcss";
import parserHtml from "prettier/parser-html";
import { format } from "prettier/standalone";

export default function fmt(code: string, type: "html" | "css" | "js") {
    return format(code, {
        plugins: [parserBabel, parserHtml, parserCss],
        parser: type === "js" ? "babel" : type,
        tabWidth: 4,
    });
}
