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
        name: "Getting Started with Competitive Programming",
        organization: "IIT Gandhinagar (NPTEL)",
        skills: ["C++", "Competitive Programming", "Data Structures", "Algorithms", "Graphs", "Dynamic Programming", "Greedy Algorithms"],
        description: "Completed the NPTEL course with a score of 85/100, ranked among the top 5%. The course covered advanced DSA topics including graphs, dynamic programming, greedy approach, and more.",
        type: "Certification",
        link: "https://drive.google.com/file/d/1fJt21nbynzqhNP7hrCe1qfuuY8ngTiR7/view?usp=sharing"
      },
      {
        id: 2,
        name: "CS50 Web Development using Python and JavaScript",
        organization: "Harvard University (edX)",
        skills: ["Python", "JavaScript", "HTML", "CSS", "Git", "CI/CD", "Web Development"],
        description: "Learnt web development fundamentals, Python, JavaScript, Git, CI/CD principles, and other web fundamentals.",
        type: "Certification",
        link: "https://certificates.cs50.io/89b20d9e-a2bf-424c-844a-318c6cfe49ac.pdf?size=letter"
      },

      {
        id: 3,
        name: "NPTEL IIT BOMBAY'S Demystifying Networks",
        organization: "IIT Bombay – NPTEL",
        skills: ["Computer Networks", "TCP/IP", "OSI Model", "Protocols"],
        description: "NPTEL online certification covering foundational networking concepts and protocols.",
        type: "Certification",
        link: "https://drive.google.com/file/d/1F7diJ5C3ZZikHrESOZBnpF85YIpgok9H/view?usp=sharing"
      },
      {
        id: 4,
        name: "MPYSC'39 Innovation Challenge",
        organization: "MP Government",
        skills: ["IoT", "App Development", "Automation", "Innovation", "Problem Solving"],
        description: "Received third prize in innovation challenge for building a smart home automation system with an integrated app.",
        type: "Award",
        link: "https://drive.google.com/file/d/1t3w0EzwXKQDKoEJnu-TZ7v27LsyCJ0Fc/view?usp=sharing"
      },
      {
        id: 5,
        name: "GeeksforGeeks 160 Days Challenge Winner",
        organization: "GeeksforGeeks",
        skills: ["Data Structures", "Algorithms", "Problem Solving", "C++"],
        description: "Badge awarded for solving problems in GFG’s 160 Days DSA Challenge.",
        type: "Badge",
        link: "https://drive.google.com/file/d/1ufMLxl4CRtXUOZSrDIvTQxlIyDqjyS8G/view?usp=sharing"
      },
      {
        id: 6,
        name: "HackerRank Problem Solving (Basic)",
        organization: "HackerRank",
        skills: ["Basic Algorithms", "Logic Building", "Coding"],
        description: "Certified for demonstrating foundational problem-solving skills in coding challenges.",
        type: "Certification",
        link: "https://drive.google.com/file/d/1-l2muepR0mBitFcIIuzSOq1By1aAMrNu/view?usp=sharing"
      },
      {
        id: 7,
        name: "HackerRank Problem Solving (Intermediate)",
        organization: "HackerRank",
        skills: ["Problem Solving", "Data Structures"],
        description: "Certified for demonstrating intermediate-level problem-solving proficiency.",
        type: "Certification",
        link: "https://drive.google.com/file/d/1q2TeQYEB_FnCQD6mJhWhIh2gbYJOXSel/view?usp=sharing"
      },
      {
        id: 8,
        name: "LeetCode 365 Days Badge",
        organization: "LeetCode",
        skills: ["Algorithms", "Data Structures", "Problem Solving", "C++", "Consistency"],
        description: "Solved problems on LeetCode for 365 days showcasing problem-solving skills and consistency.",
        type: "Badge",
        link: "https://drive.google.com/file/d/1tHo6uC0_Ap5bPJDrhh8rRcuksnO4dMBj/view?usp=sharing"
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
            className="text-2xl font-bold text-center mb-4 text-[#b1ddf2]"
          >
            My Certificates
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto -mt-3 mb-8 rounded-full bg-gradient-to-r from-[#7dd3fc] via-[#a5b4fc] via-40% via-[#f9a8d4] to-[#22d3ee]"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.4, duration: 1 }}
          />
          <motion.p
            className="text-blue-200 text-lg max-w-2xl -mt-3 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional certifications and courses I've completed to enhance my skills and knowledge
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-8"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className="relative h-74 perspective-1000"
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
                    <h3 className="text-lg font-bold text-blue-100 mb-1">{certificate.name}</h3>
                    <p className="text-blue-200 text-md mb-4">{certificate.organization}</p>

                  </div>

                  <div>
                    <p className="text-gray-200 text-s mb-2 -mt-2">Skills:</p>
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
                  <br />
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