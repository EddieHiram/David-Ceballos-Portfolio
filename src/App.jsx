import React from "react";
import { Mail, MapPin, Phone, Download, ExternalLink, Wrench, ShieldCheck, GraduationCap, Cpu, Building2, Award } from "lucide-react";

const experience = [
  {
    role: "Maintenance Supervisor",
    company: "GG Sistemas del Norte S.A. de C.V.",
    dates: "Nov 2025 – Present",
    bullets: [
      "Coordinate daily preventive maintenance activities and work orders for critical and non-critical equipment at the Mexico Technical Center.",
      "Achieve preventive maintenance completion rates between 80% and 100%.",
      "Follow up on work orders, service requests, and quotations for refrigeration and HVAC parts.",
      "Lead a team of 30 employees, including 26 technical staff members and 4 administrative staff members.",
      "Supervise maintenance priorities, staff performance, and service response to ensure operational continuity."
    ]
  },
  {
    role: "HVAC Coordinator & Maintenance Co-Leader",
    company: "GG Sistemas del Norte S.A. de C.V.",
    dates: "Apr 2023 – Nov 2025",
    bullets: [
      "Monitored and controlled office temperature at the Mexico Technical Center using Tracer software for Fan Coil units.",
      "Supervised preventive maintenance activities for Fan Coil units across the facility.",
      "Monitored the operation of cooling towers and chillers with capacities of 800 and 900 tons.",
      "Coordinated technical staff to respond to customer-requested work orders.",
      "Provided immediate support for failures in critical and non-critical equipment."
    ]
  },
  {
    role: "Maintenance Routines and HSE Coordinator",
    company: "GG Sistemas del Norte S.A. de C.V.",
    dates: "Apr 2022 – Apr 2023",
    bullets: [
      "Monitored the Mexico Technical Center building in compliance with applicable STPS standards.",
      "Prepared reports related to industrial safety and HSE events.",
      "Supported preventive maintenance activities for critical and non-critical equipment.",
      "Supervised work quality, tools, and PPE usage among technical personnel.",
      "Followed up with suppliers supporting plant maintenance operations."
    ]
  },
  {
    role: "Maintenance Intern",
    company: "Autokabel de México S.A. de C.V.",
    dates: "Feb 2021 – Aug 2021",
    bullets: [
      "Supported the documentation of Reliability-Centered Maintenance procedures for a production line, improving maintenance tracking and standardization.",
      "Controlled the monthly inventory of approximately 500 automotive battery terminals in the tool crib area.",
      "Maintained 100% inventory accuracy, ensuring zero discrepancies in assigned stock records."
    ]
  }
];

const skillGroups = [
  {
    title: "Maintenance & Facilities",
    icon: Wrench,
    skills: ["Preventive Maintenance", "Corrective Maintenance", "Work Orders", "Critical Equipment", "Facilities Operations", "Supplier Follow-up"]
  },
  {
    title: "HVAC Systems",
    icon: Building2,
    skills: ["Fan Coil Units", "Chillers", "Cooling Towers", "Tracer Software", "Refrigeration Parts", "Service Response"]
  },
  {
    title: "Safety & Compliance",
    icon: ShieldCheck,
    skills: ["HSE Compliance", "STPS Standards", "PPE Supervision", "Industrial Safety", "Safety Reports", "Work Quality"]
  },
  {
    title: "Engineering & Quality",
    icon: Cpu,
    skills: ["Mechatronics", "Computer Vision", "Control Systems", "Thermofluids", "Quality Management", "Supply Chain Management"]
  }
];

const education = [
  {
    degree: "M.B.A. with a Concentration in Quality and Productivity",
    school: "Universidad Tecmilenio",
    dates: "2023 – 2025",
    gpa: "GPA: 9.25/10"
  },
  {
    degree: "Bachelor’s Degree in Mechatronics Engineering",
    school: "Universidad Autónoma de Ciudad Juárez (UACJ)",
    dates: "2017 – 2022",
    gpa: "GPA: 9.28/10"
  },
  {
    degree: "High School Diploma",
    school: "Colegio de Bachilleres del Estado de Chihuahua Plantel 5",
    dates: "2014 – 2017",
    gpa: "GPA: 9.90/10"
  }
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

export default function DavidPortfolio() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-bold uppercase tracking-[0.2em] text-slate-950">DACF</a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a className="hover:text-blue-700" href="#experience">Experience</a>
            <a className="hover:text-blue-700" href="#teaching">Teaching</a>
            <a className="hover:text-blue-700" href="#skills">Skills</a>
            <a className="hover:text-blue-700" href="#education">Education</a>
            <a className="rounded-full bg-slate-950 px-4 py-2 text-white hover:bg-blue-700" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
              Maintenance • HVAC • HSE • Mechatronics
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              David Arath Ceballos Faour
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-medium text-blue-100 md:text-2xl">
              Maintenance Supervisor | HVAC | HSE | Mechatronics Engineer
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Mechatronics Engineer with experience in industrial maintenance, HVAC systems, preventive and corrective maintenance, HSE compliance, work order coordination, and technical team supervision.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#experience" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 hover:bg-blue-500">
                View Experience <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <a href="/resume.pdf" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-black text-white">DA</div>
              <h3 className="text-2xl font-bold">Professional Focus</h3>
              <div className="mt-6 grid gap-4">
                {[
                  ["Team Leadership", "30 employees supervised"],
                  ["Maintenance Completion", "80%–100% preventive maintenance"],
                  ["HVAC Operations", "Fan Coil units, chillers, cooling towers"],
                  ["Teaching", "30 students per class"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500">{label}</p>
                    <p className="mt-1 font-bold text-slate-950">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader
          eyebrow="About"
          title="Industrial maintenance and engineering leadership"
          description="David combines technical experience in maintenance and HVAC systems with operational coordination, safety compliance, quality management, and university-level teaching. His background supports roles in facilities, maintenance leadership, HVAC operations, HSE, and continuous improvement."
        />
      </section>

      <section id="experience" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader eyebrow="Experience" title="Professional Experience" />
          <div className="grid gap-6">
            {experience.map((job) => (
              <article key={job.role} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-8">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950">{job.role}</h3>
                    <p className="mt-1 font-semibold text-blue-700">{job.company}</p>
                  </div>
                  <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{job.dates}</p>
                </div>
                <ul className="mt-6 grid gap-3 text-slate-700">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="teaching" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Teaching" title="University Teaching Experience" />
        <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold">Adjunct Professor</h3>
              <p className="mt-1 text-blue-100">Universidad Autónoma de Ciudad Juárez (UACJ)</p>
            </div>
            <p className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">30 students per class</p>
          </div>
          <ul className="mt-8 grid gap-4 text-slate-300 md:grid-cols-2">
            <li>Teach undergraduate courses in Industrial Safety, Computer Vision, and Thermofluids.</li>
            <li>Develop lectures, applied projects, and research-based activities aligned with engineering practice.</li>
            <li>Guide students in applied project development and thesis research methodology.</li>
            <li>Evaluate student performance through exams, assignments, technical projects, and research deliverables.</li>
          </ul>
        </div>
      </section>

      <section id="skills" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader eyebrow="Capabilities" title="Skills & Technical Areas" />
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Education" title="Academic Background" />
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <div key={item.degree} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-950">{item.degree}</h3>
              <p className="mt-3 font-semibold text-blue-700">{item.school}</p>
              <p className="mt-2 text-sm text-slate-600">{item.dates}</p>
              <p className="mt-4 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">{item.gpa}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <Award className="h-6 w-6 text-blue-700" />
            <h3 className="text-xl font-bold">Certification</h3>
          </div>
          <p className="text-slate-700"><strong>Green Belt Certification</strong> — SigmaPro Inc. (2025)</p>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader eyebrow="Contact" title="Let’s connect" description="Available for professional opportunities in maintenance supervision, facilities operations, HVAC, HSE, engineering, and technical education." />
          <div className="grid gap-4 md:grid-cols-3">
            <a href="mailto:cefd22@gmail.com" className="rounded-2xl border border-white/10 bg-white/10 p-5 hover:bg-white/15">
              <Mail className="mb-4 h-6 w-6 text-blue-300" />
              <p className="font-semibold">Email</p>
              <p className="mt-1 text-slate-300">cefd22@gmail.com</p>
            </a>
            <a href="tel:+526564220783" className="rounded-2xl border border-white/10 bg-white/10 p-5 hover:bg-white/15">
              <Phone className="mb-4 h-6 w-6 text-blue-300" />
              <p className="font-semibold">Phone</p>
              <p className="mt-1 text-slate-300">(656) 422-0783</p>
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <MapPin className="mb-4 h-6 w-6 text-blue-300" />
              <p className="font-semibold">Location</p>
              <p className="mt-1 text-slate-300">Ciudad Juárez, Chihuahua, Mexico</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
