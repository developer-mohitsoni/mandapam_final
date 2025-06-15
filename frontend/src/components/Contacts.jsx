import { useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Check,
  Loader2,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211"],
    description: "Available Mon-Sat, 9am to 6pm",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@weddingplanner.com", "support@weddingplanner.com"],
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Wedding Street, Chennai", "Tamil Nadu, India - 600001"],
    description: "Appointments recommended",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    description: "Special timings by appointment",
  },
];

const faqItems = [
  {
    question: "How far in advance should I book your wedding services?",
    answer:
      "We recommend booking at least 6-8 months in advance for full planning services, especially if your wedding is during peak season (October-February). For specific services like venue booking, we suggest 10-12 months in advance to secure your preferred location and date.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Chennai, Bangalore, and Hyderabad. However, we also offer destination wedding services across India and select international locations. Additional travel fees may apply for locations beyond our primary service areas.",
  },
  {
    question: "Do you offer customized packages?",
    answer:
      "Absolutely! While we have standard packages to suit different needs and budgets, we understand that every wedding is unique. We're happy to create a customized package tailored specifically to your requirements and preferences.",
  },
  {
    question: "How involved will I be in the planning process?",
    answer:
      "As much or as little as you'd like! Some couples prefer to be involved in every decision, while others entrust us with most details. We adapt our approach based on your comfort level, ensuring regular updates and consultations regardless of your preferred level of involvement.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our standard policy includes a non-refundable booking fee. Cancellations made more than 6 months before the event date are eligible for a partial refund of subsequent payments. Cancellations within 6 months are subject to our detailed policy which we share during the contract signing. We also offer wedding insurance options to protect your investment.",
  },
];

const officeLocations = [
  {
    city: "Chennai",
    address: "123 Marina Road, Chennai, Tamil Nadu",
    phone: "+91 98765 43210",
    email: "chennai@mandapam.com",
  },
  {
    city: "Bangalore",
    address: "456 MG Road Spot, Bangalore, Karnataka",
    phone: "+91 91234 56789",
    email: "bangalore@mandapam.com",
  },
  {
    city: "Hyderabad",
    address: "789 Banjara Hills, Hyderabad, Telangana",
    phone: "+91 90123 45678",
    email: "hyderabad@mandapam.com",
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "#", color: "bg-blue-600" },
  { name: "Instagram", icon: Instagram, url: "#", color: "bg-pink-600" },
  { name: "Twitter", icon: Twitter, url: "#", color: "bg-blue-400" },
  { name: "YouTube", icon: Youtube, url: "#", color: "bg-red-600" },
];

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
    service: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // Removed the unused 'error' state variable and setter

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send data to Formspree
      const response = await fetch("https://formspree.io/f/mldbgerv", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Error sending form data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start mb-6"
        >
          <Check className="text-green-500 w-5 h-5 mt-0.5 mr-3" />
          <div>
            <h4 className="font-medium text-green-800">
              Thank you for contacting us!
            </h4>
            <p className="text-green-700 text-sm">
              We have received your message and will get back to you within 24
              hours.
            </p>
          </div>
        </motion.div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="phone"
            >
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="eventDate"
            >
              Event Date (if known)
            </label>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              value={formState.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="service"
          >
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formState.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          >
            <option value="">Select a service</option>
            <option value="full-planning">Full Wedding Planning</option>
            <option value="venue">Venue Booking</option>
            <option value="catering">Catering Services</option>
            <option value="decoration">Decoration & Theme Setup</option>
            <option value="photography">Photography & Videography</option>
            <option value="entertainment">Entertainment & Music</option>
            <option value="accommodation">Guest Accommodation</option>
            <option value="other">Other Services</option>
          </select>
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="message"
          >
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formState.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y"
            placeholder="Tell us about your wedding and how we can help..."
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors w-full"
          >
            {submitting ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our wedding services and
          process.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const OfficeLocations = () => {
  return (
    <div className="mt-16 bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Offices</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our office locations across South India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officeLocations.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {office.city}
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="flex">
                  <Phone className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span>{office.email}</span>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    office.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
                >
                  Get Directions <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialConnect = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Connect With Us
          </h2>
          <p className="text-gray-600 mb-8">
            Follow us on social media for wedding inspiration, behind-the-scenes
            content, and special offers.
          </p>

          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ y: -5 }}
                className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-all`}
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-blue-600 py-16 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get wedding planning tips, exclusive offers, and inspiration
            delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="px-4 py-3 rounded-lg flex-grow text-gray-800 outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-blue-100"
              >
                Thank you for subscribing! You will receive our next newsletter
                soon.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

// Fix default icon issues with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const MapSection = () => {
  const position = [28.6139, 77.209]; // Example: Delhi coordinates

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Mandapam Booking Office <br /> Delhi, India
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

const ContactsHero = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative w-full h-64 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
  >
    <div className="absolute inset-0">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-black opacity-20"
      />
    </div>

    <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-2"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg max-w-2xl"
      >
        We are here to answer any questions you may have about our services
      </motion.p>
    </div>
  </motion.div>
);

const ContactInfoCards = () => (
  <div className="py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <div className="p-3 bg-blue-100 inline-block rounded-full mb-4">
              <info.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {info.title}
            </h3>
            {info.details.map((detail, i) => (
              <p key={i} className="text-gray-700 mb-1">
                {detail}
              </p>
            ))}
            <p className="text-gray-500 text-sm mt-2">{info.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/appointments", formData);
      setStatus("Appointment booked successfully!");
      setFormData({ name: "", email: "", date: "", message: "" });
    } catch (error) {
      setStatus("Failed to book appointment. Try again.");
      console.error(error);
    }
  };

  return (
    <div className="py-12 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Meet with our experts to discuss your wedding vision and how we can
            bring it to life.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 max-w-xl mx-auto text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Message (optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white hover:bg-blue-700 transition-colors px-8 py-3 rounded-lg font-medium inline-flex items-center"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book an Appointment
              </button>
            </div>

            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const ContactsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ContactsHero />
      <ContactInfoCards />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-blue-600 text-white p-6 md:p-8 rounded-2xl shadow-xl h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>

              <div className="space-y-4 mb-8">
                <div className="flex">
                  <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <p>15+ years of experience in wedding planning</p>
                </div>
                <div className="flex">
                  <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <p>Dedicated team of professionals</p>
                </div>
                <div className="flex">
                  <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <p>Customized solutions for every budget</p>
                </div>
                <div className="flex">
                  <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <p>End-to-end wedding management</p>
                </div>
                <div className="flex">
                  <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <p>Attention to detail and personal touch</p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  <div>
                    <p className="font-medium">Need immediate assistance?</p>
                    <p className="text-sm text-blue-100">
                      Call us at +91 98765 43210
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppointmentSection />
      <OfficeLocations />
      <FAQ />
      <SocialConnect />
      <NewsletterSection />
      <MapSection />
    </div>
  );
};

export default ContactsPage;
