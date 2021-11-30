

const useDb = () => {
    const projects = [
        {
            id: 1,
            title: 'SAVON.',
            thumbnail: 'https://i.ibb.co/pZd359L/savon-min.png',
            images: [
                'https://i.ibb.co/3pHxbMQ/savon1-min.png',
                'https://i.ibb.co/Yjn5BzH/savon2-min.png',
                'https://i.ibb.co/hCznbwj/savon3-min.png',
                'https://i.ibb.co/w7vqdQc/savon4-min.png'
            ],
            fuctionalities: [
                'User registration and Google sign-in.',
                'Users can purchase products and cancel orders.',
                'Admin can manage all purchases, products and also make another admin.',
                'Product shipping status is also controlled by the admin.'
            ],
            description: 'SAVON. is a MERN Stack Project built with some hard-work mentalities. Have features that allow users for purchasing products, a CARD payment system, manage orders.',
            technologies: 'Node.js, React.js, MongoDB,  Firebase, Material UI',
            clientLink: 'https://github.com/faarhaan10/savon-client-side',
            serverLink: 'https://github.com/faarhaan10/savon-server-side',
            liveSite: 'https://savon-cdf49.web.app/'
        },
        {
            id: 2,
            title: 'AVENTOURA',
            thumbnail: 'https://i.ibb.co/yPW0pds/aventoura-min.png',
            images: [
                'https://i.ibb.co/dGhSvG0/aventoura1-min.png',
                'https://i.ibb.co/TKCZ269/aventoura2-min.png',
                'https://i.ibb.co/3mPf0q8/aventoura3-min.png',
                'https://i.ibb.co/3mPf0q8/aventoura3-min.png'
            ],
            fuctionalities: [
                'Users can sign-in with Google.',
                'Can book desired tour plan.',
                'Users can see and cancel his/her tour plans.',
                'Admin can update tour status, add new plan, delete users tour plan.'
            ],
            description: 'AVENTOURA is a tour booking site that allows a user to book his/her tour location package, Can cancel tour plans. Admin can do CRUD functionalities.',
            technologies: 'Node.js, Express.js, React.js, MongoDB, React Router, React Hook Form, Firebase, Axios',
            clientLink: 'https://github.com/faarhaan10/aventoura-client-side',
            serverLink: 'https://github.com/faarhaan10/aventoura-server-side',
            liveSite: 'https://aventoura-b977d.web.app/'
        },
        {
            id: 3,
            title: 'MEDITAB HEALTH CARE',
            thumbnail: 'https://i.ibb.co/0GzmTPp/medi-min.png',
            images: [
                'https://i.ibb.co/DV96f9w/med1-min.png',
                'https://i.ibb.co/6ZDgsTW/med2-min.png',
                'https://i.ibb.co/sqyYkSB/med3-min.png',
                'https://i.ibb.co/f4Nq9cy/med4-min.png'
            ],
            fuctionalities: [
                'New user can register and sign-in with email, password.',
                'Users can also sign-in using Google, GitHub. ',
                'Users can choose suitable package and purchase service for a year.'
            ],
            description: 'MEDITAB HEALTH CARE center gives a user to book the desired service of the hospital. No user can see service details before signing in. This site is authenticated with Firebase.',
            technologies: 'React.js, React Router, React Hook Form, Firebase, React-Bootstrap',
            clientLink: 'https://github.com/faarhaan10/meditab-health-care',
            serverLink: '',
            liveSite: 'https://meditab-health-care.web.app/'
        }
    ]
    return projects;
};

export default useDb;