// class based component
import React from "react";
import about_section_img from '../images/about_section_img.jpg'
import profile_img from '../images/profile_img.jpg'
import { Link } from "react-router-dom";

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            founder: 'Shijo Thomas',
            message: 'Initial message.',
            Our_quote: '1990s Flavor, Timeless Tradition'
        }
    }
    componentDidMount() {
        this.setState({ // updating state variables, as a result, render will work again
            message: `" Celebrate the golden age of dining with us, where our commitment to quality and tradition has remained unwavering since our establishment in 1990."`
        })
    }
    render() {
        const { founder, message, Our_quote } = this.state

        return (
            <div class="bg-gray-100 -mt-[14px]">
                <div className="py-7  bg-gray-800 text-white">
                    <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase text-center">About Us</h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
                        Our Story
                    </p>
                    <p className="text-center mt-5">{Our_quote}</p>
                </div>

                <div class="max-w-7xl mx-auto px-4 mb-5 p-5 w-3/4 rounded-lg">
                    <p class="mt-4 max-w-2xl text-xl lg:mx-auto text-center italic underline font-semibold">Our Founder {founder}</p>

                    <p class="mt-4 max-w-2xl text-xl lg:mx-auto text-center italic">{message}</p>

                </div>


                <div class="grid grid-cols-1 sm:grid-cols-2 ">
                    <div>
                        <div className="p-8 py-16 sm:px-14 md:px-40">
                            <img src={profile_img} alt="Profile Photo" class=" shadow-2xl rounded-md" />
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center text-black mb-10 ">
                        <h2 class="text-2xl font-bold mb-4">About Me</h2>
                        <p class="text-xl text-black italic text-center px-4">"Code with passion, innovate with purpose."</p>

                        <div class="flex mt-2 gap-1">
                            <Link to="https://www.linkedin.com/in/shijo-thomas-home/" class="mr-4"><i class="fa-brands text-3xl fa-linkedin  text-[#0b63c1]"></i></Link>
                            <Link to="https://www.github.com/shijothomashome/" class="mr-4"><i class="fa-brands text-3xl fa-github   text-black"></i></Link>
                            <Link to="https://www.instagram.com/_shijo_thomas_____/" class="mr-4"><i class="fa-brands text-3xl fa-instagram  text-rose-500"></i></Link>
                            <Link to="https://api.whatsapp.com/send/?phone=7034436073&text=Hi&type=phone_number&app_absent=0" class="mr-4"><i class="fa-brands text-3xl fa-whatsapp  text-green-600"></i></Link>
                        </div>
                    </div>

                </div>




            </div>
        )
    }
}
export default About;