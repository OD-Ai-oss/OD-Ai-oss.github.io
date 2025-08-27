import Section from "../components/Section";

export default function Models() {
  return (
    <main>
      <Section id="models">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img 
              src="/models.jpg" 
              alt="OD.ai AI Model Stack" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(123, 63, 0, 0.2)'
              }}
            />
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
            <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', textAlign: 'center' }}>Comprehensive AI Model Ecosystem</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', textAlign: 'center' }}>
              Our specialized AI models are designed to understand, process, and generate Odia language content 
              across multiple modalities, from text and speech to handwritten documents.
            </p>

            {/* Language Models */}
            <div style={{ 
              marginBottom: '3rem', 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              border: '2px solid rgba(123, 63, 0, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginRight: '1rem' }}>🤖</div>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>Odia Language Models (LLMs)</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>OD-7B Base Model</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>7 billion parameters</li>
                    <li>Trained on 50GB+ Odia text</li>
                    <li>Context window: 8K tokens</li>
                    <li>Multilingual capabilities</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                    Use Cases: Content generation, translation, summarization
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>OD-1.5B Lite Model</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>1.5 billion parameters</li>
                    <li>Optimized for mobile devices</li>
                    <li>Real-time inference</li>
                    <li>Low resource consumption</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                    Use Cases: Mobile apps, edge computing, chatbots
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>OD-30B Advanced Model</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>30 billion parameters</li>
                    <li>Enterprise-grade performance</li>
                    <li>Advanced reasoning capabilities</li>
                    <li>Multi-domain expertise</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                    Use Cases: Research, enterprise solutions, complex tasks
                  </div>
                </div>
              </div>
            </div>

            {/* OCR Models */}
            <div style={{ 
              marginBottom: '3rem', 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              border: '2px solid rgba(123, 63, 0, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginRight: '1rem' }}>📄</div>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>Optical Character Recognition (OCR)</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Odia Script OCR</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>99.2% accuracy on printed text</li>
                    <li>Support for all Odia characters</li>
                    <li>Historical document processing</li>
                    <li>Multi-format output</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                    Use Cases: Document digitization, archives, publishing
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Handwritten Odia Recognition</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>95%+ accuracy on handwriting</li>
                    <li>Multiple writing styles support</li>
                    <li>Real-time processing</li>
                    <li>Learning from corrections</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                    Use Cases: Forms processing, education, personal notes
                  </div>
                </div>
              </div>
            </div>

            {/* Speech Models */}
            <div style={{ 
              marginBottom: '3rem', 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              border: '2px solid rgba(123, 63, 0, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginRight: '1rem' }}>🎤</div>
                <h3 style={{ color: 'var(--accent)', margin: 0 }}>Speech Recognition & Synthesis</h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Odia Speech-to-Text</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>97% accuracy in clean environments</li>
                    <li>Multiple dialect support</li>
                    <li>Noise cancellation</li>
                    <li>Real-time transcription</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                    Use Cases: Voice assistants, meetings, accessibility
                  </div>
                </div>
                
                <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '8px' }}>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Odia Text-to-Speech</h4>
                  <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                    <li>Natural-sounding voices</li>
                    <li>Multiple voice options</li>
                    <li>Emotion and tone control</li>
                    <li>High-quality audio output</li>
                  </ul>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>
                    Use Cases: Audiobooks, announcements, accessibility
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.1)', 
              borderRadius: '12px',
              marginTop: '2rem'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', textAlign: 'center' }}>Technical Specifications</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Security</h4>
                  <p style={{ fontSize: '0.9rem' }}>End-to-end encryption, GDPR compliant</p>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Scalability</h4>
                  <p style={{ fontSize: '0.9rem' }}>Auto-scaling, global CDN</p>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔧</div>
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Integration</h4>
                  <p style={{ fontSize: '0.9rem' }}>REST APIs, SDKs, webhooks</p>
                </div>
              </div>
            </div>

            {/* API Access */}
            <div style={{ 
              padding: '2rem', 
              backgroundColor: 'rgba(123, 63, 0, 0.05)', 
              borderRadius: '12px',
              marginTop: '2rem',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Ready to Get Started?</h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Access our models through our comprehensive API platform or deploy them on-premise for enterprise needs.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button style={{ 
                  padding: '0.8rem 1.5rem', 
                  backgroundColor: 'var(--accent)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}>
                  View API Documentation
                </button>
                <button style={{ 
                  padding: '0.8rem 1.5rem', 
                  backgroundColor: 'transparent', 
                  color: 'var(--accent)', 
                  border: '2px solid var(--accent)', 
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}>
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
} 