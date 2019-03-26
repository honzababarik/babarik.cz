Vue.component('item', {
  template: '#item-template',
  props: ['item']
})

Vue.component('project', {
  template: '#project-template',
  props: ['item'],
  computed: {
    getStatusCss: function () {
      return `status status-${this.item.statusColor}`
    },
    description: function () {
      return this.item.description.trim()
    }
  }
})

new Vue({
  el: '#app',
  data: {
    tab: 'resume',
    skills: {
      'Javascript': {
        tooltip: 'Vanilla, jQuery, VueJS, ReactJS, NodeJS',
        value: 90
      },
      'Python': {
        tooltip: 'Django',
        value: 80
      },
      'PHP': {
        tooltip: 'Symfony, Laravel',
        value: 80
      },
      'C#': {
        tooltip: 'ASP.NET',
        value: 50
      },
      'Java': {
        tooltip: 'Spring',
        value: 30
      },
      'React Native': {
        tooltip: '',
        value: 80
      },
      'iOS': {
        tooltip: 'Objective-C',
        value: 70
      },
      'SQL': {
        tooltip: 'MySQL/MariaDB, MSSQL',
        value: 80
      },
      'NoSQL': {
        tooltip: 'Couchbase, MongoDB, AWS DynamoDB',
        value: 30
      },
      'AWS': {
        tooltip: 'ECS, EC2, S3, Lambda, Route53, RDS, DynamoDB, EslatiCache, CodeDeploy, CloudFormation, CloudWatch, SQS, SNS',
        value: 75
      },
      'Azure': {
        tooltip: 'Container Services, Virtual Servers, Storage, MySQL/SQL, CosmosDB',
        value: 30
      },

    },
    languages: {
      'Czech': 100,
      'English': 90,
      'German': 20
    },
    experiences: [{
        role: 'Principal Software Engineer',
        company: '@ TripIt',
        location: 'San Francisco, California',
        timeline: 'Apr 2016 - Now',
        description: '',
        items: [
        ]
      }, {
        role: 'Principal Software Engineer',
        company: '@ Concur',
        location: 'Prague, Czech republic',
        timeline: 'Jan 2014 - Mar 2016',
        description: 'Work on varions applications with millions of users - covering:',
        items: [
          'HTML5/CSS3/JS/jQuery/LESS (and other preprocessors) frontend',
          'PHP backend on Symfony1/2 and Laravel',
          'Python backend for microservices in Django and SQLAlchemy',
          'working with relational SQL (MySQL) and nonSQL (MongoDB, Couchbase) databases',
          'designing public APIs',
          'architecture and development of billing microservices',
          'iOS Objective-C mobile development',
        ]
      }, {
        role: 'Software Developer',
        company: '@ Microsoft',
        location: 'Prague, Czech republic',
        timeline: 'Jul 2012 - Dec 2013',
        description: 'After several years of experience I have moved from area of Microsoft business to stricly technical job role - Software developer for Microsoft Consulting Services. Aside from development of high-availability enterprise applications (ASP.NET, C#, BizTalk, MSSQL, WCF), I am also creating applications for Windows 8 and Windows Phone (XAML, WPF, C#, HTML, JS), cloud applications based on Windows Azure, or integration and development on Sharepoint 2010 a 2013. In terms of development we are using all available Microsoft technologies, the forementioned are areas that I would point out as my focus field, where I can deliver top experience.',
      }, {
        role: 'CEE CPE Project Consultant',
        company: '@ Microsoft',
        location: 'Prague, Czech republic',
        timeline: 'Oct 2008 - Jun 2012',
        description: `As a CPE coordinator my daily tasks were all related to Customer and Partner Experience projects - it's planning, execution and management.
          Customer and Partner Experience is focused mainly on the client satisfaction, how do we measure it and how is satisfaction aligned with Microsoft processes, business and revenue.
  
          I was responsible for education and trainings of Microsoft account managers in CPE related projects, support in the cases of client dissatisfaction and was a general advisor in for
          our CPE processes.

          From data perspective I was responsible for the analysis and process of the survey results in order to be able to understand and determine where are the
          areas of focus for next quarter/fiscal year and furthermore present this information to the actual stakeholders.
        `,
        items: [
          "responsibility for Central and Eastern Europe market's Customer and Partner surveys execution and readiness",
          'data analysis and reporting to Microsoft headquarters',
          'maintenance of various customer and partner databases across several data regions',
          'work with privacy restricted customers and partners data',
          'Sharepoint 2010 & Sharepoint 2013 websites development for internal use',
          'architecture, development (Visual Basic) and execution of local satisfaction survey for smaller countries in CEE'
        ]
      }, {
        role: 'Windows Guru',
        company: '@ Microsoft',
        location: 'Prague, Czech republic',
        timeline: 'Sep 2009 - Jan 2010',
        description: 'Windows Guru was a retail-based position, where I was responsible for Microsoft and Windows 7 Brand awareness specifically during Windows 7 launch events and roadshows.', 
        items: [
          'team leadership during Windows 7 Roadshow events around Czech republic',
          'management and evangelism of Microsoft brand in retail',
          'support and communication with end users',
        ]
      }, {
        role: 'Travel, Medical, Technical and Home Coordinator',
        company: '@ AXA Assistance',
        location: 'Prague, Czech republic',
        timeline: 'May 2008 - Sep 2008',
        description: 'As a coordinator I was a phone-based first point of contact for insurance companies clients.',
        items: [
          'communication with clients of various insurance companies during technical, medical or travel issues in EU',
          'service and coordination of the incident resolution',
          'coordination with foreign assistant agencies',
        ]
      },
    ],
    educations: [{
      role: 'Software Engineering and Management',
      company: 'Czech Technical University',
      timeline: '2009 - 2011'
      }, {
      company: 'Gymnazium Studentska',
      timeline: '2000 - 2008'
      }
    ],
    projects: [
      {
        icon: 'img/beacoin.png',
        name: 'Beacoin',
        css: 'beacoin',
        link: 'https://beaco.in',
        status: 'Production',
        statusColor: 'green',
        tech: ['React Native', 'Node JS', 'Vue JS', 'CircleCI', 'MySQL', 'S3', 'ECS/ECR', 'EC2', 'SQS', 'RDS', 'ElastiCache', 'CloudFront'],
        description: `
          Manage your crypto portfolio and trading signals all in one app!
        `
      }, {
        icon: 'img/slang.png',
        name: 'Slang',
        css: 'slang',
        link: 'https://hislang.com',
        status: 'In Progress',
        statusColor: 'yellow',
        tech: ['React Native', 'Node JS', 'CircleCI', 'MySQL', 'S3', 'ECS/ECR', 'EC2', 'SQS', 'RDS'],
        description: `
          Real-time translated mobile chat app that allows you to talk to anyone, anytime, anywhere.
        `
      }, {
        icon: 'img/foodmoves.png',
        name: 'Food Moves',
        css: 'fm',
        link: 'https://foodmoves.me',
        status: 'Production',
        statusColor: 'green',
        tech: ['React Native', 'Node JS', 'Vue JS', 'CircleCI', 'Azure', 'MySQL'],
        description: `
          Discover and order hard-to-find food near you from food trucks, farmers' markets, indoor market and specialty food vendors all in real-time.
        `
      }, {
        icon: 'img/default.png',
        name: '"Nucleus"',
        css: 'nucleus',
        status: 'In Preparation',
        statusColor: 'orange',
        tech: ['Azure'],
        description: `
          Codename "Nucleus" is an AI platform designed to help doctors discover and diagnose thyroid abnormalities including Thyroid Cancer saving doctors and radiologists up to 50% of the time it usually takes.
        `
      }, {
        icon: 'img/localized.png',
        name: 'Localized',
        css: 'localized',
        link: 'https://localized.world',
        status: 'Production',
        statusColor: 'green',
        tech: ['Python', 'Django', 'Vue JS', 'MySQL', 'S3', 'CodeDeploy', 'EC2', 'RDS'],
        description: `
          Experts to guide you, employers to hire you.
          Connecting experts and employers with tomorrow's talent.
        `
      }, {
        icon: 'img/salesmsg.png',
        name: 'SalesMessage',
        css: 'sm',
        link: 'https://salesmessage.com',
        status: 'In Progress',
        statusColor: 'yellow',
        tech: ['React Native'],
        description: `
          Simple, scalable, two-way business texting.
          Easily send, receive, and manage text message conversations online.
        `
      },
      // {
      //   icon: 'img/uplift.png',
      //   name: 'Uplift',
      //   css: 'uplift',
      //   link: 'https://upliftparents.com',
      //   status: 'In Progress',
      //   statusColor: 'yellow',
      //   tech: ['Node JS', 'Vue JS', 'MySQL', 'CircleCI', 'S3', 'ECS/ECR', 'EC2', 'Lambda', 'RDS'],
      //   description: `
      //     Helping companies advance their biggest asset — moms.
      //   `
      // }
    ]
  },
  methods: {
    getWidth: function (value) {
      return {
        width: `${value}%`
      }
    }
  },
  mounted: function () {
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
})
