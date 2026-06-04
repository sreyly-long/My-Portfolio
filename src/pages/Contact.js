function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up to an email service or backend when available.
    alert("Thanks! Your message has been noted. I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <main className="section">
      <div className="container">
        <div className="text-center mb-5 reveal">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Let's build something together</h2>
          <p className="section-sub mx-auto">
            Have a project, an opportunity, or just want to say hi? Drop me a message.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Form */}
          <div className="col-lg-7 reveal">
            <div className="contact-card">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control" id="subject" placeholder="What's this about?" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Tell me a little about it..." required />
                </div>
                <button type="submit" className="btn btn-grad">
                  Send Message <i className="bi bi-send ms-1" />
                </button>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="col-lg-5 reveal d2">
            <div className="contact-side h-100">
              <a className="contact-item" href="mailto:longsreyly85@wecambodia.com">
                <span className="ico"><i className="bi bi-envelope" /></span>
                <div>
                  <div className="label">Email</div>
                  <div className="value">longsreyly85@wecambodia.com</div>
                </div>
              </a>
              <a className="contact-item" href="https://t.me/+855763643789" target="_blank" rel="noopener noreferrer">
                <span className="ico"><i className="bi bi-telegram" /></span>
                <div>
                  <div className="label">Telegram</div>
                  <div className="value">Chat with me on Telegram</div>
                </div>
              </a>
              <div className="contact-item">
                <span className="ico"><i className="bi bi-geo-alt" /></span>
                <div>
                  <div className="label">Location</div>
                  <div className="value">Phnom Penh, Cambodia</div>
                </div>
              </div>
              <div className="contact-item">
                <span className="ico"><i className="bi bi-briefcase" /></span>
                <div>
                  <div className="label">Availability</div>
                  <div className="value">Open to opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Contact;
