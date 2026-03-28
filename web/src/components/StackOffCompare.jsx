import { useMemo, useState } from "react";
import {
  dogs,
  getDogById,
  getDogMedia,
  stackOffComparisons,
} from "../data/sampleData";

const angleOptions = ["side", "front", "rear", "head", "movement", "temperament"];

function getPreferredAsset(dogId, angle) {
  const assets = getDogMedia(dogId);
  return assets.find((asset) => asset.angle === angle) ?? null;
}

function ComparePanel({ dog, asset }) {
  if (!dog) {
    return null;
  }

  return (
    <article className="panel compare-panel">
      <div className="card-row card-row-start">
        <div>
          <p className="eyebrow">{dog.profileType}</p>
          <h3>{dog.name}</h3>
        </div>
        <span className="pill ghost">{dog.status}</span>
      </div>
      {asset ? (
        <>
          <div className="compare-media">
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
          <p className="muted">{asset.notes}</p>
          <div className="card-meta">
            <span>{asset.angle}</span>
            <span>{asset.isRaw ? "raw media" : "edited media"}</span>
            <span>{asset.uploadedDate}</span>
          </div>
        </>
      ) : (
        <p className="muted">No media uploaded for this angle yet.</p>
      )}
    </article>
  );
}

export default function StackOffCompare({
  initialLeftDogId,
  initialRightDogId,
  initialAngle,
}) {
  const fallbackPreset = stackOffComparisons[0];
  const [leftDogId, setLeftDogId] = useState(
    initialLeftDogId || fallbackPreset.leftDogId
  );
  const [rightDogId, setRightDogId] = useState(
    initialRightDogId || fallbackPreset.rightDogId
  );
  const [angle, setAngle] = useState(initialAngle || fallbackPreset.defaultAngle);

  const leftDog = getDogById(leftDogId);
  const rightDog = getDogById(rightDogId);

  const leftAsset = useMemo(
    () => getPreferredAsset(leftDogId, angle),
    [leftDogId, angle]
  );
  const rightAsset = useMemo(
    () => getPreferredAsset(rightDogId, angle),
    [rightDogId, angle]
  );

  return (
    <div className="stackoff-shell">
      <div className="panel stackoff-toolbar">
        <div className="stackoff-controls">
          <label className="form-control">
            <span>Left profile</span>
            <select
              value={leftDogId}
              onChange={(event) => setLeftDogId(event.target.value)}
            >
              {dogs.map((dog) => (
                <option key={dog.id} value={dog.id}>
                  {dog.name}
                </option>
              ))}
            </select>
          </label>
          <label className="form-control">
            <span>Right profile</span>
            <select
              value={rightDogId}
              onChange={(event) => setRightDogId(event.target.value)}
            >
              {dogs.map((dog) => (
                <option key={dog.id} value={dog.id}>
                  {dog.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="tab-row" role="tablist" aria-label="Stack off angle">
          {angleOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`tab-chip ${angle === option ? "tab-chip-active" : ""}`}
              onClick={() => setAngle(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="compare-grid">
        <ComparePanel dog={leftDog} asset={leftAsset} />
        <ComparePanel dog={rightDog} asset={rightAsset} />
      </div>
    </div>
  );
}
