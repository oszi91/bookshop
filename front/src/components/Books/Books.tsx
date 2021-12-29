import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import Book from './subcomponents/Book';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';

const Books: React.FC = () => {
	const booklist = useSelector((state: RootState) => state.data.booklist);
	const loading = useSelector((state: RootState) => state.data.loading);

	return (
		<>
			<div className="container mt-4">
				<div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
					{booklist.map(book => {
						return <Book key={book.id} {...book} />;
					})}
				</div>
			</div>
			{loading && <Loading />}
			<Pagination />
		</>
	);
};

export default Books;
