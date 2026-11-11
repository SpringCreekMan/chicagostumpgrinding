"use client";
import { useEffect, useRef, useState } from "react";
import "./reboot.css";
type Stage = "start"|"scan"|"size"|"access"|"done";
export default function HomePage(){
 const [stage,setStage]=useState<Stage>("start");
 const [image,setImage]=useState<string|null>(null);
 const [fileName,setFileName]=useState("");
 const [size,setSize]=useState("");
 const [access,setAccess]=useState("");
 const [zip,setZip]=useState("");
 const [copied,setCopied]=useState(false);
 const camera=useRef<HTMLInputElement>(null);
 const upload=useRef<HTMLInputElement>(null);
 useEffect(()=>()=>{if(image)URL.revokeObjectURL(image)},[image]);
 useEffect(()=>{if(stage!=="scan")return;const timer=setTimeout(()=>setStage("size"),2600);return()=>clearTimeout(timer)},[stage]);
 const choose=(f?:File)=>{if(!f)return;if(!f.type.startsWith("image/")){alert("Please choose a photo.");return}setImage(URL.createObjectURL(f));setFileName(f.name);setStage("scan")};
 const details="Chicago Stump Grinding quote request\nPhoto: "+fileName+" (attach separately)\nDiameter: "+size+"\nAccess: "+access+"\nZIP: "+zip;
 const reset=()=>{setStage("start");setSize("");setAccess("");setZip("");setImage(null);setFileName("");setCopied(false);if(camera.current)camera.current.value="";if(upload.current)upload.current.value=""};
 return <div className="camera-home">
 <div className="cs-top"><div className="cs-logo">CHICAGO<span>STUMP</span>GRINDING</div><span className="cs-tag">A smarter way to start</span></div>
 <input ref={camera} type="file" accept="image/*" capture="environment" className="cs-hidden" onChange={e=>choose(e.target.files?.[0])}/>
 <input ref={upload} type="file" accept="image/*" className="cs-hidden" onChange={e=>choose(e.target.files?.[0])}/>
 <div className="cs-main">
 {stage==="start"&&<div className="cs-screen"><p className="cs-eyebrow">Let&apos;s get that stump out of your way</p><h1>Take a picture<br/>of <em>your stump.</em></h1><p className="cs-intro">That&apos;s it. Start with a photo and we&apos;ll guide you through the rest.</p><button className="cs-camera" aria-label="Open camera" onClick={()=>camera.current?.click()}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7.7 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.7z"/><circle cx="12" cy="13" r="4"/></svg></button><div className="cs-camera-label">Open camera</div><button className="cs-text-button" onClick={()=>upload.current?.click()}>Or choose an existing photo</button><p className="cs-fine">No account. No forms to start. Just a photo.<br/>Your image stays on your device in this early preview.</p></div>}
 {stage==="scan"&&<div className="cs-screen"><p className="cs-eyebrow">Photo received</p><h1>Looking at<br/><em>your stump.</em></h1><div className="cs-image">{image&&<img src={image} alt="Your uploaded stump"/>}<div className="cs-scanline"/></div><p className="cs-status">Preparing the next questions…</p><p className="cs-fine">AI image analysis is coming soon. This preview uses a simulated transition, not a visual diagnosis.</p></div>}
 {stage==="size"&&<div className="cs-screen"><p className="cs-eyebrow">A few quick details</p><h1>Let&apos;s size<br/><em>this up.</em></h1><div className="cs-card"><span className="cs-pill">PHOTO RECEIVED ✓</span><h2>About how wide is the stump?</h2><p>A photo without a scale can&apos;t establish precise dimensions. Choose your best estimate.</p><div className="cs-choices">{["Under 12 inches","12–24 inches","24–36 inches","Over 36 inches"].map(s=><button key={s} className={"cs-choice "+(size===s?"active":"")} onClick={()=>setSize(s)}>{s}</button>)}</div><button className="cs-primary" disabled={!size} onClick={()=>setStage("access")}>Continue →</button></div></div>}
 {stage==="access"&&<div className="cs-screen"><p className="cs-eyebrow">Almost there</p><h1>Where&apos;s<br/><em>the stump?</em></h1><div className="cs-card"><h2>How accessible is it?</h2><div className="cs-choices">{["Open yard","Narrow gate","Slope / obstacles","Not sure"].map(a=><button key={a} className={"cs-choice "+(access===a?"active":"")} onClick={()=>setAccess(a)}>{a}</button>)}</div><label className="cs-label" htmlFor="cs-zip">Property ZIP code</label><input id="cs-zip" className="cs-input" value={zip} onChange={e=>setZip(e.target.value.replace(/\D/g,"").slice(0,5))} inputMode="numeric" placeholder="5-digit ZIP code"/><button className="cs-primary" disabled={!access||zip.length!==5} onClick={()=>setStage("done")}>Prepare my request →</button></div></div>}
 {stage==="done"&&<div className="cs-screen"><p className="cs-eyebrow">Your project summary</p><h1>You&apos;re one step<br/><em>closer.</em></h1><div className="cs-card"><span className="cs-pill">REQUEST PREPARED</span><h2>Here&apos;s what we know.</h2><div className="cs-summary"><p><b>Photo:</b> {fileName} (attach separately)</p><p><b>Diameter:</b> {size}</p><p><b>Access:</b> {access}</p><p><b>ZIP:</b> {zip}</p></div><p>This is a guided intake preview, not an automated AI assessment or price quote. Your photo and details have not been submitted.</p><button className="cs-primary" onClick={async()=>{try{await navigator.clipboard.writeText(details);setCopied(true)}catch{window.prompt("Copy these details:",details)}}}>{copied?"Copied ✓":"Copy project details"}</button><a className="cs-primary cs-link" href="/request-quote">Continue to quote form ↗</a><button className="cs-text-button" onClick={reset}>Start again</button></div></div>}
 </div><div className="cs-bottom">CHICAGO STUMP GRINDING · WESTERN & SOUTHWESTERN CHICAGO SUBURBS · <a href="tel:+16307169336">(630) 716-9336</a></div>
 </div>
}