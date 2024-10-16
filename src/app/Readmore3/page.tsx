import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">
      Website Maintenance: Keeping Systems Running Smoothly
      </h1>

      <ul className="list-disc pl-5 mb-6 text-gray-700">
        <li>24/7 availability to resolve urgent issues</li>
        <li>Expert advice on optimizing payment processes</li>
        <li>Personalized assistance tailored to business needs</li>
        <li>Proactive monitoring to prevent transaction failures</li>
      </ul>
      <p className="text-gray-700 mb-6">
        Having a powerful payment gateway and reliable support is not enough—**website maintenance** 
        is essential to keep the entire system running smoothly. A well-maintained website ensures 
        fast load times, secure transactions, and an optimal user experience.
      </p>

      <p className="text-gray-700 mb-6">
        For Sarah, routine maintenance included:
      </p>
      <ul className="list-disc pl-5 mb-6 text-gray-700">
        <li>Updating the website platform and plugins to the latest versions</li>
        <li>Monitoring for security vulnerabilities and applying patches</li>
        <li>Optimizing payment forms and pages for speed and responsiveness</li>
        <li>Regular backups to avoid data loss</li>
      </ul>

      <p className="text-gray-700 mb-6">
        Consistent maintenance not only prevented downtime but also kept her website secure from 
        cyber threats. With everything running smoothly, Sarah could focus on growing her business 
        rather than worrying about technical issues.
      </p>

      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
          Explore Maintenance Plans
        </button>
        <button className="px-6 py-3 bg-gray-200 text-indigo-500 rounded-lg hover:bg-gray-300">
          Contact Support
        </button>
      </div>
    </div>
  </div>
);
}
export default page
