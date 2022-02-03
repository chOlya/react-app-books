import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { pushSearchButton, selectedCategory, sortingSelection, updateSearchText } from '../../redux/header-reducer';
import s from './Header.module.css'

const HeaderWithHooks = () => {

    const newSearchStringBody = useSelector(state => state.header.newSearchString);
    const dispatch = useDispatch();

    let onUpdateSearchText = (e) => {
        let text = e.target.value;
        dispatch(updateSearchText(text));
    }

    let onCategorySelection = (e) => {
        let category = e.target.value;
        dispatch(selectedCategory(category));
    }

    let onSortingSelection = (e) => {
        let orderBy = e.target.value;
        dispatch(sortingSelection(orderBy));
    }

    let onPushSearchButton = () => {
        dispatch(pushSearchButton());
    }
    let onPushEnter = (e) => {
        if (e.key === "Enter") {
            dispatch(pushSearchButton());
        }
    }

    return (
        <div className={s.header}>
            <div className={s.container}>
                <h1 className={s.title}>Search for books</h1>
                <form className={s.search}>
                    <input className={s.search_bookname} onChange={onUpdateSearchText} onKeyPress={onPushEnter} autoFocus={true} value={newSearchStringBody} />
                    <NavLink to='/results'><button className={s.search_button} onClick={onPushSearchButton} ></button></NavLink>
                </form>
                <div className={s.options}>
                    <div className={s.categories}> Categories
                        <select className={s.option_item1} onChange={onCategorySelection}>
                            <option>all</option>
                            <option>art</option>
                            <option>biography</option>
                            <option>computers</option>
                            <option>history</option>
                            <option>medical</option>
                            <option>poetry</option>
                        </select>
                    </div>
                    <div className={s.orderBy}>
                        Sorting by
                        <select className={s.option_item2} onChange={onSortingSelection}>
                            <option selected>relevance</option>
                            <option>newest</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderWithHooks;