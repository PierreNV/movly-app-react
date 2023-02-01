import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ moviesAmount, pageSize, onPageClick, currentPage }) => {
	const pagesAmount = Math.ceil(moviesAmount / pageSize);
	if (pagesAmount === 1) return null;
	const pages = _.range(1, pagesAmount + 1);
	return (
		<nav>
			<ul className="pagination m-auto">
				{pages.map((page) => (
					<li
						key={page}
						className={page === currentPage ? "page-item active" : "page-item"}>
						<button
							type="button"
							className="page-link"
							onClick={() => onPageClick(page)}>
							{page}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
};

Pagination.propTypes = {
	moviesAmount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageClick: PropTypes.func.isRequired,
};
export default Pagination;
