import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Building,
  Utensils,
  Flower2,
  Camera,
  Music,
  BedDouble,
  ClipboardList,
  ParkingCircle,
  ChevronDown,
  Heart,
  MessageSquare,
  Star,
} from "lucide-react";

const servicesList = [
  {
    title: "Venue Booking",
    description:
      "Spacious and elegant mandapams designed for weddings, receptions, and cultural events with customizable setups.",
    icon: Building,
    fullDescription:
      "Our venues range from intimate garden settings to grand banquet halls that can accommodate up to 1000 guests. Each space is designed to be transformed according to your vision, with state-of-the-art facilities including climate control, premium sound systems, and customizable lighting. We offer exclusive booking options with flexible timing to ensure your event gets the attention it deserves.",
    features: [
      "Multiple venue options",
      "Customizable layouts",
      "Premium amenities",
      "Exclusive bookings available",
    ],
    testimonial: {
      text: "The venue was absolutely stunning and exactly what we envisioned for our special day.",
      author: "Priya & Rahul",
      rating: 5,
    },
  },
  {
    title: "Catering Services",
    description:
      "Delicious multi-cuisine catering with customizable menu options tailored to your guest preferences.",
    icon: Utensils,
    fullDescription:
      "Our master chefs craft exquisite menus spanning traditional South Indian delicacies, North Indian favorites, Continental cuisine, and Asian specialties. We source fresh, local ingredients and can accommodate dietary restrictions including vegetarian, vegan, gluten-free, and allergy-specific requirements. Our team provides elegant presentation with options for buffet style, plated service, or food stations.",
    features: [
      "Multi-cuisine options",
      "Customized menus",
      "Dietary accommodations",
      "Live cooking stations",
    ],
    testimonial: {
      text: "The food was exceptional - our guests couldn't stop talking about the diverse menu and flavors.",
      author: "Ananya & Vikram",
      rating: 5,
    },
  },
  {
    title: "Decoration & Theme Setup",
    description:
      "Elegant decor, floral arrangements, lighting setups, and themed backdrops to match your dream wedding vibe.",
    icon: Flower2,
    fullDescription:
      "Transform your venue with our stunning decoration services. From traditional to contemporary themes, our design team creates magical environments with premium floral arrangements, elegant drapery, ambient lighting, and customized mandaps. We work closely with you to bring your vision to life, incorporating personal touches and cultural elements that make your celebration uniquely yours.",
    features: [
      "Custom theme designs",
      "Premium floral arrangements",
      "Ambient lighting solutions",
      "Personalized decor elements",
    ],
    testimonial: {
      text: "The decoration exceeded our expectations! They transformed the venue into a magical wonderland.",
      author: "Meera & Arjun",
      rating: 5,
    },
  },
  {
    title: "Photography & Videography",
    description:
      "Professional photography and cinematic videography to capture every beautiful moment of your big day.",
    icon: Camera,
    fullDescription:
      "Our team of award-winning photographers and videographers document your special moments with artistic precision. Using state-of-the-art equipment, we create stunning visual narratives through candid shots, cinematic films, drone coverage, and same-day edits. Our packages include pre-wedding shoots, complete event coverage, and beautifully designed albums and highlights that will be cherished for generations.",
    features: [
      "Pre-wedding photoshoots",
      "Cinematic videography",
      "Drone coverage",
      "Same-day edits available",
    ],
    testimonial: {
      text: "The photography team captured moments we didn't even realize happened. Our wedding album is truly a work of art.",
      author: "Sanjana & Karthik",
      rating: 5,
    },
  },
  {
    title: "Entertainment & Music",
    description:
      "Live bands, DJs, traditional performances, and entertainers to keep your guests engaged and joyful.",
    icon: Music,
    fullDescription:
      "Set the perfect mood with our diverse entertainment options. From classical musicians for your ceremony to energetic DJs for your reception, we provide performers who enhance every moment. Our entertainment packages can include traditional instrumental ensembles, vocal artists, contemporary bands, choreographed dance performances, and professional MCs to guide your event flow.",
    features: [
      "Live music bands",
      "Professional DJs",
      "Cultural performances",
      "Event MCs & hosts",
    ],
    testimonial: {
      text: "The entertainment package made our reception unforgettable. The dance floor was packed all night!",
      author: "Divya & Nikhil",
      rating: 5,
    },
  },
  {
    title: "Guest Accommodation",
    description:
      "Luxurious and comfortable stay options for your outstation guests with premium hospitality services.",
    icon: BedDouble,
    fullDescription:
      "We partner with premium hotels and resorts to offer exclusive accommodation packages for your guests. From luxury suites to comfortable standard rooms, we ensure your loved ones experience top-notch hospitality. Our services include group booking discounts, welcome kits for guests, transportation between venues, and personalized concierge services to make their stay comfortable and memorable.",
    features: [
      "Luxury and standard room options",
      "Group booking discounts",
      "Transportation services",
      "Welcome kits for guests",
    ],
    testimonial: {
      text: "Our out-of-town family members were thoroughly impressed with the accommodation arrangements.",
      author: "Anjali & Deepak",
      rating: 5,
    },
  },
  {
    title: "Event Planning & Coordination",
    description:
      "Dedicated event managers ensuring smooth execution of your event from start to finish.",
    icon: ClipboardList,
    fullDescription:
      "Our experienced planners handle every detail so you can focus on enjoying your celebration. From initial concept development to day-of coordination, we manage vendor relationships, create detailed timelines, coordinate logistics, and solve problems before they arise. Your dedicated coordinator becomes your advocate, ensuring your vision is realized while keeping everything on schedule and within budget.",
    features: [
      "End-to-end planning",
      "Vendor management",
      "Timeline creation",
      "On-site coordination",
    ],
    testimonial: {
      text: "Having a coordinator made our wedding day stress-free. Every detail was perfect and we could truly be present.",
      author: "Kavita & Rohan",
      rating: 5,
    },
  },
  {
    title: "Valet Parking",
    description:
      "Effortless parking solutions with professional valet staff ensuring convenience for all your guests.",
    icon: ParkingCircle,
    fullDescription:
      "Provide your guests with a seamless arrival experience through our professional valet services. Our trained staff efficiently manage vehicle parking, reducing wait times and frustration. Services include dedicated parking areas, covered parking options, secure vehicle handling, and quick retrieval systems. For larger events, we implement traffic management plans to ensure smooth ingress and egress.",
    features: [
      "Professional valet staff",
      "Organized parking management",
      "Quick vehicle retrieval",
      "Traffic flow planning",
    ],
    testimonial: {
      text: "The valet service was incredibly efficient. Our elderly guests especially appreciated not having to walk far.",
      author: "Neha & Suresh",
      rating: 5,
    },
  },
];

const ServicesHero = () => {
  
  const handleScroll = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-96 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-black opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Exceptional Wedding Services
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl max-w-2xl"
        >
          Creating magical moments for your perfect celebration
        </motion.p>

        <motion.button
          whileHover="hover"
          onClick={handleScroll}  
          className="mt-8 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium flex items-center"
        >
          Explore Our Services
          <motion.span
            variants={{
              hover: { y: 3 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="ml-2"
          >
            <ChevronDown className="w-4 h-4" />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};


const ServiceCard = ({ service, index, setSelectedService }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      onClick={() => setSelectedService(service)}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <service.icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 ml-4 group-hover:text-blue-600 transition-colors duration-300">
          {service.title}
        </h3>
      </div>
      <p className="text-gray-600 text-sm">{service.description}</p>
      <div className="mt-4 flex justify-end">
        <span className="text-blue-600 text-sm font-medium group-hover:underline flex items-center">
          Learn more{" "}
          <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
        </span>
      </div>
    </motion.div>
  );
};

const ServiceDetail = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <service.icon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 ml-4">
              {service.title}
            </h2>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-gray-700">{service.fullDescription}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-blue-50 px-4 py-3 rounded-lg"
                >
                  <Heart className="text-blue-600 w-5 h-5 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {service.testimonial.author.split(" ")[0][0]}
                </div>
              </div>
              <div className="ml-4">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill={i < service.testimonial.rating ? "#FFC107" : "none"}
                      stroke={
                        i < service.testimonial.rating ? "#FFC107" : "#CBD5E0"
                      }
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  {service.testimonial.text}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  - {service.testimonial.author}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              className="mr-4 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Our wedding day was absolutely perfect thanks to the amazing team. From venue decoration to catering, everything exceeded our expectations.",
      author: "Meera & Karthik",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      text: "The attention to detail was remarkable. Our guests are still talking about how beautiful and well-organized our wedding was.",
      author: "Ananya & Raj",
      image: "https://i.pravatar.cc/60?img=12",
    },
    {
      text: "Having all services under one roof made planning so much easier. The team took care of everything while respecting our cultural traditions.",
      author: "Priya & Vikram",
      image: "https://i.pravatar.cc/60?img=20",
    },
  ];

  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Couples Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dont just take our word for it. Hear from couples who trusted us
            with their special day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="#FFC107"
                    stroke="#FFC107"
                    className="inline-block w-5 h-5 mr-1"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  className="w-10 h-10 rounded-full"
                  alt={testimonial.author}
                />
                <span className="ml-3 font-medium text-gray-800">
                  {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Plan Your Dream Wedding?
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Let our expert team help you create memories that will last a
          lifetime.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/Contacts">
          <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium flex items-center justify-center">
            <MessageSquare className="mr-2 w-5 h-5" />
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ServicesHero />

      <div className="px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer everything you need to make your special day perfect.
            Explore our exclusive services curated just for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              setSelectedService={setSelectedService}
            />
          ))}
        </div>
      </div>

      <Testimonials />

      <CallToAction />

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

// Service Card PropTypes
ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    fullDescription: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    testimonial: PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  setSelectedService: PropTypes.func.isRequired,
};

// Service Detail PropTypes
ServiceDetail.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    fullDescription: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    testimonial: PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Services;
