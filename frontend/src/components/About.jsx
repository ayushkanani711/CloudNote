import React from "react";

const About = () => {
  return (
    <div className="container my-2">
      <h1 className="display-4 text-center mb-4 font-weight-bold">
        About CloudNote
      </h1>

      <section>
        <h2>Our Mission</h2>
        <p>
          Welcome to CloudNote, where our mission is to empower users by
          providing a seamless and accessible cloud-based note storing web app,
          empowering users to capture, organize, and access their ideas anytime,
          anywhere – all for free.
        </p>
      </section>

      <section>
        <h2>Who We Are</h2>
        <p>
          CloudNote is brought to you by a team of passionate individuals who
          love to Build creative webApp.
        </p>
      </section>

      <section>
        <h2>Our Story</h2>
        <p>
          OurWebApp started with a simple idea: to revolutionize the way people
          store and access their notes. It all began with the vision of creating
          a platform where individuals could effortlessly store and retrieve
          their valuable thoughts and ideas, anytime, anywhere.
        </p>
        <p>
          The spark came from the need for a user-centric note-taking experience
          that goes beyond the limitations of traditional methods. We envisioned
          a platform that prioritizes simplicity, innovation, and security. The
          result? An intuitive cloud-based note storage solution that keeps your
          notes at your fingertips, wherever life takes you.
        </p>
        <p>
          What sets us apart is our commitment to user-centric design, always
          staying ahead with the latest technologies and features, and putting
          security first. Your privacy and data security are our top priorities,
          ensuring that your notes are not just stored but safeguarded.
        </p>
        <p>
          OurWebApp isn't just a tool; it's a part of your journey. We're
          passionate about making note-taking an enjoyable and efficient
          experience. Join us as we continue to evolve, innovate, and provide a
          platform that empowers you to capture and organize your thoughts
          effortlessly.
        </p>
      </section>

      <section>
        <h2>Join Us on Our Journey</h2>
        <p>
          We invite you to be a part of the OurWebApp community. Explore the
          app, share your thoughts, and let's make this journey together!
        </p>
      </section>
      <div
        className="d-flex flex-row-reverse bd-highlight"
        style={{ marginTop: 30, marginRight: 60, marginBottom: 20 }}
      >
        <div className="p-2 bd-highlight">
          <a
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
            href="https://x.com/ayushkanani711?t=qX5bSYFzja0KC6j154RR9g&s=08"
            className="fa-brands fa-x-twitter fa-2xl "
          ></a>
        </div>
        <div className="p-2 bd-highlight">
          <a
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
            href="https://www.linkedin.com/in/ayush-kanani-b541a9224/"
            className="fa-brands fa-linkedin fa-2xl "
          ></a>
        </div>
        <div className="p-2 bd-highlight">
          <a
            style={{ color: "inherit", textDecoration: "none" }}
            target="_blank"
            href="https://github.com/ayushkanani711?tab=repositories"
            className="fa-brands fa-github fa-2xl "
          ></a>
        </div>
      </div>
    </div>
  );
};

export default About;
