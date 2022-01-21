import { NavLink } from "react-router-dom";
import s from './Error.module.css';

const Error = (props) => {
    return (
        <div>
            <div className={s.error}>ERROR</div>
            <NavLink to='/'>
                <div className={s.button}>
                    <button className={s.error_button}> GO TO MAIN PAGE</button>
                </div>
            </NavLink>
        </div>
    );
}

export default Error;