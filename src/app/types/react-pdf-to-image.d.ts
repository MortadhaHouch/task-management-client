declare module 'react-pdf-to-image' {
    import { FC } from 'react';
    interface PDFtoIMGProps {
        file: string;
        page?: number;
        scale?: number;
        children:React.ReactNode
        onLoad?: () => void;
        onError?: (error: Error) => void;
    }
    export const PDFtoIMG: FC<PDFtoIMGProps>;
}