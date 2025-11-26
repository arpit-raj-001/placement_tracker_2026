const placementData = [
  {
    company: "Celebal Technologies",
    type: "SLI + FTE",
    roles: "Data Science, Data Engineer",
    ctc: 7.0,
    stipend: 15000,
    placed: 11,
    status: "Completed",
  },
  {
    company: "deloitte",
    type: "FTE",
    roles: "mendix developer",
    ctc: 7.6,
    stipend: 0,
    placed: 0,
    status: "Pending",
  },
  {
    company: "blogvault",
    type: "SLI+FTE",
    roles: "SDE",
    ctc: 12,
    stipend: 30000,
    placed: 0,
    status: "Pending",
  },
  {
    company: "NAV",
    type: "SLI + FTE",
    roles: "SWE",
    ctc: 11,
    stipend: 35000,
    placed: 3,
    status: "Completed",
  },
  {
    company: "Amazon (off)",
    type: "SLI + FTE",
    roles: "SDE",
    ctc: 45.0,
    stipend: 110000,
    placed: 1,
    status: "Completed",
  },
  {
    company: "Ador",
    type: "FTE",
    roles: "core engineer",
    ctc: 9.0,
    stipend: 0,
    placed: 2,
    status: "Completed",
  },
  {
    company: "jio (off)",
    type: "FTE",
    roles: "SDE",
    ctc: 15,
    stipend: 0,
    placed: 1,
    status: "Completed",
  },
  {
    company: "FreeCharge",
    type: "SLI + FTE",
    roles: "Devops, Data engineer, QA, Frontend, Backend",
    ctc: 7.0,
    stipend: 25000,
    placed: 0,
    status: "Pending",
  },
  {
    company: "Provakil",
    type: "SLI + FTE",
    roles: "Associate Software Developer",
    ctc: 6.5,
    stipend: 20000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "kickdrum",
    type: "FTE",
    roles: "Software Developer",
    ctc: 15,
    stipend: 35000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "hashedin(deloitte)",
    type: "SLI+FTE",
    roles: "Software engineer",
    ctc: 8.1,
    stipend: 25000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "ShodhAI",
    type: "SLI + FTE",
    roles: "ML, Fullstack, SRE",
    ctc: 12.0,
    stipend: 15000,
    placed: 4,
    status: "Completed",
  },
  {
    company: "Unicommerce",
    type: "SLI + FTE",
    roles: "Enterprise Onboarding Profile",
    ctc: 5.5,
    stipend: 25000,
    placed: 4,
    status: "Completed",
  },
  {
    company: "Nagarro Software",
    type: "SLI + FTE",
    roles: "Full Stack Developer",
    ctc: 7.0,
    stipend: 30000,
    placed: 4,
    status: "Completed",
  },
  {
    company: "TITAN.email",
    type: "SLI + FTE",
    roles: "SDE",
    ctc: 25.0,
    stipend: 100000,
    placed: 0,
    status: "Completed",
  },
  {
    company: "Treebo Hotels",
    type: "SLI + FTE",
    roles: "Backend Developer",
    ctc: 12.5,
    stipend: 25000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "Treebo Hotels",
    type: "SLI + FTE",
    roles: "SDET",
    ctc: 9.5,
    stipend: 15000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "Treebo Hotels",
    type: "SLI + FTE",
    roles: "SRE",
    ctc: 7.0,
    stipend: 15000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "Spring Financial",
    type: "SLI + FTE",
    roles: "Software Engineer Trainee",
    ctc: 12.0,
    stipend: 25000,
    placed: 3,
    status: "Completed",
  },
  {
    company: "APMSE(Eagleview)",
    type: "SLI + FTE",
    roles: "SDE",
    ctc: 12.84,
    stipend: 50000,
    placed: 7,
    status: "Completed",
  },
  {
    company: "ZS Associates",
    type: "SLI + FTE",
    roles: "Software Developer, Business Analyst, DAA",
    ctc: 14.15,
    stipend: 0,
    placed: 23,
    status: "Completed",
  },
  {
    company: "DEShaw",
    type: "SLI + FTE",
    roles: "SDE",
    ctc: 59.3,
    stipend: 150000,
    placed: 3,
    status: "Completed",
  },
  {
    company: "EPAM",
    type: "SLI + FTE",
    roles: "Tech Role",
    ctc: 8.48,
    stipend: 27500,
    placed: 3,
    status: "Completed",
  },
  {
    company: "ProcDNA",
    type: "SLI + FTE",
    roles: "Business Analyst, Data Science",
    ctc: 16.74,
    stipend: 25000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "Media.net",
    type: "SLI",
    roles: "SDE",
    ctc: 39.3,
    stipend: 100000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "Triology",
    type: "FTE",
    roles: "SDE",
    ctc: 32.5,
    stipend: 0,
    placed: 0,
    status: "Completed",
  },
  {
    company: "E2E Networks",
    type: "SLI + FTE",
    roles: "Associate Software Engineer",
    ctc: 13.0,
    stipend: 48200,
    placed: 5,
    status: "Completed",
  },
  {
    company: "Tekion",
    type: "SLI + FTE",
    roles: "Associate Software Engineer",
    ctc: 21.0,
    stipend: 65000,
    placed: 5,
    status: "Completed",
  },
  {
    company: "Signzy",
    type: "SLI + PPO",
    roles: "MERN Stack Intern",
    ctc: 0,
    stipend: 40000,
    placed: 0,
    status: "Completed",
  },
  {
    company: "Whatfix(Quiko)",
    type: "SLI + FTE",
    roles: "Software Engineer",
    ctc: 16.0,
    stipend: 50000,
    placed: 4,
    status: "Completed",
  },
  {
    company: "Eatclub",
    type: "SLI + FTE",
    roles: "SDE",
    ctc: 22.0,
    stipend: 40000,
    placed: 5,
    status: "Completed",
  },
  {
    company: "MakeMyTrip",
    type: "SLI + FTE",
    roles: "Software Engineer",
    ctc: 22.0,
    stipend: 50000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "Sprinklr",
    type: "SLI + FTE",
    roles: "Cloud Engineer",
    ctc: 18.0,
    stipend: 50000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "Addverb Technologies",
    type: "SLI + FTE",
    roles: "Software Developer, Mobile Robotics",
    ctc: 16.0,
    stipend: 25000,
    placed: 7,
    status: "Completed",
  },
  {
    company: "Triumph Motorcycles",
    type: "SLI + FTE",
    roles: "Graduate Engineer Trainee",
    ctc: 12.5,
    stipend: 50000,
    placed: 4,
    status: "Completed",
  },
  {
    company: "Bajaj Finserv Health",
    type: "SLI + PPO",
    roles: "Backend Developer(Java)",
    ctc: 12.2,
    stipend: 35000,
    placed: 2,
    status: "Completed",
  },
  {
    company: "BNY Mellon",
    type: "Intern + PPO",
    roles: "SDE",
    ctc: 22.0,
    stipend: 75000,
    placed: 4,
    status: "Completed",
  },
  {
    company: "Deloitte",
    type: "Intern + PPO",
    roles: "Product Engineer, DataScience, UI/UX",
    ctc: 12.5,
    stipend: 30000,
    placed: 18,
    status: "Completed",
  },
  {
    company: "OneBanc",
    type: "SLI+FTE",
    roles: "Android, IOS, Full Stack, UI/UX",
    ctc: 12.0,
    stipend: 40000,
    placed: 1,
    status: "Completed",
  },
  {
    company: "Curiflow",
    type: "SLI+FTE",
    roles: "Frontend Developer, SDE",
    ctc: 15.0,
    stipend: 60000,
    placed: 4,
    status: "Completed",
  },
  {
    company: "Aperam",
    type: "SLI + FTE",
    roles: "AI & Automation, Data Engineer",
    ctc: 11.5,
    stipend: 30000,
    placed: 5,
    status: "Completed",
  },
  {
    company: "AMD",
    type: "SLI + FTE",
    roles: "Software and Hardware Engineer",
    ctc: 26.1,
    stipend: 50000,
    placed: 0,
    status: "Pending",
  },
  {
    company: "GoDaddy",
    type: "SLI + FTE",
    roles: "Product Manager",
    ctc: 28.5,
    stipend: 40000,
    placed: 1,
    status: "Completed",
  },
  {
    company: "HSBC",
    type: "FTE",
    roles: "Trainee Software Engineer",
    ctc: 16.43,
    stipend: 0,
    placed: 0,
    status: "Pending",
  },
  {
    company: "Samsung Noida",
    type: "SLI",
    roles: "R & D",
    ctc: 15.5,
    stipend: 50000,
    placed: 6,
    status: "Completed",
  },
  {
    company: "Samsung R&D",
    type: "SLI",
    roles: "R & D",
    ctc: 15.5,
    stipend: 50000,
    placed: 8,
    status: "Completed",
  },
  {
    company: "Media.net",
    type: "SLI",
    roles: "SRE",
    ctc: 15.7,
    stipend: 100000,
    placed: 1,
    status: "completed",
  },
  {
    company: "Josh Technology Group",
    type: "SLI + FTE",
    roles: "Associate Software Developer",
    ctc: 10.78,
    stipend: 22500,
    placed: 0,
    status: "Completed",
  },
  {
    company: "Josh Technology Group",
    type: "SLI + FTE",
    roles: "Software Quality Analyst",
    ctc: 5.39,
    stipend: 20000,
    placed: 0,
    status: "Completed",
  },
  {
    company: "Park+",
    type: "SLI + FTE",
    roles: "SDE - 1 Backend",
    ctc: 30.0,
    stipend: 30000,
    placed: 0,
    status: "Pending",
  },
  {
    company: "Eucloid",
    type: "Intern",
    roles: "Data Solutions Associate Intern",
    ctc: 8.5,
    stipend: 35000,
    placed: 0,
    status: "Pending",
  },
  {
    company: "ION",
    type: "FTE",
    roles: "SDE, Data Scientist, Tech-Analyst",
    ctc: 17.3,
    stipend: 0,
    placed: 1,
    status: "Completed",
  },
  {
    company: "rtCamp",
    type: "Intern + FTE",
    roles: "Associate Software Engineer",
    ctc: 13.0,
    stipend: 25000,
    placed: 0,
    status: "Completed",
  },
  {
    company: "Honda Cars",
    type: "SLI + FTE",
    roles: "Graduate Engineer Trainee",
    ctc: 6.0,
    stipend: 20000,
    placed: 1,
    status: "Completed",
  },
  {
    company: "Manthan",
    type: "SLI + FTE",
    roles: "",
    ctc: 7,
    stipend: 25000,
    placed: 5,
    status: "Completed",
  },
  {
    company: "MAVQ",
    type: "SLI + FTE",
    roles: "",
    ctc: 14.3,
    stipend: 0,
    placed: 4,
    status: "Completed",
  },
  {
    company: "Innovaccer",
    type: "SLI + FTE",
    roles: "data analyst",
    ctc: 10.0,
    stipend: 40000,
    placed: 11,
    status: "Completed",
  },
  {
    company: "Dell (Off-Campus)",
    type: "FTE",
    roles: "SDE",
    ctc: 13.6,
    stipend: 0,
    placed: 1,
    status: "Completed",
  },
  {
    company: "Swiggy (Off-Campus)",
    type: "FTE",
    roles: "ASDE",
    ctc: 10.0,
    stipend: 0,
    placed: 1,
    status: "Completed",
  },
  {
    company: "Kaabil Tech",
    type: "SLI + FTE",
    roles: "SWE",
    ctc: 12,
    stipend: 25,
    placed: 6,
    status: "Completed",
  },
   {
    company: "BTC",
    type: "SLI + FTE",
    roles: "not known yet",
    ctc: 12.00,
    stipend: 35000,
    placed: 1,
    status: "Completed",
  },
  {
    company: "BTC",
    type: "SLI + FTE",
    roles: "AI engineer",
    ctc: 7.21,
    stipend: 25000,
    placed: 1,
    status: "Completed",
  },
  {
    company: "Axestrack",
    type: "SLI + FTE",
    roles: "",
    ctc: 0,
    stipend: 0,
    placed: 0,
    status: "Pending",
  },
];

function calculateStats() {
  // Filter only placements with valid CTC
  const validCtc = placementData.filter((item) => item.ctc > 0);
  const ctcValues = validCtc.map((item) => item.ctc).sort((a, b) => a - b);

  // Calculate average CTC offered (simple average of all CTCs)
  const avgCtc =
    ctcValues.reduce((sum, val) => sum + val, 0) / ctcValues.length;

  // Calculate median CTC offered
  const midOffered = Math.floor(ctcValues.length / 2);
  const medianCtcOffered =
    ctcValues.length % 2 === 0
      ? (ctcValues[midOffered - 1] + ctcValues[midOffered]) / 2
      : ctcValues[midOffered];

  // Calculate average CTC secured (weighted by number of students placed)
  const placedWithCtc = placementData.filter(
    (item) => item.ctc > 0 && item.placed > 0
  );
  const totalCtcWeighted = placedWithCtc.reduce(
    (sum, item) => sum + item.ctc * item.placed,
    0
  );
  const totalStudentsPlaced = placedWithCtc.reduce(
    (sum, item) => sum + item.placed,
    0
  );
  const avgCtcSecured =
    totalStudentsPlaced > 0 ? totalCtcWeighted / totalStudentsPlaced : 0;

  // Calculate median CTC secured (create array with CTCs repeated by placed count)
  const securedCtcArray = [];
  placedWithCtc.forEach((item) => {
    for (let i = 0; i < item.placed; i++) {
      securedCtcArray.push(item.ctc);
    }
  });
  securedCtcArray.sort((a, b) => a - b);

  const midSecured = Math.floor(securedCtcArray.length / 2);
  const medianCtcSecured =
    securedCtcArray.length % 2 === 0
      ? (securedCtcArray[midSecured - 1] + securedCtcArray[midSecured]) / 2
      : securedCtcArray[midSecured];

  // Filter valid stipends (non-zero)
  const validStipends = placementData.filter((item) => item.stipend > 0);
  const stipendValues = validStipends
    .map((item) => item.stipend)
    .sort((a, b) => a - b);

  // Calculate average stipend
  const avgStipend =
    stipendValues.reduce((sum, val) => sum + val, 0) / stipendValues.length;

  // Calculate median stipend
  const midStipend = Math.floor(stipendValues.length / 2);
  const medianStipend =
    stipendValues.length % 2 === 0
      ? (stipendValues[midStipend - 1] + stipendValues[midStipend]) / 2
      : stipendValues[midStipend];

  return {
    avgCtc: avgCtc.toFixed(2),
    avgCtcSecured: avgCtcSecured.toFixed(2),
    medianCtcOffered: medianCtcOffered.toFixed(2),
    medianCtcSecured: medianCtcSecured.toFixed(2),
    avgStipend: (avgStipend / 1000).toFixed(1),
    medianStipend: (medianStipend / 1000).toFixed(1),
  };
}

function renderTable(data) {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  data.forEach((item, index) => {
    const row = document.createElement("tr");

    let ctcClass = "ctc-low";
    if (item.ctc > 8) ctcClass = "ctc-high";
    else if (item.ctc > 5) ctcClass = "ctc-medium";

    const ctcDisplay = item.ctc > 0 ? `₹${item.ctc.toFixed(2)}` : "N/A";
    const stipendDisplay =
      item.stipend > 0 ? `₹${(item.stipend / 1000).toFixed(0)}K` : "N/A";

    row.innerHTML = `
      <td><strong>${index + 1}</strong></td>
      <td><strong>${item.company}</strong></td>
      <td>${item.type}</td>
      <td>${item.roles}</td>
      <td class="${ctcClass}">${ctcDisplay}</td>
      <td>${stipendDisplay}</td>
      <td><strong>${item.placed}</strong></td>
      <td><span class="status-badge status-${item.status.toLowerCase()}">${
      item.status
    }</span></td>
    `;
    tbody.appendChild(row);
  });
}

function updateDashboard() {
  const stats = calculateStats();

  document.getElementById("avgCtc").textContent = `${stats.avgCtc} LPA`;
  document.getElementById(
    "avgCtcSecured"
  ).textContent = `${stats.avgCtcSecured} LPA`;
  document.getElementById(
    "medianCtcOffered"
  ).textContent = `${stats.medianCtcOffered} LPA`;
  document.getElementById(
    "medianCtcSecured"
  ).textContent = `${stats.medianCtcSecured} LPA`;
  document.getElementById("avgStipend").textContent = `₹${stats.avgStipend}K`;
  document.getElementById(
    "medianStipend"
  ).textContent = `₹${stats.medianStipend}K`;

  const completedPlacements = placementData.filter(
    (item) => item.status === "Completed"
  );
  const totalPlaced = completedPlacements.reduce(
    (sum, item) => sum + item.placed,
    0
  );
  const placementPercentage = (((totalPlaced + 3) / 490) * 100).toFixed(2);

  document.getElementById(
    "studentsPlaced"
  ).textContent = `${totalPlaced+3} / 490`;
  document.getElementById(
    "placementRate"
  ).textContent = `${placementPercentage}%`;

  const needleRotation = (parseFloat(placementPercentage) / 100) * 180 - 90;
  document.getElementById(
    "needle"
  ).style.transform = `translateX(-50%) rotate(${needleRotation}deg)`;

  const percentage = parseFloat(placementPercentage);
  const odometerValue = document.getElementById("placementRate");
  if (percentage < 40) {
    odometerValue.style.color = "#dc3545";
  } else if (percentage < 70) {
    odometerValue.style.color = "#ff9800";
  } else {
    odometerValue.style.color = "#28a745";
  }
}

function filterAndSort() {
  let filteredData = [...placementData];

  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  if (searchTerm) {
    filteredData = filteredData.filter((item) =>
      item.company.toLowerCase().includes(searchTerm)
    );
  }

  const statusFilter = document.getElementById("statusFilter").value;
  if (statusFilter !== "all") {
    filteredData = filteredData.filter((item) => item.status === statusFilter);
  }

  const sortType = document.getElementById("sortSelect").value;
  switch (sortType) {
    case "ctc-high":
      filteredData.sort((a, b) => b.ctc - a.ctc);
      break;
    case "ctc-low":
      filteredData.sort((a, b) => a.ctc - b.ctc);
      break;
    case "placed":
      filteredData.sort((a, b) => b.placed - a.placed);
      break;
    case "company":
      filteredData.sort((a, b) => a.company.localeCompare(b.company));
      break;
  }

  renderTable(filteredData);
}

document.getElementById("searchInput").addEventListener("input", filterAndSort);
document
  .getElementById("statusFilter")
  .addEventListener("change", filterAndSort);
document.getElementById("sortSelect").addEventListener("change", filterAndSort);

// Sort by CTC (high to low) by default
placementData.sort((a, b) => b.ctc - a.ctc);
renderTable(placementData);
updateDashboard();











