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
    points: [
      'web/mobile software engineer for over 10 years',
      'building US startups tech for over 3 years',
      'experienced in modern development best practices and processes',
      'experience hiring and leading remote teams',
      'experienced deploying multi-region cloud infrastructure',
      'building own ideas in my free time',
    ],
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
      'English': 80,
      'German': 20
    },
    experiences: [{
        role: 'Principal Software Engineer',
        company: '@ SAP (TripIt)',
        location: 'San Francisco, California',
        timeline: 'Apr 2016 - Now',
        description: `After relocating to San Francisco in 2016 to work closer with our core TripIt platform development team, I joined the delivery team responsible for TripIt paid features. Together, we lead the reintroduction of our second paid business product - TripIt for Teams.

          One of the biggest ongoing projects was moving TripIt from monolith towards SOA using Python/NodeJS microservices, plunging me into a world of new AWS technologies like ECS, VPC, Aurora, EC2, S3, Elasticache, CloudFormation, Route53 and many more. I learned a ton, and developed experience in DevOps using AWS.
          Proof of concept for SOA was a feature called GoNow, which I designed, architected, led the team to develop, and rolled out. GoNow became the most covered TripIt feature online in TripIt’s history.

          In 2018 TripIt engineering focused on GDPR compliance and our data security, which helped me to understand more advanced security concepts for enterprise systems.

          With big plans for TripIt to globalize in 2019, my team owns all of the localization efforts of our platform that was originally built without any internalization support. Some highlights of my time here are...
        `,
        items: [
          'redesigned TripIt for Teams business product',
          'architected GoNow microservice based infrastructure and developed the business logic',
          'introduced unified user analytics system across all TripIt apps in order to better understand our users and their behavior',
          'architected localization and internalization approach for platform and microservices',
          'leveraged majority of AWS features to move TripIt from on-premise to a cloud based application',
          'introduced GDPR compliance changes, security measures and monitoring',
          'developed airport navigation 3rd party integration for mobile users',
          'worked mainly on back-end services based on Python and NodeJS',
          'mentored TripIt engineers in development approaches and best practices'
        ]
      }, {
        role: 'Principal Software Engineer',
        company: '@ Concur',
        location: 'Prague, Czech republic',
        timeline: 'Jan 2014 - Mar 2016',
        description: `I joined Concur in 2014 as one of the first two members of a new development team to help build TripIt - a web and mobile app that magically manages traveler's itinerary.
          In the beginning next to learning about TripIt platform and its codebase I spent time interviewing engineers to grow our new engineering team to over a dozen engineers.

          As TripIt grew, the platform technology became obsolete. Together with other platform engineers we started to define Service Oriented Architecture (SOA) approach to break down the TripIt monolith into microservices, and to come up with best practices to be adopted by the rest of our Prague and San Francisco team.

          Later in 2015 I have switched roles from a full-stack platform engineer to lead Concur's remote team responsible for development of Objective-C based iOS app called ExpenseIt - an app to help employees manage their business related expenses with ease.
        `,
        items: [
          "architecture and development of TripIt's internal and external REST APIs",
          'front-end web development (HTML5, CSS3/LESS, JS/jQuery)',
          'back-end server development (PHP + Symfony framework)',
          'microservice architecture and development (Python + Django framework, NodeJS)',
          'MySQL and NoSQL (Couchbase) database development and maintenance',
          'RabbitMQ user for our queue needs',
          'iOS team lead with active development of ExpenseIt (Objective-C)',
          'interviewing and hiring new engineers',
        ]
      }, {
        role: 'Software Developer',
        company: '@ Microsoft',
        location: 'Prague, Czech republic',
        timeline: 'Jul 2012 - Dec 2013',
        description: `Software developer at Microsoft Consulting Services was a strictly technical role, where I was responsible for correct integration, development and deployment of Microsoft technologies and products for public sector and public sector serving companies based in Czech republic.

          All applications were built at enterprise level scale, which required high availability and fault tolerance. I built web applications based on ASP.NET and C#, managed and query large data sets using MSSQL and T-SQL language and set up infrastructure and develop communication channels between several data centers using BizTalk Servers middleware.

          Aside from the client project's work I was working on showcases of new Microsoft technologies (Windows 8/Universal, Windows Phone, Microsoft Azure) in order to introduce the technology and possibilities to Microsoft customers, partners and IT professionals.
        `,
        items: [
          'architecture and development highly available enterprise applications for public sector (ASP.NET, C#, BizTalk, MSSQL, WCF)',
          'management of large data sets using Microsoft SQL Servers and Transact-SQL language',
          'deployment and enterprise Windows servers (2003 - 2012) clusters management',
          'evangelism of Microsoft Azure by building cloud based applications and showcase products',
          'evangelism of Windows 8 and Windows Phone for developers by creating smaller PoC business apps (XAML, WPF, C#, HTML, JS)',
          'integration and development of Sharepoint sites (2010 and 2013) for both internal and external purposes',
        ]
      }, {
        role: 'CEE CPE Project Consultant',
        company: '@ Microsoft',
        location: 'Prague, Czech republic',
        timeline: 'Oct 2008 - Jun 2012',
        description: `As a CPE coordinator my daily tasks were all related to Customer and Partner Experience projects - it's planning, execution and management.
          Customer and Partner Experience is focused mainly on the client satisfaction, how do we measure it and how is satisfaction aligned with Microsoft processes, business and revenue.

          I was responsible for education and trainings of Microsoft account managers in CPE related projects, support in the cases of client dissatisfaction and was a general advisor in for our CPE processes.

          From data perspective I was responsible for the analysis and process of the survey results in order to be able to understand and determine where are the areas of focus for next quarter/fiscal year and furthermore present this information to the actual stakeholders.
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
        description: 'Windows Guru was a retail-based position, where I was responsible for Microsoft and Windows 7 Brand awareness during Windows 7 launch events and roadshows.',
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
          Beacoin was my own idea that I got after starting trading crypto currencies. The problem with signal trading was that there were a lot of signal traders (people who tell you what to buy/sell and when) that were manipulating the numbers of how successful their trading strategies are, luring the users to buy their questionable product.

          Beacoin is both web and mobile app that is used by signal traders to easily send their paid clients the signal information without being able to manipulate their history. For users that means transparency and ease of use - you get a signal to buy Bitcoin, click on the Buy button and Beacoin's integration to the biggest crypto exchanges takes care of the rest.

          Beacoin is hosted on AWS in US and EU, and I have architected and built the web, opened REST API and mobile app for iOS and Android using React Native myself.
        `
      }, {
        icon: 'img/foodmoves.png',
        name: 'Food Moves',
        css: 'fm',
        link: 'https://foodmoves.me',
        status: 'Production',
        statusColor: 'green',
        tech: ['React Native', 'Node JS', 'Vue JS', 'CircleCI', 'Azure', 'MySQL'],
        TODO: true,
        description: `
          Discover and order hard-to-find food near you from food trucks, farmers' markets, indoor market and specialty food vendors all in real-time.
        `
      }, {
        icon: 'img/localized.png',
        name: 'Localized',
        css: 'localized',
        link: 'https://localized.world',
        status: 'Production',
        statusColor: 'green',
        tech: ['Python', 'Django', 'Vue JS', 'MySQL', 'S3', 'CodeDeploy', 'EC2', 'RDS'],
        TODO: true,
        description: `
          Experts to guide you, employers to hire you.
          Connecting experts and employers with tomorrow's talent.
        `
      }, {
        icon: 'img/slang.png',
        name: 'Slang',
        css: 'slang',
        link: 'https://hislang.com',
        status: 'In Progress',
        statusColor: 'yellow',
        tech: ['React Native', 'Node JS', 'CircleCI', 'MySQL', 'S3', 'ECS/ECR', 'EC2', 'SQS', 'RDS'],
        TODO: true,
        description: `
          Real-time translated mobile chat app that allows you to talk to anyone, anytime, anywhere.
        `
      }, {
        icon: 'img/salesmsg.png',
        name: 'SalesMessage',
        css: 'sm',
        link: 'https://salesmessage.com',
        status: 'In Progress',
        statusColor: 'yellow',
        tech: ['React Native'],
        TODO: true,
        description: `
          Simple, scalable, two-way business texting.
          Easily send, receive, and manage text message conversations online.
        `
      }, {
        icon: 'img/default.png',
        name: '"Ivie"',
        css: 'nucleus',
        status: 'In Preparation',
        statusColor: 'orange',
        tech: ['Azure'],
        description: `
          Codename "Ivie" is an AI-powered platform designed to help doctors discover and diagnose thyroid abnormalities including Thyroid Cancer saving doctors and radiologists up to 50% of the time it usually takes.

          Ivie as a business is currently being established. My role is the CTO of the company owning Ivie, the product description is currently being prepared.
        `
      }
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
