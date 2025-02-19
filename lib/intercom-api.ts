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
export async function importIntercomTickets(
  accessToken: string,
  timeRangeMonths: number,
  userId: string
): Promise<ImportStatus> {
  try {
    intercomAPI.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    // Calculate date range
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - timeRangeMonths);

    // Get tickets within date range
    const response = await intercomAPI.get("/tickets", {
      params: {
        created_at_after: Math.floor(startDate.getTime() / 1000),
        created_at_before: Math.floor(endDate.getTime() / 1000),
      },
    });

    const tickets = response.data.tickets || [];

    // Here you would store tickets in your Supabase database
    // This is a placeholder for the actual database operation
    console.log(`Imported ${tickets.length} tickets for user ${userId}`);

    return {
      started: true,
      completed: true,
      ticketsImported: tickets.length,
    };
  } catch (error) {
    console.error("Error importing tickets:", error);
    return {
      started: true,
      completed: false,
      ticketsImported: 0,
      error: "Failed to import tickets from Intercom",
    };
  }
}

export default intercomAPI;
