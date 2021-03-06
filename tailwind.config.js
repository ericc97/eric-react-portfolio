module.exports = {
  content: [
		"./src/**/*.{js,jsx}"
	],
  theme: {
    extend: {
			backgroundImage: {
				'banner': "url('/src/assets/background.jpg')",
				'devspark': "url('/src/assets/projects/devspark.png')",
				'footballapp': "url('/src/assets/projects/footballapp.png')",
				'catrogaming': "url('/src/assets/projects/catrogaming.png')"
			},
			colors: {
				'offwhite': '#dddddd',
				'blue-header': '#7393B3',
				'peach-header': '#FDE0D9'
			}
		},
  },
  plugins: [],
}
