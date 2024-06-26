const skills = [
  { skill: 'React', level: 'Expert' },
  { skill: 'Nodejs', level: 'Expert' },
  { skill: 'Typescript & Javascript', level: 'Expert' },
  { skill: 'Java 8', level: 'Expert' },
  { skill: 'PostgreSQL', level: 'Expert' },
  { skill: 'Perl', level: 'Expert' },
  { skill: 'Kafka', level: 'Intermediate' },
  { skill: 'Linux', level: 'Expert' },
  { skill: 'docker', level: 'Intermediate' },
  { skill: 'Test driven development', level: 'Intermediate' },
  { skill: 'SMTP', level: 'Intermediate' },
  { skill: 'DNS', level: 'Intermediate' },
];

const experiences = [
  {
    location: 'Remote',
    since: 'Mar 2021',
    to: 'Present',
    position: 'FULL STACK DEVELOPER',
    company: 'FALABELLA',
    description: `My job as full stack was to search for solutions in areas where there where no clear solution or technology.`,
    projects: [
      {
        name: 'bff',
        description:
          'Develop middleware BFF to serve mobile apps, muxing and demuxing data to backend servers to present unified API, develop an internal react front end to manage it too.',
        tools: [
          'typescript',
          'nodejs',
          'graphql',
          'jest',
          'antd',
          'react',
          'java',
          'android',
        ],
      },
      {
        name: 'koala',
        description:
          'Develop software to manage, query and generate configuration of a series of technologies like kafa, grafana and prometheus. Secrets integration with vault, automated generation of dashboards and kafka connect REST API.',
        tools: [
          'typescript',
          'nodejs',
          'graphql',
          'jest',
          'antd',
          'react',
          'prometheus',
          'grafana',
        ],
      },
      {
        name: 'polar',
        description:
          'Develop software to query financial operations in mainframes, local db2, keycloak and unixodbc. Key of the solution, run the same code in linux and mainframe.',
        tools: [
          'docker',
          'keycloak',
          'unixodbc',
          'db2',
          'sqlite',
          'typescript',
          'nodejs',
          'jest',
          'antd',
          'react',
        ],
      },
    ],
  },
  {
    position: 'CTO and All',
    company: 'WELINUX SPA',
    since: 'Jun 2006',
    to: 'Present',
    location: 'Office - Remote',
    tools: [
      'perl',
      'java8',
      'postgreSQL',
      'react native',
      'react',
      'antd',
      'kafka',
      'microaplicaciones',
      'docker',
      'kubernetes',
    ],
    description: `At Welinux we have gone through several tech stacks,
    its early years with Perl, Linux and PostgreSQL, 
    then Java an jQuery, 
    to the current React and Node with typescript, to which we
                               added integration with Kafka to achieve real-time systems.

                               In  IDEs, for java Eclipse of course, sometimes Intellij,
                               and for the rest VSCode and vim, for node and react actually
                               working with nx and vite, always Ubuntu LTS. 
                               
                               As sysadmin, I've always done everything:
                               from purchasing the machines, installing operating system,
                               configure firewalls, servers with DNS and SMTP, Backups
                               and Monitoring; all the necessary to keep the client'
                               platform running. We've moved from running on metal to
                               docker and kubernetes. Making our own images of course. Finally some
                               monitoring with prometheus and grafana`,
  },
  {
    position: 'CTO',
    company: 'SENCE',
    since: 'Jan 1998',
    to: 'Jan 2000',
    description: `Starting 1997 i was hired by a company that was developing
    the website of this governmment agency, they don't know how to give programming 
    qualities to the web pages: they were stuck in the search engine; so i was hired
     to solve this, at those days i found Perl 5 CGI and we begun to build with it. I was 
     hired directly by SENCE as CTO at January 1998, we built many many things, 
     for the intranet we used Visual Basic (i was an Imperial Trooper at that time) and for the Internet Perl, 
     the database server was Oracle running under Solaris.`,
    tools: ['perl', 'visual basic', 'oracle', 'CGI'],
  },
];

const educations = [
  {
    location: 'Santiago, Chile',
    since: '1991',
    to: '1994',
    career: 'ENGINEER IN INFORMATION TECHNOLOGY',
    institution: 'CAMPVS Professional Institute',
  },
  {
    location: 'Santiago, Chile',
    since: '1988',
    to: '1990',
    career: 'PROGRAMMER',
    institution: 'CAMPVS Professional Institute',
  },
];

const resume = {
  name: 'Hans Poo',
  grade: 'Engineering in computing and informatics',
  email: 'hans@welinux.cl',
  address: 'Camino Internacional 4200, Pucón',
  phone: '+56993199305',
  birthDate: ' Oct 20, 1967',
  nationality: 'Chileno',
  linkedin: 'https://www.linkedin.com/in/hans-poo-4aa0b31b/',
  objective: `All this years i’ve done my best to be a complete IT professional, gain 
  expertise in all the aspects required in the field: developer, sysadmin, database admin, team leader, security expert, ux designer and more; 
  for this i’ve follow two roads: practice and books. 
  Linux advocate since 2000, i've been giving technical talks in free software conferences for many years. 
  This github project shows many things i'm doing now:
  
  https://github.com/hanspoo/b2b-starter`,
  skills,
  idioms: [
    {
      language: 'English',
      level: 'Intermediate',
      studies: 'Instituto Chileno Norteamericano, Listening and Speaking',
    },
  ],
  experiences,
  educations,
};

export { resume };
