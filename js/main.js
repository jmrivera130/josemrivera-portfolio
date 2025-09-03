// ------------ Mobile menu ------------
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));
}

// ------------ Elements ------------
const portfolioSections = document.getElementById('portfolio-sections');
const caseStudySection = document.getElementById('case-study-overlay');
const viewCaseStudyButtons = document.querySelectorAll('.view-case-study-btn');
const backToPortfolioLinks = document.querySelectorAll('#back-to-portfolio-overlay, #home-link-header');

let lastFocusedElement = null;

// ------------ Data ------------
const projectsData = {
  project1: {
    title: "clockWORK: Employee Time Management App",
    tagline: "Simplifying time tracking and scheduling for employers and employees, ensuring accuracy and transparency.",
    heroImage: "https://raw.githubusercontent.com/jmrivera130/portfolio-images/7e4aab0a12c6305fb3fdc211ccd83b5f2d2fec63/HeroProj1.png",
    overview: "This project focused on designing a mobile application, clockWORK, to provide a simple, intuitive, and cost-effective timekeeping solution for employers and employees. The primary goal was to ensure accurate and transparent hour tracking, specifically catering to non-tech-savvy business owners like Mickey Alvarez, and addressing frustrations faced by employees like James Mattis. This app was developed as a high-fidelity prototype during the Google UX Design Professional Certificate course.",
    role: "UX/UI Designer (Individual Project)",
    timeline: "8 Weeks (Google UX Course Project)",
    tools: "Figma, Miro (for competitive analysis and ideation)",
    problem: "Many small business owners and their employees struggle with complex, feature-bloated timekeeping software...",
    problemStatement: "How might we create a user-friendly mobile application that provides accurate time tracking, efficient scheduling, and transparent communication features for both employers and employees?",
    findings: [
      { title:"Competitive feature bloat overwhelms users", body:"Existing apps overloaded non-tech-savvy owners like Mickey Alvarez." },
      { title:"Complex UIs increase costs", body:"Learning curves and wasted time added operational cost and frustration." },
      { title:"Manual methods were inaccurate", body:"James Mattis often corrected ledgers; transparency was missing." },
      { title:"Emotional pain points surfaced", body:"Stress and anxiety around timekeeping changes were common." }
    ],
    researchImage: "https://raw.githubusercontent.com/jmrivera130/portfolio-images/7e4aab0a12c6305fb3fdc211ccd83b5f2d2fec63/UserMaps_clockWORK.png",
    designIntro: "My design process, following the Google UX Course framework, began with a thorough competitive analysis...",
    wireframeImage: "https://raw.githubusercontent.com/jmrivera130/portfolio-images/7e4aab0a12c6305fb3fdc211ccd83b5f2d2fec63/Wireframe_CLOCKwork.JPG",
    mockupImage: "https://raw.githubusercontent.com/jmrivera130/portfolio-images/7e4aab0a12c6305fb3fdc211ccd83b5f2d2fec63/Figma_clockWORK_HighFidelity.JPG",
    decisionsIntro: "Here are some of the specific design choices I made and the rationale behind them:",
    decisions: [
      "<strong>Intuitive Clock-in/out:</strong> Large clear button with GPS verification.",
      "<strong>Dynamic Scheduling View:</strong> Calendar-based assigning and acceptance.",
      "<strong>Integrated Bulletin Board:</strong> Timely announcements reduce missed info.",
      "<strong>Login Tracking & History:</strong> Transparent logs for both parties."
    ],
    metric1Value: "30%",  metric1Label: "Anticipated Reduction in Payroll Discrepancies",
    metric2Value: "25%",  metric2Label: "Projected Improvement in Scheduling Efficiency",
    metric3Value: "90%",  metric3Label: "Target User Satisfaction with Transparency",
    lessonsLearned: "Feature bloat kills usability; 'less is more' was key for this audience.",
    prototypeTextLink: "https://www.figma.com/proto/ave1KhzWaiklqHug66pSSD/HIFI--clockWORK?node-id=7-9&p=f&t=81Yvcz8fx8Ky8Ocx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    prototypeTextLinkLabel: "clockWORK Interactive Prototype"
  },
  project2: {
    title: "CPRHero: Emergency First Aid & CPR App",
    tagline: "Empowering users with accessible, step-by-step guidance for CPR and essential first aid in emergencies.",
    heroImage: "https://raw.githubusercontent.com/jmrivera130/portfolio-images/3f5cb461aa2d105e588e132be932d1181bc5dbac/HeroProj2.png",
    overview: "CPRHero is a mobile application designed to provide immediate, accessible instructions for CPR and various first aid scenarios...",
    role: "UX/UI Designer (Individual Project, AI-Assisted)",
    timeline: "Ongoing/Iterative Process",
    tools: "ChatGPT, Uizard, Maze AI",
    problem: "In critical emergency situations, individuals often lack immediate access to clear, concise, and actionable first aid or CPR instructions...",
    problemStatement: "How might we design an emergency first aid and CPR app that is highly accessible and provides immediate, easy-to-follow guidance to users under pressure, enabling effective intervention?",
    findings: [
      { title:"Users freeze under pressure", body:"They need clear, fast guidance with no ambiguity." },
      { title:"Visual simplicity is crucial", body:"Large buttons, minimal text, and step-by-step visuals." },
      { title:"Emotional reassurance builds confidence", body:"Calm tone and visuals improved trust." },
      { title:"Speed over completeness", body:"Quick access to CPR/Choking etc. mattered most." }
    ],
    researchImage: "https://raw.githubusercontent.com/jmrivera130/portfolio-images/3f5cb461aa2d105e588e132be932d1181bc5dbac/UserMaps_CPRHero.png",
    designIntro: "My design process for CPRHero was deeply rooted in an AI-accelerated workflow...",
    wireframeImage: "https://raw.githubusercontent.com/jmrivera130/portfolio-images/3f5cb461aa2d105e588e132be932d1181bc5dbac/Wireframe_CPRHero.jpg",
    mockupImage: "https://raw.githubusercontent.com/jmrivera130/portfolio-images/3f5cb461aa2d105e588e132be932d1181bc5dbac/CPRHero_HighFidelity.jpg",
    decisionsIntro: "Specific design choices and rationale:",
    decisions: [
      "<strong>Core App Structure:</strong> Clear home/tutorial navigation & emergency call assist.",
      "<strong>Multi-Path User Flows:</strong> Scenario-specific flows (CPR, burns, AED, etc.).",
      "<strong>Emergency Communication UX:</strong> Categorized symptom screens to assist responders.",
      "<strong>Accessibility System:</strong> Text size, contrast, haptics, language toggles.",
      "<strong>Prototype Logic:</strong> Repeat/Stop, modal confirmations, consistent states.",
      "<strong>Design System Consistency:</strong> Color system, icon set, CTA patterns."
    ],
    metric1Value: "95%", metric1Label: "User Comprehension (Goal)",
    metric2Value: "80%", metric2Label: "Task Completion Rate (Goal)",
    metric3Value: "High", metric3Label: "Accessibility Score (Audit Goal)",
    lessonsLearned: "AI can co-design effectively; accessibility and clarity remain paramount."
  },
  project3: {
    title: "Thirsty Bee: Event Staffing Service App",
    tagline: "Streamlining event staffing bookings for customers, emphasizing efficiency and clarity.",
    heroImage: "https://images.unsplash.com/photo-1517457210-bf26f49c0631?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    overview: "Thirsty Bee is a conceptual app and website for a fictional staffing company...",
    role: "UX/UI Designer (Individual Project, AI-Assisted)",
    timeline: "Ongoing/Iterative Process",
    tools: "ChatGPT, Uizard, Figma",
    problem: "Customers seeking event staffing services often face a fragmented and complex booking process...",
    problemStatement: "How might we design a user-friendly platform that streamlines the discovery, booking, and management of event staffing services, ensuring clarity and convenience for customers?",
    findings: [
      { title:"Initial vagueness", body:"Needed structured LLM interaction to define features." },
      { title:"Spec gap", body:"Iterative prompting turned ideas into actionable specs." },
      { title:"AI accelerated IA & flows", body:"Tooling sped up planning phase considerably." }
    ],
    researchImage: "https://images.unsplash.com/photo-1505373877845-8b2a70b48e21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designIntro: "This project heavily leveraged AI as a collaborative partner...",
    wireframeImage: "https://placehold.co/600x400/1f2937/38bdf8?text=Thirsty+Bee+Wireframes",
    mockupImage: "https://placehold.co/600x400/1f2937/38bdf8?text=Thirsty+Bee+Mockups",
    decisionsIntro: "Design choices & rationale:",
    decisions: [
      "<strong>Service Packages:</strong> Clear options based on event size with customization.",
      "<strong>Booking Calendar:</strong> Transparent slot availability & surcharge notes.",
      "<strong>Payment Flow:</strong> Secure pre-confirmation with 3rd-party processor.",
      "<strong>Lean Profiles:</strong> Only essential data, optional social login.",
      "<strong>Tech Scope:</strong> Defined integrations and avoided push notifications."
    ],
    metric1Value: "Detailed", metric1Label: "App Specification Achieved",
    metric2Value: "High",     metric2Label: "Planning Clarity",
    metric3Value: "N/A",      metric3Label: "Deployment",
    lessonsLearned: "Structured prompting + AI partnership = faster clarity and specs."
  }
};

// ------------ Helpers ------------
function populateList(ul, items, formatter){
  ul.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = formatter(item);
    ul.appendChild(li);
  });
}

function showPortfolio(){
  if(!portfolioSections || !caseStudySection) return;
  portfolioSections.classList.remove('hidden');
  caseStudySection.classList.add('hidden');
  document.body.style.overflow = '';
  if (lastFocusedElement) lastFocusedElement.focus();
  window.scrollTo({top:0, behavior:'smooth'});
}

function showCaseStudy(projectId){
  const project = projectsData[projectId];
  if(!project || !portfolioSections || !caseStudySection) return;

  document.getElementById('case-study-title').textContent = project.title;
  document.getElementById('case-study-tagline').textContent = project.tagline;
  document.getElementById('case-study-hero-image').src = project.heroImage;
  document.getElementById('case-study-overview-text').textContent = project.overview;
  document.getElementById('case-study-role').textContent = project.role;
  document.getElementById('case-study-timeline').textContent = project.timeline;
  document.getElementById('case-study-tools').textContent = project.tools;
  document.getElementById('case-study-problem-text').textContent = project.problem;
  document.getElementById('case-study-problem-statement').textContent = project.problemStatement;

  const findingsList = document.getElementById('case-study-findings-list');
  populateList(findingsList, project.findings, f => `<strong>${f.title}:</strong> ${f.body}`);

  document.getElementById('case-study-research-image').src = project.researchImage;
  document.getElementById('case-study-design-intro').textContent = project.designIntro;
  document.getElementById('case-study-wireframe-image').src = project.wireframeImage;
  document.getElementById('case-study-mockup-image').src = project.mockupImage;

  document.getElementById('case-study-decisions-intro').textContent = project.decisionsIntro || '';
  const decisionsList = document.getElementById('case-study-decisions-list');
  populateList(decisionsList, project.decisions, d => d);

  document.getElementById('case-study-metric1-value').textContent = project.metric1Value;
  document.getElementById('case-study-metric1-label').textContent = project.metric1Label;
  document.getElementById('case-study-metric2-value').textContent = project.metric2Value;
  document.getElementById('case-study-metric2-label').textContent = project.metric2Label;
  document.getElementById('case-study-metric3-value').textContent = project.metric3Value;
  document.getElementById('case-study-metric3-label').textContent = project.metric3Label;
  document.getElementById('case-study-lessons-learned').innerHTML = project.lessonsLearned;

  const protoWrap = document.getElementById('clockwork-prototype-text-link-container');
  const protoLink = document.getElementById('clockwork-prototype-text-link');
  if(project.prototypeTextLink){
    protoLink.href = project.prototypeTextLink;
    protoLink.textContent = project.prototypeTextLinkLabel || 'View Interactive Prototype';
    protoWrap.classList.remove('hidden');
  } else {
    protoWrap.classList.add('hidden');
  }

  lastFocusedElement = document.activeElement;
  portfolioSections.classList.add('hidden');
  caseStudySection.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  caseStudySection.setAttribute('tabindex','-1');
  caseStudySection.focus();
}

// Attach listeners
viewCaseStudyButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    showCaseStudy(e.currentTarget.dataset.projectId);
  });
});

backToPortfolioLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPortfolio();
    if (link.hash) setTimeout(()=>{
      const target=document.querySelector(link.hash);
      if(target) target.scrollIntoView({behavior:'smooth'});
    },100);
  });
});

// Escape closes overlay
document.addEventListener('keydown', e => {
  if(e.key==='Escape' && !caseStudySection.classList.contains('hidden')){
    showPortfolio();
  }
});

// Initial
window.addEventListener('load', showPortfolio);
