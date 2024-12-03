import { Article } from '../types/news';

export const mockNews: Article[] = [
  {
    title: "SpaceX Successfully Launches New Satellite Constellation",
    description: "SpaceX has successfully launched another batch of satellites, expanding its global internet coverage network. The mission marks another milestone in the company's ambitious plan to provide worldwide internet access.",
    url: "https://example.com/spacex-launch",
    urlToImage: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&auto=format&fit=crop",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    source: { name: "Space News" },
    author: "John Smith"
  },
  {
    title: "Breakthrough in Renewable Energy Storage",
    description: "Scientists announce a major breakthrough in battery technology that could revolutionize renewable energy storage. The new technology promises to make clean energy more reliable and accessible.",
    url: "https://example.com/energy-breakthrough",
    urlToImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
    publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    source: { name: "Tech Daily" },
    author: "Sarah Johnson"
  },
  {
    title: "Global Climate Summit Reaches Historic Agreement",
    description: "World leaders have reached a landmark agreement on climate change action at the latest global summit. The agreement sets ambitious targets for reducing greenhouse gas emissions.",
    url: "https://example.com/climate-summit",
    urlToImage: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&auto=format&fit=crop",
    publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    source: { name: "Environmental News" },
    author: "Michael Chen"
  },
  {
    title: "AI System Makes Breakthrough in Medical Diagnosis",
    description: "A new artificial intelligence system has demonstrated unprecedented accuracy in diagnosing complex medical conditions. The system could revolutionize healthcare delivery worldwide.",
    url: "https://example.com/ai-medical",
    urlToImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    source: { name: "Health Tech" },
    author: "Emily Watson"
  },
  {
    title: "Major Discovery in Quantum Computing",
    description: "Researchers have achieved a significant breakthrough in quantum computing stability, potentially bringing practical quantum computers closer to reality.",
    url: "https://example.com/quantum-computing",
    urlToImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
    publishedAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    source: { name: "Quantum Weekly" },
    author: "David Chang"
  },
  {
    title: "New Archaeological Find Rewrites Ancient History",
    description: "Archaeologists have uncovered evidence that could fundamentally change our understanding of ancient civilizations and their technological capabilities.",
    url: "https://example.com/archaeology-discovery",
    urlToImage: "https://images.unsplash.com/photo-1544015759-481d2dc8cb60?w=800&auto=format&fit=crop",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    source: { name: "History Today" },
    author: "Maria Garcia"
  }
];