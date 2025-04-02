'use client';

import { useCommentUtils, VeltComments, VeltCommentsSidebar } from '@veltdev/react';
import VeltInitializeUser from './VeltInitializeUser';
import VeltInitializeDocument from './VeltInitializeDocument';
import VeltCustomization from './ui-customization/VeltCustomization';
import { VeltCommentMetadata } from './VeltCommentMetadata';
import { useEmailBuilder } from '../email-builder/context';
import { DeviceType, ThemeMode } from '../email-builder/types';
import './velt.css';

// Define the type for the comment navigation event
interface CommentNavigationEvent {
  context?: {
    mode?: ThemeMode;
    device?: DeviceType;
  };
  annotation: {
    annotationId: string;
  };
}

// [VELT] Installs Velt's root feature components with config, authenticates the user, initializes the document.
export const VeltCollaboration = () => {
  const { setDevice, setMode } = useEmailBuilder();
  const commentUtils = useCommentUtils();

  const handleCommentNavigationButtonClick = (event: CommentNavigationEvent) => {
    console.log('context', event.context);
    
    if (event){
      // Check if context contains mode or device information and update app state
      if (event.context?.mode) {
        setMode(event.context.mode);
      }

      if (event.context?.device) {
        setDevice(event.context.device);
        // No need to set previewId as it's now derived from device
      }
      
      console.log('event.annotation.annotationId', event.annotation.annotationId);
      commentUtils?.selectCommentByAnnotationId(event.annotation.annotationId);
    }
  };

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
      <VeltCommentsSidebar shadowDom={false} onCommentNavigationButtonClick={handleCommentNavigationButtonClick} />
      <VeltInitializeDocument />
      <VeltCommentMetadata />
      <VeltCustomization />
    </>
  );
};
