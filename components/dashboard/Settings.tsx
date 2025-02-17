"use client";
import { useState } from "react";
import {
  Settings as SettingsIcon,
  CreditCard,
  Bell,
  FileText,
  HelpCircle,
  User,
  Bot,
  LayoutDashboard,
  Download,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { LogoutButton } from "./LogoutButton";

export const Settings = () => {
  const [isPro, setIsPro] = useState(false);

  //   const handleSave = () => {
  //     toast({
  //       title: "Settings saved",
  //       description: "Your settings have been saved successfully.",
  //     });
  //   };

  const handleUpgrade = () => {
    setIsPro(true);
    // toast({
    //   title: "Welcome to Pro!",
    //   description: "You've successfully upgraded to the Pro plan.",
    // });
  };

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <SettingsIcon className="h-8 w-8 text-primary" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-theme-purple to-theme-indigo bg-clip-text text-transparent">
            Settings
          </h2>
          <p className="text-muted-foreground">
            Manage your preferences and configurations
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Account Settings */}
        <Card className="rounded-md shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <User className="h-8 w-8 text-primary" />
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="avatar">Profile Picture</Label>
                <Input id="avatar" type="file" accept="image/*" />
              </div>
              <Button>Save Changes</Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Change Password</h3>
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

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Integrations */}
        <Card className="rounded-md shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <MessageSquare className="h-8 w-8 text-primary" />
            <CardTitle>Integration Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-semibold">Intercom Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Connected 2 hours ago
                </p>
              </div>
              <Button variant="outline">Disconnect</Button>
            </div>

            {isPro && (
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-semibold">API Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your API keys
                  </p>
                </div>
                <Button variant="outline">Generate New Key</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="rounded-md shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <Bell className="h-8 w-8 text-primary" />
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch />
              </div>
              {isPro && (
                <>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Slack Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications in Slack
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly summary reports
                      </p>
                    </div>
                    <Switch />
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* AI Configuration - Pro Only */}
        {isPro && (
          <Card className="rounded-md shadow-none">
            <CardHeader className="flex flex-row items-center gap-4">
              <Bot className="h-8 w-8 text-primary" />
              <CardTitle>AI Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Custom AI Prompts</Label>
                  <Textarea placeholder="Enter your custom AI prompt template" />
                </div>
                <div className="space-y-2">
                  <Label>Categorization Rules</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rule type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="keyword">Keyword Based</SelectItem>
                      <SelectItem value="semantic">
                        Semantic Analysis
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button>Save AI Settings</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Dashboard Preferences */}
        <Card className="rounded-md shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <CardTitle>Dashboard Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Default View</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select default view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="overview">Overview</SelectItem>
                    <SelectItem value="detailed">Detailed View</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Visible Widgets</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="widget-tickets" />
                    <Label htmlFor="widget-tickets">Ticket Overview</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="widget-response" />
                    <Label htmlFor="widget-response">Response Times</Label>
                  </div>
                  {isPro && (
                    <div className="flex items-center space-x-2">
                      <Checkbox id="widget-ai" />
                      <Label htmlFor="widget-ai">AI Insights</Label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card className="rounded-md shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <CreditCard className="h-8 w-8 text-primary" />
            <CardTitle>Subscription</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-semibold">
                  {isPro ? "Pro Plan" : "Free Plan"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isPro ? "Access to all features" : "Basic features included"}
                </p>
              </div>
              {!isPro ? (
                <Button
                  className="bg-gradient-to-r from-theme-purple to-theme-indigo hover:opacity-90"
                  onClick={handleUpgrade}
                >
                  Upgrade to Pro
                </Button>
              ) : (
                <Badge variant="secondary">Pro</Badge>
              )}
            </div>
            {isPro && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <div className="flex items-center space-x-2">
                    <CreditCard className="h-4 w-4" />
                    <span>•••• •••• •••• 4242</span>
                  </div>
                </div>
                <Button variant="outline">Update Payment Method</Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Export Settings */}
        <Card className="rounded-md shadow-none">
          <CardHeader className="flex flex-row items-center gap-4">
            <Download className="h-8 w-8 text-primary" />
            <CardTitle>Export Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Default Export Format</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    {isPro && <SelectItem value="pdf">PDF</SelectItem>}
                  </SelectContent>
                </Select>
              </div>
              {isPro && (
                <div className="space-y-2">
                  <Label>Advanced Options</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="include-metadata" />
                    <Label htmlFor="include-metadata">Include Metadata</Label>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help & Support */}
        <Card className="rounded-md shadow-none">
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
              </div>
            </div>
          </CardContent>
        </Card>

        <LogoutButton />
      </div>
    </div>
  );
};
