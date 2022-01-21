import { connect } from "react-redux";
import { startSearchBook, loadMoreBooks, loadSearchResults } from "../../redux/searchResult-reducer";
import SearchResult from "./SearchResult";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import Error from "../common/Error/Error";

class SearchResultContainer extends React.Component {

    componentDidMount() {
        this.props.startSearchBook(this.props.searchString, this.props.orderBy, this.props.category);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.searchString != prevProps.searchString || this.props.orderBy != prevProps.orderBy || this.props.category != prevProps.category) {
            //this.props.loadSearchResults([]);
            this.props.startSearchBook(this.props.searchString, this.props.orderBy, this.props.category);
        }
    }

    onLoadMoreButton = () => {
        this.props.loadMoreBooks(this.props.booksCount, this.props.results, this.props.searchString);
    }

    render() {
        console.log(this.props.isFetchError);
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <SearchResult totalItems={this.props.totalItems} results={this.props.results} onLoadMoreButton={this.onLoadMoreButton} booksCount={this.props.booksCount} />
            {this.props.isFetchError ? <Error /> : null}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        searchString: state.header.newSearchString,
        results: state.searchResult.results,
        totalItems: state.searchResult.totalItems,
        isFetching: state.searchResult.isFetching,
        booksCount: state.searchResult.booksCount,
        orderBy: state.header.orderBy,
        category: state.header.category,
        isFetchError: state.searchResult.isFetchError,
    }
}

export default connect(mapStateToProps, { startSearchBook, loadMoreBooks, loadSearchResults })(SearchResultContainer);
