import React from "react";
import { useMemo } from "react";
import { getRandomID } from '../../lib/utils/randomID';

const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => { 
  const [id0, id1, id2, id3, id4, id5, id6, id7] = useMemo(() => Array.from(new Array(8)).map(i => getRandomID()), []);

  return (

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      clipRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 296297 333333"
      {...props}
    >
      <defs>
        <linearGradient
          id={id4}
          x1={54128.7}
          x2={240318}
          y1={79355.5}
          y2={79355.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e8e7e5" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id={id5}
          x1={62019.3}
          x2={233515}
          y1={202868}
          y2={202868}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e8e7e5" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id={id6}
          x1={104963}
          x2={104963}
          y1={99616.9}
          y2={171021}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d1d3d4" />
          <stop offset={0.388} stopColor="#d1d3d4" />
          <stop offset={1} stopColor="#d1d3d4" />
        </linearGradient>
        <linearGradient
          xlinkHref={`#${id6}`}
          id={id7}
          x1={194179}
          x2={194179}
          y1={61185.8}
          y2={135407}
          gradientUnits="userSpaceOnUse"
        />
        <mask id={id0}>
          <linearGradient
            id={id1}
            x1={104963}
            x2={104963}
            y1={99616.9}
            y2={171021}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" stopOpacity={0} />
            <stop offset={0.388} stopColor="#fff" />
            <stop offset={1} stopColor="#fff" stopOpacity={0.831} />
          </linearGradient>
          <path fill={`url(#${id1})`} d="M61737 99467h86453v71704H61737z" />
        </mask>
        <mask id={id2}>
          <linearGradient
            id={id3}
            x1={194179}
            x2={194179}
            y1={61185.8}
            y2={135407}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fff" stopOpacity={0} />
            <stop offset={0.388} stopColor="#fff" />
            <stop offset={1} stopColor="#fff" stopOpacity={0.831} />
          </linearGradient>
          <path fill={`url(#${id3})`} d="M147890 61036h92578v74521h-92578z" />
        </mask>
        <style>{".fil6{fill:#000;fill-opacity:.05098}"}</style>
      </defs>
      <g id="Layer_x0020_1">
        <g id="_513085304">
          <path
            fill="#2062af"
            d="m268517 300922-120369 32411-120371-32411L0 0h296297z"
          />
          <path
            fill="#3c9cd7"
            d="M148146 24374v283109l273 74 97409-26229 22485-256954z"
          />
          <path
            fill="#fff"
            d="m148040 99617-86153 35880 2857 35524 83296-35614 88604-37883 3674-36339-92278 38432z"
          />
          <path
            fill={`url(#${id6})`}
            d="m61887 135497 2857 35524 83295-35614V99617z"
            mask={`url(#${id0})`}
          />
          <path
            fill={`url(#${id7})`}
            d="m240318 61186-92278 38431v35790l88604-37883z"
            mask={`url(#${id2})`}
          />
          <path
            fill={`url(#${id5})`}
            d="m62019 135497 2858 35524 127806 407-2859 47365-42055 11840-40428-10208-2450-29399H67327l4900 56756 75950 22457 75538-22050 9800-112692z"
          />
          <path
            d="M148040 135497H61888l2857 35524 83295 266v-35790zm0 95022-408 114-40422-10208-2450-29399H67197l4899 56756 75944 22457v-39720z"
            className="fil6"
          />
          <path
            fill={`url(#${id4})`}
            d="M54129 61186h186189l-3674 36339H58620l-4491-36339z"
          />
          <path d="M148040 61186H54129l4491 36339h89420z" className="fil6" />
        </g>
      </g>
    </svg>
  )
};
export default SvgComponent;