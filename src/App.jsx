import { useState } from "react";
import "./App.css";

const services = [
  {
    number: "01",
    title: "Themes & Decor",
    description:
      "Beautiful settings, floral details, and mandaps designed around your story.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Venue Selection",
    description:
      "Find a setting that feels just right for your celebration.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "Catering & Menus",
    description:
      "Thoughtfully planned menus for every guest and every ceremony.",
    icon: "❋",
  },
  {
    number: "04",
    title: "Makeup & Styling",
    description:
      "Looks that bring out your personality on your special day.",
    icon: "✧",
  },
  {
    number: "05",
    title: "Photography",
    description:
      "Keep the candid moments and meaningful traditions forever.",
    icon: "◎",
  },
  {
    number: "06",
    title: "Events & Hospitality",
    description:
      "From Haldi to reception, every detail handled with care.",
    icon: "♡",
  },
];

const inspirationIdeas = [
  {
    id: 1,
    title: "Royal Indian Wedding",
    category: "Traditional",
    description: "Rich colours, statement decor, and a regal mandap.",
    image:
      "https://assets.vogue.in/photos/654e1cc4998efe1aeed8a308/1:1/w_1600%2Cc_limit/400384047_3588510571472310_7916982538006679933_n.jpg",
  },
  {
    id: 2,
    title: "Garden Romance",
    category: "Floral & Natural",
    description: "Soft blooms, natural greenery, and an outdoor setting.",
    image:
      "https://i.pinimg.com/736x/1f/02/e8/1f02e821a6e0fe4da23ba1db0b29668a.jpg",
  },
  {
    id: 3,
    title: "Timeless Ivory",
    category: "Floral & Natural",
    description: "Neutral shades, delicate flowers, and understated elegance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1an7UrX7oryjzzlkiaPkycbDyen8BdxT3wWTxt1E8nZTzof3qvHl5ajo&s=10",
  },
  {
    id: 4,
    title: "South Indian Traditions",
    category: "Traditional",
    description: "Classic ceremony details with a warm, traditional feel.",
    image:
      "https://brajamandala.com/wp-content/uploads/2023/10/27-10936-post/South_Indian_Wedding_photographer.jpg",
  },
  {
    id: 5,
    title: "Rooftop Wedding",
    category: "Minimal & Modern",
    description: "Romantic blush tones, soft lighting, and elegant details.",
    image:
      "https://www.wedding-venice.com/images/receptions/romantic-terraces/Panoramic-Terraces-in-Venice---Location-9.jpg",
  },
  {
    id: 6,
    title: "Beach Wedding",
    category: "Minimal & Modern",
    description: "Clean styling and contemporary details for your big day.",
    image:
      "https://www.marriagecolours.com/wp-content/uploads/2026/04/best-beach-wedding-venues-in-mahabalipuram-luxury-to-budget-7.jpg",
  },
  {
    id: 7,
    title: "Bengali Wedding",
    category: "Traditional",
    description: " multi-day celebration of vibrant rituals, iconic customs .",
    image:
      "https://getethnic.com/wp-content/uploads/2020/05/20klklUntitled-design-2019-07-31T113252.545.png",
  },
];


  function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const [savedIdeas, setSavedIdeas] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("knotForeverSavedIdeas") || "[]"
      );
    } catch {
      return [];
    }
  });

  const [budget, setBudget] = useState(1000000);
const [guestCount, setGuestCount] = useState(200);

const budgetBreakdown = [
  { name: "Venue", percentage: 20 },
  { name: "Catering", percentage: 35 },
  { name: "Decoration", percentage: 20 },
  { name: "Photography", percentage: 10 },
  { name: "Outfits & Styling", percentage: 10 },
  { name: "Other Expenses", percentage: 5 },
];

const estimatedPerGuest = guestCount > 0
  ? Math.round(budget / guestCount)
  : 0;

const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleWeddingSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const weddingDetails = Object.fromEntries(formData.entries());

    localStorage.setItem(
      "knotForeverWeddingPlan",
      JSON.stringify(weddingDetails)
    );

    setFormSubmitted(true);
    form.reset();
  }

  function toggleSavedIdea(id) {
    setSavedIdeas((currentSaved) => {
      const updatedSaved = currentSaved.includes(id)
        ? currentSaved.filter((savedId) => savedId !== id)
        : [...currentSaved, id];

      localStorage.setItem(
        "knotForeverSavedIdeas",
        JSON.stringify(updatedSaved)
      );

      return updatedSaved;
    });
  }

  const filteredIdeas = inspirationIdeas.filter((idea) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Saved") {
      return savedIdeas.includes(idea.id);
    }
    return idea.category === activeFilter;
  });

  return (
    <div className="website">
      <div className="announcement">
        MADE FOR YOUR KIND OF FOREVER
      </div>

      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">k.</span>
          <span>
            <span className="brand-name">Knot & Forever</span>
            <span className="brand-caption">
              WEDDINGS, THOUGHTFULLY PLANNED
            </span>
          </span>
        </a>

<button
  className="mobile-menu-toggle"
  type="button"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={isMenuOpen}
>
  {isMenuOpen ? "✕" : "☰"}
</button>

<div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
  <nav className="nav-links" aria-label="Main navigation">
    <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
    <a href="#about" onClick={() => setIsMenuOpen(false)}>Our Story</a>
    <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
    <a href="#inspiration" onClick={() => setIsMenuOpen(false)}>Inspiration</a>
    <a href="#budget" onClick={() => setIsMenuOpen(false)}>Budget Planner</a>
    <a href="#experiences" onClick={() => setIsMenuOpen(false)}>Experiences</a>
    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
  </nav>

  <div className="nav-actions">
    <a
      className="login-link"
      href="#login"
      onClick={() => setIsMenuOpen(false)}
    >
      Log in
    </a>

    <a
      className="button button-small"
      href="#plan"
      onClick={() => setIsMenuOpen(false)}
    >
      Plan Your Wedding
    </a>
  </div>
</div>   
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Elegant Indian wedding mandap decorated with ivory flowers and warm lights" />

          <div className="hero-content">
            <p className="eyebrow">
              YOUR STORY, BEAUTIFULLY CELEBRATED
            </p>

            <h1>
              Tradition in every detail.
              <br />
              <em>Your story in every moment.</em>
            </h1>

            <p className="hero-description">
              From the first celebration to the final farewell,
              we bring your wedding vision to life with thoughtful
              planning and timeless style.
            </p>

            <div className="hero-actions">
              <a className="button" href="#wedding-form">
                Plan Your Wedding 
              </a>
              <a className="text-link" href="#services">
                Discover our services 
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              MADE WITH LOVE. PLANNED WITH PURPOSE.
            </div>
          </div>

          <div className="hero-side-note">
            LOVE IN EVERY LITTLE DETAIL
          </div>
        </section>

        <section className="intro section-pad" id="about">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>
            Your traditions. Your people.
            <br />
            <em>Your kind of magic.</em>
          </h2>
          <p className="intro-description">
            We believe the most beautiful weddings are the ones
            that feel like you. We bring modern ideas and Indian
            traditions together to create celebrations that feel
            personal, meaningful, and unforgettable.
          </p>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THOUGHTFULLY CURATED FOR YOU</p>
              <h2>Every detail, <em>taken care of.</em></h2>
            </div>
            <a className="text-link" href="#plan">
              Explore all services
            </a>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#plan" className="service-link">
                  Discover more
                </a>
              </article>
            ))}
          </div>
        </section>


<section className="inspiration section-pad" id="inspiration">
  <div className="section-heading">
    <div>
      <p className="eyebrow">A LITTLE INSPIRATION</p>
      <h2>Dream it. <em>Save it. Celebrate it.</em></h2>
    </div>
    <p className="inspiration-intro">
      Collect the colours, details, and ideas that feel like your kind
      of wedding.
    </p>
  </div>
  
<section className="budget-section section-pad" id="budget">
  <div className="section-heading">
    <div>
      <p className="eyebrow">PLAN WITH CONFIDENCE</p>
      <h2>Your budget, <em>beautifully balanced.</em></h2>
    </div>
    <p className="inspiration-intro">
      Get a simple starting estimate for your celebration.
    </p>
  </div>

  <div className="budget-layout">
    <div className="budget-controls">
      <label>
        Total wedding budget
        <select
          value={budget}
          onChange={(event) => setBudget(Number(event.target.value))}
        >
          <option value={500000}>₹5 lakh</option>
          <option value={1000000}>₹10 lakh</option>
          <option value={1500000}>₹15 lakh</option>
          <option value={2500000}>₹25 lakh</option>
          <option value={5000000}>₹50 lakh</option>
        </select>
      </label>

      <label>
        Expected guests: {guestCount}
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={guestCount}
          onChange={(event) =>
            setGuestCount(Number(event.target.value))
          }
        />
      </label>

      <div className="budget-total">
        <p>Estimated budget per guest</p>
        <h3>
          ₹{estimatedPerGuest.toLocaleString("en-IN")}
        </h3>
      </div>
    </div>

    <div className="budget-results">
      <p className="eyebrow">SUGGESTED BREAKDOWN</p>

      {budgetBreakdown.map((item) => {
        const amount = Math.round(
          budget * item.percentage / 100
        );

        return (
          <div className="budget-row" key={item.name}>
            <div className="budget-row-heading">
              <span>{item.name}</span>
              <strong>
                ₹{amount.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="budget-track">
              <div
                className="budget-fill"
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            <p>{item.percentage}% of total budget</p>
          </div>
        );
      })}

      <p className="budget-note">
        These figures are planning estimates. Actual costs
        depend on your venue, location, guest requirements,
        and vendor choices.
      </p>
    </div>
  </div>
</section>


  <div className="inspiration-filters" aria-label="Filter wedding ideas">
    {["All", "Traditional", "Floral & Natural", "Minimal & Modern", "Saved"].map(
      (filter) => (
        <button
          key={filter}
          type="button"
          className={`filter-button ${
            activeFilter === filter ? "active" : ""
          }`}
          onClick={() => setActiveFilter(filter)}
          aria-pressed={activeFilter === filter}
        >
          {filter === "Saved" ? `♡ Saved (${savedIdeas.length})` : filter}
        </button>
      )
    )}
  </div>

  {filteredIdeas.length > 0 ? (
    <div className="inspiration-grid">
      {filteredIdeas.map((idea) => {
        const isSaved = savedIdeas.includes(idea.id);

        return (
          <article className="inspiration-card" key={idea.id}>
            <div className="inspiration-image-wrap">
              <img
                src={idea.image}
                alt={idea.title}
                className="inspiration-image"
                loading="lazy"
              />

              <span className="idea-category">{idea.category}</span>

              <button
                type="button"
                className={`save-button ${isSaved ? "saved" : ""}`}
                onClick={() => toggleSavedIdea(idea.id)}
                aria-label={
                  isSaved
                    ? `Remove ${idea.title} from saved ideas`
                    : `Save ${idea.title}`
                }
                aria-pressed={isSaved}
              >
                {isSaved ? "♥" : "♡"}
              </button>
            </div>

            <div className="inspiration-card-content">
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
              <button
                type="button"
                className="save-text-button"
                onClick={() => toggleSavedIdea(idea.id)}
              >
                {isSaved ? "Remove from favourites −" : "Save to favourites +"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  ) : (
    <div className="no-saved-ideas">
      <span>♡</span>
      <h3>Your inspiration board is waiting.</h3>
      <p>Save a few ideas you love, and they'll appear here.</p>
      <button
        type="button"
        className="button"
        onClick={() => setActiveFilter("All")}
      >
        Explore all ideas
      </button>
    </div>
  )}

  <div className="inspiration-cta">
    <p>Found a style you love?</p>
    <a className="button" href="#wedding-form">
      Start planning your wedding
    </a>
  </div>
</section>


        <section className="plan-banner" id="plan">
          <section className="wedding-form-section section-pad" id="wedding-form">
  <div className="form-heading">
    <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>
    <h2>Let's plan something <em>beautiful.</em></h2>
    <p>
      Tell us a little about your celebration so we can help you bring
      your vision to life.
    </p>
  </div>

  {formSubmitted ? (
    <div className="form-success">
      <span className="success-icon">♡</span>
      <h3>Your wedding journey begins!</h3>
      <p>
        Your details have been saved in this browser for the demo.
      </p>
      <button
        className="button"
        onClick={() => setFormSubmitted(false)}
      >
        Plan another wedding
      </button>
    </div>
  ) : (
      

    <form className="wedding-form" onSubmit={handleWeddingSubmit}>
      <div className="form-grid">
        <label>
          Your name *
          <input
            type="text"
            name="clientName"
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Partner's name *
          <input
            type="text"
            name="partnerName"
            placeholder="Enter your partner's name"
            required
          />
        </label>

        <label>
          Wedding date
          <input type="date" name="weddingDate" />
        </label>

        <label>
          Wedding location *
          <input
            type="text"
            name="location"
            placeholder="City or venue"
            required
          />
        </label>

        <label>
          Expected guests
          <select name="guestCount" defaultValue="">
            <option value="" disabled>Select guest count</option>
            <option value="Under 100">Under 100</option>
            <option value="100–300">100–300</option>
            <option value="300–500">300–500</option>
            <option value="500+">500+</option>
          </select>
        </label>

        <label>
          Estimated budget
          <select name="budget" defaultValue="">
            <option value="" disabled>Select your budget</option>
            <option value="Under ₹5 lakh">Under ₹5 lakh</option>
            <option value="₹5–10 lakh">₹5–10 lakh</option>
            <option value="₹10–25 lakh">₹10–25 lakh</option>
            <option value="₹25 lakh+">₹25 lakh+</option>
            <option value="Not decided">Not decided yet</option>
          </select>
        </label>
      </div>

      <label className="full-width-label">
        What are you looking for?
        <textarea
          name="preferences"
          rows="4"
          placeholder="For example: traditional South Indian wedding, floral mandap, photography, catering..."
        />
      </label>

      <button className="button form-submit" type="submit">
        Save My Wedding Plan
      </button>

      <p className="form-note">
        Demo version: your information stays in this browser and is
        not sent to a wedding planner.
      </p>
    </form>
  )}
</section>
          <p className="eyebrow">LET'S MAKE IT YOURS</p>
          <h2>
            Your dream day starts
            <br />
            with <em>a little conversation.</em>
          </h2>
          <p>
            Tell us what you imagine. We'll help you bring
            the pieces together.
          </p>
          <a className="button button-light" href="#wedding-form">
            Start planning
          </a>
        </section>

        <section className="contact section-pad" id="contact">
          <p className="eyebrow">WE'D LOVE TO HEAR FROM YOU</p>
          <h2>Let's talk about <em>your forever.</em></h2>
          <a className="button" href="mailto:hello@knotandforever.example">
            Get in touch
          </a>
        </section>
      </main>

      <footer className="footer" id="experiences">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">k.</span>
          <span>
            <span className="brand-name">Knot & Forever</span>
            <span className="brand-caption">
              WEDDINGS, THOUGHTFULLY PLANNED
            </span>
          </span>
        </a>
        <p>Made for your kind of forever.</p>
        <a href="#home" className="back-to-top">
          Back to top 
        </a>
      </footer>
    </div>
  );
}

export default App;
