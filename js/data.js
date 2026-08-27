/* ---------------------------------------------------------------
   EduMatch — mock course catalog
   This stands in for a real cross-platform search API. Swap this
   file out (or feed it live results) once you wire up real
   sources — see README.md for notes on which platforms have
   public APIs available.
------------------------------------------------------------------*/

const COURSES = [
  // ---------------- Python ----------------
  { id:1, title:"Python for Everybody Specialization", platform:"Coursera", price:0, priceLabel:"Free to audit", duration:"8 weeks", level:"Beginner", rating:4.8, tags:["python","programming","beginner"], desc:"A gentle, thorough introduction to programming using Python, taught by Dr. Chuck at the University of Michigan." },
  { id:2, title:"Python Full Course for Beginners", platform:"YouTube", price:0, priceLabel:"Free", duration:"4h 26m", level:"Beginner", rating:4.7, tags:["python","programming","beginner"], desc:"A single-video crash course covering Python syntax, data structures, functions, and OOP basics." },
  { id:3, title:"100 Days of Code: The Complete Python Pro Bootcamp", platform:"Udemy", price:1299, priceLabel:"₹1,299", duration:"64 hours", level:"Beginner", rating:4.7, tags:["python","programming","bootcamp"], desc:"Project-based Python bootcamp covering web dev, automation, data science, and game dev with Python." },
  { id:4, title:"Python Essential Training", platform:"LinkedIn Learning", price:1699, priceLabel:"₹1,699/mo", duration:"6h 30m", level:"Beginner", rating:4.6, tags:["python","programming"], desc:"Concise, professionally produced training covering core Python syntax and common use cases." },
  { id:5, title:"CS50's Introduction to Programming with Python", platform:"edX", price:0, priceLabel:"Free to audit", duration:"9 weeks", level:"Beginner", rating:4.9, tags:["python","programming","cs50"], desc:"Harvard's rigorous introduction to Python programming, part of the CS50 family of courses." },

  // ---------------- JavaScript ----------------
  { id:6, title:"JavaScript Algorithms and Data Structures", platform:"freeCodeCamp", price:0, priceLabel:"Free", duration:"300 hours", level:"Beginner", rating:4.8, tags:["javascript","web development"], desc:"Self-paced certification covering JS fundamentals, ES6, algorithms, and data structures." },
  { id:7, title:"The Complete JavaScript Course 2026", platform:"Udemy", price:1499, priceLabel:"₹1,499", duration:"69 hours", level:"Beginner", rating:4.7, tags:["javascript","web development"], desc:"From zero to expert: modern JS, DOM manipulation, async programming, and OOP." },
  { id:8, title:"JavaScript Crash Course for Beginners", platform:"YouTube", price:0, priceLabel:"Free", duration:"1h 40m", level:"Beginner", rating:4.6, tags:["javascript","web development"], desc:"A fast-paced overview of core JavaScript concepts for absolute beginners." },
  { id:9, title:"JavaScript Essential Training", platform:"LinkedIn Learning", price:1699, priceLabel:"₹1,699/mo", duration:"5h 15m", level:"Beginner", rating:4.5, tags:["javascript","web development"], desc:"Learn the fundamentals of JavaScript, from variables to functions to the DOM." },

  // ---------------- Data Science ----------------
  { id:10, title:"IBM Data Science Professional Certificate", platform:"Coursera", price:3499, priceLabel:"₹3,499/mo", duration:"10 months", level:"Beginner", rating:4.6, tags:["data science","python","machine learning"], desc:"A 10-course program covering Python, SQL, data visualization, and machine learning." },
  { id:11, title:"Data Science Full Course", platform:"YouTube", price:0, priceLabel:"Free", duration:"10h 12m", level:"Beginner", rating:4.5, tags:["data science","python"], desc:"An extensive free walkthrough of the data science workflow using Python and pandas." },
  { id:12, title:"Data Scientist in Python", platform:"Udemy", price:1799, priceLabel:"₹1,799", duration:"32 hours", level:"Intermediate", rating:4.6, tags:["data science","python","statistics"], desc:"Covers statistics, pandas, NumPy, matplotlib, and machine learning fundamentals." },
  { id:13, title:"Data Science Essential Training", platform:"LinkedIn Learning", price:1699, priceLabel:"₹1,699/mo", duration:"4h 50m", level:"Beginner", rating:4.4, tags:["data science"], desc:"An overview of the data science process from a working practitioner's perspective." },

  // ---------------- Machine Learning ----------------
  { id:14, title:"Machine Learning Specialization", platform:"Coursera", price:0, priceLabel:"Free to audit", duration:"3 months", level:"Intermediate", rating:4.9, tags:["machine learning","python","ai"], desc:"Andrew Ng's renowned specialization covering supervised, unsupervised learning, and neural networks." },
  { id:15, title:"Machine Learning Full Course", platform:"YouTube", price:0, priceLabel:"Free", duration:"9h 44m", level:"Intermediate", rating:4.6, tags:["machine learning","python"], desc:"A comprehensive free walkthrough of core ML algorithms with hands-on Python examples." },
  { id:16, title:"Machine Learning A-Z", platform:"Udemy", price:1999, priceLabel:"₹1,999", duration:"44 hours", level:"Intermediate", rating:4.5, tags:["machine learning","ai","python"], desc:"Hands-on Python and R coverage of regression, classification, clustering, and deep learning." },
  { id:17, title:"CS50's Introduction to Artificial Intelligence with Python", platform:"edX", price:0, priceLabel:"Free to audit", duration:"7 weeks", level:"Intermediate", rating:4.8, tags:["machine learning","ai","python"], desc:"Harvard's exploration of AI concepts and algorithms, from search to machine learning." },

  // ---------------- Web Development ----------------
  { id:18, title:"The Complete Web Developer Course", platform:"Udemy", price:1999, priceLabel:"₹1,999", duration:"58 hours", level:"Beginner", rating:4.6, tags:["web development","html","css","javascript"], desc:"A full-stack web development bootcamp covering HTML, CSS, JS, Node, and React." },
  { id:19, title:"Responsive Web Design Certification", platform:"freeCodeCamp", price:0, priceLabel:"Free", duration:"300 hours", level:"Beginner", rating:4.7, tags:["web development","html","css"], desc:"Self-paced certification covering HTML5, CSS3, Flexbox, Grid, and accessibility." },
  { id:20, title:"Meta Front-End Developer Professional Certificate", platform:"Coursera", price:3299, priceLabel:"₹3,299/mo", duration:"7 months", level:"Beginner", rating:4.7, tags:["web development","react","javascript"], desc:"Meta's own program covering HTML, CSS, JavaScript, and React fundamentals." },
  { id:21, title:"Full Stack Web Development Crash Course", platform:"YouTube", price:0, priceLabel:"Free", duration:"11h 30m", level:"Beginner", rating:4.5, tags:["web development","node","react"], desc:"Build and deploy a full-stack app using HTML, CSS, JS, Node.js, and MongoDB." },

  // ---------------- UI/UX Design ----------------
  { id:22, title:"Google UX Design Professional Certificate", platform:"Coursera", price:3499, priceLabel:"₹3,499/mo", duration:"6 months", level:"Beginner", rating:4.8, tags:["design","ux","ui"], desc:"Google's own program covering the end-to-end UX design process, including Figma." },
  { id:23, title:"UI/UX Design Specialization", platform:"Udemy", price:1499, priceLabel:"₹1,499", duration:"28 hours", level:"Beginner", rating:4.6, tags:["design","ux","ui","figma"], desc:"Learn user research, wireframing, prototyping, and visual design using Figma." },
  { id:24, title:"UX Design Full Course", platform:"YouTube", price:0, priceLabel:"Free", duration:"6h 05m", level:"Beginner", rating:4.5, tags:["design","ux"], desc:"A comprehensive introduction to UX principles, research methods, and prototyping." },
  { id:25, title:"UX Foundations: Interaction Design", platform:"LinkedIn Learning", price:1699, priceLabel:"₹1,699/mo", duration:"3h 20m", level:"Beginner", rating:4.4, tags:["design","ux"], desc:"Core interaction design principles for building intuitive digital products." },

  // ---------------- Excel / Spreadsheets ----------------
  { id:26, title:"Excel Skills for Business Specialization", platform:"Coursera", price:0, priceLabel:"Free to audit", duration:"5 months", level:"Beginner", rating:4.8, tags:["excel","spreadsheets","business"], desc:"Macquarie University's popular specialization covering Excel from basics to advanced modeling." },
  { id:27, title:"Microsoft Excel — Excel from Beginner to Advanced", platform:"Udemy", price:999, priceLabel:"₹999", duration:"18 hours", level:"Beginner", rating:4.6, tags:["excel","spreadsheets"], desc:"Covers formulas, pivot tables, macros, and dashboard building in Excel." },
  { id:28, title:"Excel Tutorial for Beginners", platform:"YouTube", price:0, priceLabel:"Free", duration:"3h 10m", level:"Beginner", rating:4.5, tags:["excel","spreadsheets"], desc:"A free, thorough walkthrough of core Excel functions and formulas." },

  // ---------------- SQL / Databases ----------------
  { id:29, title:"SQL for Data Science", platform:"Coursera", price:0, priceLabel:"Free to audit", duration:"4 weeks", level:"Beginner", rating:4.6, tags:["sql","databases","data science"], desc:"UC Davis's introduction to SQL querying for data analysis." },
  { id:30, title:"The Complete SQL Bootcamp", platform:"Udemy", price:1299, priceLabel:"₹1,299", duration:"9 hours", level:"Beginner", rating:4.7, tags:["sql","databases"], desc:"Hands-on SQL training using PostgreSQL, from basic queries to window functions." },
  { id:31, title:"SQL Tutorial — Full Course for Beginners", platform:"YouTube", price:0, priceLabel:"Free", duration:"4h 20m", level:"Beginner", rating:4.6, tags:["sql","databases"], desc:"A free, beginner-friendly walkthrough of SQL fundamentals." },

  // ---------------- Cloud / AWS ----------------
  { id:32, title:"AWS Certified Cloud Practitioner", platform:"Udemy", price:1499, priceLabel:"₹1,499", duration:"14 hours", level:"Beginner", rating:4.7, tags:["cloud","aws"], desc:"Exam-focused training preparing you for the AWS Cloud Practitioner certification." },
  { id:33, title:"AWS Cloud Technical Essentials", platform:"Coursera", price:0, priceLabel:"Free to audit", duration:"3 weeks", level:"Beginner", rating:4.6, tags:["cloud","aws"], desc:"AWS's own introduction to core cloud computing concepts and services." },
  { id:34, title:"AWS Full Course for Beginners", platform:"YouTube", price:0, priceLabel:"Free", duration:"10h 10m", level:"Beginner", rating:4.5, tags:["cloud","aws"], desc:"A free, comprehensive tour of AWS core services for newcomers to cloud computing." },

  // ---------------- Digital Marketing ----------------
  { id:35, title:"Google Digital Marketing & E-commerce Certificate", platform:"Coursera", price:3499, priceLabel:"₹3,499/mo", duration:"5 months", level:"Beginner", rating:4.7, tags:["marketing","digital marketing"], desc:"Google's program covering SEO, social media, email marketing, and e-commerce." },
  { id:36, title:"Digital Marketing Masterclass", platform:"Udemy", price:1499, priceLabel:"₹1,499", duration:"23 hours", level:"Beginner", rating:4.5, tags:["marketing","digital marketing","seo"], desc:"23 courses in one covering SEO, YouTube, Facebook Ads, and email marketing." },

  // ---------------- Cybersecurity ----------------
  { id:37, title:"Google Cybersecurity Professional Certificate", platform:"Coursera", price:3499, priceLabel:"₹3,499/mo", duration:"6 months", level:"Beginner", rating:4.8, tags:["cybersecurity","security"], desc:"Google's program covering security foundations, networks, and incident response." },
  { id:38, title:"The Complete Cyber Security Course", platform:"Udemy", price:1799, priceLabel:"₹1,799", duration:"22 hours", level:"Intermediate", rating:4.6, tags:["cybersecurity","security","networking"], desc:"Covers network security, anonymity, and practical hacking countermeasures." },
  { id:39, title:"Cyber Security Full Course for Beginners", platform:"YouTube", price:0, priceLabel:"Free", duration:"9h 30m", level:"Beginner", rating:4.5, tags:["cybersecurity","security"], desc:"A free, wide-ranging introduction to cybersecurity concepts and tools." },

  // ---------------- Computer Engineering / CS Fundamentals ----------------
  { id:40, title:"CS50's Introduction to Computer Science", platform:"edX", price:0, priceLabel:"Free to audit", duration:"11 weeks", level:"Beginner", rating:4.9, tags:["computer science","programming","cs50"], desc:"Harvard's legendary introduction to computer science and programming." },
  { id:41, title:"Introduction to Computer Science and Programming", platform:"Coursera", price:0, priceLabel:"Free to audit", duration:"9 weeks", level:"Beginner", rating:4.7, tags:["computer science","programming"], desc:"MIT's foundational course on computational thinking and Python programming." },
  { id:42, title:"Operating Systems Full Course", platform:"YouTube", price:0, priceLabel:"Free", duration:"5h 40m", level:"Intermediate", rating:4.5, tags:["computer engineering","operating systems"], desc:"Covers processes, scheduling, memory management, and file systems." },
];
