import { connect } from 'react-redux';
import { pushSearchButton, updateSearchText, selectedCategory, sortingSelection } from '../../redux/header-reducer';
import Header from './Header';

let mapStateToProps = (state) => {
    return {
        state: state,
        newSearchString: state.header.newSearchString,
        searchString: state.header.searchString,
    }
}

const HeaderContainer = connect(mapStateToProps, { updateSearchText, pushSearchButton, selectedCategory, sortingSelection })(Header);

export default HeaderContainer;
