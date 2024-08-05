import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'iNotebook',
        description: "Designed a personalized note-taking application using React.js, Express.js, Node.js, MongoDB, and JavaScript. Optimized performance, resulting in a 50% reduction in load time and a 30% increase in user engagement.",
        tools: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'JavaScript'],
        role: 'Full Stack Developer',
        code: 'https://github.com/Imran4265/iNotebook/',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Resume Builder',
        description: 'Created a resume builder application using the MERN (MongoDB, Express.js, React.js, Node.js) stack. Enabled users to input and store personal details securely in a MongoDB database. Implemented various resume templates in React.js, providing users with options to customize and download their resumes effortlessly.',
        tools: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        role: 'Full Stack Developer',
        code: 'https://github.com/Imran4265/resume-builder',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Real-Time Multilingual Voice Cloning and Translation System with Dynamic Tone Modulation',
        description: 'A system that processes video input, extracts audio, translates it, and generates a new video with the same voice. Developed using Flask for backend, HTML/CSS for frontend, and machine learning models for audio processing and translation. Responsible for Flask backend implementation, API design for audio and translation services, and optimizing system performance for video processing tasks.',
        tools: ['Flask', 'HTML/CSS', 'Machine Learning', 'Python'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'NewsApp',
        description: 'Developed a React web application using NewsAPI for fetching news articles. The app features categorical division of news, infinite scroll, and a load bar for better user experience. Integrated NewsAPI to provide real-time news updates and utilized infinite scroll for seamless content loading.',
        tools: ['React.js', 'NewsAPI', 'Infinite Scroll', 'CSS'],
        role: 'Front End Developer',
        code: '',
        demo: '',
        image: ayla,
    }
];
