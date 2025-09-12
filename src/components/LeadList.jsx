function LeadList({ leads }) {
  if (leads.length === 0) {
    return <p className="text-center text-gray-500">No leads yet.</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left hidden sm:table-cell">Phone</th>
            <th className="px-4 py-3 text-left hidden sm:table-cell">Message</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition-colors duration-150">
              <td className="px-4 py-4 text-gray-700 font-medium">{lead.name}</td>
              <td className="px-4 py-4 text-gray-600">{lead.email}</td>
              <td className="px-4 py-4 text-gray-600 hidden sm:table-cell">{lead.phone}</td>
              <td className="px-4 py-4 text-gray-600 hidden sm:table-cell">{lead.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadList;