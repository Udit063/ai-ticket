import axios from "axios";

// Type for Intercom workspace info
export interface IntercomWorkspace {
  type: string;
  id_code: string;
  name: string;
  region: string;
}

// Type for import status
export interface ImportStatus {
  started: boolean;
  completed: boolean;
  ticketsImported: number;
  error?: string;
}

const intercomAPI = axios.create({
  baseURL: "https://api.intercom.io",
  headers: {
    Accept: "application/json",
    "Intercom-Version": "2.8",
  },
});

// Get Intercom workspace info
export async function getIntercomWorkspaceInfo(
  accessToken: string
): Promise<IntercomWorkspace> {
  intercomAPI.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
  const response = await intercomAPI.get("/me");
  return response.data.app;
}

// Import tickets based on time range (months)
export async function importIntercomTickets() {
  const response = await fetch("/api/intercom/tickets");

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      `HTTP error! status: ${response.status}. ${errorData.error || ""}`
    );
  }

  return await response.json();
}
