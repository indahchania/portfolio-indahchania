import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Mail,
  CheckCircle2,
  Server,
  Globe,
  Layers,
  ExternalLink,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import fotoIndah from "./assets/fotoku.jpeg";

export default function App() {
  const [lang, setLang] = useState("en"); // Default English
  const [copied, setCopied] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // State untuk Modal Detail Proyek

  const toggleLanguage = () => {
    setLang(lang === "en" ? "id" : "en");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("indhhch@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Kamus Terjemahan Teks (ID & EN) dengan tambahan info UNP
  const t = {
    navAbout: lang === "en" ? "/ about me" : "/ tentang saya",
    navExp: lang === "en" ? "/ experience" : "/ pengalaman",
    navEdu: lang === "en" ? "/ education" : "/ pendidikan",
    navProjects: lang === "en" ? "/ projects" : "/ proyek",
    navStack: lang === "en" ? "/ stack" : "/ keahlian",
    navContact: lang === "en" ? "contact" : "kontak",

    badge1: lang === "en" ? "✦ FULLSTACK DEV" : "✦ FULLSTACK DEV",
    badge2: lang === "en" ? "✦ INFORMATICS GRADUATE" : "✦ LULUSAN INFORMATIKA",

    heroDesc:
      lang === "en"
        ? "Architecting scalable web applications from database architecture to intuitive user interfaces."
        : "Merancang aplikasi web berskala dari arsitektur database hingga antarmuka pengguna yang intuitif.",

    exploreBtn: lang === "en" ? "↓ EXPLORE WORKS" : "↓ LIHAT KARYA",
    aboutNote: "note: about_me.txt",
    aboutTitle: lang === "en" ? "what's up?" : "tentang saya",

    aboutDesc:
      lang === "en"
        ? "Hello, I am Indah Chania, an Informatics graduate from Universitas Negeri Padang. I am a Fullstack Developer enthusiastic about designing scalable systems from databases to user-facing web interfaces."
        : "Halo, saya Indah Chania, lulusan Informatika Universitas Negeri Padang. Saya adalah Fullstack Developer yang antusias merancang sistem skalabel mulai dari database hingga antarmuka web.",

    // Teks Section Pengalaman & Pendidikan
    expTitle:
      lang === "en" ? "Professional Experience" : "Pengalaman Profesional",
    eduTitle:
      lang === "en" ? "Education Background" : "Latar Belakang Pendidikan",

    skillsTitle: "TECHNICAL_STACK",
    projectsTitle:
      lang === "en"
        ? "Featured Systems & Projects"
        : "Sistem & Proyek Unggulan",
    projectsSubtitle:
      lang === "en" ? "CLICK CARD FOR DETAILS ↗" : "KLIK KARTU UNTUK DETAIL ↗",
    contactTitle:
      lang === "en"
        ? "READY TO HIRE A FULLSTACK DEV?"
        : "SIAP MEREKRUT FULLSTACK DEV?",
    contactDesc:
      lang === "en"
        ? "Have an open role or an exciting project? Let's discuss how I can contribute value to your engineering team."
        : "Punya lowongan atau proyek menarik? Mari diskusikan bagaimana saya dapat berkontribusi di tim teknik Anda.",
    sendEmail: lang === "en" ? "Send Email" : "Kirim Email",
    copiedText: lang === "en" ? "Address Copied!" : "Alamat Disalin!",
    copyContact: lang === "en" ? "Copy Contact" : "Salin Kontak",
    footerText:
      lang === "en"
        ? "Built with React, Vite & Notebook Style."
        : "Dibuat dengan React, Vite & Gaya Buku Catatan.",

    // Teks Modal Detail Proyek
    modalClose: lang === "en" ? "Close [X]" : "Tutup [X]",
    modalTechStack:
      lang === "en" ? "Technology Stack:" : "Teknologi yang Digunakan:",
    modalKeyFeatures:
      lang === "en"
        ? "Key Features & Architecture:"
        : "Fitur Utama & Arsitektur:",
    modalDemoBtn: lang === "en" ? "Live Demo" : "Demo Langsung",
  };

  const experiences = [
    {
      role: "Fullstack Developer (SIMRS Staff)",
      company: "Pusat Jantung Nasional Harapan Kita",
      period: "Aug 2026 - Present",
      desc:
        lang === "en"
          ? "Developed and maintained IT Helpdesk ticketing systems, handled role-based incident workflows, and optimized PostgreSQL database queries."
          : "Mengembangkan dan memelihara sistem peniketan Helpdesk IT, menangani alur kerja insiden berbasis peran, serta mengoptimalkan kueri database PostgreSQL.",
      stack: ["Laravel", "PostgreSQL", "React"],
    },
    {
      role: "Web Developer Intern",
      company: "Digital Library Universitas Negeri Padang",
      period: "2025",
      desc:
        lang === "en"
          ? "Built digital library modules, managed database migration, and implemented secure user authentication systems."
          : "Membangun modul perpustakaan digital, mengelola migrasi database, dan mengimplementasikan sistem autentikasi pengguna yang aman.",
      stack: ["CodeIgniter", "MySQL", "Bootstrap"],
    },
  ];

  const educations = [
    {
      degree: lang === "en" ? "Informatics" : "S1 Informatika",
      institution: "Universitas Negeri Padang (UNP)",
      period: "2021 - 2025",
      // desc:
      //   lang === "en"
      //     ? "Focused on software engineering, database management systems, algorithms, and fullstack web application development."
      //     : "Fokus pada rekayasa perangkat lunak, sistem manajemen database, algoritma, dan pengembangan aplikasi web fullstack.",
    },
  ];

  const projects = [
    {
      num: "PROJECT 01",
      date: "2026",
      title: "Helpdesk IT Pusat Jantung Nasional Harapan Kita",
      desc:
        lang === "en"
          ? "An IT Helpdesk management platform featuring automated ticket numbering, role-based assignment, file attachment handling, and real-time SLA tracking."
          : "Platform manajemen Helpdesk IT dengan sistem penomoran tiket otomatis, penugasan teknisi berbasis peran, penanganan lampiran, dan pelacakan SLA.",
      features:
        lang === "en"
          ? [
              "Auto-generated ticket numbering (HD-YYMM-XXXXX) with pessimistic locking",
              "Role-based access control & incident verification (L1/L2 Support)",
              "File attachment handling with cascade cleanup & storage link",
              "RESTful API architecture using Laravel MVC & PostgreSQL 17 database",
            ]
          : [
              "Penomoran tiket otomatis (HD-YYMM-XXXXX) dengan pessimistic locking",
              "Manajemen penugasan & verifikasi insiden berbasis peran (Support L1/L2)",
              "Penanganan file lampiran pendukung dengan relasi cascade & storage link",
              "Arsitektur RESTful API berbasis Laravel MVC & database PostgreSQL 17",
            ],
      demoLink: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
      stack: ["Laravel", "PostgreSQL", "React"],
      bgColor: "bg-[#0A3323]",
      textColor: "text-[#F7F4D5]",
      tagColor: "bg-[#839958] text-[#0A3323]",
    },
    {
      num: "PROJECT 02",
      date: "2025",
      title: "Digital Library Universitas Negeri Padang",
      desc:
        lang === "en"
          ? "A digital library system featuring book cataloging, member management, loan tracking, and administrative reporting."
          : "Sistem perpustakaan digital dengan fitur katalog buku, manajemen anggota, pelacakan peminjaman, dan pelaporan administratif.",
      features:
        lang === "en"
          ? [
              "Digital catalog & advanced book search system",
              "Member loan tracking and fine calculation module",
              "Admin dashboard with detailed transaction analytics",
              "Secure session management with CodeIgniter & MySQL",
            ]
          : [
              "Katalog digital & sistem pencarian buku lanjutan",
              "Pelacakan peminjaman anggota dan modul perhitungan denda",
              "Dashboard admin dengan analitik transaksi terperinci",
              "Manajemen sesi aman dengan CodeIgniter & MySQL",
            ],
      demoLink: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
      stack: ["CodeIgniter", "MySQL"],
      bgColor: "bg-[#D3968C]",
      textColor: "text-[#0A3323]",
      tagColor: "bg-[#0A3323] text-[#F7F4D5]",
    },
  ];

  const skills = [
    "PHP",
    "Laravel & CodeIgniter",
    "Node.js & Express",
    "JavaScript",
    "PostgreSQL & MySQL",
    "React",
  ];

  return (
    <div className="min-h-screen bg-[#F7F4D5] text-[#0A3323] font-mono selection:bg-[#D3968C] selection:text-[#0A3323] relative pb-20">
      {/* Notebook Line Pattern Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,#10566615_1px,transparent_1px)] bg-[size:100%_2.5rem] z-0"></div>

      {/* TOP NAVBAR STICKER STYLE + LANGUAGE TOGGLE */}
      <header className="relative z-10 max-w-5xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#0A3323]/20">
        <div className="flex items-center gap-2 bg-[#839958] px-3 py-1 border-2 border-[#0A3323] shadow-[2px_2px_0px_#0A3323]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0A3323] animate-pulse"></span>
          <span className="text-xs font-bold text-[#0A3323]">IND_DEV.SYS</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex items-center gap-6 text-xs font-bold">
            <a
              href="#about"
              className="hover:text-[#105666] underline decoration-2 underline-offset-4"
            >
              {t.navAbout}
            </a>
            <a
              href="#experience"
              className="hover:text-[#105666] underline decoration-2 underline-offset-4"
            >
              {t.navExp}
            </a>
            <a
              href="#education"
              className="hover:text-[#105666] underline decoration-2 underline-offset-4"
            >
              {t.navEdu}
            </a>
            <a
              href="#projects"
              className="hover:text-[#105666] underline decoration-2 underline-offset-4"
            >
              {t.navProjects}
            </a>
            <a
              href="#skills"
              className="hover:text-[#105666] underline decoration-2 underline-offset-4"
            >
              {t.navStack}
            </a>
          </nav>

          {/* LANGUAGE SWITCHER BUTTON */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#105666] text-[#F7F4D5] text-xs font-bold border-2 border-[#0A3323] shadow-[2px_2px_0px_#0A3323] hover:bg-[#839958] hover:text-[#0A3323] transition-colors"
          >
            <Globe size={14} />
            <span>{lang === "en" ? "🇮🇩 ID" : "🇬🇧 EN"}</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-4xl mx-auto px-6 pt-12 relative z-10 space-y-16">
        {/* HERO SECTION */}
        <div className="text-center space-y-6 relative py-8">
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <span className="bg-[#839958] text-[#0A3323] text-xs font-bold px-3 py-1 border-2 border-[#0A3323] shadow-[3px_3px_0px_#0A3323] -rotate-2">
              {t.badge1}
            </span>
            <span className="bg-[#D3968C] text-[#0A3323] text-xs font-bold px-3 py-1 border-2 border-[#0A3323] shadow-[3px_3px_0px_#0A3323] rotate-1">
              {t.badge2}
            </span>
          </div>

          <div className="inline-block border-4 border-[#0A3323] bg-[#105666] text-[#F7F4D5] px-8 py-4 shadow-[8px_8px_0px_#0A3323] transform -rotate-1">
            <h1 className="text-4xl md:text-6xl font-black tracking-widest uppercase">
              INDAH CHANIA
            </h1>
          </div>

          <p className="text-sm md:text-lg text-[#0A3323] font-bold max-w-xl mx-auto leading-relaxed pt-2">
            {t.heroDesc}
          </p>

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-[#0A3323] text-[#F7F4D5] font-bold text-xs uppercase tracking-wider border-2 border-[#0A3323] shadow-[4px_4px_0px_#D3968C] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
            >
              {t.exploreBtn}
            </a>
          </div>
        </div>

        {/* ABOUT ME SECTION */}
        <section
          id="about"
          className="border-4 border-[#0A3323] bg-white p-6 md:p-8 shadow-[8px_8px_0px_#105666] relative space-y-6"
        >
          <div className="absolute -top-4 left-6 bg-[#D3968C] text-[#0A3323] text-xs font-bold px-3 py-1 border-2 border-[#0A3323]">
            {t.aboutNote}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-black tracking-tight text-[#0A3323]">
                {t.aboutTitle}
              </h2>
              <p className="text-xs md:text-sm text-[#0A3323]/90 leading-relaxed">
                {t.aboutDesc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-1 bg-[#839958]/30 border border-[#0A3323] text-xs font-bold">
                  #InformaticsUNP
                </span>
                <span className="px-2 py-1 bg-[#D3968C]/30 border border-[#0A3323] text-xs font-bold">
                  #FullstackReady
                </span>
                <span className="px-2 py-1 bg-[#105666]/20 border border-[#0A3323] text-xs font-bold">
                  #ProblemSolver
                </span>
              </div>
            </div>

            {/* Kotak Polaroid Foto dengan Tinggi Lebih Panjang (h-64) */}
            <div className="border-2 border-[#0A3323] bg-[#F7F4D5] p-3 shadow-[4px_4px_0px_#0A3323] rotate-2 text-center space-y-2">
              <div className="h-64 bg-white border border-[#0A3323] overflow-hidden flex items-center justify-center">
                <img
                  src={fotoIndah}
                  alt="Indah Chania"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] font-bold text-[#0A3323]">
                indah_chania.jpg
              </p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="space-y-6">
          <div className="inline-block border-2 border-[#0A3323] bg-[#105666] text-[#F7F4D5] px-3 py-1 text-xs font-bold shadow-[3px_3px_0px_#0A3323]">
            💼 {t.expTitle}
          </div>

          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border-4 border-[#0A3323] bg-white p-6 shadow-[6px_6px_0px_#839958] space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#0A3323]/20 pb-3">
                  <div>
                    <h3 className="text-base font-black text-[#0A3323] flex items-center gap-2">
                      <Briefcase size={16} className="text-[#105666]" />{" "}
                      {exp.role}
                    </h3>
                    <p className="text-xs font-bold text-[#105666] pt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold bg-[#D3968C] text-[#0A3323] px-2.5 py-1 border border-[#0A3323]">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[#0A3323]/90 leading-relaxed">
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.stack.map((st, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-bold bg-[#F7F4D5] text-[#0A3323] px-2 py-0.5 border border-[#0A3323]"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="space-y-6">
          <div className="inline-block border-2 border-[#0A3323] bg-[#D3968C] text-[#0A3323] px-3 py-1 text-xs font-bold shadow-[3px_3px_0px_#0A3323]">
            🎓 {t.eduTitle}
          </div>

          <div className="space-y-4">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="border-4 border-[#0A3323] bg-white p-6 shadow-[6px_6px_0px_#105666] space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#0A3323]/20 pb-3">
                  <div>
                    <h3 className="text-base font-black text-[#0A3323] flex items-center gap-2">
                      <GraduationCap size={16} className="text-[#839958]" />{" "}
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-bold text-[#105666] pt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold bg-[#839958] text-[#0A3323] px-2.5 py-1 border border-[#0A3323]">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[#0A3323]/90 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS STICKER BOARD */}
        <section id="skills" className="space-y-4">
          <div className="inline-block border-2 border-[#0A3323] bg-[#839958] px-3 py-1 text-xs font-bold text-[#0A3323] shadow-[3px_3px_0px_#0A3323]">
            {t.skillsTitle}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="border-2 border-[#0A3323] bg-white p-3 shadow-[4px_4px_0px_#105666] text-xs font-bold flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#D3968C] border border-[#0A3323]"></span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b-4 border-[#0A3323] pb-2">
            <h2 className="text-lg font-black tracking-wider uppercase bg-[#0A3323] text-[#F7F4D5] px-3 py-1">
              {t.projectsTitle}
            </h2>
            <span className="text-xs font-bold text-[#0A3323] animate-pulse">
              {t.projectsSubtitle}
            </span>
          </div>

          <div className="space-y-6">
            {projects.map((proj, idx) => (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                key={idx}
                onClick={() => setSelectedProject(proj)}
                className={`border-4 border-[#0A3323] ${proj.bgColor} ${proj.textColor} p-6 md:p-8 shadow-[8px_8px_0px_#0A3323] relative overflow-hidden cursor-pointer group`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 border-2 border-[#0A3323] ${proj.tagColor}`}
                  >
                    {proj.num}
                  </span>
                  <span className="text-xs font-mono opacity-80 group-hover:underline">
                    {proj.date}
                  </span>
                </div>

                <div className="space-y-3 max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-[#839958] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed opacity-90">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t-2 border-[#0A3323]/30">
                  {proj.stack.map((item, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold px-2.5 py-1 bg-[#F7F4D5] text-[#0A3323] border border-[#0A3323]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="border-4 border-[#0A3323] bg-[#105666] text-[#F7F4D5] p-8 md:p-12 shadow-[8px_8px_0px_#0A3323] text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-xs md:text-sm text-[#F7F4D5]/80 max-w-md mx-auto leading-relaxed">
            {t.contactDesc}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="mailto:indhhch@gmail.com"
              className="px-6 py-3 bg-[#D3968C] text-[#0A3323] font-bold text-xs uppercase tracking-wider border-2 border-[#F7F4D5] shadow-[4px_4px_0px_#F7F4D5] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform flex items-center gap-2"
            >
              <Mail size={16} /> {t.sendEmail}
            </a>
            <button
              onClick={copyEmail}
              className="px-6 py-3 bg-[#839958] text-[#0A3323] font-bold text-xs uppercase tracking-wider border-2 border-[#F7F4D5] shadow-[4px_4px_0px_#F7F4D5] hover:translate-x-0.5 hover:translate-y-0.5 transition-transform flex items-center gap-2"
            >
              {copied ? <CheckCircle2 size={16} /> : <Terminal size={16} />}
              {copied ? t.copiedText : t.copyContact}
            </button>
          </div>
        </section>
      </main>

      {/* MODAL / POPUP DETAIL PROYEK DENGAN FOTO */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#F7F4D5] border-4 border-[#0A3323] max-w-lg w-full p-6 md:p-8 shadow-[10px_10px_0px_#0A3323] space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-[#D3968C] text-[#0A3323] px-3 py-1 text-xs font-bold border-2 border-[#0A3323] shadow-[2px_2px_0px_#0A3323] hover:bg-red-400 transition"
              >
                {t.modalClose}
              </button>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold bg-[#839958] text-[#0A3323] px-2 py-0.5 border border-[#0A3323]">
                  {selectedProject.num}
                </span>
                <h3 className="text-2xl font-black text-[#0A3323]">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#0A3323]/70 font-mono">
                  {selectedProject.date}
                </p>
              </div>

              {/* TAMPILAN FOTO PROYEK DI DALAM MODAL */}
              <div className="border-2 border-[#0A3323] bg-white p-2 shadow-[4px_4px_0px_#0A3323] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover border border-[#0A3323]"
                />
              </div>

              <div className="space-y-3">
                <p className="text-sm text-[#0A3323] leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t-2 border-[#0A3323]/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#105666] flex items-center gap-1">
                  <Layers size={14} /> {t.modalKeyFeatures}
                </h4>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#0A3323]/90">
                  {selectedProject.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t-2 border-[#0A3323]/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#105666]">
                  {t.modalTechStack}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stack.map((st, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-bold bg-[#105666] text-[#F7F4D5] px-2.5 py-1 border border-[#0A3323]"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t-2 border-[#0A3323]/20">
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[#0A3323] text-[#F7F4D5] text-xs font-bold border-2 border-[#0A3323] shadow-[3px_3px_0px_#D3968C] flex items-center gap-1.5 hover:bg-[#105666] transition"
                >
                  {t.modalDemoBtn} <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-6 mt-20 pt-6 border-t-2 border-[#0A3323]/20 text-center text-xs text-[#0A3323]/60 font-bold">
        <p>
          © {new Date().getFullYear()} Indah Chania. {t.footerText}
        </p>
      </footer>
    </div>
  );
}
