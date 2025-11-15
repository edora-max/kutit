import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const posts = [
  {
    id: 1,
    author: "Jane Cherop",
    county: "Uasin Gishu",
    avatar: "",
    time: "2h ago",
    content: "Just finished my Biochemistry exam! Feeling relieved 😊 Anyone else done with CATs this week?",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: "David Kipchoge",
    county: "Nandi",
    avatar: "",
    time: "5h ago",
    content: "Looking for study partners for Engineering Mathematics. We could form a study group this weekend!",
    likes: 15,
    comments: 12,
  },
  {
    id: 3,
    author: "Mary Jepkorir",
    county: "Kericho",
    avatar: "",
    time: "1d ago",
    content: "The KUTIT community has been so helpful! Thank you all for the warm welcome. Proud to be Kalenjin 🙌",
    likes: 45,
    comments: 20,
  },
];

const Feed = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-2xl mx-auto p-4 pb-20 md:pb-4 scrollable-content h-full">
        <div className="mb-6 sunken rounded-2xl p-4 bg-card border border-border/50">
          <textarea 
            placeholder="Share something with the community..."
            className="w-full bg-transparent border-none outline-none resize-none text-sm"
            rows={3}
          />
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/50">
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="rounded-xl neumorphic-hover text-xs">
                📷 Photo
              </Button>
              <Button variant="ghost" size="sm" className="rounded-xl neumorphic-hover text-xs">
                📊 Poll
              </Button>
            </div>
            <Button size="sm" className="rounded-xl neumorphic-hover bg-primary">
              Post
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="sunken rounded-2xl p-5 bg-card border border-border/50 transition-all hover:border-accent/30"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 neumorphic">
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm">{post.author}</h3>
                    <p className="text-xs text-muted-foreground">{post.county} · {post.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg neumorphic-hover">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm leading-relaxed mb-4">{post.content}</p>

              <div className="flex items-center gap-6 pt-3 border-t border-border/50">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
