import { Heart, DollarSign, AlertCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Welfare = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-4xl mx-auto p-4 pb-20 md:pb-4 scrollable-content h-full">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Welfare & Support Desk</h1>
          <p className="text-sm text-muted-foreground">
            We're here to support each other as a community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="sunken rounded-2xl p-5 bg-card border border-border/50 text-center">
            <div className="w-12 h-12 rounded-xl neumorphic bg-gradient-to-br from-primary to-accent mx-auto mb-3 flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">127</div>
            <div className="text-xs text-muted-foreground">Active Cases</div>
          </div>

          <div className="sunken rounded-2xl p-5 bg-card border border-border/50 text-center">
            <div className="w-12 h-12 rounded-xl neumorphic bg-gradient-to-br from-secondary to-accent mx-auto mb-3 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-foreground" />
            </div>
            <div className="text-2xl font-bold text-secondary mb-1">KSh 45.2K</div>
            <div className="text-xs text-muted-foreground">Raised This Month</div>
          </div>

          <div className="sunken rounded-2xl p-5 bg-card border border-border/50 text-center">
            <div className="w-12 h-12 rounded-xl neumorphic bg-gradient-to-br from-accent to-primary mx-auto mb-3 flex items-center justify-center">
              <Users className="h-6 w-6 text-foreground" />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">89</div>
            <div className="text-xs text-muted-foreground">Contributors</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="sunken rounded-2xl p-6 bg-card border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl neumorphic bg-primary/10 flex items-center justify-center">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-lg font-semibold">Request Support</h2>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="support-type" className="text-sm font-medium">
                  Type of Support
                </Label>
                <select
                  id="support-type"
                  className="w-full rounded-xl sunken border border-border/50 bg-background px-3 py-2 text-sm focus:border-primary transition-all"
                >
                  <option>Medical Emergency</option>
                  <option>Financial Assistance</option>
                  <option>Academic Support</option>
                  <option>Emotional Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Describe Your Situation
                </Label>
                <Textarea
                  id="description"
                  placeholder="Please provide details about your situation..."
                  className="rounded-xl sunken border-border/50 min-h-[120px] resize-none"
                />
              </div>

              <Button className="w-full rounded-xl neumorphic-hover bg-primary">
                Submit Request
              </Button>
            </form>
          </div>

          <div className="sunken rounded-2xl p-6 bg-card border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl neumorphic bg-secondary/20 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-secondary" />
              </div>
              <h2 className="text-lg font-semibold">Make a Contribution</h2>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-sm font-medium">
                  Amount (KSh)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="500"
                  className="rounded-xl sunken border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mpesa" className="text-sm font-medium">
                  M-Pesa Number
                </Label>
                <Input
                  id="mpesa"
                  type="tel"
                  placeholder="07XX XXX XXX"
                  className="rounded-xl sunken border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Add a message of encouragement..."
                  className="rounded-xl sunken border-border/50 resize-none"
                  rows={3}
                />
              </div>

              <Button className="w-full rounded-xl neumorphic-hover bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                Contribute Now
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-6 sunken rounded-2xl p-6 bg-card border border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl neumorphic bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-destructive" />
            </div>
            <h2 className="text-lg font-semibold">Emergency Support Line</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl sunken bg-muted/30">
              <p className="text-sm text-muted-foreground mb-2">Welfare Coordinator</p>
              <p className="font-semibold text-lg">+254 712 345 678</p>
            </div>
            <div className="p-4 rounded-xl sunken bg-muted/30">
              <p className="text-sm text-muted-foreground mb-2">Emergency Hotline</p>
              <p className="font-semibold text-lg text-destructive">+254 700 000 911</p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            Available 24/7 for urgent matters. All information is kept confidential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welfare;
