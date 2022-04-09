module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      rubik: "Rubik, sans-serif",
    },
    extend: {
      colors: {
        "pry-blue": "hsl(246, 80%, 60%)",
        work: "hsl(15, 100%, 70%)",
        play: "hsl(195, 74%, 62%)",
        study: "hsl(348, 100%, 68%)",
        exercise: "hsl(145, 58%, 55%)",
        social: "hsl(264, 64%, 52%)",
        "self-care": "hsl(43, 84%, 65%)",
        // Neutral
        "very-dark-blue": "hsl(226, 43%, 10%)",
        "dark-blue": "hsl(235, 46%, 20%)",
        "desaturated-blue": "hsl(235, 45%, 61%)",
        "pale-blue": "hsl(236, 100%, 87%)",
      },
      borderWidth: {
        3: "3px",
      },
      backgroundImage: {
        "work-img": "url('./images/icon-work.svg')",
        "exercise-img": "url('./images/icon-exercise.svg')",
        "play-img": "url('./images/icon-play.svg')",
        "self-care-img": "url('./images/icon-self-care.svg')",
        "social-img": "url('./images/icon-social.svg')",
        "study-img": "url('./images/icon-study.svg')",
      },
    },
  },
  plugins: [],
};
