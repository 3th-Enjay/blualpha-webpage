import React from 'react'

const ContactPage  = () => {
  return (
    <div className="flex flex-wrap justify-around p-10 bg-blend-normal bg-gradient-to-r from-sky-500 to-white">
      <form className="w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <input type="text" placeholder="Your Name" className="w-full px-3 py-2 mb-3 border rounded" required />
        <input type="email" placeholder="Your Email" className="w-full px-3 py-2 mb-3 border rounded" required />
        <textarea placeholder="Your Message" className="w-full px-3 py-2 mb-3 border rounded" rows="5" required></textarea>
        <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
      </form>

      <section className="w-full max-w-sm ml-10">
        <h2 className="text-2xl font-bold mb-4">Our Details</h2>
        <p><strong>Name:</strong> Nelson N.J.</p>
        <p><strong>Email:</strong> enjayjerey@gmail.com</p>
        <p><strong>Phone:</strong> +234859108862</p>
        <p><strong>Address:</strong> 123 Main St, Enugu. NIGERIA.</p>
      </section>
    </div>
  );
};




export default ContactPage;