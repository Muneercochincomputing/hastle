import React from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

// Optionally set the worker URL if needed
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFViewer = ({ pdfFile }) => {
    return (
        pdfFile ? (
            <div style={{ height: '750px', marginTop: '20px' }}>
                <Document
                    file={URL.createObjectURL(pdfFile)}
                    onLoadSuccess={() => console.log('PDF loaded successfully')}
                    onLoadError={(error) => console.error('Error loading PDF:', error)}
                >
                    <Page pageNumber={1} />
                </Document>
            </div>
        ) : (
            <p>No file selected</p>
        )
    );
};

export default PDFViewer;
