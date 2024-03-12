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
                

                <div class=" mx-auto px-4 p-5  py-28 bg-black text-gray-400 flex justify-center items-center flex-col">
                    <p class="mt-4 max-w-2xl text-xl lg:mx-auto text-center italic underline font-semibold">Our Founder {founder}</p>

                    <p class="mt-4 max-w-2xl text-xl lg:mx-auto text-center italic">{message}</p>

                </div>


                <div class="grid grid-cols-1 sm:grid-cols-2 bg-black">
                    <div>
                        <div className="p-8 py-16 sm:px-14 md:px-40">
                            <img src={profile_img} alt="Profile Photo" class=" shadow-2xl rounded-md" />
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center text-white mb-10 ">
                        <h2 class="text-2xl font-bold mb-4">About Me</h2>
                        <p class="text-xl text-gray-400 italic text-center px-4">"Code with passion, innovate with purpose."</p>

                        <div class="flex mt-2 gap-1">
                            <Link target="_blank" to="https://www.linkedin.com/in/shijo-thomas-home/" class="mr-4"><i class="fa-brands text-xl fa-linkedin  text-[#0b63c1]"></i></Link>
                            <Link target="_blank" to="https://www.github.com/shijothomashome/" class="mr-4"><i class="fa-brands text-xl fa-github   text-white"></i></Link>
                            <Link target="_blank" to="https://www.instagram.com/_shijo_thomas_____/" class="mr-4"><i class="fa-brands text-xl fa-instagram  text-rose-500"></i></Link>
                            <Link target="_blank" to="https://api.whatsapp.com/send/?phone=7034436073&text=Hi&type=phone_number&app_absent=0" class="mr-4"><i class="fa-brands text-xl fa-whatsapp  text-green-600"></i></Link>
                        </div>
                    </div>

                </div>




            </div>
        )
    }
}
export default About;