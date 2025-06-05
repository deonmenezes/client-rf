export default function About() {
  return (
    <section className="py-12 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <svg className="mx-auto mb-4 text-green-500 h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <h2 className="text-3xl font-bold mb-4">Redefining the Future of Energy</h2>
        <p className="text-gray-700 mb-6">We are redefining the future of energy with innovative storage solutions. Our creative features from the production industry help businesses thrive.</p>
        <div className="flex justify-center space-x-8 flex-wrap">
          <div className="flex flex-col items-center mb-4">
            <svg className="h-12 w-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
            <p>Strategy Planning</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <svg className="h-12 w-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 18h16"/></svg>
            <p>Innovative Design</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <svg className="h-12 w-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
            <p>Product Analysis</p>
          </div>
          <div className="flex flex-col items-center mb-4">
            <svg className="h-12 w-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/></svg>
            <p>High Security</p>
          </div>
        </div>
      </div>
    </section>
  );
}
