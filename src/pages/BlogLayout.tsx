import { Outlet } from "react-router-dom";

function BlogLayout() {
    return (
        <div>
            Blog Layout
            <Outlet context={{val: 5}}/>
        </div>
    );
}

export default BlogLayout;