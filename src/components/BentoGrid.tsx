import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function MyBentoGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className="w-full h-auto" src="/instruments/1.png" alt="" />
  </div>
);
const Skeleton1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className="w-full h-auto" src="/instruments/2.png" alt="" />
  </div>
);
const Skeleton2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className="w-full h-auto" src="/instruments/3.png" alt="" />
  </div>
);
const Skeleton3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className="w-full h-auto" src="/instruments/13.png" alt="" />
  </div>
);
const Skeleton4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className="w-full h-auto" src="/instruments/4.png" alt="" />
  </div>
);
const Skeleton5 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className="w-full h-auto" src="/instruments/5.png" alt="" />
  </div>
);
const Skeleton6 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img className="w-full h-auto" src="/instruments/7.png" alt="" />
  </div>
);
const items = [
  {
    title: "WALKER RUBBER",
    description: "One of the following licensed pharmacy from the nearest location will deliver WALKER RUBBER.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "URINE POT",
    description: "One of the following licensed pharmacy from the nearest location will deliver URINE POT.",
    header: <Skeleton1 />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "ARM REST",
    description: "One of the following licensed pharmacy from the nearest location will deliver ARM REST.",
    header: <Skeleton2 />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "WHEELCHAIR FOOD TRAY",
    description:
      "One of the following licensed pharmacy from the nearest location will deliver WHEELCHAIR FOOD TRAY.",
    header: <Skeleton3 />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "BACK WHEEL",
    description: "One of the following licensed pharmacy from the nearest location will deliver BACK WHEEL.",
    header: <Skeleton4 />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "FOOT REST",
    description: "One of the following licensed pharmacy from the nearest location will deliver FOOT REST.",
    header: <Skeleton5 />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "STICK STAND",
    description: "One of the following licensed pharmacy from the nearest location will deliver STICK STAND.",
    header: <Skeleton6 />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
