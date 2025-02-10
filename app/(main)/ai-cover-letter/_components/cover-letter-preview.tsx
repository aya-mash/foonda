"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { CoverLetter } from "@/types/types";

const CoverLetterPreview = ({ content }: Pick<CoverLetter, "content">) => {
  return (
    <div className="py-4">
      <MDEditor value={content ?? ""} preview="preview" height={700} />
    </div>
  );
};

export default CoverLetterPreview;
