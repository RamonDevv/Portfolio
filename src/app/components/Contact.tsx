import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-2xl mb-4 text-black">Contact</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2 text-black">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-2 text-black">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-2 text-black">Message</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
