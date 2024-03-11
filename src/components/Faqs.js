// lifting the state up concept
import { useState } from "react";

const Section = ({ question, answer, isVisible, setIsVisible }) => {
    return (
        <>
            {isVisible ? (
                <div className="rounded flex justify-between items-center cursor-pointer p-1 pl-3 py-5 sm:py-5 mt-px bg-gray-800 text-gray-400" onClick={() => setIsVisible(false)}>
                    <h6 className="text-xl font-medium mb-0 ">{question}</h6>
                    <i className="fa-solid fa-minus mr-2 sm:mr-7 text-xl sm:text-2xl font-thin text-white"></i>
                </div>) : (
                <div className="rounded flex justify-between items-center cursor-pointer p-1 pl-3 py-5 sm:py-5 mt-px bg-gray-800 text-gray-400" onClick={() => setIsVisible(true)}>
                    <h2 className=" text-base sm:text-xl font-medium mb-0 ">{question}</h2>
                    <i className="fa-solid fa-plus mr-2 sm:mr-7 text-xl sm:text-2xl font-thin text-white"></i>
                </div>)}

            {isVisible && <p className="text-white px-3 sm:pr-24 py-5 bg-gray-700 -mt-2 rounded font-thin">{answer}</p>}
        </>
    );
};

const Faqs = () => {
    const [visibleSection, setIsVisibleSection] = useState();
    return (
        <div className="flex flex-col mx-auto w-[90%] sm:w-[80%] mt-10 mb-16 lg:mb-24 gap-px">
            <div className="md:mr-10 lg:mr-40">
                <h1 className="text-3xl p-2 mb-2 font-bold">Frequently Asked Questions</h1>
                <Section
                    question={"What cuisines do you offer?"}
                    answer={"We offer a diverse range of cuisines including Italian, Mexican, Asian, American, and more. Our menu is designed to cater to various tastes and preferences."}
                    isVisible={visibleSection === "question_1"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_1") : setIsVisibleSection("")}
                />
                <Section
                    question={"Do you offer vegetarian options?"}
                    answer={"Yes, we have a wide selection of vegetarian options available on our menu. From salads to pasta dishes, we ensure there are plenty of choices for vegetarians."}
                    isVisible={visibleSection === "question_2"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_2") : setIsVisibleSection("")}
                />
                <Section
                    question={"Are ingredients locally sourced?"}
                    answer={"We make every effort to source our ingredients locally whenever possible. Supporting local farmers and businesses is important to us, and we believe it contributes to the freshness and quality of our dishes."}
                    isVisible={visibleSection === "question_3"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_3") : setIsVisibleSection("")}
                />
                <Section
                    question={"Can I customize my order?"}
                    answer={"Of course! We encourage customization to ensure your meal is exactly how you like it. Whether you want to add extra toppings, substitute ingredients, or adjust the spice level, just let us know, and we'll make it happen."}
                    isVisible={visibleSection === "question_4"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_4") : setIsVisibleSection("")}
                />
                <Section
                    question={"Do you offer delivery services?"}
                    answer={"Yes, we offer delivery services within our local area. Simply place your order online or give us a call, and we'll deliver your delicious meal straight to your doorstep."}
                    isVisible={visibleSection === "question_5"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_5") : setIsVisibleSection("")}
                />
                <Section
                    question={"What are your hours of operation?"}
                    answer={"Our hours of operation may vary depending on the location. Please check our website or give us a call for the most up-to-date information on our opening hours."}
                    isVisible={visibleSection === "question_6"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_6") : setIsVisibleSection("")}
                />
                <Section
                    question={"Do you cater for events?"}
                    answer={"Yes, we provide catering services for events of all sizes. Whether it's a corporate luncheon, wedding reception, or family gathering, our catering team will work with you to create a memorable dining experience."}
                    isVisible={visibleSection === "question_7"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_7") : setIsVisibleSection("")}
                />
                <Section
                    question={"How can I provide feedback about my experience?"}
                    answer={"We value your feedback! You can provide feedback by filling out our online feedback form, contacting us via email or phone, or speaking directly with our staff during your visit. Your input helps us improve our services and enhance your dining experience."}
                    isVisible={visibleSection === "question_8"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_8") : setIsVisibleSection("")}
                />
                <Section
                    question={"Do you offer gift cards?"}
                    answer={"Yes, we offer gift cards that can be purchased online or at any of our locations. Treat your loved ones to the gift of delicious food and a memorable dining experience with our gift cards."}
                    isVisible={visibleSection === "question_9"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_9") : setIsVisibleSection("")}
                />
                <Section
                    question={"Do you accommodate dietary restrictions?"}
                    answer={"Absolutely! We understand the importance of accommodating dietary restrictions. Please inform our staff about any allergies or dietary preferences, and we will do our best to provide suitable options."}
                    isVisible={visibleSection === "question_10"}
                    setIsVisible={(Bool) => Bool ? setIsVisibleSection("question_10") : setIsVisibleSection("")}
                />
            </div>
        </div>
    )
}

export default Faqs