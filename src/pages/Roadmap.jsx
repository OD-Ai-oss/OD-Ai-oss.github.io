import Section from "../components/Section";

export default function Roadmap() {
  return (
    <main>
      <Section id="roadmap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img 
              src="/roadmap.jpg" 
              alt="OD.ai Development Roadmap" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(123, 63, 0, 0.2)'
              }}
            />
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>Strategic Development Phases</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', textAlign: 'center' }}>
              Our journey to democratize AI for Odia speakers is structured across three strategic phases, 
              each building upon the previous to create a comprehensive language technology ecosystem.
            </p>

            {/* Phase 1 */}
            <div style={{ 
              marginBottom: '3rem', 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              border: '2px solid rgba(123, 63, 0, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  backgroundColor: 'var(--accent)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '50px', 
                  height: '50px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  1
                </div>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>Foundation Phase (Q3 2024 - Q2 2025)</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🎯 Q3 2024</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>Team formation and initial funding</li>
                    <li>Research partnerships with IITs</li>
                    <li>Odia language dataset collection</li>
                  </ul>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🎯 Q4 2024</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>Basic OCR prototype development</li>
                    <li>Government collaboration initiation</li>
                    <li>Community outreach programs</li>
                  </ul>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🎯 Q1-Q2 2025</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>GPU infrastructure setup</li>
                    <li>Initial LLM training pipeline</li>
                    <li>Pilot project with educational institutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div style={{ 
              marginBottom: '3rem', 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              border: '2px solid rgba(123, 63, 0, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  backgroundColor: 'var(--accent)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '50px', 
                  height: '50px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  2
                </div>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>Growth Phase (Q3 2025 - Q4 2026)</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🚀 Q3-Q4 2025</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>First Odia LLM release (7B parameters)</li>
                    <li>OCR system deployment in 50+ sites</li>
                    <li>Government contract implementations</li>
                  </ul>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🚀 Q1-Q2 2026</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>Advanced speech recognition models</li>
                    <li>Partnership with 100+ institutions</li>
                    <li>Commercial API platform launch</li>
                  </ul>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🚀 Q3-Q4 2026</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>Multimodal AI capabilities</li>
                    <li>International expansion planning</li>
                    <li>Series A funding round</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div style={{ 
              marginBottom: '3rem', 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              border: '2px solid rgba(123, 63, 0, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  backgroundColor: 'var(--accent)', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '50px', 
                  height: '50px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginRight: '1rem'
                }}>
                  3
                </div>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>Scale Phase (2027 - 2030)</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🌍 2027</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>Regional language expansion</li>
                    <li>Enterprise solutions platform</li>
                    <li>International market entry</li>
                  </ul>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🌍 2028-2029</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>AI research institute establishment</li>
                    <li>Global language technology leader</li>
                    <li>IPO preparation</li>
                  </ul>
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>🌍 2030</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem' }}>
                    <li>Market leadership in regional AI</li>
                    <li>Global impact on digital inclusion</li>
                    <li>Sustainable growth model</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.1)', 
              borderRadius: '12px',
              marginTop: '2rem'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>Success Metrics</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>50+</div>
                  <div style={{ fontSize: '0.9rem' }}>Government Partnerships</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>1M+</div>
                  <div style={{ fontSize: '0.9rem' }}>Active Users</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>₹100Cr+</div>
                  <div style={{ fontSize: '0.9rem' }}>Annual Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
} 