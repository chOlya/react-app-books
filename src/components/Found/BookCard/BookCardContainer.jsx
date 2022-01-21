import { connect } from "react-redux";
import { getBookCard } from "../../../redux/searchResult-reducer";
import React from 'react';
import BookCard from "./BookCard";

class BookCardContainer extends React.Component {
    componentDidMount() {
        this.props.getBookCard(this.props.userId);
    }

    render() {
        return (
            <BookCard bookCard={this.props.bookCard} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookCard: state.searchResult.bookCard,
    }
}

export default connect(mapStateToProps, { getBookCard })(BookCardContainer);
