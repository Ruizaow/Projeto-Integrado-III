import { toPng } from "html-to-image";

export default function DownloadPosterHandler(posterRef, name, setDownloading) {
    return async () => {
        if (!posterRef.current) return;

        try {
            setDownloading(true);
            await new Promise((resolve) => setTimeout(resolve, 50));

            // 1. Remove temporariamente o scale(0.7)
            const originalTransform = posterRef.current.style.transform;
            posterRef.current.style.transform = "scale(1)";

            // 2. Ajusta estilos do poster
            const originalStyles = {
                padding: posterRef.current.style.padding,
                margin: posterRef.current.style.margin,
                width: posterRef.current.style.width,
                height: posterRef.current.style.height
            };

            posterRef.current.style.padding = "0";
            posterRef.current.style.margin = "0";
            posterRef.current.style.width = "600px";
            posterRef.current.style.height = "auto";

            // 3. Aumenta altura da imagem
            const imageContainer = posterRef.current.querySelector(".poster-image-container");
            const originalImageHeight = imageContainer?.style.height;
            if (imageContainer) {
                imageContainer.style.height = "500px"; // ou "100%" se quiser preencher tudo
            }

            // 4. Força o redesenho
            await new Promise(resolve => requestAnimationFrame(resolve));

            // 5. Captura a imagem
            const dataUrl = await toPng(posterRef.current, {
                quality: 1,
                pixelRatio: 1,
                backgroundColor: null,
                filter: (node) => !node.classList?.contains("poster-download-actions"),
                fontEmbedCSS: `
                    @font-face {
                        font-family: 'Inter';
                        src: url('../fonts/Inter-Regular.woff2') format('woff2');
                    }
                    @font-face {
                        font-family: 'League Spartan';
                        src: url('../fonts/LeagueSpartan.woff2') format('woff2');
                    }
                `,
            });

            // 6. Restaura os estilos originais
            Object.assign(posterRef.current.style, originalStyles);
            posterRef.current.style.transform = originalTransform;
            if (imageContainer && originalImageHeight !== undefined) {
                imageContainer.style.height = originalImageHeight;
            }

            // 7. Baixa o PNG
            const link = document.createElement("a");
            link.download = `poster-${name || "pet"}.png`;
            link.href = dataUrl;
            link.click();
        }
        catch (error) {
            console.error("Erro ao gerar imagem:", error);
        }
        finally {
            setDownloading(false);
        }
    };
}
