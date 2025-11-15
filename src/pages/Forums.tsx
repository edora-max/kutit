import { MessageSquare, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const forumCategories = [
  {
    id: 1,
    name: "Academic Support",
    description: "Discuss courses, exams, and study groups",
    topics: 145,
    posts: 892,
    icon: "📚",
    color: "from-primary to-accent",
  },
  {
    id: 2,
    name: "Events & Activities",
    description: "Community events, meetups, and celebrations",
    topics: 67,
    posts: 423,
    icon: "🎉",
    color: "from-secondary to-accent",
  },
  {
    id: 3,
    name: "Career & Opportunities",
    description: "Internships, jobs, and professional development",
    topics: 89,
    posts: 561,
    icon: "💼",
    color: "from-accent to-primary",
  },
  {
    id: 4,
    name: "Culture & Heritage",
    description: "Share and celebrate Kalenjin culture and traditions",
    topics: 52,
    posts: 318,
    icon: "🏺",
    color: "from-primary to-secondary",
  },
];

const recentTopics = [
  {
    title: "Best study spots on campus?",
    author: "John Kip",
    replies: 23,
    views: 156,
    time: "10m ago",
  },
  {
    title: "KUTIT Annual Cultural Day Planning",
    author: "Mary Jep",
    replies: 45,
    views: 289,
    time: "1h ago",
  },
  {
    title: "Software Engineering internship opportunities",
    author: "David Sang",
    replies: 18,
    views: 234,
    time: "3h ago",
  },
];

const Forums = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-5xl mx-auto p-4 pb-20 md:pb-4 scrollable-content h-full">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">Community Forums</h1>
            <p className="text-sm text-muted-foreground">
              Join discussions and connect with fellow students
            </p>
          </div>
          <Button className="rounded-xl neumorphic-hover bg-primary">
            New Topic
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {forumCategories.map((category) => (
            <div
              key={category.id}
              className="sunken rounded-2xl p-6 bg-card border border-border/50 hover:border-accent/30 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-14 h-14 rounded-xl neumorphic flex items-center justify-center text-2xl bg-gradient-to-br ${category.color}`}>
                  {category.icon}
                </div>
                <TrendingUp className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  <span>{category.topics} topics</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>{category.posts} posts</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sunken rounded-2xl p-6 bg-card border border-border/50">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Recent Discussions
          </h2>
          <div className="space-y-3">
            {recentTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl sunken hover:bg-accent/5 transition-all cursor-pointer"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">{topic.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>by {topic.author}</span>
                    <span>·</span>
                    <span>{topic.time}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    <span>{topic.replies}</span>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-muted/50">
                    {topic.views} views
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forums;
