import Image from "next/image";
import { BsEye } from "react-icons/bs";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { ProjectCardProps } from "@/types";

export default function ProjectCard({
  title,
  desc,
  demo,
  github,
  figma,
  preview,
  type,
}: ProjectCardProps) {

  return (
    <>
      <div className="group relative rounded-lg overflow-hidden shadow-lg bg-gradient-to-tr from-[#0b0b0f] via-[#0b0810] to-[#0b0710] border border-neutral-800">
        <div className="group inset-0 relative bg-[linear-gradient(135deg,#0f0f13_0%,#0b0710_40%,#111015_100%)]">
          <Image
            src={preview}
            alt={title}
            width={500}
            height={500}
            className="w-full h-96 object-cover group-hover:scale-105 transition-all duration-300"
          />
          <div className="bg-black/80 h-full w-full inset-0 absolute flex items-end justify-start">
            <div className="p-4 pb-6">
              <h3 className="font-semibold text-start text-neutral-100">{title}</h3>
              <p className="text-neutral-300 text-start mt-2">{desc}</p>

              <div className="mt-4 flex gap-3">
                  <a
                    href={demo}
                    className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200"
                  >
                    <BsEye />
                  </a>
              
                <a
                  href={github}
                  className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200"
                >
                  <RiGitRepositoryCommitsFill />
                </a>
                <a
                  href={figma}
                  className="p-3 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200"
                >
                  <FiFigma />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
