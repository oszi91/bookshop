import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

import { dataToFetch } from './../../store/data/dataActions';

const Pagination: React.FC = () => {
	const dispatch = useDispatch();
	const meta = useSelector((state: RootState) => state.data.metadata);

	const pageQuantity = Math.ceil(meta.total_records / meta.records_per_page);
	const arrPage = Array.from({ length: pageQuantity }, (n, p) => p + 1);

	const changePage = (currPage: number) => {
		dispatch(dataToFetch(currPage));
	};

	return (
		<nav aria-label="Page navigation">
			<ul className="pagination justify-content-center">
				{arrPage.map(page => (
					<li key={page} className="page-item">
						<Link
							to={`/${page}`}
							onClick={() => changePage(page)}
							className="page-link text-dark bg-white shadow-sm"
						>
							{page}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
