// Copied from the live policy pages on peerup.co.in (Nov 2026). Keep in sync with legal.
// In any string, "{email}" renders as the brand-coloured contact email link, and **text** renders bold.

export const CONTACT_EMAIL = "peerup.growtogether@gmail.com";

export type Block = { h?: string; p?: string[]; list?: string[]; ordered?: boolean; link?: { pre: string; text: string; href: string } };
export type Policy = { slug: string; title: string; description: string; blocks: Block[] };

export const privacy: Policy = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  description: "What data PeerUp collects, how it is used and protected, and how to delete it.",
  blocks: [
    {
      p: [
        "Thank you for using PeerUp, a community-based learning app focused on improving communication skills. We value your trust and privacy, and this Privacy Policy is designed to inform you about the data we collect and how we use and protect it. By accessing or using our app, you agree to the terms outlined in this Privacy Policy.",
      ],
    },
    {
      h: "Information Collection and Use",
      p: [
        "User Age: We collect your age to provide you with a personalized experience on our app. The age information helps us tailor challenges and content to suit your communication skill level and specific learning needs.",
        "Voice Recording: With your explicit consent, we may collect voice recordings during speech practice sessions. These recordings are solely used to provide you with personalized feedback on your speech and communication skills. They are stored securely and are not shared with any third parties.",
        "Location Data: We may collect location data to personalize your user experience, such as providing location-specific challenges or workshop recommendations. Your precise location data will not be shared with others without your consent.",
        "Device Info: We collect device information, such as device type, operating system, and performance data, to enhance app functionality and optimize user experiences. This information helps us identify and resolve any issues specific to certain device types, ensuring a seamless user experience.",
      ],
    },
    {
      h: "Data Usage",
      p: [
        "Personalization: The data we collect, including user age, voice recordings, and location data, is used to personalize your experience on our app. This personalization aims to offer relevant challenges, content, and feedback tailored to your individual learning goals.",
        "Speech Feedback: Voice recordings are analyzed to provide you with valuable feedback on your communication skills. This feedback is designed to help you improve your speech delivery, pronunciation, and overall communication effectiveness.",
        "App Optimization: Device information is utilized to optimize the app's performance and identify and resolve any technical issues experienced on specific device models.",
      ],
    },
    {
      h: "Third-Party Sharing",
      p: [
        "We do not sell your personal data, and we do not share it for advertising.",
        "AI speech processing: when you practise with Miss Maya, with an AI character or in a roleplay, what you say is recorded, converted to text and sent to third-party artificial-intelligence providers so the tutor can reply to you and so we can give you feedback on your fluency, grammar and vocabulary. This processing is the feature itself — practice with an AI tutor cannot work without it. These providers process the audio and text on our behalf under contract, may not use it for their own purposes, and may not use it to train their models.",
        "PeerUp may use third-party service providers to assist in app development, analytics, and app optimization. These service providers are contractually obligated to protect your data and are prohibited from using your personal information for any purpose other than providing the agreed-upon services to PeerUp.",
      ],
    },
    {
      h: "Children's Privacy",
      p: [
        "Our app is not intended for anyone under the age of 18. We do not knowingly collect personal information from individuals under 18 years of age. If we become aware that we have inadvertently collected data from someone under 18, we will promptly delete it from our records.",
        "We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
      ],
    },
    {
      h: "Your Data and How to Delete It",
      p: [
        "You can delete your account at any time from inside the app: open your Profile and choose Delete account. Deleting your account removes your profile, your practice history and your voice recordings from our systems.",
        "Voice recordings and the feedback generated from them are kept only while your account exists, so that you can see how your speaking has changed over time. We keep nothing after deletion except what the law requires us to keep.",
      ],
    },
    {
      h: "Content You Share With Other Members",
      p: [
        "Your display name, your avatar and your league standing are visible to other members of your league. Messages you send in league chat or in a direct message are visible to the members you send them to. This content passes an automated profanity and abuse filter before it is delivered, and it may be reviewed by our moderation team when another member reports it. How we handle reports is set out in our Terms and Conditions.",
      ],
    },
    {
      h: "Changes to Privacy Policy",
      p: [
        "PeerUp may update this Privacy Policy from time to time to reflect changes in our data practices or app functionality. We encourage you to review this Privacy Policy periodically for any updates. Continued use of the app after such modifications constitutes acceptance of the revised Privacy Policy.",
      ],
    },
    {
      h: "Contact Us",
      p: [
        "If you have any questions, concerns, or requests regarding our privacy practices or this Privacy Policy, please contact us at {email}",
        "By using PeerUp, you acknowledge that you have read, understood, and agreed to the terms outlined in this Privacy Policy. Your privacy matters to us, and we are committed to providing a secure and personalized learning experience on our app.",
      ],
    },
    {
      h: "Refund Policy",
      link: { pre: "For all payment/refund related queries, refer to our", text: "Refund Policy", href: "/refund-policy" },
    },
  ],
};

export const terms: Policy = {
  slug: "terms-conditions",
  title: "Terms & Conditions",
  description: "The terms you agree to when you use PeerUp.",
  blocks: [
    {
      p: [
        "Welcome to PeerUp, a community-based learning app focused on improving communication skills. Before using our app, please read and agree to the following Terms and Conditions:",
      ],
    },
    {
      list: [
        "Age Requirement: By using our app, you confirm that you are at least 18 years old. If you are under 18, you are not allowed to use PeerUp.",
        "Data Collection: We collect certain information, including your age, voice recordings (with your explicit consent), location data, and device information, to personalize your learning experience and improve your overall experience on the app.",
        "Data Usage: The collected data is used to personalize your experience, provide feedback on your speech.",
        "Data Security: We take data security seriously and use industry-standard measures to protect your personal information.",
        "Third-Party Sharing: Your personal data, including voice recordings, is not shared with any third parties without your explicit consent.",
        "Do not share your personal details like your email, phone number, or bank details with anyone on this platform. PeerUp will not be responsible for any issues arising from this.",
        "Children's Privacy: PeerUp is not intended for anyone under 18. We do not knowingly collect data from individuals under 18. If we find that we have collected data from someone under 18, we will promptly delete it.",
        "Objectionable Content and Abusive Behaviour: PeerUp has **zero tolerance** for objectionable content and for abusive members. You agree not to post, send or generate content that is sexual or pornographic, hateful, harassing, threatening, violent, discriminatory, defamatory, illegal, or that impersonates another person, and not to use PeerUp to spam, advertise, or solicit money from other members. This applies to everything you write in the app, including your display name, your profile, league chat and direct messages, and to anything you ask an AI character to say.",
        "Filtering: Member-written text, including display names, profile text, direct messages and league chat messages, passes an automated profanity and abuse filter before it is delivered or shown to anyone else.",
        "Reporting and Blocking: You can report any message and any member profile from inside the app, and you can block a member so they can no longer contact you. Every report reaches our moderation team and is reviewed **within 24 hours**.",
        "Enforcement: Where content or behaviour breaks these Terms, appropriate action is taken against the member responsible, up to and including removing the content and permanently removing their account. We may act on a report without notice and we are not obliged to restore removed content or a removed account.",
        "Changes to Terms: We may update these Terms and Conditions from time to time. Continued use of the app after such changes constitutes acceptance of the revised Terms.",
        "Contact Us: If you have any questions or concerns regarding our privacy practices or these Terms, please contact us at {email}.",
      ],
    },
  ],
};

export const refund: Policy = {
  slug: "refund-policy",
  title: "Payment, Refund and Cancellation Policy",
  description: "How payments, refunds and cancellations work on PeerUp.",
  blocks: [
    {
      ordered: true,
      list: [
        "Full payment to be made at time of purchase of membership.",
        "Once purchased, no partial or full refund will be provided.",
        "Peerup does not store any of your payment information (debit card, credit card net banking, etc.) or such other information restricted by the Reserve Bank of India (RBI) for processing payment and has partnered with payment gateways for the payment towards the services.",
        "Purchases made inside the iOS app are processed by Apple. Refunds for those purchases are handled by Apple under its own refund policy, not by PeerUp — request one at reportaproblem.apple.com. Managing or cancelling an auto-renewing membership bought on iOS is done in your Apple Account subscription settings.",
        "For anything else, including a payment that did not go through or a membership that was charged twice, open the app, go to Profile, tap the three dots and choose Customer support. Our team will pick it up from there.",
      ],
    },
  ],
};
