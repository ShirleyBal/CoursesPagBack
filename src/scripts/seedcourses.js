import sequelize from '../database/database.js'; 
import Course from '../models/courses.js'; 

const courses = [
  {
    title: 'JavaScript for Beginners',
    description: 'Learn the fundamentals of JavaScript, the most popular programming language for web development.',
    category: 'Programming',
    type: 'recorded',
    date: '2025-02-01',
    hour: '00:00:00',
    video_link: 'https://example.com/js-beginners',
    front_page: 'https://example.com/images/js-course.jpg',
    price: 49.99,
    quota: null,
  },
  {
    title: 'React Essentials',
    description: 'A complete guide to building modern web applications using React.',
    category: 'Web Development',
    type: 'live',
    date: '2025-02-10',
    hour: '18:00:00',
    video_link: null,
    front_page: 'https://example.com/images/react-course.jpg',
    price: 79.99,
    quota: 50,
  },
  {
    title: 'Node.js API Development',
    description: 'Build RESTful APIs using Node.js, Express, and PostgreSQL.',
    category: 'Backend Development',
    type: 'recorded',
    date: '2025-02-05',
    hour: '00:00:00',
    video_link: 'https://example.com/node-api',
    front_page: 'https://example.com/images/node-course.jpg',
    price: 59.99,
    quota: null,
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Learn to build full-stack web applications using React, Node.js, and PostgreSQL.',
    category: 'Full-Stack',
    type: 'live',
    date: '2025-02-15',
    hour: '16:00:00',
    video_link: null,
    front_page: 'https://example.com/images/fullstack-course.jpg',
    price: 99.99,
    quota: 40,
  },
  {
    title: 'Python for Data Science',
    description: 'Master Python and its libraries for data analysis and machine learning.',
    category: 'Data Science',
    type: 'recorded',
    date: '2025-02-03',
    hour: '00:00:00',
    video_link: 'https://example.com/python-data',
    front_page: 'https://example.com/images/python-course.jpg',
    price: 69.99,
    quota: null,
  },
  {
    title: 'Django Web Applications',
    description: 'Develop web applications using Django, the most popular Python web framework.',
    category: 'Web Development',
    type: 'live',
    date: '2025-02-20',
    hour: '19:00:00',
    video_link: null,
    front_page: 'https://example.com/images/django-course.jpg',
    price: 89.99,
    quota: 30,
  },
  {
    title: 'Cybersecurity Basics',
    description: 'Learn the fundamentals of cybersecurity, ethical hacking, and penetration testing.',
    category: 'Cybersecurity',
    type: 'recorded',
    date: '2025-02-07',
    hour: '00:00:00',
    video_link: 'https://example.com/cybersecurity',
    front_page: 'https://example.com/images/cybersecurity-course.jpg',
    price: 79.99,
    quota: null,
  },
  {
    title: 'UX/UI Design Principles',
    description: 'Learn how to design user-friendly and visually appealing interfaces.',
    category: 'Design',
    type: 'live',
    date: '2025-02-12',
    hour: '17:00:00',
    video_link: null,
    front_page: 'https://example.com/images/uxui-course.jpg',
    price: 69.99,
    quota: 50,
  },
  {
    title: 'SQL & Database Design',
    description: 'Master SQL queries and database design principles for efficient data management.',
    category: 'Databases',
    type: 'recorded',
    date: '2025-02-06',
    hour: '00:00:00',
    video_link: 'https://example.com/sql-course',
    front_page: 'https://example.com/images/sql-course.jpg',
    price: 49.99,
    quota: null,
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    description: 'Get started with AI, machine learning, and neural networks.',
    category: 'AI & Machine Learning',
    type: 'live',
    date: '2025-02-25',
    hour: '20:00:00',
    video_link: null,
    front_page: 'https://example.com/images/ai-course.jpg',
    price: 109.99,
    quota: 25,
  },
];

const seedCourses = async () => {
  try {
    await sequelize.sync(); // Asegurar que la base de datos está sincronizada
    await Course.bulkCreate(courses);
    console.log('✅ Courses added successfully.');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding courses:', error);
    process.exit(1);
  }
};

seedCourses();
