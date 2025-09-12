import { useState } from "react";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import { toast } from "react-toastify";

function App() {
  const [leads, setLeads] = useState(() => {
    try {
      const savedLeads = localStorage.getItem("leads");
      return savedLeads ? JSON.parse(savedLeads) : [];
    } catch (error) {
      console.error("Failed to parse leads from localStorage:", error);
      return [];
    }
  });

  const addLead = (lead) => {
    // Check for a unique value like email to prevent duplicates
    const isDuplicate = leads.some((existingLead) => existingLead.email === lead.email);
    if (isDuplicate) {
      toast.error('A lead with this email already exists.')
      return;
    }

    const newLead = { ...lead, id: Date.now() };
    const updatedLeads = [...leads, newLead];
    setLeads(updatedLeads);
    localStorage.setItem("leads", JSON.stringify(updatedLeads));
  };

  const deleteLead = (id) => {
    const updatedLeads = leads.filter(lead => lead.id !== id);
    setLeads(updatedLeads);
    localStorage.setItem("leads", JSON.stringify(updatedLeads));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
        Lead Management System
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-8 w-full max-w-6xl">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <LeadForm onAddLead={addLead} />
        </div>

        <div className="lg:w-1/2">
          <LeadList leads={leads} onDeleteLead={deleteLead} />
        </div>
      </div>
    </div>
  );
}

export default App;