import EditTaskForm from "@/ui/edit-form";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-gray-300 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Edit Task
        </h2>
        <EditTaskForm />
      </div>
    </div>
  );
}
