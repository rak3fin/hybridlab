"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";

/* ———————————————————————————————————————————————
   Utility helpers (client-side only)
——————————————————————————————————————————————— */
const saveFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

/* ———————————————————————————————————————————————
   Component
——————————————————————————————————————————————— */
const AdminPanel = () => {
  /* 1️⃣ ROUTER / MOUNT */
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  /* 2️⃣ AUTH STATE  */
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [showModal, setShowModal] = useState(false);

  /* 3️⃣ TAB & FORM STATE */
  const [activeTab, setActiveTab] = useState<
    "submitLinks" | "macroData" | "contactUS"
  >("submitLinks");

  // ── Enroll / App ──────────────────────────────
  const [enrollLink, setEnrollLink] = useState("");
  const [appLink, setAppLink] = useState("");

  // ── Membership ────────────────────────────────
  const [membershipMonthly, setMembershipMonthly] = useState("");
  const [membershipAnnual, setMembershipAnnual] = useState("");

  // ── Training Program (6 links) ────────────────
  const [trainingLinks, setTrainingLinks] = useState<string[]>(
    Array(6).fill("")
  );

  /* 4️⃣ DATA TABLES */
  const [macroData, setMacroData] = useState<any[]>([]);
  const [contactData, setContactData] = useState<any[]>([]);

  const isAdminPanelPage = pathname === "/admin";

  /* ———————————————————————————————
     EFFECTS
  ———————————————————————————————— */
  useEffect(() => {
    setMounted(true);

    /* auto-show modal only on /admin */
    setShowModal(isAdminPanelPage);

    /* restore session */
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("isAdminAuthed");
      if (stored === "true") {
        setAuthenticated(true);
        setShowModal(false);
      }
    }
  }, [isAdminPanelPage]);

  /* load data once authenticated */
  useEffect(() => {
    if (authenticated) {
      Promise.all([
        fetch("/api/macro_calculator").then((r) => r.json()),
        fetch("/api/contactus").then((r) => r.json()),
        fetch("/api/enroll-link").then((r) => r.json()),
        fetch("/api/app-link").then((r) => r.json()),
        fetch("/api/membership-link").then((r) => r.json()),
        fetch("/api/training-program").then((r) => r.json()),
      ]).then(
        ([
          macro,
          contact,
          enrollArr,
          appArr,
          membershipArr,
          trainingArr,
        ]) => {
          setMacroData(macro);
          setContactData(contact);
          if (enrollArr[0]) setEnrollLink(enrollArr[0].url);
          if (appArr[0]) setAppLink(appArr[0].url);
          if (membershipArr[0]) {
            setMembershipMonthly(membershipArr[0].monthly);
            setMembershipAnnual(membershipArr[0].annual);
          }
          if (trainingArr[0]) {
            setTrainingLinks([
              trainingArr[0].training_link_1,
              trainingArr[0].training_link_2,
              trainingArr[0].training_link_3,
              trainingArr[0].training_link_4,
              trainingArr[0].training_link_5,
              trainingArr[0].training_link_6,
            ]);
          }
        }
      );
    }
  }, [authenticated]);

  /* ———————————————————————————————
     AUTH HANDLER
  ———————————————————————————————— */
  const handlePasswordSubmit = async (e: FormEvent) => {
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
        sessionStorage.setItem("isAdminAuthed", "true");
      } else {
        setAuthError("Invalid password");
      }
    } catch {
      setAuthError("Error validating password");
    }
  };

  /* ———————————————————————————————
     LINK SUBMISSION
  ———————————————————————————————— */
  const handleSubmitLinks = async () => {
    try {
      await Promise.all([
        fetch("/api/enroll-link", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: enrollLink }),
        }),
        fetch("/api/app-link", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: appLink }),
        }),
        fetch("/api/membership-link", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            monthly: membershipMonthly,
            annual: membershipAnnual,
          }),
        }),
        fetch("/api/training-program", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            training_link_1: trainingLinks[0],
            training_link_2: trainingLinks[1],
            training_link_3: trainingLinks[2],
            training_link_4: trainingLinks[3],
            training_link_5: trainingLinks[4],
            training_link_6: trainingLinks[5],
          }),
        }),
      ]);
      alert("Links saved!");
    } catch (err) {
      console.error(err);
      alert("Error saving links");
    }
  };

  /* ———————————————————————————————
     EXPORT HELPERS
  ———————————————————————————————— */
  const exportExcel = async (rows: any[], fileName: string) => {
    const XLSX = await import("xlsx");
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const wbout = XLSX.write(wb, { type: "array", bookType: "xlsx" });
    saveFile(new Blob([wbout]), `${fileName}.xlsx`);
  };

  const exportPDF = async (rows: any[], columns: string[], fileName: string) => {
    const jsPDF = (await import("jspdf")).default;
    const doc = new jsPDF({ orientation: "landscape" });
    const cellWidth = 290 / columns.length;
    let y = 20;

    /* headers */
    columns.forEach((col, i) => {
      doc.text(col, 10 + i * cellWidth, y);
    });
    y += 10;

    /* rows */
    rows.forEach((row) => {
      columns.forEach((col, i) => {
        doc.text(String(row[col]), 10 + i * cellWidth, y);
      });
      y += 8;
      if (y > 190) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save(`${fileName}.pdf`);
  };

  /* ———————————————————————————————
     UI RENDER
  ———————————————————————————————— */
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>HYBRID Labs Admin</title>
      </Head>

      {/* —————————————————  MAIN  ————————————————— */}
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl font-bold mb-6">Hybrid Labs Admin Panel</h1>

          {authenticated ? (
            /* ——— Tabs ——— */
            <>
              <div className="mb-6 border-b border-gray-700">
                <nav className="flex space-x-4">
                  {(
                    [
                      ["submitLinks", "Submit Links"],
                      ["macroData", "Macro Calculator Data"],
                      ["contactUS", "Contact US Data"],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      onClick={() =>
                        setActiveTab(id as "submitLinks" | "macroData" | "contactUS")
                      }
                      className={`px-4 py-2 ${
                        activeTab === id
                          ? "border-b-2 border-blue-500"
                          : "hover:border-b-2 hover:border-gray-500"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* ——— Submit Links ——— */}
              {activeTab === "submitLinks" && (
                <div className="space-y-6">
                  {/* Enroll & App */}
                  <fieldset className="border border-gray-700 p-4 rounded">
                    <legend className="px-2 text-lg">Website Links</legend>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">Enroll Link</label>
                        <input
                          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                          value={enrollLink}
                          onChange={(e) => setEnrollLink(e.target.value)}
                          placeholder="https://…"
                        />
                      </div>
                      <div>
                        <label className="block mb-1">App Link</label>
                        <input
                          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                          value={appLink}
                          onChange={(e) => setAppLink(e.target.value)}
                          placeholder="https://…"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Membership */}
                  <fieldset className="border border-gray-700 p-4 rounded">
                    <legend className="px-2 text-lg">Membership Links</legend>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-1">Monthly Membership</label>
                        <input
                          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                          value={membershipMonthly}
                          onChange={(e) => setMembershipMonthly(e.target.value)}
                          placeholder="https://…"
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Annual Membership</label>
                        <input
                          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                          value={membershipAnnual}
                          onChange={(e) => setMembershipAnnual(e.target.value)}
                          placeholder="https://…"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Training Program (6) */}
                  <fieldset className="border border-gray-700 p-4 rounded">
                    <legend className="px-2 text-lg">Training Program Links</legend>
                    <div className="grid md:grid-cols-2 gap-4">
                      {trainingLinks.map((link, idx) => (
                        <div key={idx}>
                          <label className="block mb-1">
                            Training Link {idx + 1}
                          </label>
                          <input
                            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                            value={link}
                            onChange={(e) =>
                              setTrainingLinks((prev) => {
                                const next = [...prev];
                                next[idx] = e.target.value;
                                return next;
                              })
                            }
                            placeholder="https://…"
                          />
                        </div>
                      ))}
                    </div>
                  </fieldset>

                  <button
                    onClick={handleSubmitLinks}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded"
                  >
                    Save All Links
                  </button>
                </div>
              )}

              {/* ——— Macro Table ——— */}
              {activeTab === "macroData" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Macro Calculator Data
                  </h2>

                  {/* download bar */}
                  <div className="flex gap-4 mb-4">
                    <button
                      onClick={() => exportExcel(macroData, "macro_calculator")}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
                    >
                      Download Excel
                    </button>
                    <button
                      onClick={() =>
                        exportPDF(
                          macroData,
                          [
                            "gender",
                            "heightType",
                            "weightType",
                            "height",
                            "weight",
                            "name",
                            "phone",
                            "email",
                          ],
                          "macro_calculator"
                        )
                      }
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                    >
                      Download PDF
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-gray-700">
                          {[
                            "Gender",
                            "Height Type",
                            "Weight Type",
                            "Height",
                            "Weight",
                            "Name",
                            "Phone",
                            "Email",
                          ].map((h) => (
                            <th key={h} className="px-4 py-2">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {macroData.map((row, i) => (
                          <tr key={i} className="border-b border-gray-700">
                            {[
                              row.gender,
                              row.heightType,
                              row.weightType,
                              row.height,
                              row.weight,
                              row.name,
                              row.phone,
                              row.email,
                            ].map((cell, j) => (
                              <td key={j} className="px-4 py-2">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ——— Contact Table ——— */}
              {activeTab === "contactUS" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Contact US Data
                  </h2>

                  {/* download bar */}
                  <div className="flex gap-4 mb-4">
                    <button
                      onClick={() => exportExcel(contactData, "contact_us")}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
                    >
                      Download Excel
                    </button>
                    <button
                      onClick={() =>
                        exportPDF(
                          contactData,
                          ["firstName", "lastName", "phone", "email", "message"],
                          "contact_us"
                        )
                      }
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
                    >
                      Download PDF
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-gray-700">
                          {[
                            "First Name",
                            "Last Name",
                            "Phone",
                            "Email",
                            "Message",
                          ].map((h) => (
                            <th key={h} className="px-4 py-2">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {contactData.map((row, i) => (
                          <tr key={i} className="border-b border-gray-700">
                            {[
                              row.firstName,
                              row.lastName,
                              row.phone,
                              row.email,
                              row.message,
                            ].map((cell, j) => (
                              <td key={j} className="px-4 py-2">
                                {cell}
                              </td>
                            ))}
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

        {/* ——— Login Modal ——— */}
        {isAdminPanelPage && showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="bg-gray-800 text-white rounded-lg p-6 z-10 w-11/12 max-w-md">
              <h2 className="text-xl font-bold mb-4">Admin Login</h2>
              <form onSubmit={handlePasswordSubmit}>
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600"
                  required
                />
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
        )}
      </div>
    </>
  );
};

export default AdminPanel;
