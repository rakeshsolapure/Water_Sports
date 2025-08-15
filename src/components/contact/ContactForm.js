const ContactForm = () => {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
  
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;