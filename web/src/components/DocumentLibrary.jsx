export default function DocumentLibrary({ documents = [] }) {
  if (!documents.length) {
    return <p className="muted">No public documents uploaded yet.</p>;
  }

  return (
    <div className="grid two">
      {documents.map((document) => (
        <article key={document.id} className="card document-card">
          <div className="card-media">
            <img src={document.previewThumbnail} alt={document.title} />
          </div>
          <div className="card-body">
            <div className="card-row card-row-start">
              <div>
                <p className="eyebrow">{document.documentType}</p>
                <h3>{document.title}</h3>
              </div>
              <span className="pill ghost">{document.visibility}</span>
            </div>
            <p className="muted">{document.summary}</p>
            <div className="card-meta">
              <span>Issued {document.issueDate}</span>
              <span>Uploaded {document.uploadedDate}</span>
            </div>
            <div className="badge-list badge-list-compact">
              {document.flags.map((flag) => (
                <span key={flag} className="pill showcase-pill">
                  {flag}
                </span>
              ))}
            </div>
            <div className="card-row">
              <span className="muted">Document uploaded</span>
              <a href={document.fileUrl} className="btn sm ghost">
                View file
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
