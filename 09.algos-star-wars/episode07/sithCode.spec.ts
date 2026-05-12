import {describe, expect, it} from 'vitest';
import {isSithCode} from "./sithCode";

describe('Episode 7: Le Code Sith', () => {
    it('detects palindrome codes', () => {
        expect(isSithCode('radar')).toBe(true);
        expect(isSithCode('kayak')).toBe(true);
        expect(isSithCode('level')).toBe(true);
    });

    it('detects non-palindrome codes', () => {
        expect(isSithCode('sith')).toBe(false);
        expect(isSithCode('empire')).toBe(false);
        expect(isSithCode('stars')).toBe(false);
    });

    it('handles empty string', () => {
        expect(isSithCode('')).toBe(false);
    });

    it('handles single character', () => {
        expect(isSithCode('a')).toBe(true);
    });

    it('ignores spaces and case', () => {
        expect(isSithCode('A man a plan a canal Panama')).toBe(true);
        expect(isSithCode('Race Car')).toBe(true);
    });
});