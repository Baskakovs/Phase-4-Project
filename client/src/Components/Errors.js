function Errors({errors}){
    return (
        <>
        {
        Array.isArray(errors) && errors.length > 0 ?
            <div className='login-error-box'>
                <ul className='errors-list'>{Array.isArray(errors) ? errors.map((error)=>{
                    return <li className='errors-list-item'>{error}</li>
                    }): null}
                </ul> 
            </div>
        :
        null
        }
        </>
    )
}
export default Errors