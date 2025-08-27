import Section from "../components/Section";

export default function About() {
  return (
    <main>
      <Section id="about">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img 
              src="/about-us.jpg" 
              alt="OD.ai - Odia AI Platform" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(123, 63, 0, 0.2)'
              }}
            />
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Our Mission</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              At OD.ai, we believe that language should never be a barrier to accessing technology. 
              Our mission is to democratize AI for the 50+ million Odia speakers worldwide by creating 
              intelligent systems that understand, process, and communicate in Odia naturally.
            </p>

            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>The Challenge</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              While Odia is the 6th most spoken language in India, digital tools and AI systems 
              have largely ignored this rich linguistic heritage. Farmers struggle with English-only 
              agricultural apps, students face language barriers in educational technology, and 
              government services remain inaccessible to many Odia speakers.
            </p>

            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Our Solution</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              We're building a comprehensive AI platform specifically designed for Odia language 
              processing. From Large Language Models that understand Odia context to OCR systems 
              that can read handwritten Odia text, our technology stack bridges the digital divide 
              for millions of people.
            </p>

            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Our Team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'rgba(123, 63, 0, 0.1)', 
                borderRadius: '8px',
                border: '1px solid rgba(123, 63, 0, 0.2)'
              }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Ashish Kok</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Co-Founder</p>
                <p style={{ fontSize: '0.9rem' }}>
                  IIT Hyderabad graduate with expertise in Natural Language Processing and Machine Learning.
                </p>
              </div>
              
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: 'rgba(123, 63, 0, 0.1)', 
                borderRadius: '8px',
                border: '1px solid rgba(123, 63, 0, 0.2)'
              }}>
                <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Pritish Joshi</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Co-Founder</p>
                <p style={{ fontSize: '0.9rem' }}>
                  IIT Dhanbad graduate, currently PhD in AI at Uppsala University, Sweden.
                </p>
              </div>
            </div>

            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Our Values</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</div>
                <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Inclusivity</h4>
                <p style={{ fontSize: '0.9rem' }}>Making technology accessible to every Odia speaker</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔬</div>
                <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Innovation</h4>
                <p style={{ fontSize: '0.9rem' }}>Pioneering AI solutions for regional languages</p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
                <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Collaboration</h4>
                <p style={{ fontSize: '0.9rem' }}>Working with communities and institutions</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
} 