const Loading: React.FC = () => (
	<div className="vh-100 d-flex justify-content-center align-items-center">
		<div
			className="spinner-border"
			style={{ width: '5rem', height: '5rem' }}
			role="status"
		></div>
	</div>
);

export default Loading;
