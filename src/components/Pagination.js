import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import ReactPaginate from 'react-paginate';
import { handleReceiveFacilities } from '../actions/facilities';

const StyledPagination = styled.div`
  ${tw`w-full mb-6 flex justify-center`}

  ul {
    ${tw`flex border rounded`}
  }

  a {
    ${tw`block hover:bg-gray-300 border-r px-3 py-2`}
  }

  li:last-of-type a {
    ${tw`border-r-0`}
  }

  .disabled a {
    ${tw`text-gray-500 bg-transparent hover:bg-transparent cursor-not-allowed`}
  }

  .selected a {
    ${tw`text-white bg-blue-500 hover:bg-blue-500`}
  }
`;

class Pagination extends Component {
  handlePageClick = data => {
    const { dispatch, values } = this.props;

    dispatch(
      handleReceiveFacilities({
        ...values,
        page: data.selected + 1
      })
    );

    window.scrollTo(0, 0);
  };

  render() {
    const { page, totalPages } = this.props;

    return (
      <StyledPagination>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          forcePage={page - 1}
        />
      </StyledPagination>
    );
  }
}

Pagination.propTypes = {
  dispatch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  values: PropTypes.object.isRequired
};

export default connect(state => ({
  values: getFormValues('filters')(state)
}))(Pagination);
