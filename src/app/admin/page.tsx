"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

const AdminPanel = () => {
  // 1. Call hooks unconditionally at the top.
  const pathname = usePathname();

  // Control "mounted" so we can safely check `window` or do other client-only stuff.
  const [mounted, setMounted] = useState(false);

  // Authentication and modal state.
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // Admin panel show/hide logic
  const [showModal, setShowModal] = useState(false);

  // Tab state
  const [activeTab, setActiveTab] = useState<"submitLinks" | "macroData" | "contactUS">(
    "submitLinks"
  );

  // Input fields for enroll and app links.
  const [enrollLink, setEnrollLink] = useState("");
  const [appLink, setAppLink] = useState("");

  // Data arrays.
  const [macroData, setMacroData] = useState<any[]>([]);
  const [contactData, setContactData] = useState<any[]>([]);

  // Determine if we are on the admin page
  const isAdminPanelPage = pathname === "/admin";

  // 2. useEffect(s) also run unconditionally at the top
  useEffect(() => {
    setMounted(true);

    // If we’re on the admin page path, show the modal
    setShowModal(isAdminPanelPage);
  }, [isAdminPanelPage]);

  // When authenticated, load all data.
  useEffect(() => {
    if (authenticated) {
      fetchMacroData();
      fetchEnrollLink();
      fetchAppLink();
      fetchContactData();
    }
  }, [authenticated]);

  // 3. If not mounted, just show a loading fallback (UI-only)
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // 4. Define all handler functions here (they do not contain hooks, so it’s safe):
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setAuthenticated(true);
        setShowModal(false);
      } else {
        setAuthError("Invalid password");
      }
    } catch (error) {
        console.log(error)
      setAuthError("Error validating password");
    }
  };

  const handleSubmitLinks = async () => {
    if (enrollLink) {
      await fetch("/api/enroll-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: enrollLink }),
      });
    }
    if (appLink) {
      await fetch("/api/app-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: appLink }),
      });
    }
    // Refetch stored links after submission.
    fetchEnrollLink();
    fetchAppLink();
  };

  const fetchMacroData = async () => {
    const res = await fetch("/api/macro_calculator");
    const data = await res.json();
    setMacroData(data);
  };

  const fetchEnrollLink = async () => {
    const res = await fetch("/api/enroll-link");
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      setEnrollLink(data[0].url);
    }
  };

  const fetchAppLink = async () => {
    const res = await fetch("/api/app-link");
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      setAppLink(data[0].url);
    }
  };

  const fetchContactData = async () => {
    const res = await fetch("/api/contactus");
    const data = await res.json();
    setContactData(data);
  };

  // 5. Now render normally, with no more hook calls below this point
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold mb-6">Admin Panel</h1>
          {authenticated ? (
            <>
              {/* Tabs Navigation */}
              <div className="mb-6 border-b border-gray-700">
                <nav className="flex space-x-4">
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "submitLinks"
                        ? "border-b-2 border-blue-500"
                        : "hover:border-b-2 hover:border-gray-500"
                    }`}
                    onClick={() => setActiveTab("submitLinks")}
                  >
                    Submit Links
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "macroData"
                        ? "border-b-2 border-blue-500"
                        : "hover:border-b-2 hover:border-gray-500"
                    }`}
                    onClick={() => setActiveTab("macroData")}
                  >
                    Macro Calculator Data
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeTab === "contactUS"
                        ? "border-b-2 border-blue-500"
                        : "hover:border-b-2 hover:border-gray-500"
                    }`}
                    onClick={() => setActiveTab("contactUS")}
                  >
                    Contact US Data
                  </button>
                </nav>
              </div>
              {/* Tab Content */}
              {activeTab === "submitLinks" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Submit Links</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1">Enroll Link</label>
                      <input
                        type="text"
                        placeholder="Enter enroll link"
                        value={enrollLink}
                        onChange={(e) => setEnrollLink(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block mb-1">App Link</label>
                      <input
                        type="text"
                        placeholder="Enter app link"
                        value={appLink}
                        onChange={(e) => setAppLink(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                      />
                    </div>
                    <button
                      className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                      onClick={handleSubmitLinks}
                    >
                      Submit Links
                    </button>
                  </div>
                </div>
              )}
              {activeTab === "macroData" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Macro Calculator Data</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="px-4 py-2">Gender</th>
                          <th className="px-4 py-2">Height Type</th>
                          <th className="px-4 py-2">Weight Type</th>
                          <th className="px-4 py-2">Height</th>
                          <th className="px-4 py-2">Weight</th>
                          <th className="px-4 py-2">Name</th>
                          <th className="px-4 py-2">Phone</th>
                          <th className="px-4 py-2">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {macroData.map((item, index) => (
                          <tr key={index} className="border-b border-gray-700">
                            <td className="px-4 py-2">{item.gender}</td>
                            <td className="px-4 py-2">{item.heightType}</td>
                            <td className="px-4 py-2">{item.weightType}</td>
                            <td className="px-4 py-2">{item.height}</td>
                            <td className="px-4 py-2">{item.weight}</td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.phone}</td>
                            <td className="px-4 py-2">{item.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === "contactUS" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Contact US Data</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="px-4 py-2">First Name</th>
                          <th className="px-4 py-2">Last Name</th>
                          <th className="px-4 py-2">Phone</th>
                          <th className="px-4 py-2">Email</th>
                          <th className="px-4 py-2">Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contactData.map((item, index) => (
                          <tr key={index} className="border-b border-gray-700">
                            <td className="px-4 py-2">{item.firstName}</td>
                            <td className="px-4 py-2">{item.lastName}</td>
                            <td className="px-4 py-2">{item.phone}</td>
                            <td className="px-4 py-2">{item.email}</td>
                            <td className="px-4 py-2">{item.message}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          ) : (
            <p>Please log in to access the Admin Panel.</p>
          )}
        </div>

        {/* Tailwind Modal for Admin Login */}
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity ${
            isAdminPanelPage && showModal ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-gray-800 text-white rounded-lg p-6 z-10 w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4">
                <label htmlFor="adminPassword" className="block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="adminPassword"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                />
              </div>
              {authError && <p className="text-red-500 mb-2">{authError}</p>}
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
