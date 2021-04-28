import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import PostListContainer from '../container/PostListContainer';
function PostListPage() {
    const [experimentType, setExperimentType] = useState(undefined);

    async function testOptimize() {
        if (window.dataLayer) {
            await window.dataLayer.push({ event: 'optimize.activate' });
        }
        let intervalId = setInterval(() => {
            if (window.google_optimize !== undefined) {
                const variant = window.google_optimize.get(
                    'HAoWNOD3QfenD0Fjsag7LQ'
                );
                setExperimentType(variant);
                console.log(variant);
                clearInterval(intervalId);
            }
        }, 100);
    }

    useEffect(() => {
        testOptimize();
    }, []);

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
            {!experimentType && <div>Original</div>}
            {experimentType === '1' && <div>Variant 1</div>}
        </>
    );
}
export default PostListPage;
