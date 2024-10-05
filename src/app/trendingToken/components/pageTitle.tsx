"use client";

interface pageName {
  pageName: string;
}

export const PageName = ({ pageName }: pageName) => {
  return (
    <div className="w-full pt-[27px] pb-[20px]">
      <p
        className="text-[#000000] text-[20px]"
        style={{ fontFamily: "Space Grotesk" }}
      >
        {pageName}
      </p>
    </div>
  );
};
