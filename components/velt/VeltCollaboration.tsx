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
        svgAsImg={true} // treats svg as a single element just like an image, instead of a layered element
        persistentCommentMode={true} // after the comment tool is clicked, it stays on
        changeDetectionInCommentMode={true} // when comment mode is on, ensures that if the user changes anything in the scene, the sdk is aware of it
        shadowDom={false} // To allow host app's css to be applied to Velt's components
        textMode={false} // Disable regular text comments because we are using Tiptap Velt Comments.
        commentPinHighlighter={false} // Disable adding a border to around the commented element.
        recordings="audio" // Enable audio recording.
        areaComment={false} // Disable area comments.
        ghostCommentsIndicator={false} // Disable the ghost comments indicator.
        deleteOnBackspace={false} // Disable deleting comments on backspace.
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
