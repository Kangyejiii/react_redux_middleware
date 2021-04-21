import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactGA from 'react-ga';
import { Route, Router } from 'react-router-dom';
import './App.css';
import Apage from './pages/Apage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
// ReactGA.initialize('UA-195164062-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

// const getGA = () => {
//     console.log('페이지 들어옴');

//     const pathName = window.location.pathname;

//     ReactGA.initialize('UA-195164062-1');
//     console.log(pathName);
//     ReactGA.set({ page: pathName });

//     ReactGA.pageview(pathName);
// };

const history = createHistory();
ReactGA.initialize('UA-195164062-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname);
});

function App() {
    return (
        <Router history={history}>
            <>
                <Route
                    path="/react_redux_middleware"
                    component={PostListPage}
                    exact
                />
                <Route
                    path="/react_redux_middleware/:id"
                    component={PostPage}
                />
                <Route path="/react_redux_middleware/a" component={Apage} />
            </>
        </Router>
    );
}

export default App;
