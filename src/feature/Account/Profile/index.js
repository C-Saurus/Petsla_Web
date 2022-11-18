import React, {useEffect} from 'react'
import { updateUser } from '../../../service/apiRequest'
import { useDispatch } from 'react-redux'
import { successToast, warnToast } from '../../../utils/toastify'
import {useNavigate} from 'react-router-dom'
const Profile = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token) {
            warnToast('Bạn cần đăng nhập trước!')
            navigate("/login")
        }
    }, [token, navigate])

    const newProfile = {
        email: 'datVH123@gmail.com',
        first_name: 'Panther',
        last_name: 'Black',
        name: 'LMI9',
        username: 'BlackPanther2002'
      }
      const dispatch = useDispatch();
      const handleEdit = () => {
        updateUser(localStorage.getItem("token"), dispatch, newProfile).then(() => {
            successToast('Đã cập nhật thành công')
        })
      }
    return (
        <div className="container">
            <button onClick={handleEdit}>
                Click here
            </button>
        </div>
    )
}
export default Profile;