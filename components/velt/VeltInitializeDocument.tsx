import { useSetDocuments } from '@veltdev/react';
import { useEffect, useMemo } from 'react';

// [VELT] Initializes the Velt document when the photo details page is loaded.
export default function VeltInitializeDocument() {
  const { setDocuments } = useSetDocuments();
  const document = useMemo(() => [
    {
      id: 'marketing-campaign-1',
      metadata: {
        documentName: 'Maketing Campaign #1'
      }
    },
  ], []);

  // Initialize the document. Document == single email instance.
  useEffect(() => {
    if (setDocuments && document) {
      console.log('setting documents', document);
      setDocuments(document);
    }
  }, [setDocuments, document]);

  return null;
}
