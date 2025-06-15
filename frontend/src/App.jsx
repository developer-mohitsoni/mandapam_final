import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Forget from "./components/Forget";
import BookNow from "./components/BookNow";
import BookingModal from "./components/BookingModal";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import GetApp from "./components/GetApp";
import MarriageGarden from "./components/MarriageGarden";
import ChatBot from "./components/ChatBot";
import VenueRecommendation from "./components/VenueRecommendation";

const ReactDatePicker = lazy(() => import("./components/ReactDatePicker"));
const LandingPage = lazy(() => import("./components/LandingPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/date" element={<ReactDatePicker />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Forget" element={<Forget />} />
        <Route path="*" element={<NotFound />} />

        {/* Previously dashboard-nested routes — now top-level */}
        <Route path="/marriage-gardens" element={<MarriageGarden />} />
        <Route path="/BookNow/:id" element={<BookNow />} />
        <Route path="/BookingModal" element={<BookingModal />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/GetApp" element={<GetApp />} />
        <Route path="/ChatBot" element={<ChatBot />} />
        <Route path="/VenueRecommendation" element={<VenueRecommendation />} />
        
      </Routes>
    </Suspense>
  );
}

export default App;
