'use client'
import { useState } from "react";
import Image from "next/image";

export default function Upload() {
  const [file, setFile] = useState();
  const [comment, setComment] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);
      data.set("comment", comment); // Agrega el comentario al FormData

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      console.log(res);

      if (res.ok) {
        console.log("File uploaded successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value); // Actualiza el estado del comentario
  };

  return (
<div className="flex m-5 ">
      <div className="bg-zinc-950 p-5 rounded-lg border border-white">
        <h1 className="text-4xl text-center my-4">Upload a file</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
            onChange={handleFileChange}
          />
          <input
            type="text"
            className="bg-zinc-900 text-zinc-100 p-2 rounded block mb-2"
            placeholder="Add a comment"
            onChange={handleCommentChange}
          />
          <button
            className="bg-green-900 text-zinc-100 p-2 rounded block w-full disabled:opacity-50"
            disabled={!file}
          >
            Upload
          </button>
        </form>
        {file && (
          <Image
            src={URL.createObjectURL(file)}
            alt="Uploaded file"
            className="w-64 h-64 object-contain mx-auto"
            width={256}
            height={256}
          />
        )}
      </div>
    </div>
  );
}


