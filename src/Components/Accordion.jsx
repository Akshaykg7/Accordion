import { useState } from "react";
import "../Components/Accordion.css";

const faq = [
  {
    id: 1,
    title: "FAQ 1",
    content:
      "Content1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
  },
  {
    id: 2,
    title: "FAQ 2",
    content:
      "Content2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
  },
  {
    id: 3,
    title: "FAQ 3",
    content:
      "Content3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
  },
  {
    id: 4,
    title: "FAQ 4",
    content:
      "Content4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
  },
];

const Accordion = () => {
  const [currentFaqId, setCurrentFaqId] = useState("");

  const handleFaqView = (faqId) => {
    setCurrentFaqId(currentFaqId === faqId ? "" : faqId);
  };

  return (
    <div className="faq">
      {faq.map((data) => (
        <div key={data.id} className="acc-container">
          <div className="acc-title" >
          <p>{data.title}</p>
          <button className="acc-view" onClick={() => handleFaqView(data.id)}>
            {currentFaqId === data.id ? "-" : "+"}
          </button>
          </div>

          {currentFaqId === data.id && (
            <div className="acc-details">
              <p>{data.content}</p>
            </div>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default Accordion;
