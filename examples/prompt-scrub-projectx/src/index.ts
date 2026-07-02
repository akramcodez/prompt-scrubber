import type { Detector, Finding } from 'prompt-scrubber';

/**
 * This is an example of a custom rule pack for prompt-scrubber authored in TypeScript.
 * 
 * It implements a `ProjectXDetector` that scrubs internal project codenames 
 * from the prompt to avoid leaking confidential internal names.
 */
export class ProjectXDetector implements Detector {
  public name = 'ProjectXDetector';
  
  // Let's pretend our internal confidential project codenames are Apollo and Zeus
  private regex = /\b(Apollo|Zeus)\b/gi;

  detect(text: string): Finding[] {
    const findings: Finding[] = [];
    let match: RegExpExecArray | null;
    
    this.regex.lastIndex = 0; // Reset regex state before scanning

    while ((match = this.regex.exec(text)) !== null) {
      findings.push({
        category: 'ProjectX',
        span: [match.index, match.index + match[0].length],
        value: match[0],
        placeholderPrefix: 'Codename',
      });
    }

    return findings;
  }
}

// Export the array of detectors natively.
export const detectors: Detector[] = [new ProjectXDetector()];
