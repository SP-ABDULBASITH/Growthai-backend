// generate Business data
function generateBusinessData(name, location) {
    const sampleHeadlines = [
        `Why ${name} is ${location}'s Top Choice in 2025`,
        `Discover ${name}: The Hidden Gem of ${location}`,
        `${name} Is Redefining Local Excellence in ${location}`,
        `What Makes ${name} a Must-Visit in ${location}`,
        `Top Reasons to Choose ${name} in ${location} This Year`,
        `Why Everyone’s Talking About ${name} in ${location}`,
        `Top 5 Reasons to Visit ${name} in ${location}`
    ];

  return {
    rating: (Math.random() * (5-4) + 4).toFixed(1), // Random rating between 4 and 5
    reviews: Math.floor(Math.random() * (1000-200 + 1) + 200), // Random number of reviews between 200 and 1000
    headline: sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)],
  }
}

module.exports = generateBusinessData;