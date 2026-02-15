// Flattened events array
const events = [
  { id: 1, title:"Community Yoga Session", type:"Fitness", date:"2025-08-20", location:"Bangalore", host:"Yoga with Anu", description:"Join us for a peaceful yoga session in Cubbon Park." },
  { id: 2, title:"Beginner Guitar Workshop", type:"Music", date:"2025-08-22", location:"Mumbai", host:"Strings Academy", description:"Learn the basics of guitar playing with hands-on guidance." },
  { id: 3, title:"Startup Networking Meetup", type:"Meetup", date:"2025-08-25", location:"Delhi", host:"Delhi Entrepreneurs Club", description:"Meet fellow entrepreneurs, pitch ideas, and network." },
  { id: 4, title:"Digital Marketing Seminar", type:"Workshop", date:"2025-08-28", location:"Hyderabad", host:"Marketing Gurus", description:"Learn the latest trends and strategies in digital marketing." },
  { id: 5, title:"Weekend Trek to Nandi Hills", type:"Sports", date:"2025-08-30", location:"Bangalore", host:"Adventure Trails", description:"An early morning trek to Nandi Hills followed by breakfast." },
  { id: 6, title:"Art & Craft for Kids", type:"Workshop", date:"2025-09-01", location:"Pune", host:"Creative Hands", description:"Fun and educational art activities for children aged 6–12." },
  { id: 7, title:"City Photography Walk", type:"Meetup", date:"2025-09-03", location:"Chennai", host:"Lens Lovers Club", description:"Explore the city while improving your photography skills." },
  { id: 8, title:"Cooking Masterclass: Italian Cuisine", type:"Workshop", date:"2025-09-05", location:"Kolkata", host:"Chef Maria", description:"Learn to cook authentic Italian dishes from scratch." },
  { id: 9, title:"Live Jazz Night", type:"Music", date:"2025-09-07", location:"Goa", host:"Goa Jazz Club", description:"An evening of live jazz performances by local musicians." },
  { id: 10, title:"Community Beach Cleanup", type:"Social", date:"2025-09-10", location:"Mumbai", host:"Eco Warriors", description:"Join us in cleaning up Juhu Beach and making a difference." },
  { id: 11, title:"Stand-up Comedy Night", type:"Entertainment", date:"2025-09-12", location:"Bangalore", host:"Laugh Out Loud", description:"A night full of laughter with top stand-up comedians." },
  { id: 12, title:"Chess Tournament", type:"Sports", date:"2025-09-14", location:"Delhi", host:"Delhi Chess Club", description:"Compete with fellow chess enthusiasts for exciting prizes." },
  { id: 13, title:"Mindfulness Meditation Retreat", type:"Fitness", date:"2025-09-16", location:"Rishikesh", host:"Peaceful Minds", description:"A weekend retreat to practice mindfulness and meditation." },
  { id: 14, title:"Blockchain for Beginners", type:"Workshop", date:"2025-09-18", location:"Pune", host:"TechLearn Hub", description:"Understand the basics of blockchain and its applications." },
  { id: 15, title:"Bird Watching Morning", type:"Meetup", date:"2025-09-20", location:"Jaipur", host:"Nature Explorers", description:"Join us to spot and learn about local bird species." },
  { id: 16, title:"Poetry Open Mic", type:"Entertainment", date:"2025-09-22", location:"Chandigarh", host:"Words & Verses", description:"An evening for poets to share their work with the community." },
  { id: 17, title:"DIY Home Gardening Workshop", type:"Workshop", date:"2025-09-24", location:"Ahmedabad", host:"Green Thumbs", description:"Learn how to start and maintain your own home garden." },
  { id: 18, title:"Marathon for Charity", type:"Sports", date:"2025-09-26", location:"Kochi", host:"Run for Cause", description:"Participate in a marathon to raise funds for charity." },
  { id: 19, title:"Language Exchange Meetup", type:"Meetup", date:"2025-09-28", location:"Bangalore", host:"Global Friends", description:"Practice languages and make friends from different cultures." },
  { id: 20, title:"Film Screening: Indie Shorts", type:"Entertainment", date:"2025-09-30", location:"Mumbai", host:"Cinephiles Club", description:"An evening of short films by independent filmmakers." }
];

const eventsGrid = document.getElementById("eventsGrid");
const typeFilter = document.getElementById("typeFilter");
const dateFilter = document.getElementById("dateFilter");
const locationFilter = document.getElementById("locationFilter");
const applyBtn = document.getElementById("applyFilters");
const clearBtn = document.getElementById("clearFilters");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalDate = document.getElementById("modalDate");
const modalLocation = document.getElementById("modalLocation");
const modalHost = document.getElementById("modalHost");
const modalDesc = document.getElementById("modalDesc");
const joinBtn = document.getElementById("joinBtn");

const formModal = document.getElementById("formModal");
const joinForm = document.getElementById("joinForm");

let selectedEventId = null;

function renderEvents() {
  const type = typeFilter.value;
  const date = dateFilter.value;
  const location = locationFilter.value.toLowerCase();

  const filtered = events.filter(e => 
    (!type || e.type === type) &&
    (!date || e.date === date) &&
    (!location || e.location.toLowerCase().includes(location))
  );

  eventsGrid.innerHTML = filtered.length
    ? filtered.map(e => `
        <div class="event-card" onclick="openModal(${e.id})">
          <h3><i class="fas fa-calendar-check"></i> ${e.title}</h3>
          <p>${e.type} • ${e.location}</p>
          <p>${e.date}</p>
          <p>${e.description.substring(0,60)}...</p>
        </div>
      `).join('')
    : '<p style="padding:1rem 2rem;">No events found for the selected filters.</p>';
}

function openModal(id) {
  selectedEventId = id;
  const event = events.find(e => e.id === id);
  modalTitle.textContent = event.title;
  modalType.textContent = "Type: " + event.type;
  modalDate.textContent = "Date: " + event.date;
  modalLocation.textContent = "Location: " + event.location;
  modalHost.textContent = "Host: " + event.host;
  modalDesc.textContent = event.description;
  modal.style.display = "flex";
}

function closeModal() { modal.style.display = "none"; }

joinBtn.onclick = () => {
  closeModal();
  openForm();
};

function openForm() {
  joinForm.reset();
  formModal.style.display = "flex";
}

function closeForm() { formModal.style.display = "none"; }

joinForm.onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const note = document.getElementById("note").value;
  const event = events.find(ev => ev.id === selectedEventId);

  alert(`You have successfully joined "${event.title}"!\n\nName: ${name}\nAge: ${age}\nEmail: ${email}\nContact: ${contact}\nNote: ${note}`);
  closeForm();
};

// Apply / Clear filters
applyBtn.onclick = () => { renderEvents(); };
clearBtn.onclick = () => {
  typeFilter.value = "";
  dateFilter.value = "";
  locationFilter.value = "";
  renderEvents();
};

// Initial render
renderEvents();