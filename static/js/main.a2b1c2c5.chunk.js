(this["webpackJsonpcolor-palettes"]=this["webpackJsonpcolor-palettes"]||[]).push([[0],{209:function(e,o,a){},210:function(e,o,a){},345:function(e,o,a){},346:function(e,o,a){"use strict";a.r(o);var t,n,r,c,l,i=a(0),s=a.n(i),d=a(12),m=a.n(d),u=(a(209),a(6)),b=a(19),j=a(10),h=(a(210),a(17)),p=a(171),f=a(39),x=a(348),g=a(4),O=a(42),C=a.n(O),v={down:function(e){return"@media (max-width:".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1599.98px"}[e],")")}},w={ColorBox:(t={width:"20%",height:function(e){return e.showFullPalette?"25%":"50%"},margin:"0 auto",marginBottom:"-3px",display:"inline-block",position:"relative",cursor:"pointer","&:hover button":{opacity:1}},Object(g.a)(t,v.down("lg"),{width:"25%",height:function(e){return e.showFullPalette?"20%":"33.33333%"}}),Object(g.a)(t,v.down("md"),{width:"50%",height:function(e){return e.showFullPalette?"10%":"20%"}}),Object(g.a)(t,v.down("xs"),{width:"100%",height:function(e){return e.showFullPalette?"5%":"10%"}}),t),textColor:{color:function(e){return C()(e.background).luminance()<=.5?"#fff":"#000"}},seeMore:{color:function(e){return C()(e.background).luminance()<=.5?"#fff":"rgba(0,0,0,0.6)"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:0,bottom:0,width:"60px",height:"30px",textAlign:" center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{width:"100px",height:"30px",position:"absolute",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:" 1rem",lineHeight:"30px",color:"#fff",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0,cursor:"pointer"},BoxContent:{position:"absolute",width:"100%",left:0,bottom:0,padding:"10px",color:"#fff",letterSpacing:"1px",textTransform:"uppercase",fontSize:" 12px"},copyOverlay:{opacity:0,zIndex:0,width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:1,transform:"scale(50)",zIndex:10,position:"absolute"},copyMessage:{position:"fixed",left:0,right:0,top:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"4rem",transform:"scale(0.1)",color:"#fff",opacity:0,"& h1":Object(g.a)({fontWeight:400,backgroundColor:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:0,padding:"1rem"},v.down("xs"),{fontSize:"3rem"}),"& p":{fontSize:"2rem",fontWeight:100}},showCopyMessage:{opacity:1,transform:"scale(1)",zIndex:20,transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},y=a(3),S=Object(x.a)(w)((function(e){var o=e.name,a=e.background,t=e.paletteId,n=e.id,r=e.showFullPalette,c=e.classes,l=Object(i.useState)(!1),s=Object(j.a)(l,2),d=s[0],m=s[1];return Object(i.useEffect)((function(){setTimeout((function(){m(!1)}),1500)}),[d]),Object(y.jsx)(p.CopyToClipboard,{text:a,onCopy:function(){m(!0)},children:Object(y.jsxs)("div",{className:c.ColorBox,style:{background:a},children:[Object(y.jsx)("div",{style:{background:a},className:"".concat(c.copyOverlay," ").concat(d&&c.showOverlay)}),Object(y.jsxs)("div",{className:"".concat(c.copyMessage," ").concat(d&&c.showCopyMessage),children:[Object(y.jsx)("h1",{className:c.textColor,children:"Copied"}),Object(y.jsx)("p",{className:c.textColor,children:a})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:c.BoxContent,children:Object(y.jsx)("span",{className:c.textColor,children:o})}),Object(y.jsx)("button",{className:"".concat(c.copyButton," ").concat(c.textColor),children:"Copy"})]}),r&&Object(y.jsx)(f.b,{to:"/palette/".concat(t,"/").concat(n),onClick:function(e){e.stopPropagation()},children:Object(y.jsx)("span",{className:c.seeMore,children:"More"})})]})})})),N=a(183),F=(a(138),a(410)),B=a(395),k=a(396),P=a(412),I=a(99),D=a.n(I),E={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh",fontFamily:"Roboto"},level:{marginLeft:"1rem"},logo:Object(g.a)({marginRight:"15px",padding:"0 13px",fontSize:"1.6rem",backgroundColor:"#fff",height:"100%",lineHeight:"48px","& a":{textDecoration:"none",color:"#000"}},v.down("md"),{display:"none"}),slider:Object(g.a)({width:"350px",margin:"0 10px",display:"inline-block","& rc-slider-rail":{height:"8px"},"& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-handle,  .rc-slider-handle:hover .rc-slider-handle:focus .rc-slider-handle:active":{backgroundColor:"green",border:"2px solid green",outline:"none",boxShadow:"none",width:"13px",height:"13px",marginTop:"-3px"}},v.down("xs"),{width:"150px"}),selectorContainer:{marginLeft:"auto",marginRight:"1rem"}},A=Object(x.a)(E)((function(e){var o=e.classes,a=Object(i.useState)(!0),t=Object(j.a)(a,2),n=t[0],r=t[1],c=function(){r(!1)};return Object(i.useEffect)((function(){return r(!0)}),[e.format]),Object(y.jsxs)("header",{className:o.Navbar,children:[Object(y.jsx)("div",{className:o.logo,children:Object(y.jsx)(f.b,{to:"/color-palettes/",children:"React Color Picker"})}),e.showSlider&&Object(y.jsxs)("div",{children:[Object(y.jsxs)("span",{className:o.level,children:["Level:",e.level]}),Object(y.jsx)("div",{className:o.slider,children:Object(y.jsx)(N.a,{defaultValue:e.level,min:100,max:900,step:100,onAfterChange:e.changeLevel})})]}),Object(y.jsx)("div",{className:o.selectorContainer,children:Object(y.jsxs)(F.a,{value:e.format,onChange:e.changeFormat,children:[Object(y.jsx)(B.a,{value:"hex",children:"HEX - #ffffff"}),Object(y.jsx)(B.a,{value:"rgb",children:"RGB - rgb(255,255,255)"}),Object(y.jsx)(B.a,{value:"rgba",children:"RGBA - rgba(255,255,255,1)"})]})}),Object(y.jsx)(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},message:"Format changed to ".concat(e.format.toUpperCase()),open:n,autoHideDuration:3e3,ContentProps:{"aria-describedby":"message-id"},onClose:c,action:[Object(y.jsx)(k.a,{onClick:c,color:"inherit","aria-label":"close",children:Object(y.jsx)(D.a,{})},"close")]})]})})),G={PaletteFooter:{height:"5vh",backgroundColor:"#fff",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}},R=Object(x.a)(G)((function(e){var o=e.paletteName,a=e.emoji,t=e.classes;return Object(y.jsxs)("footer",{className:t.PaletteFooter,children:[o,Object(y.jsxs)("span",{className:t.emoji,children:[" ",a]})]})})),T={Palette:{height:"100vh",display:"flex",flexDirection:"column"},PaletteColors:{height:"90%"},goBack:(n={width:"20%",height:"50%",margin:"0 auto",marginBottom:"-3px",display:"inline-block",position:"relative",cursor:"pointer",backgroundColor:"#000","& a":{color:"#fff",width:"100px",height:"30px",position:"absolute",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:" 1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(g.a)(n,v.down("lg"),{width:"25%",height:"33.33333%"}),Object(g.a)(n,v.down("md"),{width:"50%",height:"20%"}),Object(g.a)(n,v.down("xs"),{width:"100%",height:"10%"}),n)},L=Object(x.a)(T)((function(e){var o=e.classes,a=e.palette,t=Object(i.useState)(400),n=Object(j.a)(t,2),r=n[0],c=n[1],l=Object(i.useState)("hex"),s=Object(j.a)(l,2),d=s[0],m=s[1],b=e.palette.colors[r].map((function(e){return Object(y.jsx)(S,{background:e[d],name:e.name,id:e.id,paletteId:a.id,showFullPalette:!0},e.id)}));return Object(y.jsxs)("div",{className:o.Palette,children:[Object(y.jsx)(A,{level:r,format:d,changeLevel:function(e){c(e)},changeFormat:function(e){m(e.target.value)},showSlider:!0}),Object(y.jsx)("div",{className:o.PaletteColors,children:b}),Object(y.jsx)(R,Object(u.a)({},a))]})})),M=a(398),z=a(399),H=a(174),U=a.n(H),q=a(414),V=a(394),W=a(350),J=a(400),Y=a(401),K=a(103),Q=a(102),X=a(397),Z=Object(X.a)({root:{backgroundColor:"#fff",border:"1px solid #000",borderRadius:"5px",padding:"0.5em",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#eee",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItem:"center",margin:0,color:"#000",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"1rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},deleteIcon:{color:"#fff",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",top:0,right:0,padding:"5px",zIndex:10,opacity:0,transition:"all 0.5s ease"}}),$=a(100),_=a.n($),ee=function(e){var o=e.palette,a=e.id,t=e.openDialog,n=e.goToPalette,r=Z(),c=o.colors.map((function(e){return Object(y.jsx)("div",{className:r.miniColor,style:{backgroundColor:e.color}},e.color)}));return Object(y.jsxs)("div",{className:r.root,onClick:function(){n(o.id)},children:[Object(y.jsx)(_.a,{className:r.deleteIcon,onClick:function(e){e.stopPropagation(),t(a)}}),Object(y.jsx)("div",{className:r.colors,children:c}),Object(y.jsxs)("h5",{className:r.title,children:[o.paletteName,Object(y.jsxs)("span",{className:r.emoji,children:[" ",o.emoji]})]})]})},oe=s.a.memo(ee),ae=a.p+"static/media/bg.a213c810.svg",te={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-in"}},root:{backgroundColor:"#445aaa",backgroundImage:"url(".concat(ae,")"),Height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",overflowY:"scroll"},container:(r={width:"50%",display:"flex",flexDirection:"column",alignItems:"flex-start",flexWrap:"wrap"},Object(g.a)(r,v.down("xl"),{width:"80%"}),Object(g.a)(r,v.down("xl"),{width:"70%"}),r),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"#fff","& a":{color:"#FFF"}},palettes:(c={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3,30%)",gridGap:"1rem"},Object(g.a)(c,v.down("md"),{gridTemplateColumns:"repeat(2,50%)"}),Object(g.a)(c,v.down("xs"),{gridTemplateColumns:"repeat(1,100%)"}),c)},ne=a(413),re=a(411),ce=Object(x.a)(te)((function(e){var o=e.palettes,a=e.classes,t=e.deletePalette,n=Object(i.useState)(!1),r=Object(j.a)(n,2),c=r[0],l=r[1],s=Object(i.useState)(""),d=Object(j.a)(s,2),m=d[0],u=d[1],b=function(o){e.history.push("/palette/".concat(o))},h=function(e){l(!0),u(e)},p=function(){l(!1),u("")};return Object(y.jsxs)("div",{className:a.root,children:[Object(y.jsxs)("div",{className:a.container,children:[Object(y.jsxs)("nav",{className:a.nav,children:[Object(y.jsx)("h1",{children:"React Colors"}),Object(y.jsx)(f.b,{to:"/palette/new",children:"Create palette"})]}),Object(y.jsx)(ne.a,{className:a.palettes,children:o.map((function(e){return Object(y.jsx)(re.a,{timeout:200,classNames:"fade",children:Object(y.jsx)(oe,{id:e.id,palette:e,goToPalette:b,openDialog:h},e.id)},e.id)}))})]}),Object(y.jsxs)(M.a,{open:c,"aria-labelledby":"delete-dialog",onClose:p,children:[Object(y.jsx)(z.a,{id:"delete-dialog-title",children:"Are you sure to delete this palette?"}),Object(y.jsxs)(V.a,{children:[Object(y.jsxs)(W.a,{button:!0,onClick:function(){t(m),p()},children:[Object(y.jsx)(J.a,{children:Object(y.jsx)(q.a,{style:{color:Q.a[100],backgroundColor:Q.a[600]},children:Object(y.jsx)(U.a,{})})}),Object(y.jsx)(Y.a,{primary:"Yes, I want to delete it"})]}),Object(y.jsxs)(W.a,{button:!0,onClick:p,children:[Object(y.jsx)(J.a,{children:Object(y.jsx)(q.a,{style:{color:K.a[100],backgroundColor:K.a[600]},children:Object(y.jsx)(D.a,{})})}),Object(y.jsx)(Y.a,{primary:"Cancel"})]})]})]})]})})),le=Object(x.a)(T)((function(e){var o=Object(i.useState)("hex"),a=Object(j.a)(o,2),t=a[0],n=a[1],r=e.palette,c=e.colorId,l=e.classes,s=function(e,o){var a=[],t=e.colors;for(var n in t)a=a.concat(t[n].filter((function(e){return e.id===o})));return a.slice(1)}(r,c).map((function(e){return Object(y.jsx)(S,{name:e.name,background:e[t],showFullPalette:!1},e.hex)}));return Object(y.jsxs)("div",{className:l.Palette,children:[Object(y.jsx)(A,{changeFormat:function(e){n(e.target.value)},format:t,showSlider:!1}),Object(y.jsxs)("div",{className:l.PaletteColors,children:[s,Object(y.jsx)("div",{className:l.goBack,children:Object(y.jsx)(f.b,{to:"/palette/".concat(r.id,"/"),children:"Go back"})})]}),Object(y.jsx)(R,Object(u.a)({},r))]})})),ie=a(7),se=a(415),de=a(74),me=a(409),ue=a(181),be=a.n(ue),je=a(405),he=a(71),pe={root:(l={height:"20%",width:"25%",margin:"0 auto",marginBottom:"-5px",display:"inline-block",position:"relative",cursor:"pointer","&:hover button":{opacity:1}},Object(g.a)(l,v.down("lg"),{width:"25%",height:"20%"}),Object(g.a)(l,v.down("md"),{width:"50%",height:"10%"}),Object(g.a)(l,v.down("xs"),{width:"100%",height:"5%"}),Object(g.a)(l,"&:hover svg",{color:"#fff",transform:"scale(1.4)"}),l),boxContent:{color:function(e){return C()(e.color).luminance()<=.5?"#fff":"rgba(0,0,0,0.6)"},position:"absolute",width:"100%",left:0,bottom:0,padding:"10px",letterSpacing:"1px",textTransform:"uppercase",fontSize:" 12px",display:"flex",justifyContent:"space-between","& span":Object(g.a)({position:"relative",top:"10px"},v.down("xs"),{fontSize:"14px"})},delete:Object(g.a)({transition:"all 0.3s ease"},v.down("xs"),{fontSize:"18px"})},fe=Object(he.b)((function(e){var o=e.color,a=e.name,t=e.classes,n=e.handleClick;return Object(y.jsx)("div",{className:t.root,style:{backgroundColor:o},children:Object(y.jsxs)("div",{className:t.boxContent,children:[Object(y.jsx)("span",{children:a}),Object(y.jsx)("span",{children:Object(y.jsx)(_.a,{className:t.delete,onClick:n})})]})})})),xe=Object(x.a)(pe)(fe),ge=Object(he.a)((function(e){var o=e.colors,a=e.removeColor;return Object(y.jsx)("div",{style:{height:"100%"},children:o.map((function(e,o){return Object(y.jsx)(xe,{index:o,color:e.color,name:e.name,handleClick:function(){a(e.name)}},e.color)}))})})),Oe=a(406),Ce=a(407),ve=a(408),we=a(176),ye=a.n(we),Se=240,Ne=Object(X.a)((function(e){var o;return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(Se,"px)"),marginLeft:Se,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},navBtns:(o={marginRight:"1rem"},Object(g.a)(o,v.down("xs"),{marginRight:"6px"}),Object(g.a)(o,"& a",{textDecoration:"none"}),Object(g.a)(o,"& button",Object(g.a)({marginLeft:"1rem"},v.down("xs"),{padding:"0",marginLeft:"8px"})),o)}})),Fe=a(404),Be=a(402),ke=a(403),Pe=a(52),Ie=(a(237),a(184));function De(e){var o=e.handleSubmit,a=e.palettes,t=e.hideForm,n=Object(i.useState)(""),r=Object(j.a)(n,2),c=r[0],l=r[1],s=Object(i.useState)("form"),d=Object(j.a)(s,2),m=d[0],u=d[1];return Object(i.useEffect)((function(){Pe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(e){return a.every((function(o){return o.paletteName.toLowerCase()!==e.toLowerCase()}))}))}),[c,a]),Object(y.jsxs)("div",{children:[Object(y.jsxs)(M.a,{open:"emoji"===m,onClose:t,children:[Object(y.jsx)(z.a,{id:"form-dialog-title",children:"Choose an Emoji for your Palette"}),Object(y.jsx)(Ie.a,{set:"apple",title:"Pick an emoji",onSelect:function(e){var a={paletteName:c,emoji:e.native};o(a),u("")}})]}),Object(y.jsxs)(M.a,{open:"form"===m,onClose:t,"aria-labelledby":"form-dialog-title",children:[Object(y.jsx)(z.a,{id:"form-dialog-title",children:"Choose a Palette Name"}),Object(y.jsxs)(Pe.ValidatorForm,{onSubmit:function(){u("emoji")},children:[Object(y.jsxs)(Be.a,{children:[Object(y.jsx)(ke.a,{children:"Please enter a name for you palette, make sure it's unique!"}),Object(y.jsx)(Pe.TextValidator,{fullWidth:!0,placeholder:"Enter Palette Name",value:c,onChange:function(e){l(e.target.value)},validators:["required","isPaletteNameUnique"],errorMessages:["Enter a palette name","Palette name need to be unique"]})]}),Object(y.jsxs)(Fe.a,{children:[Object(y.jsx)(je.a,{onClick:t,color:"primary",children:"Cancel"}),Object(y.jsx)(je.a,{color:"primary",type:"submit",variant:"contained",children:"Save Palette"})]})]})]})]})}function Ee(e){var o=Ne(),a=Object(i.useState)(!1),t=Object(j.a)(a,2),n=t[0],r=t[1],c=e.handleDrawerOpen,l=e.open,s=e.palettes,d=e.handleSubmit,m=e.colors;return Object(y.jsxs)("div",{children:[Object(y.jsx)(Oe.a,{}),Object(y.jsxs)(Ce.a,{color:"default",position:"fixed",className:Object(ie.a)(o.appBar,Object(g.a)({},o.appBarShift,l)),children:[Object(y.jsxs)(ve.a,{children:[Object(y.jsx)(k.a,{color:"inherit","aria-label":"open drawer",onClick:c,edge:"start",className:Object(ie.a)(o.menuButton,l&&o.hide),children:Object(y.jsx)(ye.a,{})}),Object(y.jsx)(de.a,{variant:"h6",noWrap:!0,children:"Create Palette"})]}),Object(y.jsxs)("div",{className:o.navBtns,children:[Object(y.jsx)(f.b,{to:"/color-palettes/",children:Object(y.jsx)(je.a,{variant:"contained",color:"secondary",children:"Go Back"})}),Object(y.jsx)(je.a,{variant:"contained",color:"primary",onClick:function(){r(!0)},disabled:0===m.length,children:"Save"})]})]}),n&&Object(y.jsx)(De,{palettes:s,handleSubmit:d,hideForm:function(){r(!1)}})]})}var Ae=a(182),Ge=Object(X.a)({picker:{width:"100% !important",marginTop:"2em"},btnContainer:{width:"100%"},addColorBtn:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"1.5em"},colorNameInput:{width:"100%",height:"70px"}}),Re=function(e){var o=Ge(),a=e.isPaletteFull,t=e.colors,n=e.addNewColor,r=Object(i.useState)(""),c=Object(j.a)(r,2),l=c[0],s=c[1],d=Object(i.useState)("#a4aa99"),m=Object(j.a)(d,2),u=m[0],b=m[1],h=function(e){s(e.target.value)};return Object(i.useEffect)((function(){Pe.ValidatorForm.addValidationRule("isColorNameUnique",(function(e){return t.every((function(o){return o.name.toUpperCase()!==e.toUpperCase()}))})),Pe.ValidatorForm.addValidationRule("isColorValueUnique",(function(e){return t.every((function(o){return o.color!==e}))}))}),[t,u]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Ae.a,{className:o.picker,color:u,onChangeComplete:function(e){b(e.hex)}}),Object(y.jsx)("div",{className:o.btnContainer,children:Object(y.jsxs)(Pe.ValidatorForm,{onSubmit:function(){n({color:u,name:l}),s("")},children:[Object(y.jsx)(Pe.TextValidator,{margin:"normal",variant:"filled",className:o.colorNameInput,placeholder:"Enter Color Name",value:l,onChange:h,validators:["required","isColorNameUnique"],errorMessages:["Enter a color name","Color name need to be unique"]}),Object(y.jsx)(Pe.TextValidator,{className:o.colorNameInput,value:u,onChange:h,validators:["required","isColorValueUnique"],errorMessages:["this field is required","Color is Already used"]}),Object(y.jsx)(je.a,{className:o.addColorBtn,variant:"contained",color:"primary",type:"submit",style:{backgroundColor:a?"#999":u,color:C()(u).luminance()<=.5?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.4)"},disabled:a,children:a?"Colors is full":"Add Color"})]})})]})},Te=Object(X.a)((function(e){return{drawer:{width:Se,flexShrink:0},drawerPaper:{display:"flex",alignItems:"center",width:Se},drawerHeader:Object(u.a)(Object(u.a)({width:"100%",display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},Object(g.a)({justifyContent:"flex-end"},v.down("xs"),{marginTop:"8px"})),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:0},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:Se},container:{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"},buttons:{width:"100%"},button:{width:"50%",fontSize:"0.8em",fontWeight:"bold"}}}));function Le(e){var o=Te(),a=Object(i.useState)(!0),t=Object(j.a)(a,2),n=t[0],r=t[1],c=Object(i.useState)([]),l=Object(j.a)(c,2),s=l[0],d=l[1],m=s.length>=20;return Object(y.jsxs)("div",{className:o.root,children:[Object(y.jsx)(Ee,{handleDrawerOpen:function(){r(!0)},open:n,classes:o,palettes:e.palettes,handleSubmit:function(o){o.id=o.paletteName.toLowerCase().replace(/ /g,"-"),o.colors=s,e.savePalette(o),e.history.push("/color-palettes/")},colors:s}),Object(y.jsxs)(se.a,{className:o.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:o.drawerPaper},children:[Object(y.jsx)("div",{className:o.drawerHeader,children:Object(y.jsx)(k.a,{onClick:function(){r(!1)},children:Object(y.jsx)(be.a,{})})}),Object(y.jsx)(me.a,{}),Object(y.jsxs)("div",{className:o.container,children:[Object(y.jsx)(de.a,{variant:"h5",gutterBottom:!0,children:"Design Your Palette"}),Object(y.jsxs)("div",{className:o.buttons,children:[Object(y.jsx)(je.a,{className:o.button,variant:"contained",color:"primary",onClick:function(){var e="#".concat(Math.random().toString(16).substr(2,6)),o={color:e,name:e};d([].concat(Object(b.a)(s),[o]))},disabled:m,children:"Random color"}),Object(y.jsx)(je.a,{variant:"contained",color:"secondary",onClick:function(){d([])},className:o.button,children:"Clear Palette"})]}),Object(y.jsx)(Re,{isPaletteFull:m,colors:s,addNewColor:function(e){d([].concat(Object(b.a)(s),[e]))}})]})]}),Object(y.jsxs)("main",{className:Object(ie.a)(o.content,Object(g.a)({},o.contentShift,n)),children:[Object(y.jsx)("div",{className:o.drawerHeader}),Object(y.jsx)(ge,{colors:s,removeColor:function(e){return d(s.filter((function(o){return o.name!==e})))},axis:"xy",onSortEnd:function(e){var o=e.oldIndex,a=e.newIndex;return d(Object(he.c)(s,o,a))}})]})]})}a(345);var Me=function(e){var o=e.children;return Object(y.jsx)("section",{className:"page",children:o})},ze=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],He=a(132),Ue=[50,100,200,300,400,500,600,700,800,900],qe=function(e){var o,a=Object(u.a)(Object(u.a)({},e),{},{colors:{}}),t=Object(He.a)(Ue);try{for(t.s();!(o=t.n()).done;){var n=o.value;a.colors[n]=[]}}catch(d){t.e(d)}finally{t.f()}var r,c=Object(He.a)(e.colors);try{for(c.s();!(r=c.n()).done;){var l=r.value,i=Ve(l.color,10).reverse();for(var s in i)a.colors[Ue[s]].push({name:"".concat(l.name," ").concat(Ue[s]),id:l.name.toLowerCase().replace(/ /g,"-"),hex:i[s],rgb:C()(i[s]).css(),rgba:C()(i[s]).css("rgba")})}}catch(d){c.e(d)}finally{c.f()}return a},Ve=function(e,o){return C.a.scale(function(e){return[C()(e).darken(1.4).hex(),e,"#fff"]}(e)).mode("lab").colors(o)};var We=function(){var e=JSON.parse(window.localStorage.getItem("palettes")),o=Object(i.useState)(e||ze),a=Object(j.a)(o,2),t=a[0],n=a[1],r=function(e){return t.find((function(o){return o.id===e}))},c=function(e){n([].concat(Object(b.a)(t),[e]))},l=function(e){n(t.filter((function(o){return o.id!==e}))),s()},s=function(){window.localStorage.setItem("palettes",JSON.stringify(t))};return Object(i.useEffect)((function(){s()}),[t]),Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{exact:!0,path:"/palette/new",render:function(e){return Object(y.jsx)(Me,{children:Object(y.jsx)(Le,Object(u.a)({savePalette:c,palettes:t},e))})}}),Object(y.jsx)(h.a,{exact:!0,path:"/",render:function(e){return Object(y.jsx)(Me,{children:Object(y.jsx)(ce,Object(u.a)(Object(u.a)({palettes:t},e),{},{deletePalette:l}))})}}),Object(y.jsx)(h.a,{exact:!0,path:"/palette/:id/",render:function(e){return Object(y.jsx)(Me,{children:Object(y.jsx)(L,{palette:qe(r(e.match.params.id))})})}}),Object(y.jsx)(h.a,{path:"/palette/:paletteId/:colorId",render:function(e){return Object(y.jsx)(Me,{children:Object(y.jsx)(le,{colorId:e.match.params.colorId,palette:qe(r(e.match.params.paletteId))})})}}),Object(y.jsx)(h.a,{render:function(e){return Object(y.jsx)(Me,{children:Object(y.jsx)(ce,Object(u.a)(Object(u.a)({palettes:t},e),{},{deletePalette:l}))})}})]})};m.a.render(Object(y.jsx)(f.a,{children:Object(y.jsx)(We,{})}),document.getElementById("root"))}},[[346,1,2]]]);
//# sourceMappingURL=main.a2b1c2c5.chunk.js.map