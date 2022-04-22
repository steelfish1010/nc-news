const FilterSort = ({ sortBy, setSortBy, order, setOrder }) => {
	function sortHandler(e) {
		setSortBy(e.target.value);
	}

	function orderHandler(e) {
		setOrder(e.target.value);
	}
	return (
		<div className='FilterSort'>
			<label className='label__filter' htmlFor='sort'>
				Sort by
			</label>
			<select
				className='select__filter'
				name='sort'
				onChange={sortHandler}
				defaultValue={sortBy}
			>
				<option value='created_at'>Date</option>
				<option value='comment_count'>Comments</option>
				<option value='votes'>Votes</option>
			</select>
			<label className='label__sort' htmlFor='order'>
				Order
			</label>
			<select
				className='select__sort'
				name='order'
				onChange={orderHandler}
				defaultValue={order}
			>
				<option value='desc'>Descending</option>
				<option value='asc'>Ascending</option>
			</select>
		</div>
	);
};

export default FilterSort;
