import Section from "../components/Section";

export default function Contact() {
  return (
    <main>
      <Section id="contact">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img 
              src="/contact-us.jpg" 
              alt="Contact OD.ai" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(123, 63, 0, 0.2)'
              }}
            />
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>Let's Build the Future of Odia AI Together</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', textAlign: 'center' }}>
              Whether you're interested in partnerships, want to learn more about our technology, 
              or have questions about implementing Odia AI solutions, we'd love to hear from you.
            </p>

            {/* Contact Information */}
            <div style={{ 
              marginBottom: '3rem', 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              border: '2px solid rgba(123, 63, 0, 0.2)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>Get in Touch</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Email</h4>
                  <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>All Inquiries</p>
                  <a href="mailto:info@odai.co.in" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }}>
                    info@odai.co.in
                  </a>
                  <p style={{ fontSize: '1rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Website</p>
                  <a href="https://odai.co.in" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 'bold' }}>
                    odai.co.in
                  </a>
                </div>
                
                
                
                <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📍</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Office</h4>
                  <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Bhubaneswar, Odisha</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ 
              marginBottom: '3rem', 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              border: '2px solid rgba(123, 63, 0, 0.2)'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>Send us a Message</h3>
              
              <form style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem', 
                        border: '1px solid rgba(123, 63, 0, 0.3)', 
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{ 
                        width: '100%', 
                        padding: '0.8rem', 
                        border: '1px solid rgba(123, 63, 0, 0.3)', 
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '0.8rem', 
                      border: '1px solid rgba(123, 63, 0, 0.3)', 
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    Organization
                  </label>
                  <input 
                    type="text" 
                    style={{ 
                      width: '100%', 
                      padding: '0.8rem', 
                      border: '1px solid rgba(123, 63, 0, 0.3)', 
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    Inquiry Type *
                  </label>
                  <select 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '0.8rem', 
                      border: '1px solid rgba(123, 63, 0, 0.3)', 
                      borderRadius: '6px',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="demo">Request Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    Message *
                  </label>
                  <textarea 
                    required
                    rows="5"
                    placeholder="Tell us about your project or how we can help..."
                    style={{ 
                      width: '100%', 
                      padding: '0.8rem', 
                      border: '1px solid rgba(123, 63, 0, 0.3)', 
                      borderRadius: '6px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <button 
                    type="submit"
                    style={{ 
                      padding: '1rem 2rem', 
                      backgroundColor: 'var(--accent)', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Additional Contact Methods */}
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.1)', 
              borderRadius: '12px',
              marginTop: '2rem'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>Other Ways to Connect</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💼</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>LinkedIn</h4>
                  <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Follow OD.ai</a>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🐦</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Twitter</h4>
                  <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>@ODai_Official</a>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Careers</h4>
                  <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Join Our Team</a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Response Time</h4>
              <p style={{ fontSize: '1rem' }}>
                We typically respond to all inquiries within <strong>24 hours</strong> during business days.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
} 