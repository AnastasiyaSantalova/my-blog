import Header from '../../components/header/Header';
import './ErrorPage.css';

const ErrorPage = () => {
	return (
		<div className="not-found-page">
			<Header name={'404: page not found'} />
			<p>Please go back to the <a href='/'>home</a> page.</p>
		</div>
	)
}

export default ErrorPage;