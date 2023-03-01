import React from 'react';
import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

export default function NewWindow({ children, closeWindowPortal }) {
  const externalWindow = useRef(window.open('', '', 'width=600,height=400,left=200,top=200'));
  const containerEl = document.createElement('div');

  useEffect(() => {
    const currentWindow = externalWindow.current;
    return () => currentWindow.close();
  }, []);

  externalWindow.current.document.title = 'Posts';
  externalWindow.current.document.body.appendChild(containerEl);

  externalWindow.current.addEventListener('beforeunload', () => {
    closeWindowPortal();
  });

  return ReactDOM.createPortal(children, containerEl);
}
