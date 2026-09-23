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
        sectors: ["Chemicals"],
        constituencies: [],
        position: "Rapid commercialization of Chemicals, polymers, fuels and materials, with policies that make them competitive with fossil-based alternatives.",
        background: "Add background here.",
        photo: "assets/actors/ashish-gaikwad.jpg",
        links: []
      },
      {
        name: "Sunita Narain",
        role: "Director General, Centre for Science and Environment",
        constituency: "Environment / public interest",
        sectors: [],
        constituencies: ["NGOs"],
        position: "Strong environmental safeguards, resource limits, and a bioeconomy that does not undermine food security or ecosystems.",
        background: "Add background here.",
        photo: "assets/actors/sunita-narain.jpg",
        links: []
      },
      {
        name: "Binod Anand",
        role: "National Vice-President, All India Kisan Coordination Committee; President, NAFPO",
        constituency: "Farmers / agricultural producers",
        sectors: ["Agriculture"],
        constituencies: [],
        position: "Greater farmer ownership of value chains, higher farm incomes, and protection against biomass demand benefiting downstream industry at farmers’ expense.",
        background: "Add background here.",
        photo: "assets/actors/binod-anand.jpg",
        links: []
      }
    ]
  },

  "China": {
    lead: {
      name: "Xin Guobin",
      role: "Vice Minister, Ministry of Industry and Information Technology",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/xin-guobin.jpg",
      links: []
    },
    actors: [
      {
        name: "Yu Xuejun (余学军)",
        role: "Chair, China Bio-Fermentation Industry Association",
        constituency: "Industrial biomanufacturing",
        sectors: ["Chemicals"],
        constituencies: ["Industry"],
        position: "Rapid industrial scaling, technological upgrading, and government support for competitive biomanufacturing.",
        background: "Add background here.",
        photo: "assets/actors/yu-xuejun.jpg",
        links: []
      },
      {
        name: "Zhu Xuexing (朱学星)",
        role: "Founder/leader, Shuangfu Bamboo Professional Cooperative",
        constituency: "Rural feedstock producers / cooperatives",
        sectors: ["Agriculture", "Forestry / Timber"],
        constituencies: [],
        position: "Greater value capture for rural producers, stronger links between biomass producers and industry, and rural development.",
        background: "Add background here.",
        photo: "assets/actors/shen-genlian.png",
        links: []
      },
      {
        name: "Chen Xinwei (陈新伟)",
        role: "President, China Chemical Fibers Association",
        constituency: "Bio-based materials / textiles",
        sectors: ["Fibers / Textiles"],
        constituencies: ["Industry"],
        position: "Accelerated commercialization of bio-based fibers, diversified feedstocks, and integration of bio-based materials into China’s manufacturing base.",
        background: "Add background here.",
        photo: "assets/actors/chen-xinwei.jpg",
        links: []
      }
    ]
  },

  "Brazil": {
    lead: {
      name: "João Paulo Capobianco",
      role: "Minister of Environment and Climate Change",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/joao-paulo-capobianco.jpg",
      links: []
    },
    actors: [
      {
        name: "Sila Mesquita Apurinã",
        role: "President, IPDA; National Coordinator, Rede de Trabalho Amazônico",
        constituency: "Indigenous peoples / community-controlled bioeconomy",
        sectors: ["Agriculture", "Forestry / Timber"],
        constituencies: ["Indigenous"],
        position: "Community control over bioeconomy development, protection of traditional knowledge, and equitable benefit-sharing.",
        background: "Add background here.",
        photo: "assets/actors/sila-mesquita-apurina.jpg",
        links: []
      },
      {
        name: "Angela Pinhati",
        role: "Sustainability Director, Natura",
        constituency: "Bioindustry / commercialization",
        sectors: ["Chemicals"],
        constituencies: ["Industry"],
        position: "Scalable commercialization of biodiversity, investment in value-added processing, and stronger markets for sustainable Amazonian inputs.",
        background: "Add background here.",
        photo: "assets/actors/angela-pinhati.jpg",
        links: []
      },
      {
        name: "Roberto Vilela",
        role: "Executive Director, Tabôa",
        constituency: "Family farmers / inclusive bioeconomy finance",
        sectors: ["Agriculture"],
        constituencies: [],
        position: "Expand access to credit and technical assistance for smallholders, strengthen farmer participation in higher-value bioeconomy chains, and link rural incomes with sustainable land management.",
        background: "Add background here.",
        photo: "assets/actors/roberto-vilela.jpg",
        links: []
      }
    ]
  },

  "Germany": {
    lead: {
      name: "Dorothee Bär",
      role: "Federal Minister of Research, Technology and Space",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/dorothee-baer.jpg",
      links: []
    },
    actors: [
      {
        name: "Joachim Rukwied",
        role: "President, German Farmers’ Association",
        constituency: "Farmers / agricultural producers",
        sectors: ["Agriculture"],
        constituencies: [],
        position: "Protecting agricultural land and farm incomes while ensuring farmers benefit from growing biomass demand.",
        background: "Add background here.",
        photo: "assets/actors/joachim-rukwied.jpg",
        links: []
      },
      {
        name: "Olaf Bandt",
        role: "Chair, BUND",
        constituency: "Environment / conservation",
        sectors: [],
        constituencies: ["NGOs"],
        position: "Strict ecological limits on biomass use and prioritizing biodiversity, conservation, and genuinely sustainable feedstocks.",
        background: "Add background here.",
        photo: "assets/actors/olaf-bandt.jpg",
        links: []
      },
      {
        name: "Michael Vassiliadis",
        role: "Chair, IG BCE",
        constituency: "Industrial workers / labor",
        sectors: ["Chemicals"],
        constituencies: ["Labor"],
        position: "Protecting industrial jobs and wages while ensuring the bioeconomy supports a just transition for incumbent industries.",
        background: "Add background here.",
        photo: "assets/actors/michael-vassiliadis.jpg",
        links: []
      }
    ]
  },

  "UAE": {
    lead: {
      name: "Sultan bin Ahmed Al Jaber",
      role: "Minister of Industry and Advanced Technology",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/sultan-al-jaber.jpg",
      links: []
    },
    actors: [
      {
        name: "Lamis Al Hashimy",
        role: "Co-Founder, Palmade Biodegradable Products",
        constituency: "Local bio-based manufacturing / entrepreneurship",
        sectors: ["Chemicals"],
        constituencies: ["Industry"],
        position: "Creating domestic markets and manufacturing capacity for bio-based materials using locally available biomass, while making them competitive with imported plastics.",
        background: "Add background here.",
        photo: "assets/actors/lamis-al-hashimy.jpg",
        links: []
      }
    ]
  },

  "Panama": {
    lead: {
      name: "Eduardo Ortega-Barría",
      role: "National Secretary of Science, Technology and Innovation",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/eduardo-ortega-barria.jpg",
      links: []
    },
    actors: [
      {
        name: "Gloria Batista de Vega",
        role: "Professor, University of Panama; Director of R&D, Gracilarias de Panamá",
        constituency: "Marine biodiversity / community-based bioeconomy",
        sectors: ["Marine"],
        constituencies: [],
        position: "Develop Panama’s marine biological resources into higher-value products while protecting coastal ecosystems and ensuring benefits reach local communities.",
        background: "Add background here.",
        photo: "assets/actors/gloria-batista.jpg",
        links: []
      }
    ]
  },

  "Gabon": {
    lead: {
      name: "Maurice Ntossui Allogo",
      role: "Minister of Water and Forests, Environment and Climate",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/maurice-ntossui-allogo.jpg",
      links: []
    },
    actors: [
      {
        name: "Akim Daouda",
        role: "Founder & CEO, Mwaana; former CEO, FGIS",
        constituency: "Nature-based finance / investment",
        sectors: ["Forestry / Timber"],
        constituencies: [],
        position: "Turn Gabon’s biodiversity and biological resources into investable, higher-value economic opportunities while ensuring Gabon captures more value.",
        background: "Add background here.",
        photo: "assets/actors/akim-daouda.jpg",
        links: []
      }
    ]
  },

  "France": {
    lead: {
      name: "Monique Barbut",
      role: "Minister for Ecological Transition, Biodiversity, Climate and Nature Negotiations",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/monique-barbut.jpg",
      links: []
    },
    actors: [
      {
        name: "Rémy Lucas",
        role: "Founder, Algopack",
        constituency: "Marine biomass / biomaterials",
        sectors: ["Marine"],
        constituencies: ["Industry"],
        position: "Industrial use of algae as renewable feedstock for bioplastics and commercialization of bio-based materials.",
        background: "Add background here.",
        photo: "assets/actors/remy-lucas.jpg",
        links: []
      }
    ]
  },

  "Indonesia": {
    lead: {
      name: "Rachmat Pambudy",
      role: "Minister of National Development Planning / Head of Bappenas",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/rachmat-pambudy.jpg",
      links: []
    },
    actors: [
      {
        name: "Rukka Sombolinggi",
        role: "Secretary-General, AMAN",
        constituency: "Indigenous peoples / customary territories",
        sectors: ["Forestry / Timber", "Agriculture"],
        constituencies: ["Indigenous"],
        position: "Channel more climate, biodiversity, and bioeconomy finance directly to Indigenous communities while protecting customary land rights and community control over biological resources.",
        background: "Add background here.",
        photo: "assets/actors/rukka-sombolinggi.jpg",
        links: []
      },
      {
        name: "Tirto Hutomo Yuandi",
        role: "Founder, Timberlab; Director, PT Buana Triarta",
        constituency: "Forestry / engineered-wood manufacturing",
        sectors: ["Forestry / Timber"],
        constituencies: ["Industry"],
        position: "Move Indonesia toward higher-value timber and construction products while making sustainable forest management economically competitive.",
        background: "Add background here.",
        photo: "assets/actors/tirto-yuandi.jpg",
        links: []
      }
    ]
  },

  "Australia": {
    lead: {
      name: "Julie Collins",
      role: "Minister for Agriculture, Fisheries and Forestry",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/julie-collins.jpg",
      links: []
    },
    actors: [
      {
        name: "Giles Everest",
        role: "CEO, Wesbeam",
        constituency: "Engineered timber / forest products",
        sectors: ["Forestry / Timber"],
        constituencies: ["Industry"],
        position: "Expand value-added wood manufacturing and engineered-wood construction while strengthening the competitiveness of domestic timber industries.",
        background: "Add background here.",
        photo: "assets/actors/giles-everest.jpg",
        links: []
      },
      {
        name: "Sharon Brindley",
        role: "Founding Director, Jala Jala; Victorian Director, FNBBAA",
        constituency: "First Nations-led bio-based products / commercialization",
        sectors: ["Agriculture"],
        constituencies: ["Indigenous"],
        position: "Indigenous ownership of native biological resources and traditional knowledge, better market access, and mechanisms ensuring commercialization creates wealth for Indigenous communities.",
        background: "Add background here.",
        photo: "assets/actors/sharon-brindley.jpg",
        links: []
      }
    ]
  },

  "Finland": {
    lead: {
      name: "Sakari Puisto",
      role: "Minister of Economic Affairs",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/sakari-puisto.jpg",
      links: []
    },
    actors: [
      {
        name: "Jussi Vanhanen",
        role: "President & CEO, Metsä Group",
        constituency: "Forestry / forest industry",
        sectors: ["Forestry / Timber"],
        constituencies: ["Industry"],
        position: "Sustainable utilization of Finland’s forests, expansion of higher-value wood and fiber products, and maintaining competitiveness of forest-based industries.",
        background: "Add background here.",
        photo: "assets/actors/jussi-vanhanen.jpg",
        links: []
      }
    ]
  },

  "Peru": {
    lead: {
      name: "Nelly Paredes del Castillo",
      role: "Minister of Environment",
      position: "National government lead negotiator",
      background: "Add background here.",
      photo: "assets/actors/nelly-paredes.jpg",
      links: []
    },
    actors: [
      {
        name: "Inés Vizquerra",
        role: "General Manager, Andes Textiles Perú S.A.C.; President, Industry Sector Committee of the International Alpaca Association",
        constituency: "Natural fibers / textiles",
        sectors: ["Fibers / Textiles"],
        constituencies: ["Industry"],
        position: "Strengthen Peru’s alpaca value chain, expand higher-value processing and sustainable textile production, and ensure producers and workers capture more value.",
        background: "Add background here.",
        photo: "assets/actors/ines-vizquerra.jpg",
        links: []
      }
    ]
  }
};


/* =========================================================
   COUNTRY FLAGS
   ========================================================= */

const countryFlags = {
  India: "🇮🇳",
  China: "🇨🇳",
  Brazil: "🇧🇷",
  Germany: "🇩🇪",
  UAE: "🇦🇪",
  Panama: "🇵🇦",
  Gabon: "🇬🇦",
  France: "🇫🇷",
  Indonesia: "🇮🇩",
  Australia: "🇦🇺",
  Finland: "🇫🇮",
  Peru: "🇵🇪"
};


/* =========================================================
   COUNTRY ORDER
   ========================================================= */

const countries = [
  "Australia",
  "Brazil",
  "China",
  "Finland",
  "France",
  "Gabon",
  "Germany",
  "India",
  "Indonesia",
  "Panama",
  "Peru",
  "UAE"
];


/* =========================================================
   MODAL / GENERAL FUNCTIONS
   ========================================================= */

const overlay = document.getElementById("overlay");
const modalContent = document.getElementById("modalContent");


function openModal(html) {
  modalContent.innerHTML = html;
  overlay.classList.remove("hidden");
}


function closeModal() {
  overlay.classList.add("hidden");

  clearCountrySelection();
}


/* =========================================================
   LINKS
   ========================================================= */

function linksHTML(links = []) {

  if (!links.length) {
    return "";
  }

  return `
    <div class="links">
      ${links.map(l => `
        <a
          href="${l.url}"
          target="_blank"
          rel="noopener">
          ${l.label}
        </a>
      `).join("")}
    </div>
  `;
}


/* =========================================================
   COUNTRY SELECTION
   ========================================================= */

function clearCountrySelection() {

  document
    .querySelectorAll("#worldMapSvg .country.selected")
    .forEach(country => {
      country.classList.remove("selected");
    });

  document
    .querySelectorAll(".country-selector-button.selected")
    .forEach(button => {
      button.classList.remove("selected");
    });
}


function getCountryPaths(countryName) {

  const svg = document.getElementById("worldMapSvg");

  if (!svg) {
    return [];
  }

  return Array.from(
    svg.querySelectorAll(
      `path.country[data-country-name="${countryName}"]`
    )
  );
}


function selectCountry(countryName) {

  clearCountrySelection();

  const paths = getCountryPaths(countryName);

  paths.forEach(path => {
    path.classList.add("selected");
  });

  const selectorButton = document.querySelector(
    `.country-selector-button[data-country="${countryName}"]`
  );

  if (selectorButton) {
    selectorButton.classList.add("selected");
  }

  /*
    Bring the selected country to the front
    so its outline remains visible.
  */
  paths.forEach(path => {
    if (path.parentNode) {
      path.parentNode.appendChild(path);
    }
  });
}


function highlightCountry(countryName) {

  const paths = getCountryPaths(countryName);

  paths.forEach(path => {
    path.classList.add("country-hover");
  });
}


function unhighlightCountry(countryName) {

  const paths = getCountryPaths(countryName);

  paths.forEach(path => {
    path.classList.remove("country-hover");
  });
}


/* =========================================================
   COUNTRY SELECTOR
   ========================================================= */

function createCountrySelector() {

  const selector = document.getElementById("countrySelector");

  if (!selector) {
    return;
  }

  selector.innerHTML = "";

  countries.forEach(countryName => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "country-selector-button";
    button.dataset.country = countryName;

    button.innerHTML = `
      <span class="country-selector-flag">
        ${countryFlags[countryName]}
      </span>

      <span class="country-selector-name">
        ${countryName}
      </span>
    `;


    /* Hover selector → highlight map */

    button.addEventListener("mouseenter", () => {

      button.classList.add("hovered");

      highlightCountry(countryName);

    });


    button.addEventListener("mouseleave", () => {

      button.classList.remove("hovered");

      unhighlightCountry(countryName);

    });


    /* Click selector → select + delegation */

    button.addEventListener("click", () => {

      selectCountry(countryName);

      openDelegation(countryName);

    });


    selector.appendChild(button);

  });

}


/* =========================================================
   DELEGATION MODAL
   ========================================================= */

function openDelegation(country) {

  const d = delegations[country];

  if (!d) {
    return;
  }

  /*
    Make sure the map and selector both reflect
    the country whose delegation is being opened.
  */
  selectCountry(country);


  const actors = d.actors.map(a => `
    <article class="actor">

      <div class="actor-photo">
        ${a.photo
          ? `<img src="${a.photo}" alt="${a.name}">`
          : "Add photo"}
      </div>

      <div>

        <h4>${a.name}</h4>

        <div class="role">
          ${a.role}
        </div>

        ${a.constituency
          ? `<p><strong>${a.constituency}</strong></p>`
          : ""}

        <p>
          <strong>Position:</strong>
          ${a.position}
        </p>

        <p>
          <strong>Background:</strong>
          ${a.background}
        </p>

        ${linksHTML(a.links)}

      </div>

    </article>
  `).join("");


  openModal(`

    <h2>${country}</h2>

    <div class="subtitle">
      Delegation
    </div>


    <h3>
      Lead negotiator
    </h3>


    <article class="actor">

      <div class="actor-photo">
        ${d.lead.photo
          ? `<img src="${d.lead.photo}" alt="${d.lead.name}">`
          : "Add photo"}
      </div>

      <div>

        <h4>
          ${d.lead.name}
        </h4>

        <div class="role">
          ${d.lead.role}
        </div>

        <p>
          ${d.lead.background}
        </p>

        <p>
          <strong>Position:</strong>
          ${d.lead.position}
        </p>

        ${linksHTML(d.lead.links)}

      </div>

    </article>


    <h3>
      Domestic actors
    </h3>

    ${actors}

  `);
}


/* =========================================================
   COALITION MODAL
   ========================================================= */

function openCoalition(filterType, filterValue) {

  const matchingActors = [];

  Object.entries(delegations).forEach(
    ([country, delegation]) => {

      delegation.actors.forEach(actor => {

        const tags =
          actor[
            filterType === "sector"
              ? "sectors"
              : "constituencies"
          ] || [];

        if (tags.includes(filterValue)) {

          matchingActors.push({
            country,
            actor
          });

        }

      });

    }
  );


  const actorCards =
    matchingActors.map(
      ({ country, actor }) => `

        <button
          type="button"
          class="coalition-actor-card"
          data-country="${country}">

          <div class="coalition-actor-photo">

            ${
              actor.photo
                ? `<img
                     src="${actor.photo}"
                     alt="${actor.name}">
                   `
                : "Add photo"
            }

          </div>

          <div class="coalition-actor-name">
            ${actor.name}
          </div>

          <div class="coalition-actor-country">
            ${country}
          </div>

        </button>

      `
    ).join("");


  openModal(`

    <h2>
      ${filterValue}
    </h2>

    <div class="subtitle">
      ${
        filterType === "sector"
          ? "Sector coalition"
          : "Constituency coalition"
      }
    </div>

    <div class="coalition-actor-grid">

      ${
        actorCards
          ? actorCards
          : `
              <p class="coalition-empty">
                No actors are currently associated
                with this category.
              </p>
            `
      }

    </div>

  `);

}

/* =========================================================
   COALITION ACTOR CARDS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const card =
      event.target.closest(
        ".coalition-actor-card"
      );

    if (!card) {
      return;
    }

    const country =
      card.dataset.country;

    closeModal();

    selectCountry(country);

    openDelegation(country);

  }
);



/* =========================================================
   CONCEPT MODALS
   ========================================================= */

const concepts = {

  international: {
    title: "International",
    body: `
      <p>
        Why not just have countries agree to each write their own national
        bioeconomy strategy, call it a day, and go home?
      </p>

      <ul>
        <li>
          Because the <strong>wealth, technology, and research capacity</strong>
          needed to facilitate the bioeconomy transition are unequally distributed.
        </li>
        <li>
          Because countries' <strong>resource endowments</strong> – like land,
          forests, biodiversity, agricultural capacity, and other biological
          resources – are also unequally distributed.
        </li>
        <li>
          Because <strong>biological resources often cross national boundaries</strong>,
          and one country's decisions about use of its biological resources can
          create consequences for its neighbors.
        </li>
        <li>
          Because <strong>supply chains cross borders</strong>, and different rules
          for sustainability, certification, subsidies, and market access of the
          produced goods shape where production occurs and who can participate.
        </li>
        <li>
          Because the bioeconomy transition will have
          <strong>global environmental effects</strong> – like on deforestation,
          carbon emissions, biodiversity, food security, and land use – that
          affect all countries regardless of how they participate.
        </li>
      </ul>

      <p>
        <strong>International coordination</strong> is therefore necessary to
        map out the areas of interdependence, and negotiate the distribution of
        shared responsibilities and gains.
      </p>
    `
  },

    bioeconomy: {
    title: "Bioeconomy",
    body: `
      <h3>What is it?</h3>

      <ul>
        <li>
          An economy that uses <strong>renewable biological resources</strong> –
          like crops, forests, algae, microorganisms, and agricultural or forestry
          residues – to produce materials, chemicals, fuels, food, and other goods.
        </li>
        <li>
          Think of it as opposed to our current <strong>fossil-based model</strong>,
          where petroleum, natural gas, and coal provide the feedstocks and energy
          for most of our modern industries.
        </li>
      </ul>

      <h3>What are the main sectors in a bioeconomy?</h3>

      <ul>
        <li>
          <strong>Materials &amp; manufacturing:</strong> bioplastics, bio-based
          chemicals, textiles, engineered wood
        </li>
        <li>
          <strong>Energy &amp; fuels:</strong> biofuels, sustainable aviation fuels,
          biogas
        </li>
        <li>
          <strong>Agriculture &amp; forestry:</strong> regenerative agriculture,
          agroforestry, sustainable forest management, and use of agricultural
          and forestry residues
        </li>
        <li>
          <strong>Food &amp; biotechnology:</strong> alternative proteins,
          fermentation, industrial biotechnology, and new biological production
          systems
        </li>
      </ul>

      <h3>What strategies are used to facilitate a bioeconomy transition?</h3>

      <ul>
        <li>
          Writing new <strong>regulations and sustainability standards</strong>;
        </li>
        <li>
          Restructuring <strong>subsidies, procurement, and public investment</strong>;
        </li>
        <li>
          Establishing rules for
          <strong>carbon accounting, land use, and biomass sourcing</strong>;
        </li>
        <li>
          Negotiating new <strong>trade rules and product standards</strong>;
        </li>
        <li>
          Building infrastructure and <strong>supply chains</strong> for
          <strong>bio-based production</strong>;
        </li>
        <li>
          Ensuring safeguards for
          <strong>food security, biodiversity, labor, and community land rights</strong>;
        </li>
        <li>
          Deciding how the <strong>costs and benefits</strong> of the transition
          are <strong>distributed</strong> across countries and industries.
        </li>
      </ul>

      <h3>Who are the stakeholders?</h3>

      <ul>
        <li>
          <strong>Biomass-producing countries &amp; landholders</strong> —
          farmers, forest owners, Indigenous and local communities.
        </li>
        <li>
          <strong>Bio-based industries</strong> — agriculture, forestry,
          chemicals, materials, fuels, biotechnology, and manufacturing.
        </li>
        <li>
          <strong>Fossil-based incumbents</strong> — oil, gas, petrochemicals,
          and industries built around fossil feedstocks.
        </li>
        <li>
          <strong>Governments &amp; regulators</strong> — setting industrial,
          environmental, agricultural, energy, and trade policy.
        </li>
        <li>
          <strong>Workers &amp; consumers</strong> — affected by employment,
          prices, product standards, and changes in consumption.
        </li>
        <li>
          <strong>Environmental &amp; civil-society groups</strong> — focused
          on biodiversity, climate, land rights, and the sustainability of
          biomass supply.
        </li>
      </ul>
    `
  },

  framework: {
    title: "Framework",
    body: `
      <p>
        A full international bioeconomy framework would involve a dizzying
        number of policy areas and necessarily fall outside the scope of any
        in-class simulation. Instead, delegations can develop specific
        agreements or commitments around one or several areas that you will choose:
      </p>

      <ul>
        <li>
          <strong>Innovation &amp; lead markets:</strong>
          How can governments scale up R&amp;D, demonstration projects,
          procurement, and demand for emerging bio-based technologies and materials?
        </li>

        <li>
          <strong>Supply chains &amp; sustainable biomass:</strong>
          What feedstocks should be developed, where should they come from,
          and what would a bioeconomy-compatible supply chain look like?
        </li>

        <li>
          <strong>Targets &amp; timelines:</strong>
          What percentage of materials, fuels, chemicals, or other products
          should come from biological resources – and by when?
        </li>

        <li>
          <strong>Standards &amp; traceability:</strong>
          How should countries coordinate certification, sustainability
          standards, verification, and tracking of biomass and bio-based
          products across borders?
        </li>

        <li>
          <strong>Trade:</strong>
          What changes to tariffs, subsidies, procurement rules, and trade
          agreements could support a global transition toward bio-based production?
        </li>

        <li>
          <strong>Finance &amp; markets:</strong>
          How can governments mobilize private capital, reshape commodity
          markets, and redirect investment toward bio-based industries while
          managing exposure to fossil-dependent assets?
        </li>

        <li>
          <strong>Valuation:</strong>
          Should governments recognize alternative measures of economic value –
          including ecosystem services, natural capital, and other forms of
          non-market value – when making bioeconomy decisions?
        </li>

        <li>
          <strong>Bioprospecting &amp; biodiversity:</strong>
          What role should genetic resources and biological discovery play in
          the bioeconomy? How should benefits from biological resources be shared?
        </li>

        <li>
          <strong>Extraction vs. sustainability:</strong>
          How do we expand the use of biological resources without simply
          creating a new system of resource extraction that undermines
          ecosystems, food security, or community rights?
        </li>
      </ul>

      <p>
        Regardless of which questions or areas you choose, ask yourself:
        <strong>where will investments and activities in your bioeconomy happen?</strong>
        And <strong>to where will the benefits flow?</strong>
      </p>

      <p>
        And remember, where you can, to establish
        <strong>SMART goals, timelines, responsibilities, and mechanisms for
        monitoring progress.</strong>
      </p>
    `
  }

};


/* =========================================================
   TREATY HUB
   ========================================================= */

const treatyHub = {

  "Sample texts": [
    {
      title: "Last year's final treaty",
      url: "#"
    },
    {
      title: "Paris Accords text",
      url: "#"
    },
    {
      title: "Kunming-Montreal Global Biodiversity Framework text",
      url: "#"
    }
  ],

  "Round 1 texts": [],

  "Round 2 texts": [],

    "National bioeconomy strategies": [
    {
      title: "STRATEGY PUBLISHED",
      type: "section"
    },
    {
      country: "Brazil",
      title: "National Bioeconomy Strategy",
      url: "https://www.gov.br/mma/pt-br/composicao/sbc/dpeb/estrategia-nacional-de-bioeconomia"
    },
    {
      country: "China",
      title: "14th Five-Year Plan for Bioeconomy Development",
      url: "https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/202205/t20220510_1324595.html"
    },
    {
      country: "Finland",
      title: "Bioeconomy Strategy 2022–2035",
      url: "https://www.bioeconomy.fi/facts-and-contacts/the-finnish-bioeconomy-strategy/"
    },
    {
      country: "France",
      title: "National Bioeconomy Strategy / 2018–2020 Action Plan",
      url: "https://agriculture.gouv.fr/bioeconomy-strategy-france-2018-2020-action-plan"
    },
    {
      country: "Germany",
      title: "National Bioeconomy Strategy",
      url: "https://www.bundesregierung.de/breg-en/service/archive/biooekonomie-1712668"
    },
    {
      country: "India",
      title: "Roadmap to a Leading Bioeconomy Powerhouse by 2035",
      url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2285858&lang=2&reg=48"
    },

    {
      title: "STRATEGY IN DEVELOPMENT",
      type: "section"
    },
    {
      country: "Panama",
      title: "National Bioeconomy Strategy (in development)",
      url: "https://www.senacyt.gob.pa/en/la-senacyt-avanza-en-el-desarrollo-de-la-estrategia-nacional-de-bioeconomia-con-el-lanzamiento-de-la-cuenta-tematica-de-bioeconomia-del-pais/"
    },
    {
      country: "Peru",
      title: "Bioeconomy Roadmap (draft)",
      url: "https://www.gob.pe/institucion/minam/normas-legales/8259661-d000192-2026-minam"
    },

    {
      title: "NO STRATEGY IDENTIFIED",
      type: "section"
    },
    {
      country: "Australia",
      title: "Research on Australia's bioeconomy",
      url: "https://biooekonomie.de/en/topics/in-depth-reports-worldwide"
    },
    {
      country: "Gabon",
      title: "Research on developing a national bioeconomy framework",
      url: "https://www.circulareconomyalliance.com/gabon"
    },
    {
      country: "Indonesia",
      title: "Policy gaps and the case for a national bioeconomy roadmap",
      url: "https://komens.bappenas.go.id/public/storage/files/Dt.01.04_Master_Plan_Produktivitas_Nasional_2025.pdf"
    },
    {
      country: "UAE",
      title: "Bioeconomy within broader green-growth policy",
      url: "https://gggi.org/report/gggi-uae-country-planning-framework-2023-2027/"
    }
  ],

};



/* =========================================================
   CONCEPT BUTTON EVENTS
   ========================================================= */

document
  .querySelectorAll(".concept-link")
  .forEach(button => {

    button.addEventListener("click", () => {

      const c =
        concepts[
          button.dataset.concept
        ];

      openModal(`
        <h2>${c.title}</h2>

        <div class="subtitle">
          ${c.subtitle}
        </div>

        ${c.body}
      `);

    });

  });


/* =========================================================
   TREATY HUB NAVIGATION
   ========================================================= */

function openTreatyHub() {

  const categories =
    Object.keys(treatyHub);


  const categoryHTML =
    categories.map(category => `

      <button
        type="button"
        class="treaty-category-button"
        data-treaty-category="${category}">

        <span class="treaty-category-name">
          ${category}
        </span>

        <span class="treaty-category-arrow">
          →
        </span>

      </button>

    `).join("");


  openModal(`

    <h2>
      Treaty Hub
    </h2>

    <div class="subtitle">
      Working documents and reference texts
    </div>

    <div class="treaty-category-list">

      ${categoryHTML}

    </div>

  `);

}


function openTreatyCategory(category) {

  const items =
    treatyHub[category] || [];


  const itemsHTML =
  items.length

    ? items.map(item => {

        /* Subsection heading */

        if (item.type === "section") {

          return `
            <div class="treaty-section">
              ${item.title}
            </div>
          `;

        }


        /* Country + document */

        return `
          <div class="treaty-item">

            <div class="treaty-country">
              ${countryFlags[item.country] || ""} ${item.country}
            </div>

            <a
              class="treaty-link"
              href="${item.url}"
              target="_blank"
              rel="noopener">

              ${item.title}

            </a>

          </div>
        `;

      }).join("")

    : `

        <p>
          No documents have been added yet.
        </p>

      `;


  openModal(`

    <button
      type="button"
      class="treaty-back-button"
      id="treatyBackButton">

      ← Treaty Hub

    </button>

    <h2>
      ${category}
    </h2>

    <div class="subtitle">
      Documents and reference materials
    </div>

    <div class="treaty-document-list">

      ${itemsHTML}

    </div>

  `);

}


/* ---------------------------------------------------------
   Treaty Hub button
   --------------------------------------------------------- */

document
  .getElementById("treatyHubBtn")
  .addEventListener(
    "click",
    openTreatyHub
  );


/* ---------------------------------------------------------
   Treaty Hub category / back navigation
   --------------------------------------------------------- */

document.addEventListener(
  "click",
  event => {

    const categoryButton =
      event.target.closest(
        ".treaty-category-button"
      );


    if (categoryButton) {

      const category =
        categoryButton.dataset.treatyCategory;


      openTreatyCategory(
        category
      );

      return;

    }


    const backButton =
      event.target.closest(
        "#treatyBackButton"
      );


    if (backButton) {

      openTreatyHub();

    }

  }
);

/* =========================================================
   ACTOR ASSIGNMENTS
   ========================================================= */

document
  .getElementById("actorAssignmentsBtn")
  .addEventListener("click", () => {

    openModal(`

      <h2>
        Actor Assignments
      </h2>

      <div class="subtitle">
        Simulation participants and assigned roles
      </div>

      <div class="actor-assignment-table-wrap">

        <table class="actor-assignment-table">

          <thead>
            <tr>
              <th>Student Full Name</th>
              <th>Actor Full Name</th>
              <th>Country</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>[Student Name]</td>
              <td>[Actor Full Name]</td>
              <td>[Country]</td>
              <td>Lead Negotiator</td>
            </tr>

            <tr>
              <td>[Student Name]</td>
              <td>[Actor Full Name]</td>
              <td>[Country]</td>
              <td>Subnational Actor</td>
            </tr>

          </tbody>

        </table>

      </div>

    `);

  });

/* =========================================================
   TIMELINE
   ========================================================= */

function openTimeline() {

  openModal(`
    <h2>Timeline</h2>

    <div class="subtitle">
      Simulation milestones and deadlines
    </div>

    <div class="treaty-document-list">

      <div class="treaty-item">
        <strong>Oct 26</strong>
        <p>Submit Actor Memo Part 1.</p>
      </div>

      <div class="treaty-item">
        <strong>Oct 28</strong>
        <p>Submit Actor Memo Part 2.</p>
      </div>

      <div class="treaty-item">
        <strong>Oct 29</strong>
        <p>Vote on Negotiation Chair.</p>
      </div>

      <div class="treaty-item">
        <strong>Nov 5</strong>
        <p>Submit First Draft of Treaty Text.</p>
      </div>

      <div class="treaty-item">
        <strong>Nov 17</strong>
        <p>Submit Rough Draft of Treaty Text.</p>
      </div>

      <div class="treaty-item">
        <strong>Nov 21</strong>
        <p>Submit Draft for Amendments to Treaty Text.</p>
      </div>

      <div class="treaty-item">
        <strong>Dec 3</strong>
        <p>Final Vote on the Treaty.</p>
      </div>

      <div class="treaty-item">
        <strong>Dec 9</strong>
        <p>Final Paper Due.</p>
      </div>

    </div>
  `);

}


/* =========================================================
   RULES & NORMS
   ========================================================= */

function openRules() {

  openModal(`
    <h2>Rules &amp; Norms</h2>

    <div class="subtitle">
      Simulation rules and negotiation norms
    </div>

    <iframe
      class="rules-pdf"
      src="assets/Treaty%20Norms%20and%20Rules.pdf"
      title="Treaty Norms and Rules">
    </iframe>
  `);

}


/* =========================================================
   UTILITY BUTTON EVENTS
   ========================================================= */

document.addEventListener("click", event => {

  if (event.target.closest("#timelineBtn")) {
    openTimeline();
    return;
  }

  if (event.target.closest("#rulesBtn")) {
    openRules();
    return;
  }

});

/* =========================================================
   MODAL EVENTS
   ========================================================= */

document
  .getElementById("closeModal")
  .addEventListener("click", closeModal);


overlay.addEventListener("click", event => {

  if (event.target === overlay) {
    closeModal();
  }

});


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});


/* =========================================================
   WORLD MAP
   ========================================================= */

async function loadWorldMap() {

  const mapContainer =
    document.getElementById("worldMap");


  try {

    const response =
      await fetch("assets/world.svg");


    if (!response.ok) {

      throw new Error(
        `Could not load world.svg: ${response.status}`
      );

    }


    const svgText =
      await response.text();


    mapContainer.innerHTML =
      svgText;


    const svg =
      mapContainer.querySelector("svg");


    if (!svg) {

      throw new Error(
        "world.svg does not contain an SVG element."
      );

    }


    svg.id =
      "worldMapSvg";


    svg.removeAttribute("width");
    svg.removeAttribute("height");


    svg.setAttribute(
      "width",
      "100%"
    );

    svg.setAttribute(
      "height",
      "100%"
    );

    svg.setAttribute(
      "preserveAspectRatio",
      "xMidYMid meet"
    );


    attachCountryHandlers();

    /*
      The selector is independent of the SVG,
      so it can be created immediately after
      the map has loaded.
    */

    createCountrySelector();


  } catch (error) {

    console.error(
      "Error loading world map:",
      error
    );


    mapContainer.innerHTML =
      '<p style="color: white;">Unable to load world map.</p>';

  }

}


/* =========================================================
   MAP COUNTRY HANDLERS
   ========================================================= */

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


  const classCountryMap = {

    China: "China",
    France: "France",
    Indonesia: "Indonesia",
    Australia: "Australia"

  };


  /* -------------------------------------------------------
     Clear map hover
     ------------------------------------------------------- */

  function clearHover() {

    document
      .querySelectorAll(
        "#worldMapSvg .country.country-hover"
      )
      .forEach(country => {

        country.classList.remove(
          "country-hover"
        );

      });

  }


  /* -------------------------------------------------------
     Single-path countries
     ------------------------------------------------------- */

  Object.entries(countryMap)
    .forEach(([isoCode, countryName]) => {

      const country =
        document.getElementById(isoCode);


      if (!country) {

        console.warn(
          `Could not find ${isoCode} in world.svg`
        );

        return;

      }


      country.classList.add(
        "country"
      );

      country.dataset.countryName =
        countryName;


      /* Hover */

      country.addEventListener(
        "mouseenter",
        () => {

          country.classList.add(
            "country-hover"
          );

        }
      );


      country.addEventListener(
        "mouseleave",
        () => {

          country.classList.remove(
            "country-hover"
          );

        }
      );


      /* Click */

      country.addEventListener(
        "click",
        () => {

          selectCountry(
            countryName
          );

          openDelegation(
            countryName
          );

        }
      );

    });


  /* -------------------------------------------------------
     Multi-path countries
     ------------------------------------------------------- */

  Object.entries(classCountryMap)
    .forEach(([svgClass, countryName]) => {

      const countryPaths =
        Array.from(
          document.querySelectorAll(
            `#worldMapSvg path.${svgClass}`
          )
        );


      if (!countryPaths.length) {

        console.warn(
          `Could not find ${svgClass} in world.svg`
        );

        return;

      }


      countryPaths.forEach(country => {

        country.classList.add(
          "country"
        );

        country.dataset.countryName =
          countryName;

        country.dataset.countryGroup =
          svgClass;


        /* Hover entire country */

        country.addEventListener(
          "mouseenter",
          () => {

            countryPaths.forEach(c => {

              c.classList.add(
                "country-hover"
              );

            });

          }
        );


        country.addEventListener(
          "mouseleave",
          () => {

            countryPaths.forEach(c => {

              c.classList.remove(
                "country-hover"
              );

            });

          }
        );


        /* Click any piece */

        country.addEventListener(
          "click",
          () => {

            selectCountry(
              countryName
            );

            openDelegation(
              countryName
            );

          }
        );

      });

    });


  /* -------------------------------------------------------
     Selector ↔ map hover synchronization
     ------------------------------------------------------- */

  document.addEventListener(
    "mouseenter",
    event => {

      const button =
        event.target.closest(
          ".country-selector-button"
        );


      if (!button) {
        return;
      }


      clearHover();

      highlightCountry(
        button.dataset.country
      );

    },
    true
  );


  document.addEventListener(
    "mouseleave",
    event => {

      const button =
        event.target.closest(
          ".country-selector-button"
        );


      if (!button) {
        return;
      }


      clearHover();

    },
    true
  );

}


/* =========================================================
   COALITION BUTTON EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        ".coalition-button"
      );


    if (!button) {
      return;
    }


    const filterType =
      button.dataset.filterType;

    const filterValue =
      button.dataset.filterValue;


    openCoalition(
      filterType,
      filterValue
    );

  }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

loadWorldMap();