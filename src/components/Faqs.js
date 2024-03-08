// lifting the state up concept
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ? (
                <button onClick={() => setIsVisible(false)}
                    className="cursor-pointer underline" >Hide</button>
            ) : (
                <button onClick={() => setIsVisible(true)}
                    className="cursor-pointer underline" >Show</button>)}

            {isVisible && <p className="text-blue-600">{description}</p>}
        </div>
    );
};

const Faqs = () => {
    const [visibleSection, setIsVisibleSection] = useState();
    return (
        <div>
            <h1 className= "text-3xl p-2 m-2 font-bold"> Faqs</h1>
            <Section
                title= {"About Faqs"}
                description= {"On the other hand, we denounce with righteous indignation and dislike me"}
                isVisible = {visibleSection === "about"}
                setIsVisible= { (Bool) => Bool? setIsVisibleSection("about"): setIsVisibleSection("")}
            />
            <Section
                title={"Products Faqs"}
                description={"On the other hand, we denounce with righteous indignation and dislike me"}
                isVisible={visibleSection === "product"}
                setIsVisible= { (Bool) => Bool? setIsVisibleSection("product"): setIsVisibleSection("")}
            />
            <Section
                title={"Career Faqs"}
                description={"On the other hand, we denounce with righteous indignation and dislike me"}
                isVisible={visibleSection === "career"}
                setIsVisible= { (Bool) => Bool? setIsVisibleSection("career"): setIsVisibleSection("")}
            />
            <Section
                title={"Future Faqs"}
                description={"On the other hand, we denounce with righteous indignation and dislike me"}
                isVisible={visibleSection === "future"}
                setIsVisible= { (Bool) => Bool? setIsVisibleSection("future"): setIsVisibleSection("")}
            />
        </div>
    )
}

export default Faqs