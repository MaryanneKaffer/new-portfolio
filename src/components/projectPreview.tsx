import GlassCard from "./glassCard"

type Project = {
  name: string
  link: string
  image: string
}

type ProjectPreviewProps = {
  data: Project
}

export default function ProjectPreview({ data }: ProjectPreviewProps) {
  return (
    <GlassCard classname="absolute -left-84 -top-20 pointer-events-none w-[300px] h-[200px] flex flex-col gap-1">
      <img src={data.image} className="object-cover" />
      <p className="text-gray-500 text-center">Click to go to the github page</p>
    </GlassCard>
  )
}