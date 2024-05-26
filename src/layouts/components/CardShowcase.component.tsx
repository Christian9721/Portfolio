import React, { useMemo } from "react";
import type { IProjectCard } from "../../interfaces/project.interface";
import type { TIconKey } from "../../interfaces/IconList";
import type { projectCompanyCards } from "../../constants/projects";
import { IconList } from "../../constants/Icons";
import { toTimeAgo } from "../../lib/utils/timeAgo";
import { TRANSITIONS } from "../../constants/transitionIds";

type TIcon = Array<{ key: TIconKey; Icon: JSX.Element }>;
interface IProps extends IProjectCard {
  hideDate?: boolean;
  isTimeline?: boolean;
  href?: string;
}

const CardShowcase = (props: IProps) => {
  const {
    title,
    description,
    srcImg,
    tools,
    keyId,
    endDate,
    href,
    hideDate = false,
    isTimeline = false,
  } = props;
  const Icons = useMemo(() => {
    const data: TIcon = [];
    IconList.forEach((i) => {
      if (tools.includes(i.key))
        data.push({
          Icon: i.icon,
          key: i.key,
        });
    });
    return data;
  }, [tools]);
  const ago = endDate ? toTimeAgo(endDate) : "";
  let hrefUrl = `/${href}/projects/${keyId}`;
  if (hrefUrl.includes("//")) {
    const _newUrl = hrefUrl.replace(/\/\//g, '/');
    hrefUrl = _newUrl;
  }
  return (
    <a 
      href={hrefUrl}
    >
      <div
        className={`${
          isTimeline ? "md:mr-0 mr-16" : "max-w-full md:max-w-sm"
        } project-card bg-white border border-gray-200 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:bg-darkmode-theme-light dark:border-gray-700 relative h-full`}
      >
        {!hideDate && (
          <div className="z-10 absolute top-0 left-0 m-2 p-1 rounded-md bg-neutral-900/40 backdrop-blur-sm">
            <p className="pb-0 text-neutral-100">{ago}</p>
          </div>
        )}
        <div className="overflow-hidden rounded-t-lg">
          <img
            id={`${TRANSITIONS.PROJECT_IMG}-${keyId}`}
            className=".grid__cell-img-inner w-full max-h-[200px] h-[200px] object-cover rounded-t-lg img-card hover:scale-105 duration-300"
            src={srcImg.src}
            alt={keyId || ""}
            loading="lazy"
          />
        </div>
        <section className="rounded-bl-[10px] rounded-br-[10px] overflow-hidden relative p-5 border-t-2 border-slate-100 dark:border-slate-600">
          <div className="text-section z-2 relative">
            <div className="flex items-center justify-between">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </div>
            <div className="flex w-fit items-center gap-2 p-1 rounded-md bg-theme-light dark:bg-neutral-800">
              {Icons.map((i) => (
                <div key={`icon-${i.key}`} className="w-5">
                  {i.Icon}
                </div>
              ))}
            </div>
            <p className="hyphens-auto text-justify mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </section>
      </div>
    </a>
  );
};

export default CardShowcase;
