export interface Philosophy {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  image: string;
  category: string;
  principles?: string[];
}

export const philosophies: Philosophy[] = [
  {
    id: "wabi-sabi",
    title: "Wabi-Sabi (侘寂)",
    description: "The art of finding beauty in imperfection and accepting life's impermanence.",
    fullDescription: [
      "Wabi-sabi is a traditional Japanese aesthetic concept that embraces the beauty of imperfection, impermanence, and incompleteness. It derives from Buddhist teachings about the three marks of existence: impermanence (mujō), suffering (ku), and emptiness (kū).",
      "The term 'wabi' originally referred to the loneliness of living in nature, away from society, while 'sabi' meant 'withered' or 'lean'. Over time, these concepts evolved to describe a more positive aesthetic appreciation of things that are imperfect, impermanent, and incomplete.",
      "In practice, wabi-sabi manifests as asymmetry, roughness, simplicity, economy, austerity, modesty, intimacy, and the appreciation of natural objects and processes. It finds beauty in the cracks of a ceramic bowl repaired with gold (kintsugi), in the weathered wood of an old temple, or in the fading autumn leaves.",
      "This philosophy encourages us to detach from the Western pursuit of perfection and instead embrace the natural cycle of growth and decay. By accepting impermanence, we learn to appreciate the unique beauty that exists in each moment and in each object's journey through time."
    ],
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951",
    category: "Aesthetics",
    principles: [
      "Acceptance of transience and imperfection",
      "Appreciation of natural aging processes",
      "Finding beauty in simplicity and austerity",
      "Valuing authenticity over perfection",
      "Embracing asymmetry and irregularity"
    ]
  },
  {
    id: "ikigai",
    title: "Ikigai (生き甲斐)",
    description: "The concept of finding purpose in life through the intersection of passion, mission, profession, and vocation.",
    fullDescription: [
      "Ikigai, which roughly translates to 'a reason for being,' is a Japanese concept that explores the intersection of what you love, what you're good at, what the world needs, and what you can be paid for. When these four elements align, you've found your ikigai - your purpose or reason for getting up in the morning.",
      "This philosophy originates from Okinawa, Japan—one of the world's 'Blue Zones' where people live exceptionally long lives. Researchers believe that having a clear sense of ikigai contributes significantly to longevity and quality of life among Okinawans.",
      "Unlike Western concepts of purpose that often focus primarily on career achievement, ikigai encompasses all aspects of life. Your ikigai might be related to your career, but it could just as easily be found in family relationships, community service, creative pursuits, or spiritual practices.",
      "Finding your ikigai is a journey of self-discovery that involves reflecting on your values, talents, and passions, while also considering how they can serve the world and sustain you practically. It encourages a balanced approach to life that honors both practical needs and deeper fulfillment."
    ],
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    category: "Life Philosophy",
    principles: [
      "Finding the overlap between passion, mission, profession, and vocation",
      "Pursuing activities that bring joy and fulfillment",
      "Contributing to society through your natural talents",
      "Balancing practical sustainability with personal meaning",
      "Living with purpose in daily activities, not just major life goals"
    ]
  },
  {
    id: "zen",
    title: "Zen (禅)",
    description: "The practice of achieving enlightenment through direct intuition and meditation.",
    fullDescription: [
      "Zen Buddhism emerged in Japan as an adaptation of the Chinese Chan tradition, which itself evolved from Indian Mahayana Buddhism. The word 'Zen' derives from the Japanese pronunciation of the Chinese word 'Chan', which comes from the Sanskrit term 'dhyana', meaning meditation or contemplation.",
      "At its core, Zen emphasizes direct experience over intellectual knowledge, believing that enlightenment (satori) cannot be attained through study or logical reasoning alone. Instead, it must be experienced directly through meditation practices like zazen (seated meditation) and koan study (contemplation of paradoxical riddles).",
      "Zen teachings use methods designed to shock the mind out of its conventional patterns of thought, including koans, spontaneous dialogue, and direct pointing to the nature of mind. The famous Zen saying, 'If you meet the Buddha on the road, kill him,' illustrates this approach—encouraging practitioners to avoid attaching to concepts, even spiritual ones.",
      "In daily life, Zen manifests as mindfulness, simplicity, and spontaneity. It teaches that enlightenment is not separate from ordinary activities, leading to the saying: 'Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water.' The difference lies not in what you do, but in how you experience it."
    ],
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    category: "Buddhism",
    principles: [
      "Direct experience over intellectual knowledge",
      "Present-moment awareness through meditation",
      "Non-attachment to concepts and ideas",
      "Finding profound meaning in ordinary activities",
      "Embracing paradox and transcending dualistic thinking"
    ]
  },
  {
    id: "kaizen",
    title: "Kaizen (改善)",
    description: "The philosophy of continuous improvement in small, incremental steps, leading to significant long-term changes.",
    fullDescription: [
      "Kaizen, which translates to 'change for better' or 'continuous improvement,' is a Japanese business philosophy that emphasizes the importance of incremental improvements over dramatic innovation. The word comes from the Japanese words 'kai' (change) and 'zen' (good).",
      "This philosophy became globally recognized through its implementation at Toyota and other Japanese companies in the post-World War II era. While often associated with manufacturing and business processes, kaizen is fundamentally a way of thinking that can be applied to any area of life.",
      "The core principle of kaizen is that small, ongoing positive changes can yield significant improvements over time. Rather than seeking perfection in one giant leap, kaizen encourages making tiny improvements every day. These improvements might seem insignificant in isolation, but collectively they create powerful results.",
      "Kaizen also fosters a collaborative approach where everyone—from top executives to front-line workers—is encouraged to identify problems and suggest improvements. This inclusive approach recognizes that those closest to the work often have the most valuable insights for improvement."
    ],
    image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302",
    category: "Business Philosophy",
    principles: [
      "Continuous improvement through small, manageable changes",
      "Eliminating waste (muda) in all processes",
      "Involving all people in the improvement process",
      "Standardizing processes before improving them",
      "Using a scientific approach to solve problems"
    ]
  },
  {
    id: "mono-no-aware",
    title: "Mono no Aware (物の哀れ)",
    description: "The pathos of things; an empathy toward the transience of life and the gentle sadness in this understanding.",
    fullDescription: [
      "Mono no Aware, often translated as 'the pathos of things' or 'an empathy toward things,' is a Japanese term for the awareness of impermanence, and both a transient gentle sadness (or wistfulness) at their passing as well as a longer, deeper gentle sadness about this state being the reality of life.",
      "This concept has been central to Japanese literature, poetry, and aesthetics since the Heian period (794-1185). It was particularly articulated by the 18th-century scholar Motoori Norinaga in his literary criticism of The Tale of Genji, where he identified this sentiment as a distinctive quality of Japanese art and literature.",
      "Mono no Aware manifests in the Japanese celebration of cherry blossoms (sakura), where people gather to appreciate the flowers precisely because their beauty is fleeting. The blossoms reach peak bloom for only about a week before they fall, symbolizing the transient nature of beauty and life itself.",
      "Unlike pure melancholy, Mono no Aware contains an appreciation for the beauty within the impermanence. It teaches that transience does not diminish value but rather enhances it, making moments more precious precisely because they cannot last forever. This bittersweet awareness creates a particular aesthetic sensibility that influences Japanese art, architecture, and daily life."
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "Aesthetics",
    principles: [
      "Awareness of the transience of all things",
      "Finding beauty in impermanence",
      "Appreciation of the bittersweet nature of existence",
      "Embracing rather than resisting the natural flow of time",
      "Cultivating empathy toward the world through this awareness"
    ]
  },
  {
    id: "bushido",
    title: "Bushido (武士道)",
    description: "The way of the warrior; the moral code of the samurai emphasizing honor, loyalty, and self-discipline.",
    fullDescription: [
      "Bushido, or 'the way of the warrior,' was the moral code developed by the Japanese samurai class during the feudal period. Though not formalized into an explicit code until the 17th century by samurai and scholar Yamaga Sokō, its principles guided samurai behavior for centuries.",
      "This ethical code drew from Japanese indigenous traditions, Confucianism, Zen Buddhism, and Shinto. It emphasized virtues such as rectitude (義, gi), courage (勇, yū), benevolence (仁, jin), respect (礼, rei), honesty (誠, makoto), honor (名誉, meiyo), and loyalty (忠義, chūgi).",
      "Perhaps most famously, bushido dictated that warriors should live at all times in anticipation of death. The samurai were expected to have a detached relationship with dying—neither fearing it nor courting it unnecessarily. This contemplation of mortality was meant to focus the mind and purify one's actions in the present moment.",
      "Although the samurai class was officially dissolved in the Meiji period (1868-1912), bushido values continue to influence modern Japanese culture in areas ranging from business ethics to martial arts. The idea of serving with unwavering loyalty, using power responsibly, and maintaining personal honor regardless of external circumstances remains influential."
    ],
    image: "https://images.unsplash.com/photo-1463288889890-a56b2853c40f",
    category: "Ethics",
    principles: [
      "Rectitude and justice in all decisions",
      "Courage to do what is right regardless of personal cost",
      "Benevolence and compassion toward others",
      "Politeness and proper respect in all interactions",
      "Absolute sincerity and honesty",
      "Honor and dignity in all circumstances",
      "Loyalty to one's master and cause"
    ]
  },
  {
    id: "ma",
    title: "Ma (間)",
    description: "The concept of negative space; the meaningful void between objects, actions, or sounds.",
    fullDescription: [
      "Ma is a Japanese aesthetic concept that can be roughly translated as 'gap,' 'space,' or 'pause.' Unlike Western concepts that often emphasize objects and actions, Ma focuses on the space between—the interval which gives shape and meaning to the whole.",
      "This concept appears throughout Japanese arts and culture: in architecture, where rooms are designed with empty space as an essential element; in music, where silence between notes is as important as the notes themselves; in conversation, where pauses carry meaning; and in painting, where empty space balances the composition.",
      "The origins of Ma are tied to Zen Buddhism and Shinto, both of which recognize the significance of emptiness. In Zen, emptiness (śūnyatā) is not a void of nothingness but rather pregnant with possibility. Similarly, in Shinto, sacred spaces are often marked by emptiness to invite the presence of kami (spirits or gods).",
      "In daily life, Ma encourages mindfulness of the pauses between activities, the silence between words, and the empty spaces in our environments. It teaches that these intervals are not merely absence but are active, meaningful elements that provide balance, context, and opportunity for reflection and anticipation."
    ],
    image: "https://images.unsplash.com/photo-1503853585905-d53f628e46ac",
    category: "Aesthetics",
    principles: [
      "Appreciation of emptiness as an active, meaningful element",
      "Balance between form and non-form",
      "Conscious use of pauses and intervals",
      "Creating space for contemplation and possibility",
      "Recognizing that meaning exists in the unspoken and unseen"
    ]
  },
  {
    id: "shinrin-yoku",
    title: "Shinrin-yoku (森林浴)",
    description: "Forest bathing; the practice of immersing oneself in nature for physical and mental wellbeing.",
    fullDescription: [
      "Shinrin-yoku, or 'forest bathing,' was coined in 1982 by the Japanese Ministry of Agriculture, Forestry, and Fisheries, but represents a practice deeply rooted in traditional Japanese reverence for nature. It describes the act of visiting a forest and immersing oneself in its atmosphere through the senses.",
      "Unlike hiking or other goal-oriented activities in nature, shinrin-yoku emphasizes presence and sensory experience. Participants are encouraged to move slowly, breathe deeply, and engage all five senses—observing the colors and patterns of the forest, listening to birds and rustling leaves, smelling the earthy aromas, touching tree bark and moss, and even tasting forest foods when appropriate.",
      "The practice is supported by scientific research demonstrating numerous health benefits. Studies show that forest environments reduce stress hormones like cortisol, lower blood pressure, improve immune function, increase parasympathetic nervous system activity ('rest and digest' state), and enhance mental clarity and mood.",
      "Shinrin-yoku reflects Japan's cultural integration of nature into daily life and spirituality. Rooted in Shinto beliefs about the sacred quality of natural elements, it exemplifies a philosophy that sees humans not as separate from nature but as intimately connected to it. This connection is considered essential for wholeness and wellbeing."
    ],
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    category: "Wellness Philosophy",
    principles: [
      "Mindful presence in natural environments",
      "Engagement of all senses in the experience",
      "Moving slowly without goal or purpose",
      "Recognizing the healing power of natural settings",
      "Cultivating a reciprocal relationship with the natural world"
    ]
  }
];
