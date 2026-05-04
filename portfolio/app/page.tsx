import React from 'react';
import { 
  ExternalLink, Mail, ChevronRight, Phone
} from 'lucide-react';

const GithubCustomIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const App = () => {
  const projects = [
    {
      title: "Loei Travel Guide",
      description: "This mobile application is specifically designed to introduce tourist attractions in Loei province.",
      github: "https://github.com/s6652410017/rn-6652410017-thai-provice-app"
    },
    {
      title: "Cafe Tracker App",
      description: "A mobile application for finding cafes in Bangkok.",
      github: "https://github.com/s6652410017/rn-bkk-coffee-app"
    },
    {
      title: "Calculate BMI/BMR",
      description: "This is a versatile calculator application with multiple features.",
      github: "https://github.com/s6652410017/rn-forth-dti-app"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 font-sans">

      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-200/30 blur-[100px]"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900 uppercase tracking-widest">
            Pattarapol
          </span>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Hero */}
        <section className="mb-32 text-center">
          <h1 className="text-5xl font-black mb-6">
            Building Digital Solutions
          </h1>
          <p className="text-slate-500">
            Student Developer passionate about Web & Mobile
          </p>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{p.description}</p>
                <a href={p.github} target="_blank" className="text-blue-600 text-sm flex items-center gap-1">
                  View GitHub <ExternalLink size={14}/>
                </a>
              </div>
            ))}
          </div>
        </section>

{/* 🔥 Contact (email + phone + github) */}
<section className="text-center mt-24">
  <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">

    <h2 className="text-2xl font-black mb-3 text-slate-900">
      Contacts
    </h2>

    <p className="text-slate-500 mb-6 text-sm">
      Interested in working together?
    </p>

    {/* Contact List */}
    <div className="flex flex-col gap-4 text-sm">

      {/* Email */}
      <a
        href="mailto:s6652410017@sau.ac.th"
        className="flex items-center justify-between px-5 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition"
      >
        <span className="flex items-center gap-2 font-medium">
          <Mail size={16} />
          Email
        </span>
        <span className="text-slate-600">
          s6652410017@sau.ac.th
        </span>
      </a>

      {/* Phone */}
      <a
        href="tel:0957583448"
        className="flex items-center justify-between px-5 py-3 bg-slate-50 text-slate-700 rounded-xl hover:bg-slate-100 transition"
      >
        <span className="flex items-center gap-2 font-medium">
          <Phone size={16} />
          Phone
        </span>
        <span className="text-slate-600">
          095-758-3448
        </span>
      </a>

     {/* GitHub */}
<a
  href="https://github.com/s6652410017"
  target="_blank"
  className="flex items-center justify-between px-5 py-3 bg-white border border-slate-200 text-slate-800 rounded-xl hover:bg-slate-50 transition"
>
  <span className="flex items-center gap-2 font-medium">
    <GithubCustomIcon size={16} />
    GitHub
  </span>
  <span className="text-slate-500">
    github.com/s6652410017
  </span>
</a>

    </div>

  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="py-10 text-center">
        <p className="font-bold">Pattarapol</p>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;