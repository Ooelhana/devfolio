module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Oscar Elhanafey',
    // Main Site Title
    title: `Oscar Elhanafey | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Developer`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/ooelhana`,
    // Optional: LinkedIn account URL
    linkedin: `https://ca.linkedin.com/in/oscar-elhanafey-a06b29128`,
    // Content of the About Me section
    about: `Hello, my name is Oscar and I am a full-stack web developer based in Ontario. I have experience designing and developing data driven full-stack web applications.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Chip-8 Emulator',
        description:
          'Reads and interprets programs written for Chip-8 systems allowing emulation of a variety of applications and games',
        link: 'https://github.com/Ooelhana/Chip8-Emulator',
      },
      {
        name: 'PlanIt',
        description:
          'Developed an Android application in a team that simplifies the process of planning events in large groups by allowing all members of a group to vote on the details of the event.',
        link: 'https://github.com/CS446-Group4/planning-app',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Rock Solid Computer Services',
        description: 'Junior Developer, May 2021 - Present',
        link:'',
      },
    ],
    // Education
    education: [
      {
        name: 'Bachelor of Computer Science',
        description: 'University of Waterloo, April 2021',
        link: 'https://uwaterloo.ca',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, Django, React + Redux, JavaScript/Typescript, PostgreSQL, HTML, CSS',
      },
      {
        name: 'Other',
        description:
          'AWS, Nginx, Docker, CI / CD, RESTful APIs, Agile methodologies, Git',
      },
    ],
    certificates: [
      {
        name: 'Amazon Web Services Developer - Associate',
        description:
          '',
        link: 'https://www.credly.com/badges/693d2a39-edbb-4031-a282-43fc0bc75894?source=linked_in_profile',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
