export interface Finding {
  category: string;
  span: [number, number];
  value: string;
  placeholderPrefix: string;
}

export interface Detector {
  name: string;
  detect(text: string): Finding[];
}

export interface SessionMap {
  [placeholder: string]: string;
}

export interface ScrubRequest {
  content: string;
  sessionId?: string;
  options?: ScrubOptions;
}

export interface ScrubOptions {
  customDetectors?: Detector[];
}

export interface ScrubResult {
  scrubbedContent: string;
  sessionId: string;
}

export interface RehydrateRequest {
  content: string;
  sessionId: string;
}

export interface RehydrateResult {
  content: string;
}
