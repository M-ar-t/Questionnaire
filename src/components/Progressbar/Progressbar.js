import p from './Progressbar.module.css';

const Progressbar = (props) => {
	return (
		<div className={p.container}>
			<div className={p.progress} style={{ width: `${props.progress}%` }}></div>
		</div>
	);
};

export default Progressbar;
