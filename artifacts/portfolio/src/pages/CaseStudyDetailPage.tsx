import { useParams, Link } from "wouter";
import { getCaseStudyBySlug } from "@/data/caseStudies";
import { CaseStudyDetail } from "@/components/case-study/CaseStudyDetail";

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!study) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-2xl font-bold text-foreground mb-4">Case study not found</h1>
        <Link href="/case-studies" className="text-primary hover:text-primary/80 transition-colors">
          &larr; Back to Case Studies
        </Link>
      </div>
    );
  }

  return <CaseStudyDetail study={study} />;
}
