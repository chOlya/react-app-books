import Preloader from '../../common/Preloader/Preloader';
import s from './BookCard.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getBookCard } from "../../../redux/searchResult-reducer"; 
import React, { useEffect } from 'react';

const BookCardWithHooks = (props) => {
    const dispatch = useDispatch();
    const bookCard = useSelector(state => state.searchResult.bookCard);

    useEffect(() => {
        dispatch(getBookCard(props.userId));
    }, []);

    if (!bookCard) {
        return <Preloader />
    }

    return (
        <div className={s.book_card_row}>
            <div className={s.book_card}>
                <div className={s.book_card_img}>
                    <img src={bookCard.volumeInfo.imageLinks != null ? bookCard.volumeInfo.imageLinks.thumbnail : ''}></img>
                </div>
                <div className={s.book_card_info}>
                    <h1 className={s.book_categories}>{bookCard.volumeInfo.categories != null ? bookCard.volumeInfo.categories : ''}</h1>
                    <h2 className={s.book_name}> {bookCard.volumeInfo.title} </h2>
                    <h2 className={s.book_authors}> {bookCard.volumeInfo.authors != null ? bookCard.volumeInfo.authors : ''}</h2>
                    <p className={s.book_description}>{bookCard.volumeInfo.description}</p>
                </div>
            </div>
        </div>
    );
}

export default BookCardWithHooks;