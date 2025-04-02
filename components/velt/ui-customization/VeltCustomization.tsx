import { VeltCommentDialogWireframe, VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentToolWf from './VeltCommentToolWf';
import VeltNotificationToolWF from './VeltNotificationToolWf';

// [VELT] Contains the wireframs for Velt components.
const VeltCustomization = () => {
  return (
    <VeltWireframe>
      {/* [VELT] Wireframe for the sidebar button */}
      <VeltSidebarButtonWf />

      {/* [VELT] Wireframe for the comment tool */}
      <VeltCommentToolWf />

      {/* [VELT] Wireframe for the notification tool */}
      <VeltNotificationToolWF />
      {/* <VeltCommentDialogWireframe.Header veltIf='{false}' /> */}
    </VeltWireframe>
  );
};

export default VeltCustomization; 