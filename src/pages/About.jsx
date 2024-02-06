import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <div className='about'>
            <Container>
                <h4 className='text-center mb-4'>About Me</h4>
                <p>Hi, my name is Gilang Kurnia Ramadhan, but you can call me Gilang or Ramadhan. I am bachelor of Information Engineering, and had more or less 1 year experience working as Web Developer, and have done some projects. </p>
                <p>If you wanna see my projects, just go to "Projects" tab, or simply just click <a href="/projects" className='fw-semibold'>here.</a> If you wanna know more about me, you can download my CV <a href="https://drive.google.com/file/d/1fxkTEns9GvbqSfDSeIP2Teqjqi-C9Xy2/view?usp=sharing" target='_blank' className='fw-semibold'>here.</a> Also feel free to contact me! we can do some projects together as a team, or maybe you want to hire me to work in your office, just text me on "Contact" tab, or simply just click <a href="/contact" className='fw-semibold'>here.</a></p>
            </Container>
        </div>
    )
}

export default About