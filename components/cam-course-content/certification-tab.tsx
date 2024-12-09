"use client"

import { Card } from "@/components/ui/card"
import { Award, FileCheck, Shield } from "lucide-react"

export function CAMCertificationTab() {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold text-silver-200 mb-6">Certification</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 p-6 rounded-lg border border-silver-300/20">
          <Award className="h-8 w-8 text-silver-400 mb-4" />
          <h4 className="text-lg font-semibold text-silver-200 mb-2">CPD Accredited</h4>
          <p className="text-gray-300">48 CPD points awarded upon successful completion</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg border border-silver-300/20">
          <FileCheck className="h-8 w-8 text-silver-400 mb-4" />
          <h4 className="text-lg font-semibold text-silver-200 mb-2">Assessment</h4>
          <p className="text-gray-300">Written examination and practical assessment</p>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg border border-silver-300/20">
          <Shield className="h-8 w-8 text-silver-400 mb-4" />
          <h4 className="text-lg font-semibold text-silver-200 mb-2">Recognition</h4>
          <p className="text-gray-300">Recognized by major aesthetic bodies and insurance providers</p>
        </div>
      </div>
    </Card>
  )
}