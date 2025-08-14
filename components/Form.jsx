
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Form() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const router = useRouter();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation rules
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.subject) {
      errors.subject = 'Subject is required';
    }
    if (!values.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      setTimeout(() => {
        router.push("/thankyou"); 
      }, 500);
    }
  };
  return (
    <div>
      <form className="question__form" onSubmit={handleSubmit} method="POST">
        <div className="row g-4">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              aria-label="Name"
            />
            {formErrors.name && <small className="text-danger">{formErrors.name}</small>}
          </div>
          <div className="col-12">
            <input
              type="email"
              className="form-control"
              placeholder="Your email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              aria-label="Email"
            />
            {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              id="subject"
              name="subject"
              value={formValues.subject}
              onChange={handleInputChange}
              aria-label="Subject"
            />
            {formErrors.subject && <small className="text-danger">{formErrors.subject}</small>}
          </div>
          <div className="col-12">
            <textarea
              className="form-control form-control--message"
              placeholder="Describe your message"
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleInputChange}
            />
            {formErrors.message && <small className="text-danger">{formErrors.message}</small>}
          </div>
        </div>
        <button
          className="form-control custom-btn text-center mt-4 text-dark"
          type="submit"
          disabled={isSubmitting}
        >
          {"Submit"}
        </button>
      </form>
    </div>
  );
}

export default Form;
