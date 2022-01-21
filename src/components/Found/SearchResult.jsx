import React from 'react';
import s from './SearchResult.module.css';
import noImage from './../../assets/images/noImage.jpg';
import { NavLink } from 'react-router-dom';

const SearchResult = (props) => {

    let totalItems = props.totalItems; // сколько страниц по 30 книг 

    return (
        <div className={s.books_container}>
            <div><h2 className={s.how_much_found}>Found {props.totalItems} results</h2></div>
            <div className={s.books_row}>
                {
                    props.results.map(b =>
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
                {(totalItems >= props.booksCount) ? <button className={s.load_more_button} onClick={() => { props.onLoadMoreButton() }}>Load more</button> : props.booksCount == 0}
            </div>
        </div>
    )
}


export default SearchResult;