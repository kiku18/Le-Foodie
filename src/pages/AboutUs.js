import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css"; // Importing CSS file for About Us page

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <motion.div className="hero-video" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/pq3Otf0zbdk?start=3&autoplay=1&mute=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Hero Video"
        ></iframe>
      </motion.div>

      <header className="about-us-header">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
          About Us
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 5 }}>
          Welcome to Foodie, your one-stop destination for delicious culinary delights!
        </motion.p>
      </header>

      <section className="about-us-section">
        <div className="about-us-content">
          <motion.div
            className="text"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <h2>Our Mission</h2>
            <p>
              At Foodie, we believe in bringing the best of world cuisine right to your doorstep. Our mission is to provide
              you with a wide range of high-quality, tasty, and healthy food options that cater to all palates and preferences.
            </p>
          </motion.div>
          <motion.img
            className="image"
            src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg"
            alt="Mission"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5 }}
          />
        </div>
      </section>

      <section className="about-us-section reverse">
        <div className="about-us-content">
          <motion.img
            className="image"
            src="https://img.freepik.com/free-photo/couple-surfing-tablet-cooking-together_23-2148114177.jpg"
            alt="Story"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5 }}
          />
          <motion.div
            className="text"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <h2>Our Story</h2>
            <p>
              Foodie was founded by a group of passionate food enthusiasts who wanted to make it easier for people to
              experience the joys of international cuisine. From humble beginnings in a small kitchen, we have grown into a
              trusted name in the food industry, known for our commitment to quality and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-us-section">
        <div className="about-us-content">
          <motion.div
            className="text"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <h2>Meet Our Team</h2>
            <p>
              Our team consists of dedicated individuals who are passionate about bringing you the best culinary experiences.
            </p>
          </motion.div>
          <motion.img
            className="image"
            src="https://img.freepik.com/free-photo/lifestyle-people-learning-make-sushi_23-2149865318.jpg"
            alt="Team"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 5 }}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
