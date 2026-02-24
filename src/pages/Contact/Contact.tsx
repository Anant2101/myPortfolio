import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ScrollReveal from '../../components/React Bits/ScrollReveal/ScrollReveal';
import './Contact.css';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_hxm3krp';
const EMAILJS_TEMPLATE_ID = 'template_dt0qrqq';
const EMAILJS_PUBLIC_KEY = 'NN_NYHkfTrpPSySCq';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
  const sectionRef = useRef<HTMLElement>(null);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate form fields
  const validateField = (name: string, value: string): string => {
    const trimmedValue = value.trim();
    
    switch (name) {
      case 'name':
        if (!trimmedValue) {
          return 'Name is required';
        }
        if (trimmedValue.length < 2) {
          return 'Name must be at least 2 characters';
        }
        return '';
      
      case 'email':
        if (!trimmedValue) {
          return 'Email is required';
        }
        if (!emailRegex.test(trimmedValue)) {
          return 'Please enter a valid email address';
        }
        return '';
      
      case 'message':
        if (!trimmedValue) {
          return 'Message is required';
        }
        if (trimmedValue.length < 10) {
          return 'Message must be at least 10 characters';
        }
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const messageError = validateField('message', formData.message);
    
    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });
    
    // If there are validation errors, don't submit
    if (nameError || emailError || messageError) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setSubmitMessage('Thank you for your message! I will get back to you soon.');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage('Oops! Something went wrong. Please try again or email me directly.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      
      
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together!
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-heading">Let's Talk</h3>
              <p className="contact-text">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>anant67chaturvedi@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>Phone</h4>
                    <p>9589069499</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Indore, India</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/Anant2101" className="social-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/chaturvedianant/" className="social-link" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className={errors.message ? 'input-error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            <button
              type="submit"
              className="contact-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && (
              <p className={`submit-message ${submitStatus}`}>{submitMessage}</p>
            )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
