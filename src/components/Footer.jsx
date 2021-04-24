import React from "react";

function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>Copyright Amar Omerika {currentYear}</p>
		</footer>
	);
}
export default Footer;
