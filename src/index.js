
import React from 'react';
import HomeContainer from './components/Home/HomeContainer';
import ReactDOM from 'react-dom';

const wrapper = document.getElementById('create-article-form');
wrapper ? ReactDOM.render(<HomeContainer/>, wrapper) : false;
