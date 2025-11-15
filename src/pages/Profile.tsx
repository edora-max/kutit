import { MapPin, Calendar, Heart, MessageSquare, Edit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const userPosts = [
  {
    id: 1,
    content: "Just finished my Biochemistry exam! Feeling relieved 😊",
    likes: 24,
    comments: 8,
    time: "2h ago",
  },
  {
    id: 2,
    content: "The KUTIT community has been amazing! Thank you all 🙌",
    likes: 45,
    comments: 20,
    time: "1d ago",
  },
];

const Profile = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-4xl mx-auto pb-20 md:pb-4 scrollable-content h-full">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-br from-primary via-accent to-secondary neumorphic" />

        {/* Profile Header */}
        <div className="px-4 md:px-6">
          <div className="relative -mt-16 mb-6">
            <Avatar className="h-32 w-32 border-4 border-background neumorphic">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-4xl font-bold">
                JC
              </AvatarFallback>
            </Avatar>

            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-1">Jane Cherop</h1>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Uasin Gishu</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined March 2024</span>
                  </div>
                </div>
                <p className="text-sm max-w-md">
                  4th Year Biochemistry Student | Passionate about science and community 🧬
                </p>
              </div>

              <Button className="mt-4 md:mt-0 rounded-xl neumorphic-hover bg-primary">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="sunken rounded-2xl p-4 bg-card border border-border/50 text-center">
              <div className="text-2xl font-bold text-primary mb-1">45</div>
              <div className="text-xs text-muted-foreground">Posts</div>
            </div>
            <div className="sunken rounded-2xl p-4 bg-card border border-border/50 text-center">
              <div className="text-2xl font-bold text-secondary mb-1">234</div>
              <div className="text-xs text-muted-foreground">Connections</div>
            </div>
            <div className="sunken rounded-2xl p-4 bg-card border border-border/50 text-center">
              <div className="text-2xl font-bold text-accent mb-1">12</div>
              <div className="text-xs text-muted-foreground">Contributions</div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6 neumorphic">
              <TabsTrigger value="posts" className="rounded-xl">Posts</TabsTrigger>
              <TabsTrigger value="about" className="rounded-xl">About</TabsTrigger>
              <TabsTrigger value="activity" className="rounded-xl">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-4">
              {userPosts.map((post) => (
                <div
                  key={post.id}
                  className="sunken rounded-2xl p-5 bg-card border border-border/50"
                >
                  <p className="text-sm leading-relaxed mb-4">{post.content}</p>
                  <div className="flex items-center gap-6 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {post.time}
                    </span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="about">
              <div className="sunken rounded-2xl p-6 bg-card border border-border/50">
                <h3 className="font-semibold mb-4">About</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Course</span>
                    <span className="font-medium">Bachelor of Science (Biochemistry)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Year of Study</span>
                    <span className="font-medium">4th Year</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">County</span>
                    <span className="font-medium">Uasin Gishu</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Interests</span>
                    <span className="font-medium">Research, Community Service</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="activity">
              <div className="sunken rounded-2xl p-6 bg-card border border-border/50">
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3 py-3 border-b border-border/50">
                    <div className="w-8 h-8 rounded-lg neumorphic bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p>Liked a post in <span className="font-medium">Academic Support</span></p>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                  </div>
                  <div className="flex gap-3 py-3 border-b border-border/50">
                    <div className="w-8 h-8 rounded-lg neumorphic bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p>Commented on <span className="font-medium">Study Groups</span></p>
                      <span className="text-xs text-muted-foreground">5 hours ago</span>
                    </div>
                  </div>
                  <div className="flex gap-3 py-3">
                    <div className="w-8 h-8 rounded-lg neumorphic bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-4 w-4 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p>Made a contribution to <span className="font-medium">Welfare Fund</span></p>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
