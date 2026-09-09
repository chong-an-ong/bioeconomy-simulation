const delegations = {
  "India": {
    lead: {
      name: "Rajesh S. Gokhale",
      role: "Secretary, Department of Biotechnology",
      position: "National government lead negotiator",
      background: "Add background, biography, and relevant national strategy information here.",
      photo: "assets/actors/rajesh-gokhale.jpg",
      links: []
    },
    actors: [
      {
        name: "Ashish Gaikwad",
        role: "Managing Director, Praj Industries",
        constituency: "Bio-based industrial manufacturing",
        position: "Rapid commercialization of bio-based chemicals, polymers, fuels and materials, with policies that make them competitive with fossil-based alternatives.",
        background: "Add background here.",
        photo: "assets/actors/ashish-gaikwad.jpg",
        links: []
      },
      {
        name: "Sunita Narain",
        role: "Director General, Centre for Science and Environment",
        constituency: "Environment / public interest",
        position: "Strong environmental safeguards, resource limits, and a bioeconomy that does not undermine food security or ecosystems.",
        background: "Add background here.",
        photo: "assets/actors/sunita-narain.jpg",
        links: []
      },
      {
        name: "Binod Anand",
        role: "National Vice-President, All India Kisan Coordination Committee; President, NAFPO",
        constituency: "Farmers / agricultural producers",
        position: "Greater farmer ownership of value chains, higher farm incomes, and protection against biomass demand benefiting downstream industry at farmers’ expense.",
        background: "Add background here.",
        photo: "assets/actors/binod-anand.jpg",
        links: []
      }
    ]
  },

  "China": {
    lead: { name: "Xin Guobin", role: "Vice Minister, Ministry of Industry and Information Technology", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/xin-guobin.jpg", links: [] },
    actors: [
      { name: "Yu Xuejun (余学军)", role: "Chair, China Bio-Fermentation Industry Association", constituency: "Industrial biomanufacturing", position: "Rapid industrial scaling, technological upgrading, and government support for competitive biomanufacturing.", background: "Add background here.", photo: "assets/actors/yu-xuejun.jpg", links: [] },
      { name: "Zhu Xuexing (朱学星)", role: "Founder/leader, Shuangfu Bamboo Professional Cooperative", constituency: "Rural feedstock producers / cooperatives", position: "Greater value capture for rural producers, stronger links between biomass producers and industry, and rural development.", background: "Add background here.", photo: "assets/actors/zhu-xuexing.jpg", links: [] },
      { name: "Chen Xinwei (陈新伟)", role: "President, China Chemical Fibers Association", constituency: "Bio-based materials / textiles", position: "Accelerated commercialization of bio-based fibers, diversified feedstocks, and integration of bio-based materials into China’s manufacturing base.", background: "Add background here.", photo: "assets/actors/chen-xinwei.jpg", links: [] }
    ]
  },

  "Brazil": {
    lead: { name: "João Paulo Capobianco", role: "Minister of Environment and Climate Change", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/joao-paulo-capobianco.jpg", links: [] },
    actors: [
      { name: "Sila Mesquita Apurinã", role: "President, IPDA; National Coordinator, Rede de Trabalho Amazônico", constituency: "Indigenous peoples / community-controlled bioeconomy", position: "Community control over bioeconomy development, protection of traditional knowledge, and equitable benefit-sharing.", background: "Add background here.", photo: "assets/actors/sila-mesquita-apurina.jpg", links: [] },
      { name: "Angela Pinhati", role: "Sustainability Director, Natura", constituency: "Bioindustry / commercialization", position: "Scalable commercialization of biodiversity, investment in value-added processing, and stronger markets for sustainable Amazonian inputs.", background: "Add background here.", photo: "assets/actors/angela-pinhati.jpg", links: [] },
      { name: "Roberto Vilela", role: "Executive Director, Tabôa", constituency: "Family farmers / inclusive bioeconomy finance", position: "Expand access to credit and technical assistance for smallholders, strengthen farmer participation in higher-value bioeconomy chains, and link rural incomes with sustainable land management.", background: "Add background here.", photo: "assets/actors/roberto-vilela.jpg", links: [] }
    ]
  },

  "Germany": {
    lead: { name: "Dorothee Bär", role: "Federal Minister of Research, Technology and Space", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/dorothee-baer.jpg", links: [] },
    actors: [
      { name: "Joachim Rukwied", role: "President, German Farmers’ Association", constituency: "Farmers / agricultural producers", position: "Protecting agricultural land and farm incomes while ensuring farmers benefit from growing biomass demand.", background: "Add background here.", photo: "assets/actors/joachim-rukwied.jpg", links: [] },
      { name: "Olaf Bandt", role: "Chair, BUND", constituency: "Environment / conservation", position: "Strict ecological limits on biomass use and prioritizing biodiversity, conservation, and genuinely sustainable feedstocks.", background: "Add background here.", photo: "assets/actors/olaf-bandt.jpg", links: [] },
      { name: "Michael Vassiliadis", role: "Chair, IG BCE", constituency: "Industrial workers / labor", position: "Protecting industrial jobs and wages while ensuring the bioeconomy supports a just transition for incumbent industries.", background: "Add background here.", photo: "assets/actors/michael-vassiliadis.jpg", links: [] }
    ]
  },

  "UAE": {
    lead: { name: "Sultan bin Ahmed Al Jaber", role: "Minister of Industry and Advanced Technology", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/sultan-al-jaber.jpg", links: [] },
    actors: [
      { name: "Lamis Al Hashimy", role: "Co-Founder, Palmade Biodegradable Products", constituency: "Local bio-based manufacturing / entrepreneurship", position: "Creating domestic markets and manufacturing capacity for bio-based materials using locally available biomass, while making them competitive with imported plastics.", background: "Add background here.", photo: "assets/actors/lamis-al-hashimy.jpg", links: [] }
    ]
  },

  "Panama": {
    lead: { name: "Eduardo Ortega-Barría", role: "National Secretary of Science, Technology and Innovation", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/eduardo-ortega-barria.jpg", links: [] },
    actors: [
      { name: "Gloria Batista de Vega", role: "Professor, University of Panama; Director of R&D, Gracilarias de Panamá", constituency: "Marine biodiversity / community-based bioeconomy", position: "Develop Panama’s marine biological resources into higher-value products while protecting coastal ecosystems and ensuring benefits reach local communities.", background: "Add background here.", photo: "assets/actors/gloria-batista.jpg", links: [] }
    ]
  },

  "Gabon": {
    lead: { name: "Maurice Ntossui Allogo", role: "Minister of Water and Forests, Environment and Climate", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/maurice-ntossui-allogo.jpg", links: [] },
    actors: [
      { name: "Akim Daouda", role: "Founder & CEO, Mwaana; former CEO, FGIS", constituency: "Nature-based finance / investment", position: "Turn Gabon’s biodiversity and biological resources into investable, higher-value economic opportunities while ensuring Gabon captures more value.", background: "Add background here.", photo: "assets/actors/akim-daouda.jpg", links: [] }
    ]
  },

  "France": {
    lead: { name: "Monique Barbut", role: "Minister for Ecological Transition, Biodiversity, Climate and Nature Negotiations", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/monique-barbut.jpg", links: [] },
    actors: [
      { name: "Rémy Lucas", role: "Founder, Algopack", constituency: "Marine biomass / biomaterials", position: "Industrial use of algae as renewable feedstock for bioplastics and commercialization of bio-based materials.", background: "Add background here.", photo: "assets/actors/remy-lucas.jpg", links: [] }
    ]
  },

  "Indonesia": {
    lead: { name: "Rachmat Pambudy", role: "Minister of National Development Planning / Head of Bappenas", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/rachmat-pambudy.jpg", links: [] },
    actors: [
      { name: "Rukka Sombolinggi", role: "Secretary-General, AMAN", constituency: "Indigenous peoples / customary territories", position: "Channel more climate, biodiversity, and bioeconomy finance directly to Indigenous communities while protecting customary land rights and community control over biological resources.", background: "Add background here.", photo: "assets/actors/rukka-sombolinggi.jpg", links: [] },
      { name: "Tirto Hutomo Yuandi", role: "Founder, Timberlab; Director, PT Buana Triarta", constituency: "Forestry / engineered-wood manufacturing", position: "Move Indonesia toward higher-value timber and construction products while making sustainable forest management economically competitive.", background: "Add background here.", photo: "assets/actors/tirto-yuandi.jpg", links: [] }
    ]
  },

  "Australia": {
    lead: { name: "Julie Collins", role: "Minister for Agriculture, Fisheries and Forestry", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/julie-collins.jpg", links: [] },
    actors: [
      { name: "Giles Everest", role: "CEO, Wesbeam", constituency: "Engineered timber / forest products", position: "Expand value-added wood manufacturing and engineered-wood construction while strengthening the competitiveness of domestic timber industries.", background: "Add background here.", photo: "assets/actors/giles-everest.jpg", links: [] },
      { name: "Sharon Brindley", role: "Founding Director, Jala Jala; Victorian Director, FNBBAA", constituency: "First Nations-led bio-based products / commercialization", position: "Indigenous ownership of native biological resources and traditional knowledge, better market access, and mechanisms ensuring commercialization creates wealth for Indigenous communities.", background: "Add background here.", photo: "assets/actors/sharon-brindley.jpg", links: [] }
    ]
  },

  "Finland": {
    lead: { name: "Sakari Puisto", role: "Minister of Economic Affairs", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/sakari-puisto.jpg", links: [] },
    actors: [
      { name: "Jussi Vanhanen", role: "President & CEO, Metsä Group", constituency: "Forestry / forest industry", position: "Sustainable utilization of Finland’s forests, expansion of higher-value wood and fiber products, and maintaining competitiveness of forest-based industries.", background: "Add background here.", photo: "assets/actors/jussi-vanhanen.jpg", links: [] }
    ]
  },

  "Peru": {
    lead: { name: "Nelly Paredes del Castillo", role: "Minister of Environment", position: "National government lead negotiator", background: "Add background here.", photo: "assets/actors/nelly-paredes.jpg", links: [] },
    actors: [
      { name: "Inés Vizquerra", role: "General Manager, Andes Textiles Perú S.A.C.; President, Industry Sector Committee of the International Alpaca Association", constituency: "Natural fibers / textiles", position: "Strengthen Peru’s alpaca value chain, expand higher-value processing and sustainable textile production, and ensure producers and workers capture more value.", background: "Add background here.", photo: "assets/actors/ines-vizquerra.jpg", links: [] }
    ]
  }
};

const concepts = {
  international: {
    title: "International",
    subtitle: "Why does this problem require international coordination?",
    body: `<p>What happens if countries pursue bioeconomy development independently? Where do cross-border spillovers arise? Why might trade rules, common standards, or technology-sharing arrangements matter?</p><p>Add readings, discussion prompts, and resources here.</p>`
  },
  bioeconomy: {
    title: "Bioeconomy",
    subtitle: "What exactly are we negotiating?",
    body: `<p>What counts as a bioeconomy? Is it replacing the fossil economy, or becoming another layer of a broader low-carbon resource economy?</p><p>What happens when biomass demand competes with food, conservation, existing industries, or community land rights?</p>`
  },
  framework: {
    title: "Framework",
    subtitle: "What should an international framework actually do?",
    body: `<p>Should it establish targets, sustainability standards, financing mechanisms, trade rules, technology-sharing arrangements, or something else?</p><p>What should be coordinated internationally, and what should remain under national control?</p>`
  }
};

const treatyHub = {
  "Sample treaty texts": [],
  "Round 1 drafts": [],
  "Round 2 drafts": [],
  "Final treaty text": []
};

const overlay = document.getElementById("overlay");
const modalContent = document.getElementById("modalContent");

function openModal(html) {
  modalContent.innerHTML = html;
  overlay.classList.remove("hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
  document.querySelectorAll(".country.selected").forEach(c => c.classList.remove("selected"));
}

function linksHTML(links = []) {
  if (!links.length) return "";
  return `<div class="links">${links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}</div>`;
}

function openDelegation(country) {
  const d = delegations[country];
  if (!d) return;

  const actors = d.actors.map(a => `
    <article class="actor">
      <div class="actor-photo">${a.photo ? "Photo" : "Add photo"}</div>
      <div>
        <h4>${a.name}</h4>
        <div class="role">${a.role}</div>
        ${a.constituency ? `<p><strong>${a.constituency}</strong></p>` : ""}
        <p><strong>Position:</strong> ${a.position}</p>
        <p><strong>Background:</strong> ${a.background}</p>
        ${linksHTML(a.links)}
      </div>
    </article>
  `).join("");

  openModal(`
    <h2>${country}</h2>
    <div class="subtitle">Delegation</div>
    <h3>Lead negotiator</h3>
    <article class="actor">
      <div class="actor-photo">Photo</div>
      <div>
        <h4>${d.lead.name}</h4>
        <div class="role">${d.lead.role}</div>
        <p>${d.lead.background}</p>
        <p><strong>Position:</strong> ${d.lead.position}</p>
        ${linksHTML(d.lead.links)}
      </div>
    </article>
    <h3>Domestic actors</h3>
    ${actors}
  `);
}



document.querySelectorAll(".concept-link").forEach(button => {
  button.addEventListener("click", () => {
    const c = concepts[button.dataset.concept];
    openModal(`<h2>${c.title}</h2><div class="subtitle">${c.subtitle}</div>${c.body}`);
  });
});

document.getElementById("treatyHubBtn").addEventListener("click", () => {
  const sections = Object.entries(treatyHub).map(([section, items]) => `
    <div class="treaty-section">
      <h3>${section}</h3>
      ${items.length
        ? items.map(item => `<div class="treaty-item"><a class="treaty-link" href="${item.url}" target="_blank" rel="noopener">${item.title}</a></div>`).join("")
        : `<p>${section === "Final treaty text" ? "Add the final negotiated treaty here." : "Add links here as the simulation progresses."}</p>`}
    </div>
  `).join("");

  openModal(`<h2>Treaty Hub</h2><div class="subtitle">Working documents and negotiated texts</div>${sections}`);
});

document.getElementById("closeModal").addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
async function loadWorldMap() {
  const mapContainer = document.getElementById("worldMap");

  try {
    const response = await fetch("assets/world.svg");

    if (!response.ok) {
      throw new Error(`Could not load world.svg: ${response.status}`);
    }

    const svgText = await response.text();
    mapContainer.innerHTML = svgText;

    const svg = mapContainer.querySelector("svg");

    if (!svg) {
      throw new Error("world.svg does not contain an SVG element.");
    }

    svg.id = "worldMapSvg";

    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

    attachCountryHandlers();

  } catch (error) {
    console.error("Error loading world map:", error);
    mapContainer.innerHTML =
      '<p style="color: white;">Unable to load world map.</p>';
  }
}


function attachCountryHandlers() {
  const countryMap = {
    IN: "India",
    BR: "Brazil",
    DE: "Germany",
    AE: "UAE",
    PA: "Panama",
    GA: "Gabon",
    FI: "Finland",
    PE: "Peru"
  };

  // Countries that SimpleMaps identifies by class rather than ID
  const classCountryMap = {
    China: "China",
    France: "France",
    Indonesia: "Indonesia",
    Australia: "Australia"
  };

  // Islands we don't want displayed
  const hiddenIslands = [
    "Hawaii",
    "Micronesia",
    "Marshall Islands",
    "Palau"
  ];

  hiddenIslands.forEach(name => {
    document
      .querySelectorAll(`#worldMapSvg path.${name.replace(/ /g, "\\ ")}`)
      .forEach(path => {
        path.style.display = "none";
      });
  });

  // Helper: bring all paths belonging to a country to the front
  function bringToFront(countries) {
    countries.forEach(country => {
      country.parentNode.appendChild(country);
    });
  }

  // Handle countries with IDs
  Object.entries(countryMap).forEach(([isoCode, countryName]) => {
    const country = document.getElementById(isoCode);

    if (!country) {
      console.warn(`Could not find ${isoCode} in world.svg`);
      return;
    }

    country.classList.add("country");

    country.addEventListener("click", () => {
      document
        .querySelectorAll("#worldMapSvg .country.selected")
        .forEach(c => c.classList.remove("selected"));

      country.classList.add("selected");

      // Put selected country above neighboring borders
      bringToFront([country]);

      openDelegation(countryName);
    });

    country.style.cursor = "pointer";
  });

  // Handle countries identified by class
  Object.entries(classCountryMap).forEach(([svgClass, countryName]) => {
    const countries = document.querySelectorAll(
      `#worldMapSvg path.${svgClass}`
    );

    if (!countries.length) {
      console.warn(`Could not find ${svgClass} in world.svg`);
      return;
    }

    countries.forEach(country => {
      country.classList.add("country");

      country.addEventListener("click", () => {
        document
          .querySelectorAll("#worldMapSvg .country.selected")
          .forEach(c => c.classList.remove("selected"));

        countries.forEach(c => c.classList.add("selected"));

        // Put all pieces of the selected country above neighboring borders
        bringToFront(countries);

        openDelegation(countryName);
      });

      country.style.cursor = "pointer";
    });
  });
}
loadWorldMap();
