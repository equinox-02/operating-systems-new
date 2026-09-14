/**
 * OPERATING SYSTEMS — HANDWRITTEN EXAM NOTES
 * Interactions: Circular Unit Selector, Topic Card Reveal/Flip, Global Search, 
 * Exam Mode, Checklist Persistence, Smooth Scrolling & Reading Progress.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const radialUnitBtns = document.querySelectorAll('.radial-unit-btn');
  const unitPillBtns = document.querySelectorAll('.unit-pill-btn');
  const phaseSections = document.querySelectorAll('.phase-section');
  const dialNeedle = document.getElementById('dial-needle');
  const dialCenterKnob = document.getElementById('dial-center-knob');
  const knobActiveUnit = document.getElementById('knob-active-unit');
  const knobActiveTitle = document.getElementById('knob-active-title');
  const bannerPhasePill = document.getElementById('banner-phase-pill');
  const bannerUnitTitle = document.getElementById('banner-unit-title');
  const bannerUnitDesc = document.getElementById('banner-unit-desc');
  const activePhaseLabel = document.getElementById('active-phase-label');

  const searchInput = document.getElementById('search-input');
  const examModeBtn = document.getElementById('toggle-exam-mode');
  const expandAllBtn = document.getElementById('toggle-expand-all');
  const expandAllText = document.getElementById('expand-all-text');
  const quickRevBtn = document.getElementById('jump-quick-rev');
  const backToTopBtn = document.getElementById('back-to-top');
  const readingProgress = document.getElementById('reading-progress');

  // Metadata for the 6 Units
  const unitsMeta = {
    'phase-1': {
      unitNum: '1',
      unitBadge: 'U1',
      shortTitle: 'Intro & Arch',
      fullTitle: 'Unit 1: Introduction & Architecture',
      pill: 'PHASE 1',
      desc: 'Software vs Hardware, 3 Software Types, Evolution, OS Types, System Calls, and Kernel Structures.',
      angle: -90
    },
    'phase-2': {
      unitNum: '2',
      unitBadge: 'U2',
      shortTitle: 'Processes & CPU',
      fullTitle: 'Unit 2: Processes, Threads & CPU Scheduling',
      pill: 'PHASE 2',
      desc: 'Process lifecycle, PCB, Context Switching, Threads (ULT vs KLT), and CPU Scheduling algorithms with Gantt charts.',
      angle: -30
    },
    'phase-3': {
      unitNum: '3',
      unitBadge: 'U3',
      shortTitle: 'IPC & Sync',
      fullTitle: 'Unit 3: Inter-Process Communication & Synchronization',
      pill: 'PHASE 3',
      desc: 'Race conditions, Critical Section problem, Peterson\'s Algorithm, Semaphores, Monitors, and Classical IPC problems.',
      angle: 30
    },
    'phase-4': {
      unitNum: '4',
      unitBadge: 'U4',
      shortTitle: 'Deadlocks',
      fullTitle: 'Unit 4: Deadlocks',
      pill: 'PHASE 4',
      desc: 'Deadlock system model, 4 Coffman conditions, Resource Allocation Graphs (RAG), Prevention, Avoidance, and Recovery.',
      angle: 90
    },
    'phase-5': {
      unitNum: '5',
      unitBadge: 'U5',
      shortTitle: 'Memory Mgmt',
      fullTitle: 'Unit 5: Memory Management',
      pill: 'PHASE 5',
      desc: 'Memory hierarchy, MMU translation, MFT/MVT, fragmentation, compaction, Paging architecture, and Segmentation.',
      angle: 150
    },
    'phase-6': {
      unitNum: '6',
      unitBadge: 'U6',
      shortTitle: 'I/O Systems',
      fullTitle: 'Unit 6: I/O Systems & Device Management',
      pill: 'PHASE 6',
      desc: 'Block vs Character devices, Device Controllers, DMA working, Interrupt cycle & ISR, drivers, and buffering schemes.',
      angle: 210
    }
  };

  // 1. Unified Phase / Unit Switching
  function switchPhase(targetPhaseId, scrollToTop = false) {
    const meta = unitsMeta[targetPhaseId];
    if (!meta) return;

    // Update Radial Unit Buttons
    radialUnitBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-target') === targetPhaseId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-checked', isTarget ? 'true' : 'false');
    });

    // Update Linear Unit Pills
    unitPillBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-target') === targetPhaseId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    // Update Dial Needle & Knob Center
    if (dialNeedle) {
      dialNeedle.style.transform = `translate(-50%, -100%) rotate(${meta.angle + 90}deg)`;
    }
    if (knobActiveUnit) knobActiveUnit.textContent = meta.unitBadge;
    if (knobActiveTitle) knobActiveTitle.textContent = meta.shortTitle;

    // Update Active Unit Banner
    if (bannerPhasePill) bannerPhasePill.textContent = meta.pill;
    if (bannerUnitTitle) bannerUnitTitle.textContent = meta.fullTitle;
    if (bannerUnitDesc) bannerUnitDesc.textContent = meta.desc;

    // Update Header Active Phase Pill
    if (activePhaseLabel) {
      activePhaseLabel.textContent = `Phase ${meta.unitNum}: Unit ${meta.unitNum}`;
    }

    // Update Sections
    phaseSections.forEach(section => {
      const isTarget = section.id === targetPhaseId;
      section.classList.toggle('active', isTarget);
    });

    // Save to localStorage
    localStorage.setItem('os_notes_active_phase', targetPhaseId);

    if (scrollToTop) {
      const container = document.querySelector('.notebook-container');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Bind click on Radial Dial Buttons
  radialUnitBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPhaseId = btn.getAttribute('data-target');
      switchPhase(targetPhaseId, true);
    });
  });

  // Bind click on Linear Unit Pills
  unitPillBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPhaseId = btn.getAttribute('data-target');
      switchPhase(targetPhaseId, true);
    });
  });

  // Clicking center knob advances to next unit
  if (dialCenterKnob) {
    dialCenterKnob.addEventListener('click', () => {
      const currentActive = document.querySelector('.phase-section.active');
      const currentId = currentActive ? currentActive.id : 'phase-1';
      const keys = Object.keys(unitsMeta);
      const currentIndex = keys.indexOf(currentId);
      const nextIndex = (currentIndex + 1) % keys.length;
      switchPhase(keys[nextIndex], true);
    });
  }

  // Restore active phase from localStorage if present
  const savedPhase = localStorage.getItem('os_notes_active_phase');
  if (savedPhase && document.getElementById(savedPhase)) {
    switchPhase(savedPhase, false);
  } else {
    switchPhase('phase-1', false);
  }

  // 2. Interactive Topic Card Flip / Reveal (Hover & Click / Tap Support)
  document.querySelectorAll('.topic-card').forEach(card => {
    const revealBtn = card.querySelector('.topic-reveal-btn');
    const header = card.querySelector('.topic-card-header');

    const toggleCard = (e) => {
      // Don't toggle if clicking on a badge link
      if (e.target.closest('a')) return;
      
      const isExpanded = card.classList.toggle('is-expanded');
      if (revealBtn) {
        revealBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        const label = revealBtn.querySelector('.reveal-label');
        if (label) {
          label.textContent = isExpanded ? 'Click to Collapse Notes' : 'Click / Hover to Reveal Notes';
        }
      }
    };

    if (revealBtn) {
      revealBtn.addEventListener('click', toggleCard);
    }
    if (header) {
      header.addEventListener('click', toggleCard);
    }
  });

  // Expand All / Collapse All Toggle in Header
  if (expandAllBtn) {
    let allExpanded = false;
    expandAllBtn.addEventListener('click', () => {
      allExpanded = !allExpanded;
      const currentActive = document.querySelector('.phase-section.active');
      if (currentActive) {
        const cards = currentActive.querySelectorAll('.topic-card');
        cards.forEach(card => {
          card.classList.toggle('is-expanded', allExpanded);
          const btn = card.querySelector('.topic-reveal-btn');
          if (btn) {
            btn.setAttribute('aria-expanded', allExpanded ? 'true' : 'false');
            const label = btn.querySelector('.reveal-label');
            if (label) {
              label.textContent = allExpanded ? 'Click to Collapse Notes' : 'Click / Hover to Reveal Notes';
            }
          }
        });
      }
      expandAllBtn.classList.toggle('active', allExpanded);
      if (expandAllText) {
        expandAllText.textContent = allExpanded ? 'Collapse All' : 'Expand All';
      }
    });
  }

  // 3. Global Topic Search & Filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const allTopicCards = document.querySelectorAll('.topic-card');

      if (!query) {
        allTopicCards.forEach(card => {
          card.style.display = '';
        });
        return;
      }

      let firstMatchPhase = null;

      allTopicCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const matches = text.includes(query);
        card.style.display = matches ? '' : 'none';

        if (matches) {
          // Auto-expand matching cards so search terms are visible
          card.classList.add('is-expanded');
          const btn = card.querySelector('.topic-reveal-btn');
          if (btn) btn.setAttribute('aria-expanded', 'true');

          if (!firstMatchPhase) {
            const parentPhase = card.closest('.phase-section');
            if (parentPhase) {
              firstMatchPhase = parentPhase.id;
            }
          }
        }
      });

      // Automatically switch to phase containing first matching topic if needed
      if (firstMatchPhase) {
        const currentActive = document.querySelector('.phase-section.active');
        const activeHasVisible = currentActive ? currentActive.querySelectorAll('.topic-card:not([style*="display: none"])').length > 0 : false;
        if (!activeHasVisible) {
          switchPhase(firstMatchPhase, false);
        }
      }
    });
  }

  // 4. Exam Mode Toggle
  if (examModeBtn) {
    const isExamModeSaved = localStorage.getItem('os_notes_exam_mode') === 'true';
    if (isExamModeSaved) {
      document.body.classList.add('exam-mode-active');
      examModeBtn.classList.add('active-gold');
      examModeBtn.innerHTML = '<span>⚡</span> Exam Mode (ON)';
      // Expand all cards in exam mode
      document.querySelectorAll('.topic-card').forEach(c => c.classList.add('is-expanded'));
    }

    examModeBtn.addEventListener('click', () => {
      const isActive = document.body.classList.toggle('exam-mode-active');
      examModeBtn.classList.toggle('active-gold', isActive);
      examModeBtn.innerHTML = isActive ? '<span>⚡</span> Exam Mode (ON)' : '<span>⚡</span> Exam Mode';
      localStorage.setItem('os_notes_exam_mode', isActive);

      if (isActive) {
        document.querySelectorAll('.topic-card').forEach(c => c.classList.add('is-expanded'));
      }
    });
  }

  // 5. Jump to Quick Revision Button
  if (quickRevBtn) {
    quickRevBtn.addEventListener('click', () => {
      const currentActive = document.querySelector('.phase-section.active');
      if (currentActive) {
        const qrCard = currentActive.querySelector('.quick-revision-card');
        if (qrCard) {
          qrCard.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  // 6. Interactive Revision Checklists with localStorage persistence
  const checklistInputs = document.querySelectorAll('.checklist-items input[type="checkbox"]');
  checklistInputs.forEach(checkbox => {
    const checkId = checkbox.id;
    if (checkId) {
      const isChecked = localStorage.getItem('os_check_' + checkId) === 'true';
      checkbox.checked = isChecked;
      if (isChecked) {
        checkbox.closest('.check-item')?.classList.add('completed');
      }

      checkbox.addEventListener('change', () => {
        localStorage.setItem('os_check_' + checkId, checkbox.checked);
        checkbox.closest('.check-item')?.classList.toggle('completed', checkbox.checked);
      });
    }
  });

  // 7. Subtopic Jump Chips
  document.querySelectorAll('.jump-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = chip.getAttribute('href')?.replace('#', '');
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        // Expand target card automatically
        if (targetElem.classList.contains('topic-card')) {
          targetElem.classList.add('is-expanded');
          const btn = targetElem.querySelector('.topic-reveal-btn');
          if (btn) btn.setAttribute('aria-expanded', 'true');
        }
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 8. Scroll Progress & Back to Top Button
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    if (readingProgress) {
      readingProgress.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
