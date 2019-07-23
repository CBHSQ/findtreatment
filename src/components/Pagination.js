import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { handleReceiveFacilities } from '../actions/facilities';

const StyledPagination = styled.div`
  ${tw`w-full mb-6 flex justify-center`}

  ul {
    ${tw`flex border rounded`}
  }

  li {
    ${tw`text-blue-500`}
  }

  li:not(.previous):not(.next) a {
    ${tw`block border-r px-3 py-2`}
  }

  .selected {
    ${tw`text-white bg-blue-500`}
  }

  .previous {
    ${tw`block hover:text-white hover:bg-blue-500 text-blue-500 border-r px-3 py-2`}
  }

  .next {
    ${tw`block hover:text-white hover:bg-blue-500 text-blue-500 px-3 py-2`}
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
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          forcePage={page - 1}
        />
      </StyledPagination>
    );
  }
}

export default connect(state => ({
  values: getFormValues('filters')(state)
}))(Pagination);
