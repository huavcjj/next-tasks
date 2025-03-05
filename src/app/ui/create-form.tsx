export default function CreateTaskForm() {
  return (
    <form action="" className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-white font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          placeholder="Enter task title"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-white font-semibold mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          placeholder="Enter task description"
          rows={3}
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="dueDate"
          className="block text-white font-semibold mb-1"
        >
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          required
          className="w-full p-3 border border-gray-600 bg-white text-black rounded-lg shadow-sm focus:ring-2 focus:ring-gray-400 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white text-black py-3 rounded-lg font-semibold text-lg hover:bg-gray-300 transition"
      >
        Create
      </button>
    </form>
  );
}
