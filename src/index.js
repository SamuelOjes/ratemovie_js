/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom';

import App from './components/App';

// ReactDOM.render(<App/>, document.getElementById('root'))

const root = createRoot(App);
root.render(document.getElementById('root'));
