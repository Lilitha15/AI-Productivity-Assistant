import { createFileRoute } from '@tanstack/react-router';
import { tools } from '@/lib/fashion-tools';
import { ToolCard } from '@/components/fashion/tool-card';
import { PageFooter } from '@/components/fashion/workspace-shell';
export const Route = createFileRoute('/tools/')({head:()=>({meta:[{title:'AI Tools | Dream Design Create Build'},{name:'description',content:'Practical fashion AI tools for client communication, marketing, design, research and business planning.'},{property:'og:title',content:'Fashion Business AI Tools'},{property:'og:description',content:'Create thoughtful drafts and make more time for fashion.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Tools});
function Tools(){return <main className="page"><div className="page-intro"><div><h1>Your AI tool collection</h1><p>A creative partner for every part of your fashion business.</p></div></div><div className="tool-grid">{tools.map(t=><ToolCard key={t.id} tool={t}/>)}</div><PageFooter/></main>}
