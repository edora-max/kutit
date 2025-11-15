import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const counties = [
  "Baringo", "Bomet", "Elgeyo-Marakwet", "Kericho", "Nandi", 
  "Nakuru", "Trans-Nzoia", "Turkana", "Uasin Gishu", "West Pokot"
];

const SignUp = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-background via-accent/5 to-secondary/5">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl neumorphic bg-gradient-to-br from-primary to-accent mb-4">
            <span className="text-primary-foreground font-bold text-3xl">K</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Join KUTIT
          </h1>
          <p className="text-muted-foreground">
            Become part of our vibrant community
          </p>
        </div>

        <div className="sunken rounded-3xl p-8 bg-card/50 backdrop-blur-sm border border-border/50">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="fullname"
                type="text"
                placeholder="John Kiprotich"
                className="rounded-xl sunken border-border/50 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="county" className="text-sm font-medium">
                County of Origin
              </Label>
              <Select>
                <SelectTrigger className="rounded-xl sunken border-border/50 focus:border-primary">
                  <SelectValue placeholder="Select your county" />
                </SelectTrigger>
                <SelectContent>
                  {counties.map((county) => (
                    <SelectItem key={county} value={county.toLowerCase()}>
                      {county}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@students.ku.ac.ke"
                className="rounded-xl sunken border-border/50 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="rounded-xl sunken border-border/50 focus:border-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="rounded-xl sunken border-border/50 focus:border-primary transition-all"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full rounded-xl neumorphic-hover h-12 text-base font-medium bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/signin" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignUp;
