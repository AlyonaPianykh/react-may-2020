// donetodo 1: вынести эту функцию в отдельную компоненту: сощздать папку, js файл
import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
	// donetodo 1: добавить кнопку навигации на back to home page
	//  подумайте, как для этого надо изменить эту страницу

	return (
	<div>Page not found
		<br/>
		<Link to="/home">back to home page</Link>
	</div>)
};
export default NotFoundPage;