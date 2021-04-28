import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import PostListContainer from '../container/PostListContainer';
function PostListPage() {
    const [experimentType, setExperimentType] = useState('0');
    useEffect(() => {
        if (window && window.dataLayer && !isLoadingExperiment) {
            window.dataLayer.push({
                event: 'optimize.activate',
                eventCallback: () => {
                    const experimentType =
                        window.google_optimize &&
                        window.google_optimize.get('YtOHnseDRmeXDS6hlb3cYw');
                    // undefined - when experiment isn't running
                    // 1,2,3 - when ant variant is running
                    if (experimentType) {
                        setExperimentType(experimentType);
                    }
                },
            });
        }
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
            {experimentType === '0' && <div>Original</div>}
            {experimentType === '1' && <div>Variant 1</div>}
            {experimentType === '2' && <div>Variant 2</div>}
        </>
    );
}
export default PostListPage;
