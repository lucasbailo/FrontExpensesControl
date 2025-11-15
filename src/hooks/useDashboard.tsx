import { useEffect, useState } from "react";
import api from "../services/api";


export interface DashboardResponse {
  totalByType: Record<string, number>;
  monthlyTotals: Record<string, number>;
}

export default function useDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DashboardResponse | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const resp = await api.get("/expense/dashboard");  
        setData(resp.data);
      } catch (error) {
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { data, loading };
}
