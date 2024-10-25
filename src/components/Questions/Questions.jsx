import Icon from 'components/Icon/Icon';
import './questions.css';
import { useState } from 'react';

const AskedQuestions = () => {
  const questions = [
    'Donec lorem quam porta placerat diam phasellus?',
    'Donec lorem quam porta placerat diam phasellus?',
    'Donec lorem quam porta placerat diam phasellus?',
    'Donec lorem quam porta placerat diam phasellus?',
    'Donec lorem quam porta placerat diam phasellus?',
    'Donec lorem quam porta placerat diam phasellus?',
    'Donec lorem quam porta placerat diam phasellus?',
    'Donec lorem quam porta placerat diam phasellus?',
  ];

  const answers =
    'Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt ius ex. Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt ius ex. Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt ius ex. Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt ius ex. Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt ius ex. Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt ius ex.';

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    openIndex === index ? setOpenIndex(null) : setOpenIndex(index)
  };

  return (
    <section className="asked-questions-section">
      <div className="asked-container">
        <div className="asked-head-block">
          <h1>Frequently Asked Questions</h1>
          <p>
            Lorem ipsum dolor sit amet, ea mundi malorum cfsaum, reprehendunt
            ius ex. Lorem ipsum dolor sit amet, ea mundi malorum cfsaum,
            reprehendunt ius ex.
          </p>
        </div>
        <div className="asked-list">
          {questions.map((question, index) => (
            <div key={index} className='index-block'>
              <div className="asked-block">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <p >{question}</p>
                  <span onClick={() => toggleFAQ(index)}>
                    <Icon width={15.42} height={25} iconId="icon-arrow" />
                  </span>
                </div>
              </div>
              {openIndex === index && <div className='answer'>{answers}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskedQuestions;
