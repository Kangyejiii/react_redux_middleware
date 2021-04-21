import React from 'react';
import { Link } from 'react-router-dom';
import PostListContainer from '../container/PostListContainer';
function PostListPage() {
    return (
        <>
            <PostListContainer />
            <Link to={`/react_redux_middleware/a`}> A page로 이동 </Link>
        </>
    );
}
export default PostListPage;
