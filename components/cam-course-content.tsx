"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CAMOverviewTab } from "./cam-course-content/overview-tab"
import { CAMCurriculumTab } from "./cam-course-content/curriculum-tab"
import { CAMRequirementsTab } from "./cam-course-content/requirements-tab"
import { CAMCertificationTab } from "./cam-course-content/certification-tab"

export function CAMCourseContent() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full md:w-auto md:inline-grid md:grid-cols-4 gap-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="certification">Certification</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <CAMOverviewTab />
          </TabsContent>

          <TabsContent value="curriculum">
            <CAMCurriculumTab />
          </TabsContent>

          <TabsContent value="requirements">
            <CAMRequirementsTab />
          </TabsContent>

          <TabsContent value="certification">
            <CAMCertificationTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}