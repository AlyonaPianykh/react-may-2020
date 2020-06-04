import React from "react";


const NotFoundPage = (props) => {

    // donetodo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу
    const { history } = props;
    // const post = postsList.find(item => item.id === id);

    const toHomePage = () => {
        history.push('/home')
    }

    return(
        <div>
            <button className="btn btn-primary m-2" onClick={toHomePage}>Back to home Page </button>

            {/* /!*Page not found*!/*/}
            {/*{*/}
            {/*    !!post && (*/}
            {/*        <PostCard post={post}/>*/}
            {/*    )*/}
            {/*}*/}

        </div>
    );

};

export default NotFoundPage;