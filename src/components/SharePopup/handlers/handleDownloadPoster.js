
import { toPng } from "html-to-image";

export default function DownloadPosterHandler (posterRef, name, setDownloading) {
    return async () => {
        console.log(posterRef.current);

        if (!posterRef.current)
            return;

        try {
            setDownloading(true);

            await new Promise((resolve) => setTimeout(resolve, 50));

            const originalStyles = {
                padding: posterRef.current.style.padding,
                margin: posterRef.current.style.margin,
            };
            posterRef.current.style.padding = "0";
            posterRef.current.style.margin = "0";

            const dataUrl = await toPng(posterRef.current, {
                quality: 1,
                pixelRatio: 2,
                backgroundColor: null,
                filter: (node) => !node.classList?.contains("poster-download-actions"),
            });

            Object.assign(posterRef.current.style, originalStyles);

            const link = document.createElement("a");
            link.download = `poster-${name || "pet"}.png`;
            link.href = dataUrl;
            link.click();
        }
        catch (error) {
            console.error("Erro:", error);
        }
        finally {
            setDownloading(false);
        }
    };
}