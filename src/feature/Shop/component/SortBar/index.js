import "../../../../asset/css/base.css"
import style from './style.module.css'
import { useDispatch } from "react-redux"
import { FilterSlice } from "../../../../components/Header/filterSlice"
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.css'
import {Row} from "react-bootstrap";
const Sortbar = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const handleSortType = (e) => {
        dispatch(FilterSlice.actions.setSortValue(e.target.value));
    }

    return (
        // <Container>
            <Row className={style.sortWrap} >
                <div className='col sm-6 md-6 lg-4' >
                    <div className={style.sortSelectGr}>
                        <label style={{marginRight:"10px"}} htmlFor='sort-by'> {t('content.sort_title')} </label>
                        <select id='sort-by' className={style.sortby} onChange={handleSortType}>
                            <option value="0">{t('content.sort_opt2')}</option>
                            <option value="1">{t('content.sort_opt2')}</option>
                            <option value="2">{t('content.sort_opt3')}</option>
                            <option value="3">{t('content.sort_opt4')}</option>
                            <option value="4">{t('content.sort_opt5')}</option>
                        </select>
                    </div>
                </div>
            </Row>
        // </Container>
    )
}
export default Sortbar;