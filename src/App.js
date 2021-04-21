import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
    return (
        <>
            <Route
                path="/react_redux_middleware/"
                component={PostListPage}
                exact
            />
            <Route path="/react_redux_middleware/:id" component={PostPage} />
        </>
    );
}

export default App;
