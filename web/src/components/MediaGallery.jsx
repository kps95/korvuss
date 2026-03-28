function MediaAssetCard({ asset }) {
  return (
    <article className="card media-card">
      <div className="card-media">
        {asset.mediaType === "video" ? (
          <video
            className="media-video"
            controls
            playsInline
            preload="metadata"
            poster={asset.thumbnailUrl}
            src={asset.url}
          />
        ) : (
          <img src={asset.url} alt={asset.title} />
        )}
      </div>
      <div className="card-body">
        <div className="card-row card-row-start">
          <div>
            <p className="eyebrow">{asset.angle}</p>
            <h3>{asset.title}</h3>
          </div>
          <span className="pill ghost">{asset.isRaw ? "raw" : "edited"}</span>
        </div>
        <p className="muted">{asset.notes}</p>
        <div className="card-meta">
          <span>{asset.sourceLabel}</span>
          <span>{asset.photographerCredit}</span>
          <span>{asset.uploadedDate}</span>
        </div>
        {!!asset.annotations?.length && (
          <div className="annotation-list">
            {asset.annotations.map((annotation) => (
              <span key={annotation} className="pill ghost">
                {annotation}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function MediaGallery({ assets = [] }) {
  if (!assets.length) {
    return <p className="muted">No media uploaded yet.</p>;
  }

  return (
    <div className="grid two">
      {assets.map((asset) => (
        <MediaAssetCard key={asset.id} asset={asset} />
      ))}
    </div>
  );
}
