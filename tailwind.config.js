/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				sea: "rgb(192, 214, 232)",
				shade: "rgb(119, 176, 170)",
				dark: "rgb(19, 93, 102)",
				darker: "rgb(0, 60, 67)",
			},
		},
	},
	plugins: [],
};
