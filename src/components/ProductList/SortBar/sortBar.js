import '../../header/CssBase/base.css'
import style from './style.module.css'
const sortbar = () => {
    return (
        <div className={style.sortWrap}>
            <div className='col c-6 m-6 l-4' >
                <div className={style.sortSelectGr}>
                    <label htmlFor='sort-by'> Sort By: </label>
                    <select id='sort-by' className={style.sortby}>
                        <option value="0">Relevance</option>
                        <option value="1">Name: A-Z</option>
                        <option value="2">Name: Z-A</option>
                        <option value="3">Price: Low to High</option>
                        <option value="4">Price: High to Low</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default sortbar;