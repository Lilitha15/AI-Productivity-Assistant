import { Link } from '@tanstack/react-router';
import { Mail, PenLine, TrendingUp, Scissors, BriefcaseBusiness, CalendarDays, ArrowRight, Clock3 } from 'lucide-react';
import { tools } from '@/lib/fashion-tools';
export const toolIcons = { mail: Mail, pen: PenLine, trend: TrendingUp, scissors: Scissors, briefcase: BriefcaseBusiness, calendar: CalendarDays };
export function ToolCard({ tool }: { tool: typeof tools[number] }) { const Icon = toolIcons[tool.icon]; return <article className="tool-card"><div className="tool-top"><span className="tool-symbol"><Icon strokeWidth={1.5}/></span><span className="category">{tool.category}</span></div><h3>{tool.title}</h3><p>{tool.description}</p><div className="tool-bottom"><span className="flex gap-1 items-center"><Clock3 size={11}/>~{tool.time} min manual task</span><Link to="/tools/$toolId" params={{toolId:tool.id}}>Create with AI<ArrowRight size={13}/></Link></div></article>; }
