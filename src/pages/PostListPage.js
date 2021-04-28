import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import PostListContainer from '../container/PostListContainer';
import useGoogleOptimize from '../hooks/useGoogleOptimize';

function PostListPage() {
    const variant = useGoogleOptimize('rqR89vK7TZGhHvB9wS_6ig', [false, true]);
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
            <div>test</div>
            {variant ? <div>Variant 1</div> : <div>Variant 2</div>}
        </>
    );
}
export default PostListPage;
