import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import PostListContainer from '../container/PostListContainer';
function PostListPage() {
    return (
        <>
            <PostListContainer />
            <Link to={`/react_redux_middleware/a`}> A page로 이동 </Link>
            <button
                onClick={ReactGA.ga(
                    'send',
                    'event',
                    'button_click',
                    'click',
                    'A'
                )}
            >
                {' '}
                A 동영상 클릭
            </button>
            <button
                onClick={ReactGA.ga(
                    'send',
                    'event',
                    'button_click',
                    'click',
                    'B'
                )}
            >
                {' '}
                B 동영상 클릭
            </button>
        </>
    );
}
export default PostListPage;
