import { VeltCommentDialogWireframe, VeltData } from '@veltdev/react';

// [VELT] Wireframe for the comment dialog
const VeltCommentDialogBodyWf = () => {
  return (

    <VeltCommentDialogWireframe.Header variant='sidebar'>
      <div className='flex flex-row gap-2 justify-between items-center'>
        <div className='flex flex-row gap-2'>
          <VeltCommentDialogWireframe.CommentIndex />
          <div className='flex flex-row gap-2'>
            <span className='rounded-full bg-gray-100 px-3 h-4 flex items-center justify-center text-xs font-medium text-gray-800'>
                <VeltData field="commentAnnotation.context.device" />
            </span>
            <span className='rounded-full bg-blue-100 px-3 h-4 flex items-center justify-center text-xs font-medium text-blue-800'>
                <VeltData field="commentAnnotation.context.mode" />
            </span>
          </div>
        </div>
        <VeltCommentDialogWireframe.NavigationButton />
      </div>

    </VeltCommentDialogWireframe.Header>

    
  );
};

export default VeltCommentDialogBodyWf; 