import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import ReactPaginate from 'react-paginate';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import { handleReceiveLocations } from '../actions/locations';

class Pagination extends Component {
  handlePageClick = data => {
    const { dispatch, values } = this.props;

    console.log(data, values);

    dispatch(
      handleReceiveLocations({
        ...values,
        page: data.selected + 1
      })
    );
  };

  render() {
    return (
      <div css={tw`w-full mb-6 flex justify-center`}>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.props.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          forcePage={this.props.page - 1}
          containerClassName={'flex border rounded'}
          pageLinkClassName={
            'block hover:text-white hover:bg-blue-500 text-blue-500 border-r px-3 py-2'
          }
          activeLinkClassName={
            'block text-white bg-blue-500 border-r border-blue-500 px-3 py-2'
          }
          previousLinkClassName={
            'block hover:text-white hover:bg-blue-500 text-blue-500 border-r px-3 py-2'
          }
          nextLinkClassName={
            'block hover:text-white hover:bg-blue-500 text-blue-500 border-r px-3 py-2'
          }
        />
      </div>
    );
  }
}

export default connect(state => ({
  values: getFormValues('search')(state)
}))(Pagination);
