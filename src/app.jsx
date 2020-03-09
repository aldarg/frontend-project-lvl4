import ReactDOM from 'react-dom';
import React from 'react';

import Chat from './components/Chat';

export default (channels, messages) => {
  const container = document.getElementById('chat');
  ReactDOM.render(<Chat channels={channels} messages={messages} />, container);
};
