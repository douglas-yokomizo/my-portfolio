import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Fator Bank",
    position: "Financial Analyst",
    time: "2021 - 2022",
    location: "São Paulo",
    description:
      " I used data analysis tools to collect and process information on revenues, costs, profitability and risks. I also created reports and dashboards to present results and recommendations to managers. With my work, I contributed to increasing operational efficiency, reducing costs and improving bank customer satisfaction",
    tech: ["Excel", "PowerBI", "Microsoft Office", "Tableau"],
  },
  {
    title: "Goldman Sachs",
    position: "Internal Audit Intern",
    time: "2019- 2020",
    location: "São Paulo",
    description:
      "I participated in a project that involved reviewing the company's internal controls, identifying risks and opportunities for improvement. The project was a success because it contributed to increasing the efficiency and security of the company’s processes, as well as generating savings of resources and time.",
    tech: ["Excel", "Microsoft Office",],
  },
  {
    title: "Amazon",
    position: "Accounting Intern",
    time: "2019 - 2019",
    location: "São Paulo",
    description:
      "Implementation of a new integrated financial management system. This system allowed for the optimization of accounting processes, cost reduction and increased efficiency and transparency of the company’s financial operations. I was responsible for assisting in the migration of data from the old system to the new one, performing quality and validation tests and preparing performance reports and indicators.",
    tech: [
      "Excel", "Microsoft Office", "Oracle ERP"
    ],
  },

  {
    title: "Multiplus",
    position: "Tax Intern",
    time: "2018 - 2018",
    location: "São Paulo",
    description:
      "Implementation of a control and monitoring system for tax obligations that reduced the risks of fines and penalties, as well as optimized the time and resources of the team. This system was developed in partnership with the IT department, and I was responsible for identifying tax needs and requirements and testing functionalities. The result was an increase in the efficiency and quality of tax work, as well as greater integration between the company’s areas",
    tech: [
      "Excel", "Microsoft Office", "SAP ERP"
    ],
  },
];
