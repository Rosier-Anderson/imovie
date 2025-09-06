import React from "react";

async function Movie({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  return <div>Movie: {id}</div>;
}

export default Movie;
