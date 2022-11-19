import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import notFound from '../../asset/notfound.png'
const index = () => {
    const navigate = useNavigate;
  const handleBack = () => {
    navigate("/")
  }
  return (
    <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '90vw',
            margin: 'auto'
        }}>
            <img src={notFound} alt='404 Not Found' style={{maxWidth: '100%', margin: '25px auto 16px'}}></img>
            <h5 style={{
                width: '800px',
                textAlign: 'center',
                maxWidth: '90vw'
            }}>
                The page you are looking for might have been removed had its name changed or is temporarily unavailable!
            </h5>
            <Button type="button" className='btn btn-warning' onClick={handleBack}>
                Back to Home
            </Button>
        </div>
    </>
  )
}

export default index