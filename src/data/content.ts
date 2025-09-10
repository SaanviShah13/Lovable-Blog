export interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "history" | "philosophy" | "economics";
  type: "blog" | "article";
  date: string;
  readTime: string;
  slug: string;
}

export const contentData: ContentItem[] = [
  {
    id: "1",
    title: "The Rise and Fall of Ancient Civilizations: Lessons for Today",
    excerpt: "Exploring the cyclical nature of civilizations and what modern societies can learn from the patterns of rise, prosperity, and decline that have shaped human history.",
    content: "Throughout history, civilizations have followed remarkably similar patterns of growth, prosperity, and eventual decline. From the mighty Roman Empire to the sophisticated Maya, these societies offer invaluable lessons for our modern world...",
    category: "history",
    type: "blog",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "rise-fall-ancient-civilizations"
  },
  {
    id: "2",
    title: "The Nature of Consciousness: A Philosophical Inquiry",
    excerpt: "Delving into one of philosophy's most enduring questions: what is consciousness, and how does it emerge from the complex interactions of matter and energy?",
    content: "Consciousness remains one of the most perplexing phenomena in our universe. Despite centuries of philosophical inquiry and decades of neuroscientific research, the hard problem of consciousness continues to challenge our understanding...",
    category: "philosophy",
    type: "article",
    date: "2024-01-12",
    readTime: "12 min read",
    slug: "nature-of-consciousness"
  },
  {
    id: "3",
    title: "Market Psychology and Economic Bubbles",
    excerpt: "An analysis of how human psychology drives market behavior, leading to the formation and eventual burst of economic bubbles throughout history.",
    content: "Economic bubbles are fascinating phenomena that reveal the deep connection between human psychology and market dynamics. From the Dutch Tulip Mania to the dot-com bubble, these events show how collective behavior can drive prices far from fundamental values...",
    category: "economics",
    type: "blog",
    date: "2024-01-10",
    readTime: "10 min read",
    slug: "market-psychology-bubbles"
  },
  {
    id: "4",
    title: "The French Revolution: Catalyst for Modern Democracy",
    excerpt: "Examining how the French Revolution fundamentally transformed political thought and laid the groundwork for democratic movements worldwide.",
    content: "The French Revolution of 1789 stands as one of history's most pivotal moments, fundamentally altering the political landscape of Europe and inspiring democratic movements across the globe...",
    category: "history",
    type: "article",
    date: "2024-01-08",
    readTime: "15 min read",
    slug: "french-revolution-democracy"
  },
  {
    id: "5",
    title: "Existentialism in the Digital Age",
    excerpt: "How existentialist philosophy remains relevant in our interconnected world, offering insights into authenticity, freedom, and responsibility in the digital era.",
    content: "As we navigate an increasingly digital world, the fundamental questions posed by existentialist philosophers become more relevant than ever. How do we maintain authenticity in a world of social media personas?...",
    category: "philosophy",
    type: "blog",
    date: "2024-01-05",
    readTime: "7 min read",
    slug: "existentialism-digital-age"
  },
  {
    id: "6",
    title: "Behavioral Economics: Rethinking Rational Choice Theory",
    excerpt: "Exploring how insights from psychology challenge traditional economic assumptions about rational decision-making and market efficiency.",
    content: "Traditional economic theory assumes that individuals are rational actors who make decisions to maximize their utility. However, decades of research in behavioral economics have revealed the systematic ways in which human behavior deviates from this ideal...",
    category: "economics",
    type: "article",
    date: "2024-01-03",
    readTime: "11 min read",
    slug: "behavioral-economics-rational-choice"
  }
];