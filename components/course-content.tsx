"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "./course-content/overview-tab"
import { CurriculumTab } from "./course-content/curriculum-tab"
import { RequirementsTab } from "./course-content/requirements-tab"
import { CertificationTab } from "./course-content/certification-tab"

export function CourseContent() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="space-y-8">
          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <TabsList className="inline-flex w-auto min-w-full sm:min-w-0 sm:w-auto gap-2 sm:gap-4">
              <TabsTrigger value="overview" className="flex-1 sm:flex-none whitespace-nowrap">Overview</TabsTrigger>
              <TabsTrigger value="curriculum" className="flex-1 sm:flex-none whitespace-nowrap">Curriculum</TabsTrigger>
              <TabsTrigger value="requirements" className="flex-1 sm:flex-none whitespace-nowrap">Requirements</TabsTrigger>
              <TabsTrigger value="certification" className="flex-1 sm:flex-none whitespace-nowrap">Certification</TabsTrigger>
            </TabsList>
          </div>

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