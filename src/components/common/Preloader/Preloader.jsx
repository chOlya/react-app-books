import Spinner from '../../../assets/images/spinner.gif';
import s from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={s.spinner}>
            <img src={Spinner} className={s.spinner_img} />
        </div>
    );
}

export default Preloader;