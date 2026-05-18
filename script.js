const STORAGE_KEY = "elwordsParticipants";

const form = document.getElementById("participantForm");
const idInput = document.getElementById("participantId");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const countryInput = document.getElementById("country");
const cityInput = document.getElementById("city");
const educationInput = document.getElementById("educationLevel");
const courseInput = document.getElementById("course");
const saveBtn = document.getElementById("saveBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const tableBody = document.querySelector("#participantsTable tbody");

function getParticipants() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function setParticipants(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getEmploymentStatus() {
  const checked = document.querySelector('input[name="employmentStatus"]:checked');
  return checked ? checked.value : "";
}

function setEmploymentStatus(value) {
  const target = document.querySelector(`input[name="employmentStatus"][value="${value}"]`);
  if (target) target.checked = true;
}

function clearEmploymentStatus() {
  document.querySelectorAll('input[name="employmentStatus"]').forEach((el) => {
    el.checked = false;
  });
}

function renderTable() {
  const participants = getParticipants();
  tableBody.innerHTML = "";

  if (participants.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = '<td colspan="7">No participants yet. Add one above.</td>';
    tableBody.appendChild(row);
    return;
  }

  participants.forEach((p) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${p.firstName} ${p.lastName}</td>
      <td>${p.country}</td>
      <td>${p.city}</td>
      <td>${p.educationLevel}</td>
      <td>${p.course}</td>
      <td>${p.employmentStatus}</td>
      <td>
        <button class="table-btn" data-action="edit" data-id="${p.id}">Edit</button>
        <button class="table-btn delete" data-action="delete" data-id="${p.id}">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function resetForm() {
  form.reset();
  idInput.value = "";
  clearEmploymentStatus();
  saveBtn.textContent = "Create Participant";
  cancelEditBtn.classList.add("hidden");
}

function upsertParticipant(payload) {
  const participants = getParticipants();
  const index = participants.findIndex((p) => p.id === payload.id);

  if (index >= 0) {
    participants[index] = payload;
  } else {
    participants.push(payload);
  }

  setParticipants(participants);
}

function deleteParticipant(id) {
  const participants = getParticipants().filter((p) => p.id !== id);
  setParticipants(participants);
}

function notifyRegistration(payload, isNew) {
  if (!isNew) return;

  const subject = encodeURIComponent(`New registration from ${payload.firstName} ${payload.lastName}`);
  const body = encodeURIComponent(
    `A new participant has registered on the website.%0D%0A%0D%0A` +
    `Name: ${payload.firstName} ${payload.lastName}%0D%0A` +
    `Country: ${payload.country}%0D%0A` +
    `City: ${payload.city}%0D%0A` +
    `Education: ${payload.educationLevel}%0D%0A` +
    `Interested in: ${payload.course}%0D%0A` +
    `Current status: ${payload.employmentStatus}`
  );

  window.open(`mailto:elwords@gmail.com?subject=${subject}&body=${body}`, "_self");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNew = !idInput.value;
  const payload = {
    id: idInput.value || crypto.randomUUID(),
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    country: countryInput.value.trim(),
    city: cityInput.value.trim(),
    educationLevel: educationInput.value,
    course: courseInput.value,
    employmentStatus: getEmploymentStatus(),
  };

  if (!payload.employmentStatus) {
    alert("Please select employment status.");
    return;
  }

  upsertParticipant(payload);
  notifyRegistration(payload, isNew);
  renderTable();
  resetForm();
});

tableBody.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) return;

  const action = target.getAttribute("data-action");
  const id = target.getAttribute("data-id");
  if (!action || !id) return;

  if (action === "delete") {
    deleteParticipant(id);
    renderTable();
    resetForm();
    return;
  }

  if (action === "edit") {
    const participant = getParticipants().find((p) => p.id === id);
    if (!participant) return;

    idInput.value = participant.id;
    firstNameInput.value = participant.firstName;
    lastNameInput.value = participant.lastName;
    countryInput.value = participant.country;
    cityInput.value = participant.city;
    educationInput.value = participant.educationLevel;
    courseInput.value = participant.course;
    setEmploymentStatus(participant.employmentStatus);

    saveBtn.textContent = "Update Participant";
    cancelEditBtn.classList.remove("hidden");
    window.scrollTo({ top: form.offsetTop - 40, behavior: "smooth" });
  }
});

cancelEditBtn.addEventListener("click", () => {
  resetForm();
});

renderTable();
