'use client';

import { VeltComments, VeltCommentsSidebar } from '@veltdev/react';
import VeltInitializeUser from './VeltInitializeUser';
import VeltInitializeDocument from './VeltInitializeDocument';
import VeltCustomization from './ui-customization/VeltCustomization';
import './velt.css';

// [VELT] Installs Velt's root feature components with config, authenticates the user, initializes the document.
export const VeltCollaboration = () => {
  return (
    <>
      <VeltInitializeUser />
      <VeltComments
        shadowDom={false} // To allow host app's css to be applied to Velt's components
        commentPinHighlighter={false} // Disable adding a border to around the commented element.
        recordings="audio" // Enable audio recording.
        areaComment={false} // Disable area comments.
        ghostCommentsIndicator={false} // Disable the ghost comments indicator.
        deleteOnBackspace={false} // Disable deleting comments on backspace.
        allowedElementIds={['email-preview']}
        customStatus={[
          // Removing the default statuses and only adding the ones needed.
          {
            id: 'OPEN',
            name: 'Open',
            type: 'default',
            color: 'white',
            lightColor: '#7559FF',
          },
          {
            id: 'RESOLVED',
            name: 'Resolved',
            type: 'terminal',
            color: 'white',
            lightColor: '#58BF87',
          },
        ]}
      />
      <VeltCommentsSidebar />
      <VeltInitializeDocument />
      <VeltCustomization />
    </>
  );
};
