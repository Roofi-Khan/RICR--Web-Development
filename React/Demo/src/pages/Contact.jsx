import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    city: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp);
        temp = temp.filter((word) => word!==value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };
  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      city: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };
  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>

        <div className="container">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="text-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="text-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="text-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="text-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="text-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="religion">Religion</label>
              <select name="religion" id="religion" onChange={handleChange}>
                <option value="">--Select Religion--</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="christianity">Christianity</option>
                <option value="byddgusn">Buddism</option>
                <option value="jainism">Jainism</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={contactData.gender === "male"}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={contactData.gender === "female"}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={contactData.gender === "other"}
              />{" "}
              Other
            </div>

            <div>
              <label htmlFor="skill"></label>
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "html"
                  )
                    ? true
                    : false
                }
              />{" "}
              HTML
              <input
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "css"
                  )
                    ? true
                    : false
                }
              />{" "}
              CSS
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find((word) => word === "js")
                    ? true
                    : false
                }
              />{" "}
              JS
              <input
                type="checkbox"
                name="skill"
                value="react"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "react"
                  )
                    ? true
                    : false
                }
              />{" "}
              React
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className="text-primary"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Submit"}
              </button>
              <button type="reset" className="btn btn-danger">
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
