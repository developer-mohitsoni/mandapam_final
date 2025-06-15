import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Award,
  MessageSquare,
  CheckCircle,
  Users,
  Map,
  ChevronDown,
  Clock,
  Target,
} from "lucide-react";

const teamMembers = [
  {
    name: "Rishab Raj",
    Role: "Full Stack Developer",
    bio: "Rishab Raj is a passionate Full Stack Developer with a strong foundation in modern web technologies including React.js, Node.js, and MongoDB. As a co-founder of VisiARise, he has led the development of innovative AR/VR solutions, enhancing user experience in the e-commerce space. With hands-on experience in AI/ML, cybersecurity, and cloud services, Rishab combines technical expertise with creative problem-solving to build scalable, high-impact applications.",
    image: "/public/rishab.jpg",
  },
  {
    name: "Harsh Kumar Tomar",
    Role: "Backend & App Developer",
    bio: "Harsh Kumar Tomar is a skilled Backend and App Developer with a keen eye for scalable architecture and clean code. Specializing in server-side logic, API integration, and mobile app development, he brings efficiency and reliability to every project. With a solid grasp of technologies like Node.js, Express, and Flutter, Harsh ensures seamless user experiences across platforms, making him a valuable asset in fast-paced development teams.",
    image: "/public/harsh_profile.jpg",
  },
  {
    name: "Raj Sharma",
    Role: "Java Developer at Newgen",
    bio: "Raj Sharma is a dedicated Java Developer at Newgen, known for building robust, scalable, and secure enterprise applications. With a strong command of core Java, Spring Boot, and RESTful APIs, he plays a key role in delivering high-performance backend systems. Raj combines problem-solving skills with a deep understanding of software design principles to create efficient solutions that align with business goals.",
    image: "/public/raj_profile2.jpg",
  }
];

const milestones = [
  {
    year: "2005",
    title: "Humble Beginnings",
    description:
      "Started as a small wedding planning service in Chennai with just 3 team members.",
  },
  {
    year: "2008",
    title: "First Major Event",
    description:
      "Successfully orchestrated our first celebrity wedding, putting us on the map in South India.",
  },
  {
    year: "2012",
    title: "Expansion to New Cities",
    description:
      "Opened offices in Bangalore and Hyderabad, serving clients across South India.",
  },
  {
    year: "2015",
    title: "Service Diversification",
    description:
      "Expanded our services to include in-house catering, decor, and entertainment divisions.",
  },
  {
    year: "2018",
    title: "Award Recognition",
    description:
      "Received 'Best Wedding Planner in South India' award for three consecutive years.",
  },
  {
    year: "2022",
    title: "Digital Transformation",
    description:
      "Launched our customer portal allowing clients to plan and track their wedding preparations online.",
  },
  {
    year: "2024",
    title: "Sustainability Initiative",
    description:
      "Pioneered eco-friendly wedding practices with our 'Green Wedding' initiative.",
  },
];

const values = [
  {
    title: "Client-Centric Approach",
    description:
      "We place our clients at the heart of everything we do, ensuring their vision becomes reality.",
    icon: Heart,
  },
  {
    title: "Attention to Detail",
    description:
      "We believe the magic is in the details. No element is too small for our careful consideration.",
    icon: CheckCircle,
  },
  {
    title: "Cultural Respect",
    description:
      "We honor and celebrate diverse traditions, ensuring they're authentically represented.",
    icon: Users,
  },
  {
    title: "Excellence in Execution",
    description:
      "We strive for perfection in every aspect, from planning to the final moments of celebration.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "We constantly evolve, bringing fresh ideas while respecting timeless traditions.",
    icon: Target,
  },
  {
    title: "Reliability",
    description:
      "Our clients can depend on us to deliver as promised, every single time.",
    icon: Clock,
  },
];

const statistics = [
  { value: "1500+", label: "Weddings Planned" },
  { value: "15+", label: "Years of Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "7", label: "Industry Awards" },
];

const StorySection = () => (
  <div className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-blue-600 mb-6"></div>
          <p className="text-gray-700 mb-4">
            Founded in 2005, our journey began with a simple yet profound
            vision: to transform weddings from mere events into unforgettable
            experiences that celebrate love, culture, and individuality.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small team of passionate wedding enthusiasts has
            grown into a leading wedding services company in South India,
            orchestrating over 1,500 successful celebrations across the region.
          </p>
          <p className="text-gray-700 mb-4">
            Our founder, Priya Sharma, built this company on the belief that
            every couple deserves a wedding that truly reflects their unique
            love story and heritage. This philosophy continues to guide us as we
            grow and evolve.
          </p>
          <p className="text-gray-700">
            Today, we take pride in our team of over 50 dedicated professionals
            who bring creativity, expertise, and heart to every wedding we plan.
            From intimate ceremonies to grand celebrations, we approach each
            with the same level of dedication and attention to detail.
          </p>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="aspect-w-4 aspect-h-3 bg-gray-200">
              <div className="w-full h-full">
                <img
                  src="/public/garden.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -left-8 w-64 h-40 rounded-lg overflow-hidden shadow-lg border-4 border-white z-20"
          >
            <img
              src="/public/bridge.jpg"
              alt="Wedding celebration"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-xl bg-blue-100"></div>
        </div>
      </motion.div>
    </div>
  </div>
);

const MissionSection = () => (
  <div className="py-16 bg-blue-50">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Mission & Vision
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          We exist to transform wedding dreams into reality, creating
          celebrations that honor love stories, cultural heritage, and personal
          style.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md text-left"
        >
          <div className="p-3 bg-blue-100 inline-block rounded-full mb-4">
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To create seamless, stress-free wedding experiences that exceed
            expectations while preserving the cultural significance and personal
            touches that make each celebration unique.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-md text-left"
        >
          <div className="p-3 bg-blue-100 inline-block rounded-full mb-4">
            <Map className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Our Vision
          </h3>
          <p className="text-gray-700">
            To be the most trusted wedding service provider in India, known for
            our creativity, cultural sensitivity, and unwavering commitment to
            bringing couples wedding dreams to life.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

const ValuesSection = () => (
  <div className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Our Core Values
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          These principles guide everything we do, from how we interact with our
          clients to how we execute each event.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 bg-blue-100 inline-block rounded-full mb-4">
              <value.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-700">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our diverse team of wedding professionals brings together
            creativity, expertise, and passion to make your special day
            extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-blue-600 mb-3">{member.Role}</p>

              <div className="relative">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: expandedMember === index ? "auto" : "0px",
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-700 text-sm mb-3">{member.bio}</p>
                </motion.div>

                <button
                  onClick={() =>
                    setExpandedMember(expandedMember === index ? null : index)
                  }
                  className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center justify-center mx-auto"
                >
                  {expandedMember === index ? "Show Less" : "Read Bio"}
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                      expandedMember === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineSection = () => (
  <div className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          From humble beginnings to becoming a leading wedding services
          provider, our path has been one of growth, learning, and continuous
          improvement.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

        {/* Timeline items */}
        <div className="relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`mb-16 flex items-center ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              } relative`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "text-right md:pr-10" : "md:pl-10"
                }`}
              >
                <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-blue-600 mb-1">
                    {milestone.year}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const StatsSection = () => (
  <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-1">By the Numbers</h2>
        <p className="text-blue-100">Our impact over the years</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {statistics.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
            <p className="text-blue-100">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="py-16 bg-gradient-to-r from-blue-500 to-purple-700 border-t border-gray-200"
  >
    <div className="max-w-4xl mx-auto text-center px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Ready to Start Planning Your Dream Wedding?
      </h2>
      <p className="text-gray-700 mb-8 text-lg">
        Reach out to our team for a consultation. Lets create magic together.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/contacts">
        <button className="bg-gray-100 text-gray-800 hover:bg-gray-200 px-8 py-3 rounded-lg font-medium flex items-center justify-center">
          <MessageSquare className="mr-2 w-5 h-5" />
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  </motion.div>
);

const AboutUsHero = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative w-full h-96 bg-blue-900 text-white overflow-hidden"
  >
    <div className="absolute inset-0">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </div>

    <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-blue-100">
          Meet the team behind the magic, discover our story, and learn about
          our passion for creating unforgettable wedding experiences.
        </p>
      </motion.div>
    </div>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      <AboutUsHero />
      <StorySection />
      <MissionSection />
      <ValuesSection />
      <StatsSection />
      <TeamSection />
      <TimelineSection />
      <CallToAction />
    </div>
  );
};

export default AboutUs;
