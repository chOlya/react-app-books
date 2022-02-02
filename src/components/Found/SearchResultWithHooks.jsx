import React, { useEffect, useState } from 'react';
import s from './SearchResult.module.css';
import noImage from './../../assets/images/noImage.jpg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreBooks, startSearchBook } from '../../redux/searchResult-reducer';
import Preloader from '../common/Preloader/Preloader';
import Error from '../common/Error/Error';

const SearchResultWithHooks = () => {

    const dispatch = useDispatch();
    const searchString = useSelector(state => state.header.newSearchString);
    const orderBy = useSelector(state => state.header.orderBy);
    const category = useSelector(state => state.header.category);
    const results = useSelector(state => state.searchResult.results);
    const totalItems = useSelector(state => state.searchResult.totalItems); // сколько страниц по 30 книг 
    const isFetching = useSelector(state => state.searchResult.isFetching);
    const isFetchError = useSelector(state => state.searchResult.isFetchError);

    let [booksCount, increaseBooksCount] = useState(30);

    useEffect(() => {
        dispatch(startSearchBook(searchString, orderBy, category));
    }, [searchString, orderBy, category]);

    let onLoadMoreButton = () => {
        dispatch(loadMoreBooks(booksCount, results, searchString));
        increaseBooksCount(booksCount + 30);
    }

    return (
        <>
            {isFetching ? <Preloader /> : null}

            <div className={s.books_container}>
                <div><h2 className={s.how_much_found}>Found {totalItems} results</h2></div>
                <div className={s.books_row}>
                    {
                        results.map(b =>
                            <div className={s.books_items}>
                                <NavLink to={'/bookCard/' + b.id} className={s.navbar} >
                                    <div className={s.book_item}>
                                        <div className={s.book_img}>
                                            <img src={b.volumeInfo.imageLinks != null ? b.volumeInfo.imageLinks.smallThumbnail : noImage}></img>
                                        </div>
                                        <div className={s.book_info}>
                                            <h3 className={s.book_category}>{b.volumeInfo.categories != null ? b.volumeInfo.categories[0] : ''}</h3>
                                            <h1 className={s.book_name}> {b.volumeInfo.title} </h1>
                                            <h2 className={s.book_authors}> {b.volumeInfo.authors != null ? b.volumeInfo.authors : ''}</h2>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>)
                    }
                </div>
                <div className={s.button}>
                    {(totalItems > results.length) ? <button className={s.load_more_button} onClick={() => { onLoadMoreButton() }}>Load more</button> : booksCount == 0}
                </div>
            </div>

            {isFetchError ? <Error /> : null}
        </>
    )
}

export default SearchResultWithHooks;