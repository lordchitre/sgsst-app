import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';

import { Navbar } from './Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

test('component render succesfully', () => {
    const component = render(<Router><Navbar /></Router>);
    component.getByText('Registrarme');
    console.log(component.debug());
});

test('test what happend when the user clicks on the registro button', () => {
    const component = render(<Router><Navbar /></Router>);
    const button = component.getByText('Registrarme');
    console.log(prettyDOM(button));
})