import { useDispatch, useSelector } from "react-redux";
import { getBookCard } from "../../../redux/searchResult-reducer"; 
import React, { useEffect } from 'react';
import BookCard from "./BookCard";

const BookCardContainerWithHooks = (props) => {

    const dispatch = useDispatch();
    const bookCard = useSelector(state => state.searchResult.bookCard);

    useEffect(() => {
        dispatch(getBookCard(props.userId));
    }, []);

    return (
        <div>
            <BookCard bookCard={bookCard} />
        </div>
    );
}

export default BookCardContainerWithHooks;


