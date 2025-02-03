import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const modules = [
  {
    title: "Foundation of Product Management",
    lessons: [
      "What is Product Management?",
      "The Product Development Lifecycle",
      "Understanding Your Users",
      "Market Research Fundamentals",
    ],
  },
  {
    title: "Product Strategy & Vision",
    lessons: [
      "Developing Product Strategy",
      "Creating Product Vision",
      "Prioritization Frameworks",
      "Product Roadmapping",
    ],
  },
  {
    title: "Execution & Delivery",
    lessons: ["Agile Product Management", "Working with Development Teams", "Product Analytics", "Launch Strategies"],
  },
  {
    title: "Advanced Topics",
    lessons: ["AI in Product Management", "Growth Product Management", "Product Leadership", "Building Your PM Career"],
  },
]

export function Syllabus() {
  return (
    <section id="syllabus" className="py-24">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Course Syllabus</h2>
            <p className="text-xl text-gray-400">
              A comprehensive curriculum designed to take you from basics to advanced PM concepts
            </p>
          </div>

          <div className="grid gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="text-gray-400">
                        • {lesson}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

