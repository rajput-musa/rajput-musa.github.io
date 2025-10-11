export default function WorkExperienceSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Work Experience</h2>

      <div className="grid grid-cols-1 gap-8">
        {/* Huawei */}
        <div
          id="huawei"
          className="p-6 rounded-xl border border-transparent hover:border hover:border-[color-mix(in_oklch,var(--color-primary)_30%,transparent)] hover:shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-1/4 flex flex-col items-start">
              <img
                src="/assets/Huawei_Standard_logo.svg.png"
                alt="Huawei Logo"
                className="w-24 h-auto mb-2"
              />
              <p className="text-sm opacity-75">Jul 2025 – Oct 2025</p>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold">Huawei</h3>
              <p className="text-base font-medium text-[color-mix(in_oklch,var(--color-primary)_90%,currentColor)]">
                AI & Automation Intern — Delivery Management Department (DMD)
              </p>

              <ul className="mt-3 text-sm/relaxed list-disc pl-5 space-y-1">
                <li>Designed and deployed an AI Planning Assistant for daily IM team scheduling using skill matching, clustering, and weather intelligence. Achieved 70%+ adoption across multiple regions and secured 3rd place in Huawei's AI Application Contest.</li>
                <li>Developed and automated QC-TE & RP verification processes, reducing manual workflow time from 1 hour to under 5 minutes with improved consistency and error-free reporting.</li>
                <li>Migrated legacy automation scripts from UI Path to headless Python, optimizing execution and stability.</li>
                <li>Contributed to supplier performance analytics, dashboard development, and KPI automation to support field operations.</li>
                <li>Completed multiple technical training programs (Cloud, RF, PMP, OptiX) and passed HCIA-AI certification with full marks.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* NeutronTech */}
        <div
          id="neutrontech"
          className="p-6 rounded-xl border border-transparent hover:border hover:border-[color-mix(in_oklch,var(--color-primary)_30%,transparent)] hover:shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-1/4">
              <p className="text-sm mt-2 opacity-75">June 2023 – Aug 2023</p>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold">NeutronTech</h3>
              <p className="text-base font-medium text-[color-mix(in_oklch,var(--color-primary)_90%,currentColor)]">
                Research Intern
              </p>

              <ul className="mt-3 text-sm/relaxed list-disc pl-5 space-y-1">
                <li>Conducted research and development on Apache Sparklx for large-scale data processing.</li>
                <li>Developed prototypes and simulations for data applications.</li>
                <li>Designed and developed simulation environments to model real-time big data ingestion and processing pipelines across clustered nodes.</li>
                <li>Performed throughput analysis, evaluated fault-tolerance mechanisms, and documented optimization strategies.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Levrify */}
        <div
          id="levrify"
          className="p-6 rounded-xl border border-transparent hover:border hover:border-[color-mix(in_oklch,var(--color-primary)_30%,transparent)] hover:shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="md:w-1/4">
              <p className="text-sm mt-2 opacity-75">Sep. 2024 – Oct. 2024</p>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold">Levrify</h3>
              <p className="text-base font-medium text-[color-mix(in_oklch,var(--color-primary)_90%,currentColor)]">
                Data Science Intern – Remote
              </p>

              <ul className="mt-3 text-sm/relaxed list-disc pl-5 space-y-1">
                <li>Worked extensively with Excel, SQL databases, and Power BI to collect, clean, and organize large datasets for business analysis projects.</li>
                <li>Designed and developed interactive dashboards and visual reports to communicate key performance metrics and business insights to stakeholders.</li>
                <li>Completed a capstone project and qualified for AWS Cloud Practitioner training.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
