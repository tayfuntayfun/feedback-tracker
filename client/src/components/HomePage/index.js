import React from "react";
import Navbar from "../Navbar/index";
import HomepageHeroSection from "../HomepageHeroSection";
import Footer from "../Footer/index";

const HomePage = () => {
	return (
		<div className="homepage-container">
			<Navbar />
			<HomepageHeroSection />
			<Footer />
		</div>
	);
};

export default HomePage;
