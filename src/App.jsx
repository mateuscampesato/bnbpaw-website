import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  X,
} from "lucide-react";
import { Link, Route, Routes, useLocation} from "react-router-dom";
import Terms from "./terms.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx";
import PrivacyNotice from "./privacy.jsx";
import { business } from "./business.js"
import { useEffect } from "react";



const reviews = [
  {
    quote:
      "The way Kyra’s came back home, we knew you treated her the best. Thanks a lot for your patience and love with her! Definitely will need you again!!!",
    dog: "Kira",
    parent: "Carlos",
    image: "/images/kira.jpg",
    alt: "Image of Kira, dog.",
    badgetext: "A VERY HAPPY DOG",
  },
  {
    quote:
      "We highly recommend B&B Paw. Mike loved his stay with them. We received multiple updates on how Mike was doing, and we could really feel like he was comfortable and at home.",
    dog: "Mike",
    parent: "Bruno & Dayane",
    image: "/images/mike.jpg",
    alt: "Image of Mike, dog.",
    badgetext: "A VERY HAPPY DOG",
  },
  // {
  //   quote:
  //     "B&B Paw pet sit Amber for over 20 days. While it is usually worrisome leaving someone we do not know enter our home and care for our baby, Vitoria has done an amazing job. She truly cares for these animals and we are so happy with her. I cannot recommend her enough.",
  //   dog: "Amber",
  //   parent: "Carrie",
  //   image: "/images/Amber.jpeg",
  //   alt: "Image of Amber, dog.",
  //   badgetext: "A VERY HAPPY DOG",
  // },
  {
    quote:
      "Vitoria was absolutely amazing looking after Koda while we were away! Her daily photos, videos and messages made me feel so much more at ease and reassured me that he was happy and well cared for. Koda had a small health issue, and she was incredibly careful, responsible and attentive, monitoring him closely and caring for him with real dedication. You can clearly see how much love she has for every animal in her care!",
    dog: "Koda",
    parent: "Rebeca",
    image: "/images/Koda.jpg",
    alt: "Image of Koda, dog.",
    badgetext: "A VERY HAPPY DOG",
  },
  {
    quote:
      "Absolutely fantastic! Lucas was so well looked after and came home happy and relaxed. It's lovely knowing I can leave him with someone I completely trust. I wouldn't hesitate to recommend, and Lucas will definitely be back! ",
    dog: "Lucas",
    parent: "Michele",
    image: "/images/Lucas.jpg",
    alt: "Image of Lucas, dog.",
    badgetext: "A VERY HAPPY DOG",
  },
  {
    quote:
      "I can't recommend B&B Paw Co. enough! Zara has been staying with them for the past two years and she loves it. She adores Vitoria, and it's lovely to see the genuine bond she has with Vitoria and Bruno (Vitoria's dog and Zara's boyfriend). You can truly see how much love and care they have for the animals they look after.",
    dog: "Zara",
    parent: "Adriele",
    image: "/images/zara.jpg",
    alt: "Image of Lucas, dog.",
    badgetext: "A VERY HAPPY DOG",
  },
  {
    quote:
      "Misha stayed with Vitoria twice now. I think we were lucky meeting this young lady. Great communication with texts, and photos on every house visit. She's very professional, trustworthy and very important, she became good friends with our cat really quick. Her services are 10/10.",
    dog: "Misha",
    parent: "Emilian",
    image: "/images/misha.jpg",
    alt: "Image of Misha, cat.",
    badgetext: "A VERY HAPPY CAT",
  },
  {
    quote:
      "Lovely sitter, helped with our 2 bunnies and would definitely reach out to her again if we ever need help.",
    dog: "Ashley and Becky",
    parent: "Ruth",
    image: "/images/bunnies.jpg",
    alt: "Image of Misha, cat.",
    badgetext: "TWO VERY HAPPY BUNNIES",
  },
];

const partnerPhotos = [
  {
    src: "/images/B&Bteam.jpg",
    alt: "A dog cared for",
    caption: "B&B Team",
  },
  {
    src: "/images/B&Bteam2.jpg",
    alt: "A cat cared for",
    caption: "B&B Team",
  },
  {
    src: "/images/vickykinako.jpg",
    alt: "A cat cared for",
    caption: "Kinako the cat",
  },
  {
    src: "/images/vickyamber.jpg",
    alt: "A cat cared for",
    caption: "Amber the dog",
  },
  {
    src: "/images/vickybruno.jpg",
    alt: "A cat cared for",
    caption: "Bruno the frenchie",
  },
  {
    src: "/images/vickycocoa.jpg",
    alt: "A dog cared for",
    caption: "Koko the dog",
  },
  {
    src: "/images/vickycat.jpg",
    alt: "A cat cared for",
    caption: "Mochi the cat",
  },
];

const services = [
  {
    title: "Dog walking",
    description:
      "Friendly one-to-one walks, tailored to your dog’s pace and individual needs.",
    prices: [
      "30 minute walk — £10",
      "45 minute walk — £14",
      "60 minute walk — £18",
    ],
    detail: "Solo walks, with dogs kept on lead for safety.",
    colour: "blue",
  },
  {
    title: "Pet sitting",
    description:
      "Flexible, personalised care around your pet’s individual needs and routine.",
    prices: [],
    detail:
      "Walks, playtime, enrichment, companionship and basic grooming. Each quote is tailored to the care you need.",
    colour: "pink",
  },
  {
    title: "Drop-in visits",
    description: "A caring check-in while you are at work or away for the day.",
    prices: [
      "30 minute drop-in — £10",
      "1 hour drop-in — £15",
      "2 visits, AM + PM — £18",
    ],
    detail: "Feeding, fresh water, playtime, attention and toilet breaks.",
    colour: "yellow",
  },
];

//MINUTES MAP FUNCTION
const halfHourTimes = Array.from({ length: 48 }, (_, index) => {
  const hours = String(Math.floor(index / 2)).padStart(2, "0");
  const minutes = index % 2 === 0 ? "00" : "30";

  return `${hours}:${minutes}`
});

// SCROLL TO TOP HELPER FUNCTION
function ScrollToTop () {
  const {pathname} = useLocation();

  useEffect(() => {
  window.scrollTo(0,0);
}, [pathname]);

return null;
}

function App () {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyNotice />} />
      </Routes>
    </>
  );
}
export default App;

function HomePage() {
  const [activeReview, setActiveReview] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const review = reviews[activeReview];

  const moveReview = (direction) =>
    setActiveReview(
      (current) => (current + direction + reviews.length) % reviews.length,
    );

  const [activePhoto, setActivePhoto] = useState(0);
  const photo = partnerPhotos[activePhoto];

  const movePhoto = (direction) => {
    setActivePhoto(
      (current) =>
        (current + direction + partnerPhotos.length) % partnerPhotos.length,
    );
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("unconfigured");
      return;
    }
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.get("from_name"),
          from_email: data.get("from_email"),
          from_phone: data.get("from_phone"),
          date_from: data.get("date_from"),
          time_from: data.get("time_from"),
          date_to: data.get("date_to"),
          time_to: data.get("time_to"),
          subject: data.get("subject") || "New pet care enquiry",
          message: data.get("message"),
          to_email: business.email,
        },
        { publicKey },
      );
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const closeMenu = () => setMenuOpen(false);
  return (
    
    <main>
      <Navbar />
      {/* ABOUT US START */}
      <section className="about section-wrap" id="about">
        {/* here is the code for the arrow function */}
        <div
          className="about-image-wrap"
          role="group"
          aria-label="Photo with pets"
        >
          <img src={photo.src} alt={photo.alt} />
          <span className="about-image-tag">
            {photo.caption}
            <span>♡</span>
          </span>

          <div className="about-image-controls">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => movePhoto(-1)}
            >
              <ArrowLeft size={16} />
            </button>

            <span>
              {activePhoto + 1} / {partnerPhotos.length}
            </span>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => movePhoto(1)}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="about-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" /> A bit about us
          </div>
          <h2>
            What we do
            <br />
            truly <em>matters</em>
          </h2>
          <p>
            Welcome to B&B Paw Co., a small, family-run pet care business based in Liverpool, built on a big love for animals!
            With over 3 years of pet care experience, we understand how important it is to find someone you can genuinely trust with your furry family members.
            That’s why we created B&B Paw Co., to offer a more personal, loving and stress-free alternative to traditional pet care.
          </p>
          <p>
            We know that every animal has their own personality, routine and needs, so we never believe in a one-size-fits-all approach.
            From shy cats to energetic puppies and senior dogs who just want a little extra comfort, we take the time to understand what makes each pet feel happy and safe.
            Your Pet’s Safety Comes First.
          </p>
          <a className="text-link about-link"></a>
          <div className="about-signature">
            We're here to make a difference <span>♡</span>
          </div>
        </div>
      </section>
      <div className="ticker" aria-label="Loving care, tailored to your pet">
        <div>
          TAILORED TO YOUR PET <span>✳</span> HAPPY PETS, HAPPY PEOPLE{" "}
          <span>✳</span> LITTLE PAWS, LOTS OF LOVE <span>✳</span>TAILORED TO
          YOUR PET <span>✳</span> HAPPY PETS, HAPPY PEOPLE <span>✳</span> LITTLE
          PAWS, LOTS OF LOVE <span>✳</span>
        </div>
      </div>
      {/* REVIEW/TESTIMONIAL SECTION */}
      <section className="hero" id="review">
        <div className="hero-intro">
          <h1>
            Little paws. Lovely words.
            <br />
            <em>Client testimonial.</em>
          </h1>
          <p>
            Every walk, every happy visit, every kind word means the world to
            us.
          </p>
        </div>
        <article
          className="feature-review"
          id="reviews"
          aria-live="polite"
          aria-label={`Customer review ${activeReview + 1} of ${reviews.length}`}
        >
          <div className="feature-review-photo">
            <img src={review.image} alt={review.alt} />
            <span className="photo-badge">
              {review.badgetext} <span>✳</span>
            </span>
          </div>
          <div className="feature-review-content">
            <div className="feature-review-top">
              <span className="review-label">
                A LITTLE NOTE FROM A PET PARENT
              </span>
              <span className="review-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
            </div>
            <div className="review-for">
              This one’s for <em>{review.dog}</em>
            </div>
            <p className="feature-review-quote">“{review.quote}”</p>
            <div className="feature-review-footer">
              <div className="review-byline">
                <span className="paw-mark">♡</span>
                <div>
                  <strong>{review.dog}</strong>
                  <span>{review.parent}</span>
                </div>
              </div>
              <div className="feature-review-controls">
                <span className="review-count">
                  0{activeReview + 1} <i>/</i> 0{reviews.length}
                </span>
                <button
                  aria-label="Previous review"
                  onClick={() => moveReview(-1)}
                >
                  <ArrowLeft size={18} />
                </button>
                <button aria-label="Next review" onClick={() => moveReview(1)}>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="feature-review-progress">
              <span
                style={{
                  width: `${((activeReview + 1) / reviews.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </article>
      </section>

      <div className="ticker" aria-label="Loving care, tailored to your pet">
        <div>
          TAILORED TO YOUR PET <span>✳</span> HAPPY PETS, HAPPY PEOPLE{" "}
          <span>✳</span> LITTLE PAWS, LOTS OF LOVE <span>✳</span>TAILORED TO
          YOUR PET <span>✳</span> HAPPY PETS, HAPPY PEOPLE <span>✳</span> LITTLE
          PAWS, LOTS OF LOVE <span>✳</span>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="services-intro">
          <div className="service-eyebrow">
            Love has many languages, and we speak them all.
          </div>
          <h2>
            How we can <em>help</em>
          </h2>
          <p>Services tailored to your pet.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-card service-card--${service.colour}`}
              key={service.title}
            >
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              {service.prices.length > 0 && (
                <ul className="service-prices">
                  {service.prices.map((price) => (
                    <li key={price}>{price}</li>
                  ))}
                </ul>
              )}

              <p className="service-detail">{service.detail}</p>
              <a href="/terms" className="service-detail-tcs">Terms and Conditions apply</a>
            </article>
          ))}
        </div>

        <a className="button button-dark" href="#contact">
          Ask us about your pet <ArrowUpRight size={16} />
        </a>
      </section>

      <div className="ticker" aria-label="Loving care, tailored to your pet">
        <div>
          TAILORED TO YOUR PET <span>✳</span> HAPPY PETS, HAPPY PEOPLE{" "}
          <span>✳</span> LITTLE PAWS, LOTS OF LOVE <span>✳</span>TAILORED TO
          YOUR PET <span>✳</span> HAPPY PETS, HAPPY PEOPLE <span>✳</span> LITTLE
          PAWS, LOTS OF LOVE <span>✳</span>
        </div>
      </div>

      {/* CONTACT US SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-intro">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" />
            Your turn
          </div>

          <h2>
            Contact us to
            <br />
            get your space <em>booked</em>
          </h2>

          <p>
            Tell us a bit about it. We’ll get back to you personally, usually
            within a couple of working days.
          </p>

          <div className="contact-detail">
            <span className="contact-icon">
              <img className="contact-icon-img" src="/images/whatsapp.webp" alt="" />
              </span>
            <div>
              <small>Prefer a quick WhatsApp?</small>
              <a href={`https://wa.me/${business.whatsapp}`}>
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-location">{business.location}</div>
        </div>
        {/* CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Your name
              <input
                name="from_name"
                autoComplete="name"
                placeholder="Name"
                required
              />
            </label>
            <label>
              Phone number
              <input
                type="tel"
                name="from_phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+44 7700 000123"
                required
              />
            </label>
          </div>
            <label>
              Email address
              <input
                type="email"
                name="from_email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </label>
            
          <div className="date-time">
            <label>
            From:
            <input name="date_from" type="date" required />
          </label>
          <label>
            From time:
            <select name="time_from" required>
              <option value="">Choose a time</option>
              {halfHourTimes.map((time) =>
              <option key={time} value={time}>
                {time}
              </option>
            )}
            </select>
          </label>
          </div>
          <div className="date-time">
            <label>
            To:
            <input name="date_to" type="date" required />
          </label>
          <label>
            To time:
            <select name="time_to" required>
              <option value="">Choose a time</option>
              {halfHourTimes.map((time) =>
              <option key={time} value={time}>
                {time}
              </option>
            )}
            </select>
          </label>
          </div>
          <label>
            A little more detail
            <textarea
              name="message"
              rows="4"
              placeholder="Share as much or as little as you like"
              required
            />
          </label>
          <div className="form-submit">
            <button
              className="button button-light"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Submit"}{" "}
              <ArrowUpRight size={16} />
            </button>
            <span>Just a friendly note. No mailing lists, ever.</span>
            <span><Link to="/privacy">Privacy Notice</Link></span>
          </div>
          {status === "sent" && (
            <p className="form-status" role="status">
              <Check size={16} /> Your note is on its way. We’ll be in touch
              soon.
            </p>
          )}
          {status === "unconfigured" && (
            <p className="form-status form-error" role="alert">
              The email form needs setup. Please email us directly at{" "}
              <a href={`mailto:${business.email}`}>{business.email}</a>.
            </p>
          )}
          {status === "error" && (
            <p className="form-status form-error" role="alert">
              Something went wrong. Please email us directly at{" "}
              <a href={`mailto:${business.email}`}>{business.email}</a>.
            </p>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
}



