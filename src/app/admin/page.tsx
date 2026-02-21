"use client";

import { useState } from "react";
import type { Lead } from "@/types";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortField, setSortField] = useState<keyof Lead>("created_at");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const fetchLeads = async (pw: string) => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        headers: { "x-admin-password": pw },
      });

      if (res.status === 401) {
        setError("Falsches Passwort.");
        return;
      }

      const data = await res.json();
      if (data.leads) {
        setLeads(data.leads);
        setIsAuthenticated(true);
      }
    } catch {
      setError("Verbindungsfehler.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads(password);
  };

  const sortedLeads = [...leads].sort((a, b) => {
    const aVal = a[sortField] || "";
    const bVal = b[sortField] || "";
    if (sortDir === "asc") return aVal > bVal ? 1 : -1;
    return aVal < bVal ? 1 : -1;
  });

  const toggleSort = (field: keyof Lead) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  };

  const now = new Date();
  const today = now.toISOString().split("T")[0];
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const stats = {
    total: leads.length,
    today: leads.filter((l) => l.created_at.startsWith(today)).length,
    week: leads.filter((l) => l.created_at >= weekAgo).length,
    month: leads.filter((l) => l.created_at >= monthAgo).length,
  };

  const exportCSV = () => {
    const headers = ["Name", "E-Mail", "Telefon", "Beruf", "Unternehmen", "Plan", "Quelle", "Datum"];
    const rows = sortedLeads.map((l) => [
      l.name,
      l.email,
      l.phone || "",
      l.profession,
      l.company || "",
      l.plan || "",
      l.source,
      new Date(l.created_at).toLocaleString("de-AT"),
    ]);

    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `clawsistent-leads-${today}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-bold text-navy-900 text-center">Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Passwort"
            className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? "Laden..." : "Anmelden"}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-navy-900">Leads Dashboard</h1>
          <button
            onClick={exportCSV}
            className="px-4 py-2 bg-navy-900 text-white text-sm font-medium rounded-lg hover:bg-navy-800 transition-colors cursor-pointer"
          >
            CSV Export
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Gesamt", value: stats.total },
            { label: "Heute", value: stats.today },
            { label: "Diese Woche", value: stats.week },
            { label: "Dieser Monat", value: stats.month },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-navy-100 p-4">
              <p className="text-sm text-navy-500">{stat.label}</p>
              <p className="text-2xl font-bold text-navy-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-navy-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-navy-50 text-left">
                <tr>
                  {(
                    [
                      ["name", "Name"],
                      ["email", "E-Mail"],
                      ["phone", "Telefon"],
                      ["profession", "Beruf"],
                      ["company", "Unternehmen"],
                      ["plan", "Plan"],
                      ["source", "Quelle"],
                      ["created_at", "Datum"],
                    ] as [keyof Lead, string][]
                  ).map(([field, label]) => (
                    <th
                      key={field}
                      className="px-4 py-3 font-medium text-navy-600 cursor-pointer hover:text-navy-900"
                      onClick={() => toggleSort(field)}
                    >
                      {label} {sortField === field && (sortDir === "asc" ? "↑" : "↓")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-50">
                {sortedLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-navy-50/50">
                    <td className="px-4 py-3 font-medium">{lead.name}</td>
                    <td className="px-4 py-3">{lead.email}</td>
                    <td className="px-4 py-3">{lead.phone || "—"}</td>
                    <td className="px-4 py-3">{lead.profession}</td>
                    <td className="px-4 py-3">{lead.company || "—"}</td>
                    <td className="px-4 py-3">{lead.plan || "—"}</td>
                    <td className="px-4 py-3">{lead.source}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleString("de-AT")}
                    </td>
                  </tr>
                ))}
                {sortedLeads.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-navy-400">
                      Noch keine Leads vorhanden.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
