import './Header.css';

const Header = ({ name }) => {

	return (
		<div className="page-header">
			<hr />
				<h1>{name}</h1>
			<hr />
		</div>
	)
}

export default Header;