import React from 'react';

export default function Project({ title, image, url, repo }) {
  return (
    <div className="border p-4">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <a href={url} className="text-blue-500">Deployed App</a>
      <br />
      <a href={repo} className="text-blue-500">GitHub Repo</a>
    </div>
  );
}