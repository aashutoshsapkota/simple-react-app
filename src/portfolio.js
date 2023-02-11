const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://blog.csit.study',
    title: 'Blog',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Aashutosh Sapkota',
    role: 'Blockchain and ML Enthusiast',
    description: 'I am a tech-savvy computer science professional with expertise in decentralized technologies, machine learning, and Python development. Driven by a passion for positive impact, I am also exploring the potential of the metaverse economy and constantly seeking new challenges in the fast-paced tech world to learn and grow, with a current focus on cloud computing and cybersecurity.',
    resume: 'https://iwillupdateitlateron.com',
    social: {
        linkedin: 'https://www.linkedin.com/in/aashutosh-sapkota-b90812257/',
        github: 'https://github.com/aashutosh_sapkota',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Zenstra',
        description: '•	Zenstra is an application programming interface (API) that uses machine learning to forecast the occurrence of heart disorders.',
        stack: ['Python', 'Javascript', 'Jupyter Notebook'],
        sourceCode: 'https://github.com/aashutoshsapkota/Zenstra',
        livePreview: 'https://drive.google.com/file/d/13oPDZHhX0qg4HF8QsbAsJMs-dahsa2IS/view',
    },
    {
        name: 'NepApi',
        description: 'Unofficial Application Programming Interface for the Nepal Stock Exchange',
        stack: ['FastAPI', 'Tensorflow', 'Docker'],
        sourceCode: 'https://github.com/aashutoshsapkota/Nepapi',
        livePreview: 'https://github.com/aashutoshsapkota/Nepapi',
    },
    {
        name: 'Covid 19 BOT',
        description: 'The Nepal bot tweets out daily updates on the number of COVID-19 cases that have been reported in Nepal',
        stack: ['Python', 'TypeScript', 'Javascript'],
        sourceCode: 'https://github.com/aashutoshsapkota/Covid-Bot',
        // livePreview: 'https://github.com',
    },
]

const skills = [
    'Python',
    'Machine Learning',
    'Penetration Testing',
    'Microcontroller Programming',
    'Cloud Computing',
    'Git',
    'Solidity',
    'JavaScript',
    'TypeScript',
    'React',
    'Flutter'
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'admin@sharksprout.com',
}

export { header, about, projects, skills, contact }