import GlassCard from "./glassCard"

type Project = {
  name: string
  link: string
}

type ProjectPreviewProps = {
  data: Project
}

export default function ProjectPreview({ data }: ProjectPreviewProps) {
  return (
    <GlassCard classname="absolute -left-67 -top-3 pointer-events-none w-[300px] h-[200px]">
      {data.name}
    </GlassCard>
  )
}