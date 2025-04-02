'use client';

import { useCommentEventCallback } from '@veltdev/react';
import { useEffect, useRef } from 'react';
import { useEmailBuilder } from '@/components/email-builder/context';

// [VELT] Attaches email builder config to comment annotations
export const VeltCommentMetadata = () => {
  const commentEventCallbackData = useCommentEventCallback('addCommentAnnotation');
  
  // Get email builder config from context
  const { config } = useEmailBuilder();
  
  // Use ref to store latest config
  const configRef = useRef(config);
  
  // Keep the ref updated with latest config
  useEffect(() => {
    configRef.current = config;
  }, [config]);
  
  // This effect only runs when commentEventCallbackData changes
  useEffect(() => {
    if (commentEventCallbackData && configRef.current) {
      console.log('commentEventCallbackData', commentEventCallbackData);
      console.log('config', configRef.current);
      commentEventCallbackData.addContext(configRef.current);
    }
  }, [commentEventCallbackData]);

  // This component doesn't render anything - it just attaches context to comments
  return null;
}; 