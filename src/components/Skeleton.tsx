import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={410}
    viewBox="0 0 240 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="0" y="0" rx="0" ry="0" width="210" height="140" />
    <rect x="12" y="166" rx="8" ry="8" width="160" height="32" />
    <rect x="0" y="221" rx="10" ry="10" width="180" height="60" />
    <rect x="0" y="329" rx="8" ry="8" width="50" height="32" />
    <rect x="131" y="339" rx="0" ry="0" width="0" height="1" />
    <rect x="108" y="320" rx="20" ry="20" width="100" height="40" />
    <rect x="4" y="382" rx="10" ry="10" width="64" height="32" />
    <rect x="145" y="378" rx="10" ry="10" width="64" height="32" />
  </ContentLoader>
)

export default Skeleton

