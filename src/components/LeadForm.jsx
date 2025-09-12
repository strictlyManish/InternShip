import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function LeadForm({ onAddLead }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success('Lead Added Sucessfully')
    onAddLead(data);
    reset();
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 ${
              errors.name ? "border-2 border-red-500" : "border border-gray-300 focus:border-purple-500"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Enter a valid email",
              },
            })}
            className={`w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 ${
              errors.email ? "border-2 border-red-500" : "border border-gray-300 focus:border-purple-500"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone must be 10 digits",
              },
            })}
            className={`w-full p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 ${
              errors.phone ? "border-2 border-red-500" : "border border-gray-300 focus:border-purple-500"
            }`}
            placeholder="Enter your phone"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className={`w-full p-3 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-purple-500 ${
              errors.message ? "border-2 border-red-500" : "border border-gray-300 focus:border-purple-500"
            }`}
            placeholder="Write your message"
            rows={3}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors duration-200 shadow-md"
        >
          Add Lead
        </button>
      </form>
    </div>
  );
}

export default LeadForm;