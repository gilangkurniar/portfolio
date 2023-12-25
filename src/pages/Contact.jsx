import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
      <Container>
        <h4 className="text-center mb-4">Reach Me</h4>
        <ul className="list text-center">
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" width="20px" />
            <Link to="https://mail.google.com/mail/?view=cm&source=mailto&to=[gilangkurniarmdhn@gmail.com]" target='_blank'>gilangkurniarmdhn@gmail.com</Link>
          </li>
          <li>
            <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" width="20px" />
            <Link to="https://www.instagram.com/codenamegkr" target='_blank'>codenamegkr</Link>
          </li>
          <li>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylKCihJQSgg22s6COVJ3w_Sh1iWfTbLSt7Q&usqp=CAU" width="20px" />
            <Link to="https://linkedin.com/in/gilangkurniar" target='_blank'>Gilang Kurnia R.</Link>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Contact