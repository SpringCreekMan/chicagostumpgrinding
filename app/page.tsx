import type { Metadata } from "next";
import Link from "next/link";
import { PHONE, PHONE_HREF, SITE_URL } from "@/lib/constants";
import "./reboot.css";
export const metadata: Metadata = { title: "Chicago Stump Grinding | Reclaim Your Yard", description: "Stump grinding for Chicagoland homeowners. Request a personalized quote.", alternates: {canonical: SITE_URL} };
const services = [
{number:"01",title:"Stump grinding",body:"Clear the stump that's holding your yard back. Tell us its size, location, and access conditions.",href:"/stump-grinding"},
{number:"02",title:"Stump removal",body:"Planning a new patio, garden, or construction project? Ask about complete removal options.",href:"/stump-removal"},
{number:"03",title:"Multiple stumps",body:"One stubborn stump or a yard full of them. Share the details and we'll discuss the right approach.",href:"/request-quote"}];
const steps = [
{number:"01",title:"Tell us what you need",body:"Describe the stump, approximate diameter, and where it sits on your property."},
{number:"02",title:"Get a clear estimate",body:"We'll review your details and discuss pricing, access, and the scope of the work."},
{number:"03",title:"Get your space back",body:"Once the job is confirmed, we'll coordinate the next steps and expectations with you."}];
export default function HomePage() {return <div className="reboot">
<section className="hero"><div className="wrap"><div className="eyebrow">Chicagoland • Stump grinding</div><h1>Make room for<br/>what’s next.</h1><p>That old stump doesn't have to be part of your landscape. A simpler way to get answers, request a quote, and move forward with your yard.</p><div className="actions"><Link className="primary" href="/request-quote">Get a stump grinding quote ↗</Link><a className="secondary" href={PHONE_HREF}>Call {PHONE}</a></div></div></section>
<section className="section"><div className="wrap"><div className="sectionhead"><div><div className="eyebrow" style={{color:"#426e49"}}>What we can help with</div><h2>Less stump.<br/>More possibility.</h2></div><p>Every property is different. Start with the work you need, and we'll help determine the next step.</p></div><div className="cards">{services.map(s=><article className="tile" key={s.number}><span className="num">{s.number} / SERVICES</span><div><h3>{s.title}</h3><p>{s.body}</p><Link href={s.href}>Explore service ↗</Link></div></article>)}</div></div></section>
<section className="section dark"><div className="wrap"><div className="eyebrow">The process</div><h2>Simple from<br/>the first hello.</h2><div className="steps">{steps.map(s=><div className="step" key={s.number}><span>{s.number} / 03</span><h3>{s.title}</h3><p>{s.body}</p></div>)}</div></div></section>
<section className="quote"><div className="wrap quotegrid"><div><div className="eyebrow" style={{color:"#426e49"}}>Your yard, your next move</div><h2>Ready to clear<br/>the way?</h2><p>Share a few details about your stump and the property. We'll follow up about a quote and next steps.</p></div><div className="quotebox"><h3>Start with a quote.</h3><p>No complicated process. Tell us about your project using our request form, or give us a call.</p><Link href="/request-quote" className="primary">Request a quote ↗</Link><a href={PHONE_HREF} style={{color:"#235f38",fontWeight:700}}>Prefer to talk? {PHONE}</a></div></div></section>
<section className="locations"><div className="wrap"><h2 style={{fontSize:34}}>Rooted in Chicagoland.</h2><p>Serving homeowners across Chicago's western and southwestern suburbs, including Lemont, Naperville, Hinsdale, Downers Grove, and surrounding communities. <Link href="/service-areas">Explore service areas ↗</Link></p><p className="smallnote">Service availability and job scope are confirmed during quoting.</p></div></section>
</div>}