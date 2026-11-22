export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.peerup";

export const BUSINESS_URL = "#business"; // swap for the real business form/page

export const scenarios = [
  "Campus placement interview",
  "Checking in at the hotel",
  "Airline gate change",
  "Meeting a new friend",
  "Asking questions in class",
  "Talking about your family",
  "Keeping the chat going",
  "Discussing education & work",
  "A casual encounter at a party",
  "Saying goodbye politely",
];

export const modes = [
  {
    key: "peers",
    tag: "1:1 Audio",
    title: "Practice with peers",
    body:
      "One tap connects you to a serious learner on a live voice call. Real conversations, real nerves, real progress, with hundreds of people online at any time.",
    stat: "816 people online",
    screen: "/screens/peers.webp",
  },
  {
    key: "teacher",
    tag: "AI Teacher",
    title: "Miss Maya, available 24×7",
    body:
      "Talk to an AI teacher who never gets tired, never judges, and meets you at your level, whether that's small talk or interview answers.",
    stat: "Always available",
    screen: "/screens/teacher.webp",
  },
  {
    key: "roleplay",
    tag: "Roleplay",
    title: "Rehearse real life",
    body:
      "Walk into the hotel lobby, the placement interview or the first date before it happens. Scenario roleplays put English where you will actually need it.",
    stat: "Dozens of scenarios",
    screen: "/screens/practice.webp",
  },
  {
    key: "learn",
    tag: "Lessons",
    title: "A path, not a pile",
    body:
      "Short, spoken lessons unlock one by one, from greetings to discussing work. Every unit ends in a conversation, not a quiz.",
    stat: "Unit by unit",
    screen: "/screens/learn.webp",
  },
];
