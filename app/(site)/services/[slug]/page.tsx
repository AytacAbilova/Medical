'use client';
import { useParams } from "next/navigation";
import Link from "next/link";
import { servicesContent } from "@/utils";

interface Props {
  locale?: "az" | "en";
}

export default function ServiceDetail({ locale = "az" }: Props) {
  const params = useParams();
  const slug = params.slug as string;


  const service = servicesContent[locale].find((s:any) => s.slug === slug);

  if (!service) {
    return (
      <main className="max-w-3xl mx-auto py-24 text-center">
        <h1 className="text-3xl font-bold">
          {locale === "az" ? "Xidmət tapılmadı" : "Service not found"}
        </h1>
        <Link href="/" className="text-blue-600 underline mt-4 inline-block">
          Back
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-extrabold text-[#2A69AC] mb-10">
        {service.title}
      </h1>

      <div className="space-y-10">
        {service.sections.map((section:any, i:any) => (
          <div key={i}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {section.title}
            </h2>

            <ul className="space-y-2 text-gray-700">
              {section.items.map((item:any, idx:any) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-[#2A69AC]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}