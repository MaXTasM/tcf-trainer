import Link from "next/link";

export default function HomePage() {
  return (
    <section className="py-10">
      <div className="space-y-6">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          Beta · TCF preparation
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Practice for TCF with focused, bite-sized sessions.
        </h1>

        <p className="max-w-xl text-sm sm:text-base text-slate-600">
          Short daily drills, exam-style questions and simple progress tracking.
          Built for learners who want to improve step by step without feeling overwhelmed.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
          href="/learn"
          className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
          Start Practice
          </Link>
          <Link
          href="/mock"
          className="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Try a mock test
          </Link>
        </div>
        <p className="text-xs text-slate-500">
          No sign-up yet. Your progress will stay on this device for now.
        </p>
      </div>
    </section>
  )
}