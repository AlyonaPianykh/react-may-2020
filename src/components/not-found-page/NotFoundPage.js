import React from "react";
export function NotFoundPage(props) {
    // dtodo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу
    const {  history } = props;

    const toHomePage = () => {
        history.push('/home');
    };
    return (<div>
        <button className="btn btn-primary m-2"
                type="button"
                onClick={toHomePage}> Go back to homepage
        </button>
        <div>Page not found</div>

    </div>)
};
export default NotFoundPage;