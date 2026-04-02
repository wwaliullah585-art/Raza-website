/**
 * Website Content Database for Kondee AI Chatbot
 * This file contains all the structured data that the chatbot uses to answer questions
 * Update this file whenever you add new content to your website
 */

const websiteData = {
  // Home page content
  home: {
    title: "Learn With Software Engineer",
    description: "Welcome to Learn With Software Engineer - Your gateway to mastering Data Science, Data Analysis, and Software Development",
    keywords: ["home", "welcome", "learn", "courses", "software engineer"],
    content: `We are dedicated to providing high-quality education in Data Science, Data Analysis, and Programming. 
              Our platform offers comprehensive courses designed for beginners and advanced professionals alike.
              Join thousands of students who have transformed their careers through our expert-led training programs.`
  },

  // About page content
  about: {
    title: "About Us",
    keywords: ["about", "who are we", "our mission", "team", "experience"],
    content: `Learn With Software Engineer is your trusted partner in tech education. 
              We specialize in teaching Data Science, Data Analysis, Python Programming, and Full-Stack Development.
              Our experienced instructors bring real-world industry experience to every lesson.
              We are committed to making quality tech education accessible and affordable for everyone.`
  },

  // Services/Courses offered
  services: {
    title: "Services & Courses",
    keywords: ["services", "courses", "programs", "training", "what do you offer"],
    content: `We offer comprehensive courses in:
              
              1. DATA SCIENCE - Learn machine learning, deep learning, and AI concepts with Python
              2. DATA ANALYSIS - Master Excel, Python, SQL, and Power BI for data-driven insights
              3. PYTHON PROGRAMMING - From basics to advanced, including web development and automation
              4. WEB DEVELOPMENT - HTML, CSS, JavaScript, React.js, Node.js, and Full-Stack
              5. DATABASE MANAGEMENT - SQL, MongoDB, Firebase for modern applications
              6. SOFT SKILLS - Communication, leadership, and career development
              
              Each course includes live sessions, hands-on projects, and lifetime access to materials.`
  },

  // Data Science course
  datascience: {
    title: "Data Science Course",
    keywords: ["data science", "machine learning", "AI", "artificial intelligence", "deep learning"],
    content: `Our Data Science course covers:
              - Python fundamentals and advanced libraries (NumPy, Pandas, Scikit-learn)
              - Statistical analysis and probability
              - Machine Learning algorithms (Regression, Classification, Clustering)
              - Deep Learning with TensorFlow and Keras
              - Natural Language Processing (NLP)
              - Data visualization with Matplotlib and Seaborn
              - Real-world projects and Kaggle competitions
              
              Duration: 12 weeks | Level: Beginner to Intermediate
              You'll learn from industry experts and get hands-on experience with real datasets.`
  },

  // Data Analyst course
  dataanalyst: {
    title: "Data Analyst Course",
    keywords: ["data analyst", "data analysis", "business intelligence", "analytics", "excel", "sql", "power bi"],
    content: `Our Data Analyst course prepares you for a lucrative career in data analysis:
              - Excel mastery: Advanced formulas, pivot tables, data visualization
              - SQL Database queries and optimization
              - Python for data analysis (Pandas, NumPy)
              - Power BI and Tableau for business intelligence
              - Statistical analysis and hypothesis testing
              - Data storytelling and presentation
              - Real company datasets and case studies
              
              Duration: 10 weeks | Level: Beginner to Intermediate
              Perfect for those transitioning to data careers or upskilling current professionals.`
  },

  // Contact information
  contact: {
    title: "Contact Us",
    keywords: ["contact", "email", "phone", "reach out", "get in touch", "support"],
    content: `We'd love to hear from you! Get in touch with our team:
              
              EMAIL: info@learnwithsoftwareengineer.com
              PHONE: +1 (XXX) XXX-XXXX
              
              Office Hours: Monday to Friday, 9 AM - 5 PM EST
              
              For Support: support@learnwithsoftwareengineer.com
              For Inquiries: inquiry@learnwithsoftwareengineer.com
              For Partnerships: partnerships@learnwithsoftwareengineer.com
              
              You can also fill out our contact form on this page, and we'll respond within 24 hours.`
  },

  // General information and system instructions
  general: {
    keywords: ["help", "website", "how", "what", "who", "where", "when", "raza"],
    content: `You are a senior full-stack web developer and AI integration expert.

I have an existing multi-page website (HTML, CSS, JS). I want to integrate a custom AI chatbot (called Kondee AI) into my website with the following requirements:

GOAL:
Create a chatbot that is embedded on every page of my website and answers user questions ONLY based on my website content.

FEATURE REQUIREMENTS:

1. GLOBAL CHATBOT (ALL PAGES)

* Add a floating chatbot button visible on every page (bottom right corner).
* When clicked, it opens a chat window UI.
* This chatbot must be automatically included in ALL pages (use reusable JS file or component).

2. WEBSITE CONTENT UNDERSTANDING

* The AI should ONLY answer questions based on my website pages.
* It should not answer general internet questions.
* It must act like a "website assistant".

3. DATA SOURCE

* Extract or define all website content (text from pages like Home, About, Courses, Contact, etc.).
* Store this data in a structured format (JSON or JavaScript object).

Example:
const websiteData = {
home: "Welcome to our data analyst courses...",
courses: "We offer Data Science, Python, Excel...",
contact: "You can contact us at..."
};

4. AI RESPONSE LOGIC

* When user asks a question:
  → Match keywords with websiteData
  → Return the most relevant answer
* If no match:
  → Respond: "Sorry, I only provide information related to this website."

5. UI DESIGN

* Modern chatbot UI (like ChatGPT style)
* Messages:
  * User messages on right
  * AI messages on left
* Input box + send button
* Smooth animations

6. FILE STRUCTURE
   Create:

* chatbot.js (main logic)
* chatbot.css (design)
* chatbot.html (optional UI template)

7. INTEGRATION

* Show how to include chatbot.js and chatbot.css in ALL pages
* Use script tag:
  <script src="chatbot.js"></script>

8. OPTIONAL (ADVANCED)

* If possible, integrate OpenAI API or simple local logic
* Add typing animation
* Add scrollable chat history

9. SECURITY / LIMITATION

* AI must NOT generate unrelated answers
* It must strictly stay within website content

10. FINAL OUTPUT
    Provide:

* Complete working code (HTML + CSS + JS)
* Clean, readable, well-commented
* Step-by-step instructions to integrate into my website

IMPORTANT:

* Keep it beginner-friendly
* Use simple JavaScript (no heavy frameworks)
* Make it lightweight and fast

Hi I am AI Raza tell me how can I help you`
  },

  // FAQs
  faq: {
    keywords: ["faq", "frequently asked", "questions", "q&a"],
    content: `Common Questions:
              
              Q: How long does each course take?
              A: Most courses are 8-12 weeks with flexible learning schedules.
              
              Q: What's the refund policy?
              A: Full refund within 7 days of enrollment if unsatisfied.
              
              Q: Do I get a certificate?
              A: Yes! All courses include completion certificates recognized by industry.
              
              Q: Can I access course materials after completion?
              A: Yes! You get lifetime access to all course materials.
              
              Q: Are there any prerequisites?
              A: Most beginner courses require no prior experience. Check course descriptions for details.
              
              Q: Do you offer job placement assistance?
              A: Yes! We provide career mentoring and help connect graduates with employers.`
  }
};

/**
 * Keywords mapping for intelligent question matching
 * Add more keywords and variations to improve chatbot accuracy
 */
const keywordMap = {
  // Course-related keywords
  "data science": ["datascience"],
  "machine learning": ["datascience"],
  "ai": ["datascience"],
  "artificial intelligence": ["datascience"],
  "deep learning": ["datascience"],
  "python": ["datascience", "services"],
  
  // Data Analysis keywords
  "data analysis": ["dataanalyst"],
  "data analyst": ["dataanalyst"],
  "business intelligence": ["dataanalyst"],
  "excel": ["dataanalyst"],
  "power bi": ["dataanalyst"],
  "tableau": ["dataanalyst"],
  "sql": ["dataanalyst"],
  "analytics": ["dataanalyst"],
  
  // Navigation keywords
  "home": ["home"],
  "about": ["about"],
  "about us": ["about"],
  "who are you": ["about"],
  "who are we": ["about"],
  
  // Services keywords
  "services": ["services"],
  "courses": ["services"],
  "programs": ["services"],
  "training": ["services"],
  "what do you offer": ["services"],
  
  // Contact keywords
  "contact": ["contact"],
  "email": ["contact"],
  "phone": ["contact"],
  "reach out": ["contact"],
  "get in touch": ["contact"],
  "support": ["contact"],
  "help": ["general"],
  
  // FAQ keywords
  "faq": ["faq"],
  "frequently asked": ["faq"],
  "questions": ["faq"],
  "pricing": ["faq"],
  "refund": ["faq"],
  "certificate": ["faq"],
  "enrollment": ["faq"],
  "job placement": ["faq"],
};

/**
 * Function to find the best matching content section
 * @param {string} userQuestion - The user's question
 * @returns {object} - The best matching content section
 */
function findMatchingContent(userQuestion) {
  const question = userQuestion.toLowerCase().trim();
  let bestMatch = null;
  let maxScore = 0;

  // Check against keyword map
  for (const [keyword, sections] of Object.entries(keywordMap)) {
    if (question.includes(keyword)) {
      const score = keyword.length; // Longer keywords have higher priority
      if (score > maxScore) {
        maxScore = score;
        // Return the first matching section
        const sectionKey = sections[0];
        bestMatch = websiteData[sectionKey];
      }
    }
  }

  // If no keyword match, default to general response
  if (!bestMatch) {
    bestMatch = websiteData.general;
  }

  return bestMatch || websiteData.general;
}

/**
 * Generate a response based on user question
 * @param {string} userQuestion - The user's question
 * @returns {string} - The chatbot's response
 */
function generateResponse(userQuestion) {
  const matchedContent = findMatchingContent(userQuestion);
  
  // Create a response with the relevant content
  return matchedContent.content;
}
