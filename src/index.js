// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import runApp from './app';

import '../assets/application.scss';

// import faker from 'faker';
// @ts-ignore
// eslint-disable-next-line
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const { channels, messages } = gon;
runApp(channels, messages);
