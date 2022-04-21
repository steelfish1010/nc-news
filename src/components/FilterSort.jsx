const FilterSort = ({ setSortBy, setOrder }) => {
	function sortHandler(e) {
		setSortBy(e.target.value);
	}

	function orderHandler(e) {
		setOrder(e.target.value);
	}
	return (
		<>
			<label htmlFor='sort'>Sort by</label>
			<select name='sort' onChange={sortHandler}>
				<option value='created_at'>Date</option>
				<option value='comment_count'>Comments</option>
				<option value='votes'>Votes</option>
			</select>
			<label htmlFor='order'>Order</label>
			<select name='order' onChange={orderHandler}>
				<option value='desc'>Descending</option>
				<option value='asc'>Ascending</option>
			</select>
		</>
	);
};

export default FilterSort;
