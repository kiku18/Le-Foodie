import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQ.css'; // Importing CSS file for FAQ page

const FAQ = () => {
  const faqs = [
    { question: "What is Foodie?", answer: "Foodie is your one-stop destination for delicious culinary delights, offering a wide range of high-quality, tasty, and healthy food options." },
    { question: "How can I order from Foodie?", answer: "You can place an order through our website or mobile app. Simply browse our menu, select your desired items, and complete the checkout process." },
    { question: "What payment methods do you accept?", answer: "We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery." },
    { question: "Do you offer vegetarian and vegan options?", answer: "Yes, we have a variety of vegetarian and vegan dishes available on our menu." },
    { question: "How can I track my order?", answer: "Once your order is placed, you can track its status through our app or website in the 'Order History' section." },
    { question: "Can I schedule orders in advance?", answer: "Absolutely! You can schedule your orders in advance by selecting your preferred delivery date and time during checkout." },
    { question: "What is your refund policy?", answer: "If you're not satisfied with your order, please contact our customer support within 24 hours for a refund or replacement." },
    { question: "Do you offer catering services?", answer: "Yes, we offer catering services for events and special occasions. Please contact our support team for more details." },
    { question: "Is there a loyalty program?", answer: "Yes, we have a loyalty program where you can earn points with each order and redeem them for discounts and exclusive offers." },
    { question: "How can I contact customer support?", answer: "You can reach our customer support team via email at support@foodie.com or call us at +123-456-7890." },
  ];

  return (
    <Container className="faq-container">
      <Typography variant="h3" gutterBottom className="faq-header">
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} className="faq-summary">
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="faq-details">
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;
