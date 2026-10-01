import { MAX_IMAGE_BASE64_CHARS } from "./limits";
import { ALLOWED_IMAGE_TYPES, type Attachment } from "./types";

/**
 * Portfolio copy: only the client-side attachment check from askpbot's
 * lib/guardrails.ts. The server-side pre-screen and output leak check live
 * with the API route, which this demo does not ship.
 */

export type InputVerdict =
  | { ok: true }
  | { ok: false; code: string; message: string };

export function validateAttachment(image: Attachment | undefined): InputVerdict {
  if (!image) return { ok: true };

  if (!ALLOWED_IMAGE_TYPES.includes(image.mediaType)) {
    return {
      ok: false,
      code: "bad_image_type",
      message: "I can read JPEG, PNG, WebP and GIF images. That one is a different format.",
    };
  }
  if (typeof image.data !== "string" || image.data.length === 0) {
    return { ok: false, code: "bad_image_data", message: "That image didn't come through." };
  }
  if (image.data.length > MAX_IMAGE_BASE64_CHARS) {
    return {
      ok: false,
      code: "image_too_large",
      message: "That image is a bit too big for me — could you send a smaller one? 🐼",
    };
  }
  return { ok: true };
}
