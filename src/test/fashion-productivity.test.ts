import { describe, expect, it } from 'vitest';
import { timeSaved } from '@/lib/fashion-tools';
describe('Productivity estimates',()=>{
 it('subtracts generation minutes from manual baseline',()=>expect(timeSaved(15,120)).toBe(13));
 it('never reports negative time saved',()=>expect(timeSaved(15,1000)).toBe(0));
});
