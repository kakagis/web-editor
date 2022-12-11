import JSZip from "jszip";

export default async function download(html: string, css: string, js: string) {
    const zip = new JSZip();

    zip.file("index.html", html);
    zip.file("styles.css", css);
    zip.file("scripts.js", js);

    const binary = await zip.generateAsync({
        type: "blob",
    });
    const dlUrl = URL.createObjectURL(binary);
    const a = document.createElement("a");

    a.download = "download.zip";
    a.href = dlUrl;
    a.click();
    URL.revokeObjectURL(dlUrl);
    a.remove();
}
