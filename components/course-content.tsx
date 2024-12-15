"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "./course-content/overview-tab"
import { CurriculumTab } from "./course-content/curriculum-tab"
import { RequirementsTab } from "./course-content/requirements-tab"
import { CertificationTab } from "./course-content/certification-tab"

export function CourseContent() {
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
            <OverviewTab />
          </TabsContent>

          <TabsContent value="curriculum">
            <CurriculumTab />
          </TabsContent>

          <TabsContent value="requirements">
            <RequirementsTab />
          </TabsContent>

          <TabsContent value="certification">
            <CertificationTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}