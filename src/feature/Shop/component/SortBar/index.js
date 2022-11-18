import "../../../../asset/css/base.css"
import style from './style.module.css'
import { useDispatch } from "react-redux"
import { FilterSlice } from "../../../../components/Header/filterSlice"
import { useTranslation } from 'react-i18next';
const Sortbar = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const handleSortType = (e) => {
        dispatch(FilterSlice.actions.setSortValue(e.target.value));
    }

    return (
        <div className={style.sortWrap}>
            <div className='col s-6 m-6 l-4' >
                <div className={style.sortSelectGr}>
                    <label htmlFor='sort-by'> {t('content.sort_title')} </label>
                    <select id='sort-by' className={style.sortby} onChange={handleSortType}>
                        <option value="0">{t('content.sort_opt2')}</option>
                        <option value="1">{t('content.sort_opt2')}</option>
                        <option value="2">{t('content.sort_opt3')}</option>
                        <option value="3">{t('content.sort_opt4')}</option>
                        <option value="4">{t('content.sort_opt5')}</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Sortbar;