export const personalInfo = {
  name: 'Jose Escobedo',
  title: 'Full Stack Developer',
  tagline: "I'm a full stack web developer who loves to build things for the web.",
  bio: "As a firm believer in life-long learning, I'm a full stack developer with a passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I'm not at my computer, I like to spend my time shooting photography, reading and hiking.",
  age: 26,
  location: 'California, United States',
  languages: 'Spanish, English',
  email: 'jose@escobedojose.dev',
  profileImage:
    'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/About-ProfilePicture.JPG?alt=media&token=32ee499a-d0c9-4db1-98d7-07b7b221cfad&_gl=1*1awf9bm*_ga*MjAxNTYwMjQ1LjE2ODU3NDY0MjU.*_ga_CW55HF8NVT*MTY4NTc0NjQyNS4xLjEuMTY4NTc0NjkwOC4wLjAuMA..',
  social: {
    linkedin: 'https://www.linkedin.com/in/jose-escobedo-89b943232/',
    github: 'https://github.com/Jose-Escobedo',
    medium: 'https://medium.com/@escobedo.jose',
  },
}

// Skills and services are defined directly in their components using react-icons

export const projects = [
  {
    id: 1,
    title: 'Tortas Mexico Studio City',
    subtitle: 'Restaurant Delivery Website',
    description:
      'MERN stack restaurant application built with React, Styled Components, Stripe payment processing, Drive API integration, and Redux state management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202023-06-02%20160504.png?alt=media&token=5602e1d3-d938-461c-bada-20fda88d814f&_gl=1*1gwnjhk*_ga*MjAxNTYwMjQ1LjE2ODU3NDY0MjU.*_ga_CW55HF8NVT*MTY4NTc0NjQyNS4xLjEuMTY4NTc0NzM1MC4wLjAuMA..',
    live: null,
    github: 'https://github.com/Jose-Escobedo/MERN-Tortas-Frontend',
    archived: true,
    archivedNote: 'Backend no longer hosted — explore the source code below.',
  },
  {
    id: 2,
    title: 'Jewel Distribution',
    subtitle: 'E-commerce Application',
    description:
      'Full stack e-commerce website developed using PHP, HTML, JavaScript, jQuery, and CSS, with a custom content management system tailored to client needs.',
    tech: ['PHP', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/jeweldistro.png?alt=media&token=edf8ec2a-7343-42f3-9780-9a2ab58f824c',
    live: null,
    github: 'https://github.com/Jose-Escobedo/JewelDistroCode',
  },
  {
    id: 3,
    title: 'Sage Oak Therapy',
    subtitle: 'Conversion-Focused Therapy Site',
    description:
      'Sage Oak Therapy website built with Next.js and TailwindCSS, optimized for conversions with clean design and clear CTAs.',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-07-03%20133048.png?alt=media&token=4e1f352c-78de-467c-a463-00400c8faead',
    live: 'https://sage-oak-therapy.vercel.app/',
    github: 'https://github.com/Jose-Escobedo/sage-oak-therapy',
  },
  {
    id: 4,
    title: 'Escobedo Photography',
    subtitle: 'Gatsby Photography Portfolio',
    description:
      'Photography portfolio and gallery website built with Gatsby, ReactJS, Styled Components, and GraphQL.',
    tech: ['Gatsby', 'React', 'GraphQL', 'Styled Components'],
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202023-06-03%20220323.png?alt=media&token=ea562710-62e8-4cd2-8298-a543eebb8bdc&_gl=1*1dy9vd5*_ga*MjAxNTYwMjQ1LjE2ODU3NDY0MjU.*_ga_CW55HF8NVT*MTY4NTg1NTA0Mi40LjEuMTY4NTg1NTA3My4wLjAuMA..',
    live: 'https://tourmaline-bublanina-47cd6b.netlify.app/',
    github: 'https://github.com/Jose-Escobedo/Gatsby-Photography',
  },
]

export const socialMediaProjects = [
  {
    id: 1,
    title: 'Tortas Mexico Studio City',
    subtitle: 'Instagram — Small Restaurant',
    description:
      'Instagram page built and managed from zero followers starting in 2022, growing through consistent content, strategy, and real community engagement.',
    platform: 'Instagram',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-11-26%20222630.png?alt=media&token=f080f706-4b03-465e-af86-4babf813673b',
    link: 'https://www.instagram.com/tortasmexico_studiocity/',
  },
  {
    id: 2,
    title: 'Tortas Mexico Studio City',
    subtitle: 'TikTok — Small Restaurant',
    description:
      'TikTok account created and grown from zero followers through steady content, clear strategy, and authentic audience engagement.',
    platform: 'TikTok',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-11-26%20222724.png?alt=media&token=03e13324-d1c9-41f6-a868-8cd3fc63a73f',
    link: 'https://www.tiktok.com/@tortasmexico_studiocity',
  },
  {
    id: 3,
    title: 'Champion and Champion',
    subtitle: 'Instagram — Construction Business',
    description:
      'Instagram page built and managed from zero followers for a construction company, focused on showcasing projects, building trust, and driving steady audience growth through consistent visuals and clear strategy.',
    platform: 'Instagram',
    image:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/Screenshot%202025-11-26%20222907.png?alt=media&token=645669a2-cafd-4e9f-994a-b69c25c2626f',
    link: 'https://www.instagram.com/championandchampion',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Social Media', href: '#social-media' },
  { label: 'Contact', href: '#contact' },
]
