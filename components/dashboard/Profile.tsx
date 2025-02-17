"use client";
import { useState } from "react";
import {
  User,
  Bell,
  Link as LinkIcon,
  CreditCard,
  Camera,
  Lock,
  HelpCircle,
  FileText,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoutButton } from "./LogoutButton";

export const Profile = () => {
  const [profileImage, setProfileImage] = useState("/placeholder.svg");

  //   const handleSave = () => {
  //     toast({
  //       title: "Profile updated",
  //       description: "Your profile has been updated successfully.",
  //     });
  //   };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto space-y-8 ">
      <div className="flex items-center gap-3">
        <User className="h-8 w-8 text-primary" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-theme-purple to-theme-indigo bg-clip-text text-transparent">
            Profile
          </h2>
          <p className="text-muted-foreground">
            Manage your personal information and account settings
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Profile Information */}
        <Card className="rounded-none shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <User className="h-8 w-8 text-primary" />
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileImage} alt="Profile" />
                  <AvatarFallback>
                    <User className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 p-1 bg-primary rounded-full cursor-pointer hover:opacity-90"
                >
                  <Camera className="h-4 w-4 text-white" />
                </label>
                <Input
                  id="profile-image"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              <Badge>John Doe</Badge>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="rounded-none shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <Lock className="h-8 w-8 text-primary" />
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <Button>Update Password</Button>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Secure your account with 2FA
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="rounded-none shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <Bell className="h-8 w-8 text-primary" />
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates via email
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>In-App Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications in the app
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Linked Accounts */}
        <Card className="rounded-none shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <LinkIcon className="h-8 w-8 text-primary" />
            <CardTitle>Linked Accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-semibold">Google Account</h3>
                  <p className="text-sm text-muted-foreground">Connected</p>
                </div>
                <Button variant="outline">Disconnect</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-semibold">Slack</h3>
                  <p className="text-sm text-muted-foreground">Not connected</p>
                </div>
                <Button variant="outline">Connect</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing Information */}
        <Card className="rounded-none shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <CreditCard className="h-8 w-8 text-primary" />
            <CardTitle>Billing Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Current Payment Method</Label>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4" />
                  <span>•••• •••• •••• 4242</span>
                </div>
              </div>
              <Button variant="outline">Update Payment Method</Button>
              <Button variant="outline">View Billing History</Button>
            </div>
          </CardContent>
        </Card>

        {/* Help and Support */}
        <Card className="rounded-none shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <HelpCircle className="h-8 w-8 text-primary" />
            <CardTitle>Help & Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Button variant="outline" className="justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Documentation
                </Button>
                <Button variant="outline" className="justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button variant="outline" className="justify-start">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Help Center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <LogoutButton />
      </div>
    </div>
  );
};
