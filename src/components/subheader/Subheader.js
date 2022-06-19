import './Subheader.css';

const Subheader = ({ name }) => {
  return (
		<div className='page-subheader'>
			<h3>{name}</h3>
		</div>
	)
}

export default Subheader;