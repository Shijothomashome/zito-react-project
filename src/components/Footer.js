const Footer = () => {
    const year = new Date().getFullYear()
    return (
      <div className='footer'>
          Created by
        <a href='https://www.linkedin.com/in/shijo-thomas-home/'> Shijo Thomas</a>
        <p><i className ="fa-regular fa-copyright"></i> {year}</p>
      </div>
    )
  }

  
  export default Footer