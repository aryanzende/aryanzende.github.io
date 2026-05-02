const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const scrollProgress = document.getElementById("scrollProgress");
const currentSectionLabel = document.getElementById("currentSectionLabel");

const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");

const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalThought = document.getElementById("modalThought");
const modalWhy = document.getElementById("modalWhy");
const modalLearned = document.getElementById("modalLearned");

const projectDetails = {
  cropsmart: {
    category: "AI + AGRICULTURE",
    title: "CropSmart",
    subtitle: "AI-Powered Agricultural Assistant",
    description: [
      "Built an AI-based agriculture assistant that helps farmers with crop recommendation, fertilizer suggestion, plant disease detection, weather support, and chatbot guidance.",
      "The system combines ML, Deep Learning, and real-time weather data to make farming decisions easier and faster.",
      "Designed it as a practical farmer-support tool instead of a single prediction model."
    ],
    tech: ["Python", "Scikit-Learn", "TensorFlow", "OpenCV", "Weather API", "Machine Learning", "Deep Learning", "Chatbot"],
    thought: [
      "Wanted to build an AI project that solves a real agriculture problem.",
      "Farmers need quick help for crop selection, fertilizer decisions, and disease identification.",
      "The idea was to combine multiple AI features into one useful assistant."
    ],
    why: [
      "Wrong crop selection, fertilizer confusion, and late disease detection can affect farming output.",
      "AI can support farmers by giving faster and more data-driven suggestions.",
      "This project shows how multiple AI modules can work together in one product."
    ],
    learned: [
      "How to build an end-to-end AI project with multiple modules.",
      "How to connect crop recommendation, fertilizer suggestion, and disease detection in one workflow.",
      "How image-based deep learning can be used for plant disease detection.",
      "How APIs and chatbot support can make an AI system more practical."
    ]
  },

  querybuilder: {
    category: "LLM + DATABASE",
    title: "Query Builder",
    subtitle: "AI-Powered Multi-Agent SQL Query Builder",
    description: [
      "Built an AI-powered multi-agent system that converts natural language questions into safe, validated, and executable SQL queries.",
      "Used LLM orchestration to understand user intent, reason over schema, generate SQL, validate output, and prevent unsafe queries.",
      "Designed the system for non-technical users who want to ask database questions without manually writing SQL."
    ],
    tech: ["Python", "DSPy", "LiteLLM", "Groq API", "PostgreSQL", "FastAPI", "Pydantic", "LLM", "Multi-Agent System"],
    thought: [
      "Wanted to build a real LLM product, not just a simple chatbot.",
      "Direct LLM-to-SQL can be risky because it may create wrong or unsafe queries.",
      "The idea was to split the workflow into focused agents for intent, schema, SQL generation, and validation."
    ],
    why: [
      "Database querying is not only about writing SQL; it also needs intent understanding, schema awareness, and safety.",
      "Direct LLM-generated SQL can be risky if one wrong table, filter, or join is used.",
      "This project makes database access faster, safer, and more reliable for teams."
    ],
    learned: [
      "How a multi-agent LLM system works by dividing one big task into smaller specialized agents.",
      "How to design agent workflows with structured outputs.",
      "How to use DSPy, FastAPI, PostgreSQL, and Pydantic together in one backend system.",
      "How to build safer natural-language-to-SQL workflows."
    ]
  },

  agentdoc: {
    category: "GENAI + DOCUMENTS",
    title: "AgentDoc",
    subtitle: "Smart PDF Analyzer using GenAI",
    description: [
      "Created an intelligent GenAI-based system to read, understand, and answer questions from PDFs using LLMs.",
      "Built an interactive Streamlit UI where users can upload documents and ask questions based on PDF content.",
      "Designed it to save time for users who need quick understanding from long documents."
    ],
    tech: ["Python", "LangChain", "Google API", "Streamlit", "LLMs", "Generative AI", "PDF Processing"],
    thought: [
      "Wanted to solve the common problem of reading long PDFs manually.",
      "Many documents contain useful information, but finding the exact answer takes time.",
      "The goal was to make documents conversational using GenAI."
    ],
    why: [
      "Students, professionals, and teams often deal with long PDFs, reports, policies, and notes.",
      "Manual reading wastes hours when the user only needs specific answers.",
      "This project makes document understanding faster, easier, and more accessible."
    ],
    learned: [
      "How to build PDF-based question-answering systems.",
      "How to use LangChain for document understanding workflows.",
      "How LLMs can extract useful answers from unstructured documents.",
      "How to build a simple interactive GenAI UI using Streamlit."
    ]
  },

  frs: {
    category: "AI + COMPUTER VISION",
    title: "FRS",
    subtitle: "Face Recognition System",
    description: [
      "Developed a Face Recognition System that detects and recognizes human faces using computer vision techniques.",
      "Built the system to identify registered users from images or live camera input and match them with stored face data.",
      "Designed it as a practical authentication and attendance-style solution."
    ],
    tech: ["Python", "OpenCV", "Face Recognition", "Computer Vision", "NumPy", "Image Processing", "Machine Learning"],
    thought: [
      "Wanted to explore how AI can recognize people using facial features.",
      "Manual identity verification takes time and can be improved using computer vision.",
      "The idea was to build a system that can detect faces and return the correct identity."
    ],
    why: [
      "Face recognition is widely used in attendance systems, security systems, login verification, and automation.",
      "It is a strong real-world computer vision project because it involves detection, feature extraction, comparison, and prediction.",
      "This project helped me understand how image data can be used in identity-based AI applications."
    ],
    learned: [
      "How face detection and face recognition work in computer vision.",
      "How to process images using OpenCV and Python.",
      "How to compare face features with stored known faces.",
      "How to handle real-world challenges like lighting, camera angle, and image quality."
    ]
  },

  areaCalculation: {
    category: "AI + COMPUTER VISION",
    title: "Area Calculation",
    subtitle: "AI-Based Wall Area Measurement System",
    description: [
      "Developed an AI-based area calculation system to measure wall advertising and painted wall areas from images.",
      "Used an ArUco marker as a real-world reference object to convert pixel measurements into actual dimensions.",
      "Designed the system to help verify painted wall work accurately and reduce manual measurement errors in field execution."
    ],
    tech: ["Python", "OpenCV", "ArUco Marker", "Computer Vision", "Image Processing", "Homography", "Pixel-to-Real-World Conversion", "FastAPI"],
    thought: [
      "Wanted to solve the real-world problem of verifying wall painting work without depending only on manual measurement.",
      "In wall advertising, painters may submit photos, but it is difficult to confirm the exact painted area from images.",
      "The idea was to use computer vision with a known reference marker for more reliable wall dimension calculation."
    ],
    why: [
      "Manual wall area measurement takes time and can create errors during field verification.",
      "Photo-based proof alone does not confirm whether the actual painted area matches the claimed work.",
      "This project is useful for wall advertising, contractor verification, painting audits, and field execution monitoring."
    ],
    learned: [
      "How to use ArUco markers as real-world reference points for measurement.",
      "How pixel measurements can be converted into real-world units like centimeters, meters, and square feet.",
      "How angle, perspective, lighting, and camera quality affect measurement accuracy.",
      "How homography and perspective correction improve area calculation from side-angle photos."
    ]
  }
};

/* ===== MOBILE MENU ===== */
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks) navLinks.classList.remove("active");
  });
});

/* ===== REVEAL ON SCROLL ===== */
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${Math.min(index * 0.05, 0.28)}s`;
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

/* ===== ACTIVE SECTION TRACKING ===== */
const pageSections = document.querySelectorAll(".page-section");
const navItems = document.querySelectorAll(".nav-links a");

function updateCurrentSection() {
  let currentSection = pageSections[0];

  pageSections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;
    if (window.scrollY >= sectionTop) {
      currentSection = section;
    }
  });

  const label = currentSection.dataset.section || "INTRO";

  if (currentSectionLabel) {
    if (currentSectionLabel.textContent !== label) {
      currentSectionLabel.style.opacity = "0";
      currentSectionLabel.style.transform = "translateY(4px)";
      setTimeout(() => {
        currentSectionLabel.textContent = label;
        currentSectionLabel.style.opacity = "1";
        currentSectionLabel.style.transform = "translateY(0)";
      }, 150);
    }
  }

  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    item.classList.toggle("active", href === `#${currentSection.id}`);
  });
}

/* Label transition style */
if (currentSectionLabel) {
  currentSectionLabel.style.transition = "opacity 0.15s ease, transform 0.15s ease";
}

/* ===== SCROLL PROGRESS ===== */
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  if (scrollProgress) {
    scrollProgress.style.width = `${progress}%`;
  }

  updateCurrentSection();
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("load", updateScrollProgress);

/* ===== SHUFFLE DECK ===== */
const shuffleDeckBtn = document.getElementById("shuffleDeckBtn");
const skillDeck = document.getElementById("skillDeck");

if (shuffleDeckBtn && skillDeck) {
  shuffleDeckBtn.addEventListener("click", () => {
    const cards = Array.from(skillDeck.children);

    // Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Animate out
    cards.forEach((card) => {
      card.style.transition = "transform 0.25s ease, opacity 0.25s ease";
      card.style.transform = "scale(0.85) rotateY(20deg)";
      card.style.opacity = "0";
    });

    setTimeout(() => {
      cards.forEach((card) => skillDeck.appendChild(card));

      cards.forEach((card, i) => {
        card.style.transition = "none";
        card.style.transform = "scale(0.85) rotateY(-20deg)";
        card.style.opacity = "0";

        requestAnimationFrame(() => {
          setTimeout(() => {
            card.style.transition = `transform 0.3s cubic-bezier(0.22,1,0.36,1) ${i * 0.03}s, opacity 0.3s ease ${i * 0.03}s`;
            card.style.transform = "scale(1) rotateY(0deg)";
            card.style.opacity = "1";
          }, 10);
        });
      });
    }, 280);
  });
}

/* ===== MODAL HELPERS ===== */
function fillList(element, items) {
  if (!element) return;
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function fillTechTags(element, items) {
  if (!element) return;
  element.innerHTML = "";
  items.forEach((item) => {
    const span = document.createElement("span");
    span.textContent = item;
    element.appendChild(span);
  });
}

/* ===== OPEN / CLOSE MODAL ===== */
function openProjectModal(projectKey) {
  const project = projectDetails[projectKey];
  if (!project || !projectModal) return;

  if (modalCategory) modalCategory.textContent = project.category;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalSubtitle) modalSubtitle.textContent = project.subtitle;

  fillList(modalDescription, project.description);
  fillTechTags(modalTech, project.tech);
  fillList(modalThought, project.thought);
  fillList(modalWhy, project.why);
  fillList(modalLearned, project.learned);

  projectModal.classList.add("active");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Scroll modal to top
  const inner = projectModal.querySelector(".project-modal");
  if (inner) inner.scrollTop = 0;
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("active");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    openProjectModal(button.dataset.project);
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) closeProjectModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});