import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ratio } from "lucide-react";
import Image from "next/image";

export default function TabsComponent() {
  return (
    <Tabs defaultValue="1" className="w-full">
      <TabsList className="w-full flex-row border-b-[#DBDBDB] border-solid border p-2 mt-1 border-t-0">
        <TabsTrigger value="1" className="w-full">
          <svg
            aria-label="Posts"
            className="x1lliihq x1n2onr6 x173jzuc"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Posts</title>
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
        </TabsTrigger>
        <TabsTrigger value="2" className="w-full">
          <svg
            aria-label="Feed"
            className="x1lliihq x1n2onr6 x1roi4f4"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Feed</title>
            <rect
              fill="none"
              height="10"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="12"
              x="6"
              y="7"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
              x1="6.002"
              x2="18"
              y1="3.004"
              y2="3.004"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
              x1="6.002"
              x2="18"
              y1="21"
              y2="21"
            ></line>
          </svg>
        </TabsTrigger>
        <TabsTrigger value="3" className="w-full">
          <svg
            aria-label="Saved"
            className="x1lliihq x1n2onr6 x1roi4f4"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Saved</title>
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></polygon>
          </svg>
        </TabsTrigger>
        <TabsTrigger value="4" className="w-full">
          <svg
            aria-label="Tagged"
            className="x1lliihq x1n2onr6 x1roi4f4"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Tagged</title>
            <path
              d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></circle>
          </svg>
        </TabsTrigger>
      </TabsList>
      <TabsContent className="mt-0" value="1">
        <div className="grid-image justify-between">
          <div className="item-image">
            <img
              src="/images/image.webp"
              alt=""
              className="aspect-square md:w-[216px] md:h-[216px]"
            />
          </div>
          <div className="item-image">
            <img
              src="/images/image.webp"
              alt=""
              className=" aspect-square md:w-[216px] md:h-[216px]"
            />
          </div>
          <div className="item-image">
            <img
              src="/images/image.webp"
              alt=""
              className=" aspect-square md:w-[216px] md:h-[216px]"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="2">Change your password here.</TabsContent>
      <TabsContent value="3">Change your password here.</TabsContent>
      <TabsContent value="4">Change your password here.</TabsContent>
    </Tabs>
  );
}
