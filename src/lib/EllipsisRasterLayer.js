import React, { useState, useEffect, useRef } from 'react';
import { TileLayer } from 'react-leaflet';
import { RasterLayerUtil, EllipsisApi } from 'ellipsis-js-util';


const EllipsisRasterLayer = (props) => {
  const [url, setUrl] = useState(RasterLayerUtil.getSlippyMapUrl(props));
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted) return;
    setUrl(RasterLayerUtil.getSlippyMapUrl(props));
  }, [props.token, props.blockId, props.captureId, props.visualizationId, props.visualization]);

  useEffect(() => {
    mounted.current = true;
  }, []);

  return (
    <TileLayer
      key={`${props.blockId}_${props.captureId}_${props.visualizationId}`}
      url={url}
      tileSize={256}
      noWrap={true}
      reuseTiles={true}
      maxNativeZoom={props.maxZoom}
      format={'image/png'}
    />
  );
}
export default EllipsisRasterLayer;
