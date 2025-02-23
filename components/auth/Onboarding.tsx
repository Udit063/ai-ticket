"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import {
//   getIntercomWorkspaceInfo,
//   importIntercomTickets,
// } from "@/lib/intercom-api";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const Onboarding = () => {
  // const [timeRange, setTimeRange] = useState("1");
  const [isConnecting, setIsConnecting] = useState(false);
  // const [isImporting, setIsImporting] = useState(false);
  const [connected, setConnected] = useState(false);
  // const [workspaceName, setWorkspaceName] = useState("");
  // const [importStatus, setImportStatus] = useState<{
  //   completed: boolean;
  //   ticketsCount: number;
  //   error?: string;
  // } | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success") === "intercom_connected") {
      setConnected(true);
      updateDatabaseConnectionStatus();
    }
  }, []);

  const updateDatabaseConnectionStatus = async () => {
    if (!session?.user) return;

    const { error } = await supabase
      .from("users")
      .update({
        is_intercom_connected: true,
      })
      .eq("id", session.user.id);

    if (error) {
      console.error("Error updating connection status:", error);
    }
  };

  const { data: session } = useSession();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleConnectIntercom = async () => {
    setIsConnecting(true);
    const result = await signIn("intercom", {
      callbackUrl: "/onboarding",
      redirect: true,
    });

    if (result?.error) {
      console.error("Error connecting to Intercom:", result.error);
    } else {
      router.push("/onboarding");
    }
  };

  // const handleImportTickets = async () => {
  //   if (!session?.accessToken) {
  //     return;
  //   }

  //   setIsImporting(true);

  //   try {
  //     console.log("start hua");

  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     console.log("user bhi mil gya", user);

  //     if (!user) {
  //       throw new Error("User not authenticated");
  //     }

  //     const workspace = await getIntercomWorkspaceInfo(session.accessToken);
  //     setWorkspaceName(workspace.name);

  //     const result = await importIntercomTickets(
  //       session.accessToken,
  //       parseInt(timeRange),
  //       user.id
  //     );
  //     console.log("yahan bhi aagya");

  //     if (result.completed) {
  //       console.log("result chl gya");

  //       setImportStatus({
  //         completed: true,
  //         ticketsCount: result.ticketsImported,
  //         error: undefined,
  //       });

  //       // Update user profile to mark onboarding as complete
  //       await supabase.from("users").upsert({
  //         id: user.id,
  //         onboarding_completed: true,
  //         intercom_connected: true,
  //         intercom_workspace: workspace.name,
  //         intercom_account_id: session.providerAccountId,
  //       });
  //       console.log("hogya bc");

  //       setTimeout(() => {
  //         router.push("/dashboard");
  //       }, 2000);
  //     } else {
  //       setImportStatus({
  //         completed: false,
  //         ticketsCount: 0,
  //         error: result.error,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Import error:", error);
  //     setImportStatus({
  //       completed: false,
  //       ticketsCount: 0,
  //       error: "Failed to import tickets",
  //     });
  //   } finally {
  //     setIsImporting(false);
  //   }
  // };

  const isIntercomConnected = connected;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full mx-3 md:w-3/5 xl:mx-0 xl:w-1/4 flex flex-col border-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Connect Intercom
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Import your Intercom tickets to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isIntercomConnected ? (
            <>
              <div className="p-4 mb-6 bg-green-50 rounded-md flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-green-700 font-medium">
                  Connected to {"Intercom"}
                </span>
              </div>

              {/* <div className="space-y-2">
                <Label className="text-sm font-medium">Import Time Range</Label>
                <Select
                  defaultValue="1"
                  onValueChange={(value) => setTimeRange(value)}
                >
                  <SelectTrigger className="h-12 bg-gray-50/50">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Last 1 month</SelectItem>
                    <SelectItem value="3">Last 3 months</SelectItem>
                    <SelectItem value="6">Last 6 months</SelectItem>
                    <SelectItem value="12">Last 12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={handleImportTickets}
                disabled={isImporting}
              >
                {isImporting ? "Importing..." : "Import Tickets"}
              </Button>

              {importStatus && (
                <div
                  className={`p-4 rounded-md ${
                    importStatus.error ? "bg-red-50" : "bg-green-50"
                  }`}
                >
                  {importStatus.error ? (
                    <p className="text-red-700">{importStatus.error}</p>
                  ) : (
                    <p className="text-green-700">
                      Successfully imported {importStatus.ticketsCount} tickets.
                      {importStatus.completed && " Redirecting to dashboard..."}
                    </p>
                  )}
                </div>
              )} */}

              <Link href="/dashboard">
                {" "}
                <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                  Go to dashboard
                </Button>
              </Link>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Import Time Range</Label>
                <Select
                  defaultValue="1"
                  // onValueChange={(value) => setTimeRange(value)}
                >
                  <SelectTrigger className="h-12 bg-gray-50/50">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Last 1 month</SelectItem>
                    <SelectItem value="3">Last 3 months</SelectItem>
                    <SelectItem value="6">Last 6 months</SelectItem>
                    <SelectItem value="12">Last 12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={handleConnectIntercom}
                disabled={isConnecting}
              >
                {isConnecting ? "Connecting..." : "Connect Intercom"}
              </Button>
            </>
          )}

          {/* <Link href="/register">
            <Button
              variant="outline"
              className="w-full h-12 hover:bg-gray-50 border-gray-200 shadow-sm transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </Link> */}
        </CardContent>
      </Card>
    </div>
  );
};
