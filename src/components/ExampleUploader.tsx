"use client";

import { UploadDropzone } from "@/utils/uploadthing";

export default function ExampleUploader() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </section>
  );
}
