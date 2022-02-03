import Preloader from '../../common/Preloader/Preloader';
import s from './BookCard.module.css';

const BookCard = (props) => {
    if (!props.bookCard) { //изначально props.bookCard == null, поэтому нужна проверка для первого шага, пока карточка не загрузилась
        return <Preloader />
    }

    return (
        <div className={s.book_card_row}>
            <div className={s.container}>
                <div className={s.book_card}>
                    <div className={s.book_card_img}>
                        <img src={props.bookCard.volumeInfo.imageLinks != null ? props.bookCard.volumeInfo.imageLinks.thumbnail : ''}></img>
                    </div>
                    <div className={s.book_card_info}>
                        <h1 className={s.book_categories}>{props.bookCard.volumeInfo.categories != null ? props.bookCard.volumeInfo.categories : ''}</h1>
                        <h2 className={s.book_name}> {props.bookCard.volumeInfo.title} </h2>
                        <h2 className={s.book_authors}> {props.bookCard.volumeInfo.authors != null ? props.bookCard.volumeInfo.authors : ''}</h2>
                        <p className={s.book_description}>{props.bookCard.volumeInfo.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;