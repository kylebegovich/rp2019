import React, { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Section from '../Util/Section';

import QuestionContainer from './components/QuestionContainer';

import styles from './FAQ.scss';

const FAQ = ({ faqData: { sections } }) => {
  const [currSection, setCurrSection] = useState('General');
  const [currQuestion, setCurrQuestion] = useState('');

  const handleToggle = question => {
    const newCurrQuestion = question === currQuestion ? '' : question;
    setCurrQuestion(newCurrQuestion);
  };

  const currQuestions = sections.filter(
    section => section.name === currSection
  )[0].questions;
  return (
    <Section className={styles.faqSection}>
      <Section.Header>
        <Section.Title>FAQs</Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          <Col
            md={{ span: 6, offset: 3 }}
            className={`text-center ${styles.faqPrompt}`}
          >
            <h3>What can we help you with?</h3>
            <div className="mx-auto">
              <Dropdown>
                <Dropdown.Toggle
                  size="lg"
                  variant="secondary"
                  id="faq-dropdown"
                  className={styles.faqDropdown}
                >
                  {currSection}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setCurrSection('General')}>
                    General
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCurrSection('Events')}>
                    Events
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCurrSection('MechMania')}>
                    MechMania
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setCurrSection('PuzzleBang')}>
                    PuzzleBang
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => setCurrSection('R|P Symposium')}
                  >
                    R|P Symposium
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <QuestionContainer
            questions={currQuestions}
            currQuestion={currQuestion}
            handleToggle={handleToggle}
          />
        </Container>
      </Section.Body>
    </Section>
  );
};

export default FAQ;
