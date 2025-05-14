import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const CertificatesSection = () => {
  const [certificates, setCertificates] = useState([]);
  const [flippedId, setFlippedId] = useState(null);

  // Simulate fetching data from certificates.json
  useEffect(() => {
    // Mock data
    const mockCertificates = [
      {
        id: 1,
        name: "Full Stack Development",
        organization: "Coursera",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        description: "Completed a comprehensive full stack web development course covering frontend and backend technologies.",
        link: "https://example.com/certificate-url"
      },
      {
        id: 2,
        name: "Data Science Specialization",
        organization: "IBM",
        skills: ["Python", "Machine Learning", "Data Analysis", "Statistics"],
        description: "Professional certification in data science fundamentals, machine learning algorithms, and data visualization.",
        link: "https://example.com/certificate-url"
      },
      {
        id: 3,
        name: "AWS Solutions Architect",
        organization: "Amazon Web Services",
        skills: ["Cloud Computing", "AWS", "Serverless", "Infrastructure"],
        description: "Certified in designing distributed systems and implementing high-performance architecture on AWS.",
        link: "https://example.com/certificate-url"
      },
      {
        id: 4,
        name: "UI/UX Design Foundations",
        organization: "Google",
        skills: ["User Research", "Wireframing", "Prototyping", "Figma"],
        description: "Mastered the principles of user interface design and user experience research methodologies.",
        link: "https://example.com/certificate-url"
      },
      {
        id: 5,
        name: "Cyber Security Fundamentals",
        organization: "CompTIA",
        skills: ["Network Security", "Encryption", "Threat Analysis", "Security Protocols"],
        description: "Comprehensive training in identifying security threats and implementing defense mechanisms.",
        link: "https://example.com/certificate-url"
      },
      {
        id: 6,
        name: "Agile Project Management",
        organization: "Scrum Alliance",
        skills: ["Scrum", "Kanban", "Sprint Planning", "Team Leadership"],
        description: "Certified in Agile methodologies with focus on team coordination and iterative development.",
        link: "https://example.com/certificate-url"
      }
    ];
    
    setCertificates(mockCertificates);
  }, []);

  const handleFlip = (id) => {
    if (flippedId === id) {
      setFlippedId(null);
    } else {
      setFlippedId(id);
    }
  };

  return (
    <div className="min-h-screen bg-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4 text-[#b1ddf2]"
      >
            My Certificates
          </motion.h2>
          <motion.div
  className="w-24 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#7dd3fc] via-[#a5b4fc] via-40% via-[#f9a8d4] to-[#22d3ee]"
  initial={{ width: 0 }}
  animate={{ width: "6rem" }}
  transition={{ delay: 0.4, duration: 1 }}
/>
          <motion.p 
            className="text-blue-200 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional certifications and courses I've completed to enhance my skills and knowledge
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className="relative h-64 perspective-1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
            >
              <div 
                className="w-full h-full cursor-pointer preserve-3d transition-transform duration-500"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: flippedId === certificate.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
                onClick={() => handleFlip(certificate.id)}
                aria-label={`Certificate: ${certificate.name}`}
              >
                <div
  className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md p-6 flex flex-col justify-between backface-hidden shadow-xl shadow-white/10"
  style={{ backfaceVisibility: 'hidden' }}
>

                  <div>
                    <h3 className="text-xl font-bold text-blue-100 mb-1">{certificate.name}</h3>
<p className="text-blue-200 text-sm mb-4">{certificate.organization}</p>

                  </div>
                  
                  <div>
                    <p className="text-gray-200 text-s mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill) => (
                        <span 
  key={skill} 
  className="bg-blue-200/60 text-black text-sm px-2 py-1 rounded-md"
>

                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <br/>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-blue-10 py-30 text-xs">Click to flip</span>
                  </div>
                </div>

                <div
  className="absolute inset-0 rounded-xl bg-white/20 backdrop-blur-md p-6 flex flex-col justify-between backface-hidden shadow-xl shadow-white/10"
  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
>

                  <div>
                    <h3 className="text-lg font-bold text-blue-100 mb-3">{certificate.name}</h3>
<p className="text-blue-100 text-m">{certificate.description}</p>

                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={certificate.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#b1ddf2] hover:text-blue-100 text-sm font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Certificate <ExternalLink size={14} className="inline" />
                    </a>
                    <span className="text-blue-10 text-xs">Click to flip back</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesSection;