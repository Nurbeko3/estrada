import { useEffect, useRef } from "react";
import { supabase } from "../supabaseClient";

/**
 * Supabase Keep-Alive Hook
 * Prevents Supabase free tier from going to sleep by pinging it periodically.
 * Supabase pauses after 7 days of inactivity, this ping runs every 6 hours.
 */
export const useSupabaseKeepAlive = () => {
  const intervalRef = useRef(null);

  useEffect(() => {
    // Ping function - makes a simple query to keep connection alive
    const pingSupabase = async () => {
      try {
        // Simple query to news table (just count, very lightweight)
        const { count, error } = await supabase
          .from("news")
          .select("*", { count: "exact", head: true });

        if (error) {
          console.log("[Supabase Keep-Alive] Ping failed:", error.message);
        } else {
          console.log(
            "[Supabase Keep-Alive] Ping successful at",
            new Date().toLocaleString(),
          );
        }
      } catch (err) {
        console.log("[Supabase Keep-Alive] Error:", err.message);
      }
    };

    // Run ping immediately on mount
    pingSupabase();

    // Set interval: 6 hours = 6 * 60 * 60 * 1000 = 21600000 ms
    const SIX_HOURS = 6 * 60 * 60 * 1000;
    intervalRef.current = setInterval(pingSupabase, SIX_HOURS);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
};

export default useSupabaseKeepAlive;
