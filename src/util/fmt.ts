export default async function fmt(code: string, type: "html" | "css" | "js") {
    const parserBabel = (await import("prettier/parser-babel")).default;
    const parserCss = (await import("prettier/parser-postcss")).default;
    const parserHtml = (await import("prettier/parser-html")).default;
    const { format } = (await import("prettier/standalone")).default;

    return format(code, {
        plugins: [parserBabel, parserHtml, parserCss],
        parser: type === "js" ? "babel" : type,
        tabWidth: 4,
    });
}
