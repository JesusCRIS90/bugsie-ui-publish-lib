import { POLICY_POSITION as ANCHOR_POINT } from "../enums"

// Create a Map with the Enum as keys
const AnchorPointMap: Map<ANCHOR_POINT, string> = new Map();

// Set values in the Map
AnchorPointMap.set(ANCHOR_POINT.TOP_LEFT, "top left");
AnchorPointMap.set(ANCHOR_POINT.TOP_CENTER, "top center");
AnchorPointMap.set(ANCHOR_POINT.TOP_RIGHT, "top right");

AnchorPointMap.set(ANCHOR_POINT.CENTER_LEFT, "center left");
AnchorPointMap.set(ANCHOR_POINT.CENTER_CENTER, "center");
AnchorPointMap.set(ANCHOR_POINT.CENTER_RIGHT, "center right");

AnchorPointMap.set(ANCHOR_POINT.BOTTOM_LEFT, "bottom left");
AnchorPointMap.set(ANCHOR_POINT.BOTTOM_CENTER, "bottom center");
AnchorPointMap.set(ANCHOR_POINT.BOTTOM_RIGHT, "bottom right");

export { AnchorPointMap }

