/**
 * Real Google Play reviews of PeerUp (com.peerup), collected from the public
 * listing on 22 Nov 2026. Wording is the reviewer's own; only capitalisation and a few
 * obvious typos were tidied, and "…" marks where a long review was trimmed.
 */
export const PLAY_RATING = "4.4";
export const PLAY_REVIEW_COUNT = "46.8K";

export type Review = {
  name: string;
  date: string;
  stars: 4 | 5;
  text: string;
  tag?: string;
};

export const featured: Review = {
  name: "Technical Dinesh",
  date: "30 Oct 2026",
  stars: 5,
  text:
    "Before I was unable to speak a single word but now I can talk in basic conversation without any effort. Thank-you PeerUp, and will recommend all the people to download this app.",
};

export const rowA: Review[] = [
  {
    name: "raju kushwaha",
    date: "4 Oct 2026",
    stars: 5,
    tag: "Serious learners",
    text:
      "I also use many app for english communication practice but everywhere people comes to talk with girls only… but this app is different, here everyone is dedicated to Learn english. I have also make some friends on this app.",
  },
  {
    name: "Muhammad Sadiq",
    date: "23 Sep 2026",
    stars: 5,
    tag: "500-day streak",
    text:
      "I have completed 500 days streaks. It's a great experience for me. This application is helpful for learners. I recommend this PeerUp application to all my friends and students.",
  },
  {
    name: "Gourav Baghel",
    date: "11 Oct 2026",
    stars: 5,
    tag: "AI practice",
    text:
      "Most of my conversation with strangers are good and helpful. It helps me improving my english speaking skills. And the AI practice is really amazing, it teaches us the right way to communicate with others step by step.",
  },
  {
    name: "Pranjali Soni",
    date: "7 Nov 2026",
    stars: 5,
    tag: "No judgement",
    text: "This application is very good for talking. No one is here to judge so we can improve our English very easily.",
  },
  {
    name: "Ameya Thosar",
    date: "2 Oct 2026",
    stars: 5,
    tag: "Community",
    text:
      "There are too many good people on this application. I truly enjoyed using this application and also my english improved a lot since I started using this app ❤️",
  },
  {
    name: "Anand",
    date: "11 Jul 2026",
    stars: 5,
    tag: "Elite member",
    text:
      "I've been using this app every day and it's been excellent for improving my English… Overall, it's a fantastic app and I'm really enjoying using it! I took Elite plan for a year, it's really worth it. 😍",
  },
  {
    name: "Rohit Singh",
    date: "1 Nov 2026",
    stars: 5,
    text: "I would rate this all 10 star if there would have been 10 star.. this is one of the best app I have found ever.",
  },
];

export const rowB: Review[] = [
  {
    name: "Alok Yadav",
    date: "18 Sep 2026",
    stars: 4,
    tag: "Miss Maya",
    text:
      "It is very useful app for beginners… this app's AI features is very good, it guide us like a teacher and also you can call with real person and talk with him in english.",
  },
  {
    name: "Pratibha Ojha",
    date: "3 Sep 2026",
    stars: 4,
    tag: "Found partners",
    text:
      "Earlier I didn't have any partner but now I have many friends and without any fear I can do practice here. Thank you PeerUp.",
  },
  {
    name: "Pulkit Khari",
    date: "7 Sep 2026",
    stars: 5,
    tag: "Unlimited calls",
    text:
      "It's fantastic for those who want to talk in English for practice without any payment and there is no limit. It is useful for communication and as well as for english practice.",
  },
  {
    name: "bas kar",
    date: "9 Oct 2026",
    stars: 5,
    tag: "Leagues",
    text:
      "Imagine like English learning app is like game modes. This app have league levels and daily streak, promotion, demotion. I really love to learn English in this app 🔥🔥",
  },
  {
    name: "Vishal",
    date: "7 Oct 2026",
    stars: 5,
    tag: "Public speaking",
    text:
      "Talking with real people in different region connects good way, really helpful communication. Now I feel better in English conversation, public speaking I improved a lot ☺️",
  },
  {
    name: "Roshni Vishwakarma",
    date: "17 Sep 2026",
    stars: 5,
    tag: "Daily practice",
    text:
      "I practice daily for improve my english and it's easy to use… If you also searching the right person who talk with you without any judgement then use it.",
  },
  {
    name: "Krishnendu Das",
    date: "23 Oct 2026",
    stars: 5,
    text: "Fabulous application!! I have been using this app since 1 year. This app is very helpful for English speaking and learning.",
  },
];
