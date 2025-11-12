export type ImageItem  = { type: "image";  src: string; alt?: string };
export type VideoItem  = { type: "video";  src: string };
export type IframeItem = { type: "iframe"; src: string };
export type ModelItem  = {
  type: "model";
  src: string; // .glb/.gltf
  envPreset?: "city" | "sunset" | "studio" | "dawn" | "forest" | "apartment";
  autoRotate?: boolean;
  tailwindHeightClass?: string;
};
export type MediaItem = ImageItem | VideoItem | IframeItem | ModelItem;
