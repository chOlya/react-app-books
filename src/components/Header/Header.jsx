import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    let newSearchStringBody = props.newSearchString;

    let onUpdateSearchText = (e) => {
        let text = e.target.value;
        props.updateSearchText(text);
    }

    let onCategorySelection = (e) => {
        let category = e.target.value;
        props.selectedCategory(category);
    }

    let onSortingSelection = (e) => {
        let orderBy = e.target.value;
        props.sortingSelection(orderBy);
    }

    let onPushSearchButton = () => {
        props.pushSearchButton();
    }
    let onPushEnter = (e) => {
        if (e.key === "Enter") {
            props.pushSearchButton();
        }
    }

    return (
        <div className={s.header}>
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
    );
}

export default Header;