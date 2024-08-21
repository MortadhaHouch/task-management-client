declare module "react-pdf-to-image" {
    interface PDFtoIMGProps {
        file: string;
        children: (props: { pages: string[] }) => React.ReactNode;
    }
    export const PDFtoIMG: React.FC<PDFtoIMGProps>;
}