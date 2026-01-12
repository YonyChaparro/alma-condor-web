function VideosSection() {
  const videos = [1, 2, 3, 4]

  return (
    <section id="videos" className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Videos</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">Sesiones y en vivo</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {videos.map((i) => (
          <div key={i} className="rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="aspect-video w-full rounded-lg bg-slate-100" aria-hidden />
            <p className="mt-3 text-sm font-semibold">Video {i}</p>
            <p className="text-sm text-slate-600">Descripción breve del video.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideosSection
