# 📚 Operating Systems — Interactive Study Notebook

> **Handwritten • Visual • Exam Ready**

An interactive, browser-based Operating Systems study notebook designed to make university exam preparation easier, faster, and more engaging. The project brings the complete **6-unit Operating Systems syllabus** into a single responsive study interface with handwritten-style notes, visual navigation, exam-focused content, quick revision tools, and progress tracking.

---

## ✨ What This Project Is

This project is more than a static notes page. It is designed as a **digital study notebook** where students can:

- Navigate through all six Operating Systems units.
- Read topic-wise, exam-oriented notes.
- Reveal or collapse individual topic cards.
- Search the entire notebook for concepts and keywords.
- Switch to an **Exam Mode** for focused revision.
- Jump directly to the Quick Revision section.
- Track revision progress using interactive checklists.
- Monitor reading progress while studying.
- Use the same notebook on desktop and mobile browsers.

The interface intentionally combines the feeling of **handwritten classroom notes** with the convenience of a modern interactive web application.

---

## 📖 Units Covered

### Unit 1 — Introduction & Architecture
Covers:
- Software vs Hardware
- Software classification
- What is an Operating System and its goals
- Generations / evolution of Operating Systems
- Types of Operating Systems
- OS services
- Dual-mode operation
- System calls
- OS structures
- Virtual machines
- Quick revision and checklist

### Unit 2 — Processes, Threads & CPU Scheduling
Covers:
- Process concepts and lifecycle
- Process Control Block (PCB)
- Context switching
- Threads
- User-Level Threads (ULT)
- Kernel-Level Threads (KLT)
- CPU scheduling
- Scheduling algorithms
- Gantt-chart based scheduling problems

### Unit 3 — IPC & Synchronization
Covers:
- Inter-Process Communication
- Race conditions
- Critical-section problem
- Peterson's Algorithm
- Semaphores
- Monitors
- Classical IPC / synchronization problems

### Unit 4 — Deadlocks
Covers:
- Deadlock system model
- Four Coffman conditions
- Resource Allocation Graphs (RAG)
- Deadlock prevention
- Deadlock avoidance
- Deadlock recovery

### Unit 5 — Memory Management
Covers:
- Memory hierarchy
- Memory Management Unit (MMU)
- Address translation
- MFT and MVT
- Internal and external fragmentation
- Compaction
- Paging
- Segmentation

### Unit 6 — I/O Systems & Device Management
Covers:
- Block and character devices
- Device controllers and registers
- Memory-mapped vs Port-mapped I/O
- DMA
- HOLD and HLDA signals
- DMA burst mode and cycle stealing
- Polling vs interrupt-driven I/O
- Interrupt cycle
- Interrupt Service Routine (ISR)
- Interrupt vector table
- IRET
- Device drivers
- Device-independent software
- Single, double / ping-pong, and circular buffering

---

## 🎯 Main Features

### 🧭 Circular 6-Unit Navigation
A radial unit selector provides quick access to all six units. The active unit is visually highlighted, and the central dial can also advance to the next unit.

### ✍️ Interactive Topic Cards
Topics are presented as expandable cards. Click the topic header or reveal button to show or hide the detailed notes.

### 🔍 Global Search
Search for concepts such as:

`semaphore` • `paging` • `banker` • `DMA` • `PCB` • `deadlock`

Matching topic cards are automatically displayed and expanded so the searched concept can be found quickly.

### ⚡ Exam Mode
Exam Mode provides a focused revision experience intended for last-minute preparation. It activates the exam-focused presentation and expands the relevant topic cards.

The selected Exam Mode state is saved in the browser using `localStorage`.

### 📖 Expand All / Collapse All
Quickly open every topic card in the currently selected unit, or collapse them again.

### 📑 Quick Revision
A dedicated Quick Revision action takes the student directly to the revision/checklist area of the currently active unit.

### ✅ Persistent Revision Checklists
Each unit includes revision checklist items. Checked items remain saved in the browser using `localStorage`, allowing students to return later without losing their progress.

### 📊 Reading Progress
A progress indicator at the top of the page shows how far the student has scrolled through the notebook.

### ⬆️ Back to Top
A floating Back-to-Top button appears after scrolling down, making long study sessions easier to navigate.

### 🔗 Quick Jump Chips
Each unit includes topic jump links. Selecting a topic automatically scrolls to it and expands the corresponding card.

### 🌙 Midnight Study Sky
The visual theme uses a dark study-night environment containing:
- Moon
- Multiple star layers
- Subtle meteors / shooting stars
- Notebook-style content cards
- Handwritten-inspired typography

The goal is to create a distinctive study atmosphere without sacrificing readability.

---

## 🗂️ Project Structure

A typical project folder contains:

```text
Operating-Systems-Study-Notebook/
│
├── index(1).html       # Main notebook interface and study content
├── style.css           # Complete visual styling and responsive layout
├── script.js           # Interactive navigation and study features
├── web-logo.png        # Browser / project icon
└── README.md           # Project documentation
```

### `index(1).html`
Contains the main structure of the study notebook, including the six units, topic cards, revision sections, navigation controls, and study content.

### `style.css`
Controls the visual presentation of the notebook, including the midnight-sky background, cards, typography, navigation, responsive layout, animations, buttons, badges, and mobile presentation.

### `script.js`
Controls the interactive behavior, including:
- Circular unit selection
- Unit switching
- Topic card reveal / collapse
- Expand All / Collapse All
- Global topic search
- Exam Mode
- Quick Revision navigation
- Checklist persistence
- Smooth scrolling
- Reading progress
- Back-to-Top behavior

### `web-logo.png`
Used as the webpage favicon / project icon.

### `README.md`
This documentation file explains the purpose, structure, features, and usage of the project.

---

## 🚀 How to Run

No server, framework, package manager, or build process is required for the basic project.

### Method 1 — Directly Open

1. Keep all project files in the same folder.
2. Double-click `index(1).html`.
3. The notebook will open in your browser.
4. Start studying.

### Method 2 — Open With a Local Development Server

For development, the project can also be served through a simple local web server or an editor such as VS Code.

Make sure the relative file paths remain unchanged so that the HTML can load its stylesheet, JavaScript, and icon correctly.

---

## 💻 Browser Compatibility

The project is intended for modern browsers supporting standard HTML, CSS, JavaScript, and browser `localStorage`.

Recommended:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

The layout is designed to work across **laptop/desktop and mobile-sized screens**.

---

## 💾 Local Storage

The interactive progress features use browser `localStorage`.

Saved information includes:

- Active unit
- Exam Mode state
- Revision checklist states

This means progress is stored locally in the browser rather than requiring an online account or external database.

> **Important:** Clearing browser/site storage can remove saved study progress.

---

## 🎓 Suggested Study Workflow

For normal study:

1. Select a unit from the circular navigation.
2. Use the Quick Jump topics to move through the unit.
3. Open individual topic cards.
4. Understand the definitions, explanations, examples, and diagrams.
5. Mark completed concepts in the revision checklist.

For last-minute revision:

1. Open the required unit.
2. Activate **Exam Mode**.
3. Use **Quick Revision**.
4. Search directly for weak topics.
5. Review the checklist.
6. Move to the next unit.

For full-syllabus revision:

**Unit 1 → Unit 2 → Unit 3 → Unit 4 → Unit 5 → Unit 6**

Complete each unit's checklist before moving to the next one.

---

## 🎨 Design Philosophy

The notebook follows three main principles:

### 1. Simple
Complex Operating Systems concepts are organized into smaller topic cards rather than presenting one large block of text.

### 2. Visual
The interface uses diagrams, badges, highlighted exam topics, navigation controls, and a notebook-inspired visual system to make long study material easier to scan.

### 3. Exam Ready
The project emphasizes definitions, important topics, revision checklists, and exam-oriented material so that the notebook can be used both for learning and final revision.

---

## 🧩 Technology Used

The project is built with standard web technologies:

- **HTML5** — structure and study content
- **CSS3** — visual design, layout, responsiveness, animations
- **JavaScript** — interaction and browser-side state
- **LocalStorage API** — persistence of study progress
- **Google Fonts** — handwritten and high-legibility typography

No backend or database is required for the interactive study features.

---

## 🔐 Privacy & Data

The project does not require a login or external database for its built-in progress tracking.

Checklist states and selected interface states are stored locally in the browser through `localStorage`.

The notebook's core functionality can therefore be used offline after the required project assets have been made available locally.

---

## 📝 Content Organization

The notebook is organized around a consistent pattern:

**Unit → Topic → Notes → Exam Focus → Revision**

This structure is intended to help students move naturally from understanding a concept to preparing it for examination.

Topic cards can be opened individually, while the unit-level Quick Revision section provides a compact way to review the important material before an exam.

---

## 🔧 Customization

Because the project uses plain HTML, CSS, and JavaScript, it can be customized without introducing a framework.

Possible modifications include:

- Changing the color palette
- Replacing the background theme
- Adding new topics
- Editing unit descriptions
- Adding diagrams
- Adding more exam questions
- Creating additional revision checklists
- Changing typography
- Adding keyboard shortcuts
- Extending search functionality
- Adding print-friendly exam notes

When adding new interactive elements, update both the HTML structure and the relevant JavaScript logic where required.

---

## ⚠️ Notes for Developers

Keep the project files together unless you intentionally update the relative paths in `index(1).html`.

If topic IDs or checklist IDs are changed, also verify the JavaScript selectors and localStorage keys that depend on them.

When adding a new unit, update:
1. Unit navigation buttons
2. Unit metadata in `script.js`
3. Unit content in the HTML
4. Quick Jump links
5. Revision checklist
6. Any unit-specific navigation logic

---

## 📌 Project Summary

**Operating Systems — Interactive Study Notebook** is a self-contained educational web project that turns a six-unit Operating Systems syllabus into a structured, interactive digital notebook.

It combines:

> 📚 Complete 6-unit organization  
> ✍️ Handwritten-style study presentation  
> 🌙 Midnight study-sky visual theme  
> 🧭 Circular unit navigation  
> 🔍 Global topic search  
> ⚡ Exam Mode  
> 📖 Expand / Collapse controls  
> 📑 Quick Revision  
> ✅ Persistent checklists  
> 📊 Reading progress  
> 📱 Responsive study experience

The result is a focused study environment designed to help students **learn concepts, navigate large notes quickly, revise efficiently, and track what they have completed**.

---

## 🌟 Final Note

This notebook is intended to be used as a study companion rather than simply a webpage. The interactive controls are designed to support different stages of preparation—from first learning a topic to performing a final quick revision before an examination.

**Study smart. Understand the concepts. Revise consistently. 🚀**
