// src/components/Footer.jsx
const Footer = () => {
    const footerSections = [
      {
        title: 'About',
        links: [
          { label: 'About Khazar', href: '#' },
          { label: 'Leadership', href: '#' },
          { label: 'Alumni', href: '#' },
          { label: 'SME', href: '#' },
          { label: 'Media centre', href: '#' },
          { label: 'Corporate Info', href: '#' },
          { label: 'Jobs', href: '#' },
          { label: 'Events', href: '#' },
          { label: 'Map', href: '#' },
          { label: 'Units and departments', href: '#' },
          { label: 'FAQ', href: '#' },
        ]
      },
      {
        title: 'Education',
        links: [
          { label: 'Academic departments', href: '#' },
          { label: 'Study programs', href: '#' },
          { label: 'Graduate programs', href: '#' },
          { label: 'Students and campus', href: '#' },
          { label: 'Fees and funding', href: '#' },
          { label: 'Academic Calendar', href: '#' },
          { label: 'Partnerships', href: '#' },
        ]
      },
      {
        title: 'Admission',
        links: [
          { label: 'Undergraduate Admission', href: '#' },
          { label: 'Graduate Admission', href: '#' },
          { label: 'International Affairs Office', href: '#' },
          { label: 'Tuition and fees', href: '#' },
          { label: 'Scholarships', href: '#' },
          { label: 'Prospective students', href: '#' },
          { label: 'Visit Khazar University', href: '#' },
        ]
      },
      {
        title: 'Research',
        links: [
          { label: 'Research Overview', href: '#' },
          { label: 'Research Centres and Labs', href: '#' },
          { label: 'Development Center', href: '#' },
          { label: 'Research Careers and Jobs', href: '#' },
          { label: 'Publications', href: '#' },
          { label: 'Library', href: '#' },
        ]
      },
    ];
  
    const socialLinks = [
      { icon: 'facebook', href: '#' },
      { icon: 'twitter', href: '#' },
      { icon: 'instagram', href: '#' },
      { icon: 'linkedin', href: '#' },
      { icon: 'youtube', href: '#' },
    ];
  
    return (
      <footer className="bg-white pt-16 pb-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between mb-16">
            <div className="mb-8 lg:mb-0">
              <div className="font-bold text-lg mb-6">
                Khazar<br />University
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-bold mb-2">Contact</h3>
                <address className="not-italic text-sm">
                  41 Mehseti Str., AZ1096, Baku<br />
                  info@khazar.edu<br />
                  +(994) 12 4217927<br />
                  info@khazar.edu.az
                </address>
              </div>
              
              <div>
                <h3 className="text-sm font-bold mb-2">Social media links</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.icon} 
                      href={link.href}
                      className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-sm"
                    >
                      <span className="sr-only">{link.icon}</span>
                      {/* Remplacez par les bonnes icônes sociales */}
                      <div className="w-3 h-3 bg-gray-500"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-bold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a 
                          href={link.href}
                          className="text-xs hover:underline"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-xs text-center pt-8 border-t">
            © Copyright 2023 Khazar University. All rights reserved. Various trademarks held by their respective owners.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;