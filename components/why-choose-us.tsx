import { Award, Users, HeartHandshake } from 'lucide-react'

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Expert-Led Training",
      description: "Our courses are taught by experienced professionals, ensuring you learn the latest and safest techniques in aesthetic medicine."
    },
    {
      icon: Users,
      title: "Hands-On Experience",
      description: "Gain practical skills with real clients in a clinical setting, helping you build confidence and proficiency."
    },
    {
      icon: HeartHandshake,
      title: "Comprehensive Support",
      description: "We offer ongoing guidance and resources, including free materials, to help you succeed long after completing your training."
    }
  ]

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-silver-200">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-900/50 border border-silver-300/20 hover:border-silver-300/40 transition-colors">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-silver-300" />
              <h3 className="text-xl font-semibold mb-3 text-silver-200">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}