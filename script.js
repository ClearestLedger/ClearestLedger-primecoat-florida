const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const exposureTrack = document.querySelector("[data-exposure-track]");
const exposureCards = [...document.querySelectorAll(".exposure-card")];
const exposurePrev = document.querySelector("[data-exposure-prev]");
const exposureNext = document.querySelector("[data-exposure-next]");
const benefitPanel = document.querySelector("[data-benefit-panel]");
const benefitClose = document.querySelector("[data-benefit-close]");
const benefitLabel = document.querySelector("[data-benefit-label]");
const benefitTitle = document.querySelector("[data-benefit-title]");
const benefitCopy = document.querySelector("[data-benefit-copy]");
const benefitList = document.querySelector("[data-benefit-list]");
const processSteps = [...document.querySelectorAll("[data-process-step]")];
const processPanel = document.querySelector("[data-process-panel]");
const processClose = document.querySelector("[data-process-close]");
const processLabel = document.querySelector("[data-process-label]");
const processTitle = document.querySelector("[data-process-title]");
const processCopy = document.querySelector("[data-process-copy]");
const processList = document.querySelector("[data-process-list]");
const galleryTabs = [...document.querySelectorAll("[data-gallery-tab]")];
const galleryImages = [...document.querySelectorAll(".gallery-image")];
const systemPanels = [...document.querySelectorAll("[data-system-panel]")];
const galleryCaption = document.querySelector("[data-gallery-caption]");
const assistant = document.querySelector("[data-assistant]");
const assistantToggle = document.querySelector("[data-assistant-toggle]");
const assistantAnswer = document.querySelector("[data-assistant-answer]");
const assistantInput = document.querySelector("[data-assistant-input]");
const assistantSend = document.querySelector("[data-assistant-send]");
const consultationForm = document.querySelector(".consultation-form");
const videoButtons = [...document.querySelectorAll("[data-video-topic]")];
const videoModal = document.querySelector("[data-video-modal]");
const videoClose = document.querySelector("[data-video-close]");
const videoLabel = document.querySelector("[data-video-label]");
const videoTitle = document.querySelector("[data-video-title]");
const videoCopy = document.querySelector("[data-video-copy]");

const galleryCaptions = {
  coating: "Coating system options reviewed for compatible masonry and exterior surface conditions.",
  painting: "Premium exterior painting is positioned as a finish system, not a one-size-fits-all coating claim.",
  prep: "Preparation determines product compatibility before any coating recommendation is made.",
  wood: "Wood and trim details follow a separate finish path from stucco, concrete, and CMU/block.",
  projects: "Florida homeowners get claim-safe guidance, financing conversation, and a clear project scope.",
};

const videoContent = {
  coating: {
    label: "Coating Systems",
    title: "What Is a Premium Coating System?",
    copy: "Use this video space to explain how a PrimeCoat consultation reviews surface condition, product fit, preparation, and finish goals.",
  },
  prep: {
    label: "Preparation",
    title: "Why Preparation Comes First",
    copy: "Use this video space for inspection, cleaning, repairs, masking, caulking, primer or conditioner decisions, and final review.",
  },
  product: {
    label: "Coating Guide",
    title: "Coating System Options",
    copy: "Use this video space to introduce coating selection, surface compatibility, manufacturer documentation, and warranty-safe language.",
  },
  financing: {
    label: "Investment",
    title: "Cost & Financing Conversation",
    copy: "Use this video space to walk through home size, prep requirements, repairs, product selection, access, and financing options for qualified homeowners.",
  },
};

const benefitContent = {
  sun: {
    label: "Florida Sun",
    title: "Sun & UV Exposure",
    copy:
      "Florida homes live under intense daily sunlight. PrimeCoat reviews color direction, existing fading, surface soundness, and compatible product options before recommending a finish path.",
    points: [
      "Reviews current fading, chalking, and sun-exposed elevations.",
      "Considers sun-aware finish options only where the technology fits the surface and project goals.",
      "Keeps comfort and energy language tied to product documentation rather than promises.",
    ],
  },
  moisture: {
    label: "Humidity & Rain Cycles",
    title: "Moisture & Humidity",
    copy:
      "Humidity, coastal air, and rain cycles can affect exterior surfaces. A consultation reviews substrate condition and preparation before any coating system is selected.",
    points: [
      "Looks for moisture-related wear, cracking, peeling, and surface contamination.",
      "Separates masonry coating recommendations from wood, trim, and specialty finish needs.",
      "Uses weather-aware language without implying every home or surface qualifies.",
    ],
  },
  chalking: {
    label: "Finish Renewal",
    title: "Fading & Chalking",
    copy:
      "A tired exterior often needs more than color. PrimeCoat reviews chalking, loose coating, porosity, and surface condition so preparation supports the final finish.",
    points: [
      "Evaluates whether cleaning, scraping, sanding, conditioning, or primer is needed.",
      "Matches finish recommendations to existing coatings and manufacturer guidance.",
      "Positions the goal as improved curb appeal and compatibility, not exaggerated outcomes.",
    ],
  },
  wear: {
    label: "Exterior Wear",
    title: "Exterior Wear",
    copy:
      "Exterior wear can come from sun, rain, surface movement, previous coatings, and age. The recommendation should respond to the real condition of the home.",
    points: [
      "Reviews stucco, masonry, concrete, CMU/block, brick, wood details, and previously coated surfaces.",
      "Identifies repairs and prep steps before product selection.",
      "Builds a written scope around surface condition and finish expectations.",
    ],
  },
  curb: {
    label: "Curb Appeal",
    title: "Curb Appeal Renewal",
    copy:
      "Premium exterior renewal should make the home feel cleaner, fresher, and more refined from the street while staying grounded in preparation and product fit.",
    points: [
      "Supports color, sheen, and finish conversations around the home's architecture.",
      "Uses clean application planning for walls, trim, accents, and transitions.",
      "Helps homeowners compare a premium system against a basic repaint conversation.",
    ],
  },
  financing: {
    label: "Project Options",
    title: "Financing Options",
    copy:
      "Premium exterior coating projects can be a larger home investment. PrimeCoat can include a financing conversation after the consultation clarifies scope and project goals.",
    points: [
      "Financing options may be available for qualified homeowners.",
      "No approval, payment, or rate promises are made on the website.",
      "The conversation stays tied to home size, preparation, repairs, product selection, and scope.",
    ],
  },
};

const processContent = {
  inspect: {
    label: "Surface Review",
    title: "Inspect",
    copy:
      "The process starts with understanding the home before product selection. PrimeCoat reviews the surfaces, existing coatings, exposure, access, and homeowner goals so the recommendation is grounded in the actual project.",
    points: [
      "Review stucco, masonry, concrete, brick, CMU/block, previously coated areas, trim, and wood details.",
      "Look for chalking, peeling, cracks, moisture-related concerns, failing sealant, surface movement, and areas that may need repair.",
      "Discuss curb appeal goals, color direction, financing interest, and whether a coating system or finish path is the better conversation.",
    ],
  },
  clean: {
    label: "Surface Cleaning",
    title: "Clean",
    copy:
      "Cleaning prepares the exterior for a more accurate surface review and a better preparation conversation. The goal is to remove buildup and reveal the true condition of the substrate.",
    points: [
      "Plan washing or cleaning steps appropriate for the surface and project conditions.",
      "Address dirt, loose material, mildew-like staining, chalk, and surface contaminants where appropriate.",
      "Protect surrounding areas such as windows, doors, fixtures, landscaping, patios, and walkways during the cleaning plan.",
    ],
  },
  repair: {
    label: "Condition Review",
    title: "Repair",
    copy:
      "Repairs are not treated as an afterthought. Areas that affect compatibility, finish quality, or exterior presentation are identified before the coating or finish system is finalized.",
    points: [
      "Review cracks, damaged stucco, failing caulk, loose coating, open joints, wood condition, and transitions between materials.",
      "Clarify what repairs are included in the scope and what may require a separate trade or additional review.",
      "Use repair notes to support the final product recommendation and warranty-safe scope language.",
    ],
  },
  prepare: {
    label: "Compatibility Prep",
    title: "Prepare",
    copy:
      "Preparation connects the surface to the selected product path. Primer, conditioner, caulking, patching, sanding, or other detail work may be included depending on the substrate and product guidance.",
    points: [
      "Prepare surfaces based on soundness, porosity, previous coatings, pH considerations, and manufacturer guidance.",
      "Separate masonry coating preparation from trim, doors, accents, and wood finish preparation.",
      "Confirm whether primer, conditioner, sealant, patching, masking, or detail work belongs in the project scope.",
    ],
  },
  coat: {
    label: "Selected System",
    title: "Coat",
    copy:
      "The coating step follows the written recommendation. PrimeCoat keeps the system tied to surface compatibility, selected coating products, job conditions, and disciplined application.",
    points: [
      "Apply the selected coating or finish system according to the written scope and product specifications.",
      "Review product options only where compatible with the surface, preparation needs, and project goals.",
      "Focus on consistent coverage, clean transitions, careful detail work, and a refined exterior presentation.",
    ],
  },
  review: {
    label: "Final Walkthrough",
    title: "Review",
    copy:
      "The final review confirms the exterior presentation, cleanup, touchup needs, and documentation. This step keeps the project consultation-driven through completion.",
    points: [
      "Walk the completed exterior for finish consistency, edges, transitions, details, and overall curb appeal.",
      "Review cleanup, touchups, homeowner questions, and any notes related to the completed scope.",
      "Discuss applicable product documentation and warranty terms based on the selected system, preparation, application, and final scope.",
    ],
  },
};

let activeExposure = 0;

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setActiveExposure(index) {
  if (!exposureCards.length) return;
  activeExposure = (index + exposureCards.length) % exposureCards.length;
  exposureCards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === activeExposure);
  });
  exposureCards[activeExposure].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

navToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
  }
});

if (exposurePrev && exposureNext) {
  exposurePrev.addEventListener("click", () => setActiveExposure(activeExposure - 1));
  exposureNext.addEventListener("click", () => setActiveExposure(activeExposure + 1));
}

if (exposureTrack) {
  exposureTrack.addEventListener(
    "scroll",
    () => {
      const trackCenter = exposureTrack.getBoundingClientRect().left + exposureTrack.clientWidth / 2;
      let closestIndex = activeExposure;
      let closestDistance = Infinity;

      exposureCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      exposureCards.forEach((card, index) => card.classList.toggle("is-active", index === closestIndex));
      activeExposure = closestIndex;
    },
    { passive: true },
  );
}

function openBenefitPanel(card) {
  const content = benefitContent[card.dataset.benefitCard];
  if (!content) return;

  exposureCards.forEach((item) => item.classList.toggle("is-active", item === card));
  benefitLabel.textContent = content.label;
  benefitTitle.textContent = content.title;
  benefitCopy.textContent = content.copy;
  benefitList.innerHTML = content.points.map((point) => `<li>${point}</li>`).join("");
  benefitPanel.hidden = false;
}

function closeBenefitPanel() {
  benefitPanel.hidden = true;
}

exposureCards.forEach((card) => {
  card.addEventListener("click", () => openBenefitPanel(card));
});

benefitClose.addEventListener("click", closeBenefitPanel);

benefitPanel.addEventListener("click", (event) => {
  if (event.target === benefitPanel) {
    closeBenefitPanel();
  }
});

function openProcessPanel(step) {
  const content = processContent[step.dataset.processStep];
  if (!content) return;

  processSteps.forEach((item) => item.classList.toggle("is-active", item === step));
  processLabel.textContent = content.label;
  processTitle.textContent = content.title;
  processCopy.textContent = content.copy;
  processList.innerHTML = content.points.map((point) => `<li>${point}</li>`).join("");
  processPanel.hidden = false;
}

function closeProcessPanel() {
  processPanel.hidden = true;
}

processSteps.forEach((step) => {
  step.addEventListener("click", () => openProcessPanel(step));
});

processClose.addEventListener("click", closeProcessPanel);

processPanel.addEventListener("click", (event) => {
  if (event.target === processPanel) {
    closeProcessPanel();
  }
});

function setGalleryTab(activeTab) {
  const target = activeTab.dataset.galleryTab;

  galleryTabs.forEach((tab) => {
    const isActive = tab === activeTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  galleryImages.forEach((image) => {
    const isActive = image.dataset.galleryVisual === target;
    image.classList.toggle("is-active", isActive);
    image.setAttribute("aria-hidden", String(!isActive));
  });

  systemPanels.forEach((panel) => {
    const isActive = panel.dataset.systemPanel === target;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });

  if (galleryCaption && galleryCaptions[target]) {
    galleryCaption.textContent = galleryCaptions[target];
  }
}

galleryTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setGalleryTab(tab));

  tab.addEventListener("keydown", (event) => {
    const keyMap = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    };

    if (!Object.prototype.hasOwnProperty.call(keyMap, event.key)) return;
    event.preventDefault();
    const nextIndex = (index + keyMap[event.key] + galleryTabs.length) % galleryTabs.length;
    galleryTabs[nextIndex].focus();
    setGalleryTab(galleryTabs[nextIndex]);
  });
});

assistantToggle.addEventListener("click", () => {
  assistant.classList.toggle("is-open");
});

function showAssistantAnswer(message) {
  assistantAnswer.textContent = message;
  assistantAnswer.classList.add("has-answer");
}

assistant.addEventListener("click", (event) => {
  const quickButton = event.target.closest("[data-assistant-response]");
  if (!quickButton) return;
  showAssistantAnswer(quickButton.dataset.assistantResponse);
});

assistantSend.addEventListener("click", () => {
  const question = assistantInput.value.trim().toLowerCase();
  let answer =
    "A PrimeCoat consultation can review your surface, preparation needs, product fit, scope, and financing options. Share your city and project type in the form to start.";

  if (question.includes("finance") || question.includes("payment")) {
    answer =
      "Financing options may be available for qualified homeowners. The best first step is a scope review so the financing conversation is tied to the actual project.";
  } else if (question.includes("product") || question.includes("coating") || question.includes("system")) {
    answer =
      "PrimeCoat reviews approved coating options based on surface condition, preparation needs, exposure, project goals, and manufacturer guidance. The exact product line is confirmed in the written recommendation.";
  } else if (question.includes("stucco") || question.includes("block") || question.includes("concrete") || question.includes("brick")) {
    answer =
      "Stucco, concrete, brick, masonry, and CMU/block may qualify depending on soundness, pH, existing coatings, repairs, and the selected coating system.";
  } else if (question.includes("wood") || question.includes("trim")) {
    answer =
      "Wood and trim details are reviewed separately from masonry because they may require different primers, stains, or exterior finish products.";
  } else if (question.includes("warranty")) {
    answer =
      "Warranty terms depend on the final product, surface condition, preparation, project scope, and manufacturer documentation. PrimeCoat keeps this in writing during consultation.";
  } else if (question.includes("video")) {
    answer =
      "The video library has spaces for original PrimeCoat videos covering coating systems, preparation, product selection, and financing conversations.";
  }

  showAssistantAnswer(answer);
});

window.setTimeout(() => {
  try {
    if (window.innerWidth > 720 && !sessionStorage.getItem("primecoatAssistantOpened")) {
      assistant.classList.add("is-open");
      sessionStorage.setItem("primecoatAssistantOpened", "true");
    }
  } catch (error) {
    if (window.innerWidth > 720) assistant.classList.add("is-open");
  }
}, 1400);

function closeVideoModal() {
  videoModal.hidden = true;
}

videoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = videoContent[button.dataset.videoTopic];
    videoLabel.textContent = content.label;
    videoTitle.textContent = content.title;
    videoCopy.textContent = content.copy;
    videoModal.hidden = false;
  });
});

videoClose.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    closeVideoModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !videoModal.hidden) {
    closeVideoModal();
  }

  if (event.key === "Escape" && !benefitPanel.hidden) {
    closeBenefitPanel();
  }

  if (event.key === "Escape" && !processPanel.hidden) {
    closeProcessPanel();
  }
});

consultationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = consultationForm.querySelector("button[type='submit']");
  button.textContent = "Consultation Request Ready";
});
