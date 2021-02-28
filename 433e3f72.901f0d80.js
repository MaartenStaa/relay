(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1069:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,h=b["".concat(i,".").concat(u)]||b[u]||s[u]||o;return n?a.a.createElement(h,c(c({ref:t},d),{},{components:n})):a.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(1069)),i={id:"classic-guides-root-container",title:"Root Container",original_id:"classic-guides-root-container"},c={unversionedId:"classic-guides-root-container",id:"version-classic/classic-guides-root-container",isDocsHomePage:!1,title:"Root Container",description:"So far, we've covered two pieces that each contribute to declaring data:",source:"@site/versioned_docs/version-classic/Classic-Guides-RootContainer.md",slug:"/classic-guides-root-container",permalink:"/docs/classic/classic-guides-root-container",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Guides-RootContainer.md",version:"classic",lastUpdatedBy:"David Tolnay",lastUpdatedAt:1614480486,sidebar:"version-classic/docs",previous:{title:"Routes",permalink:"/docs/classic/classic-guides-routes"},next:{title:"Ready State",permalink:"/docs/classic/classic-guides-ready-state"}},l=[{value:"Component and Route",id:"component-and-route",children:[]},{value:"Render Callbacks",id:"render-callbacks",children:[{value:"<code>renderLoading</code>",id:"renderloading",children:[]},{value:"<code>renderFetched</code>",id:"renderfetched",children:[]},{value:"<code>renderFailure</code>",id:"renderfailure",children:[]}]},{value:"Force Fetching",id:"force-fetching",children:[]},{value:"Ready State Change",id:"ready-state-change",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"So far, we've covered two pieces that each contribute to declaring data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Relay.Route")," lets us declare query roots."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Relay.Container")," lets components declare fragments.")),Object(o.b)("p",null,"To use these pieces to construct a full-fledged GraphQL query that we can send to the server to fetch data, we need to use the ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer"),"."),Object(o.b)("h2",{id:"component-and-route"},"Component and Route"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," is a React component that, given a ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"route"),", attempts to fulfill the data required in order to render an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"Component"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nReactDOM.render(\n  <Relay.RootContainer\n    Component={ProfilePicture}\n    route={profileRoute}\n  />,\n  container\n);\n\n")),Object(o.b)("p",null,"When the ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," above is rendered, Relay will construct a query and send it to the GraphQL server. As soon as all required data has been fetched, ",Object(o.b)("inlineCode",{parentName:"p"},"ProfilePicture")," will be rendered. Props with fragments will contain data that was fetched from the server."),Object(o.b)("p",null,"If either ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," or ",Object(o.b)("inlineCode",{parentName:"p"},"route")," ever changes, ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," will immediately start attempting to fulfill the new data requirements."),Object(o.b)("h2",{id:"render-callbacks"},"Render Callbacks"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," accepts three optional callbacks as props that give us more fine-grained control over the render behavior."),Object(o.b)("h3",{id:"renderloading"},Object(o.b)("inlineCode",{parentName:"h3"},"renderLoading")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," renders the loading state whenever it cannot immediately fulfill data needed to render. This often happens on the initial render, but it can also happen if either ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," or ",Object(o.b)("inlineCode",{parentName:"p"},"route")," changes."),Object(o.b)("p",null,"By default, nothing is rendered while loading data for the initial render. If a previous set of ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," and ",Object(o.b)("inlineCode",{parentName:"p"},"route")," were fulfilled and rendered, the default behavior is to continue rendering the previous view."),Object(o.b)("p",null,"We can change this behavior by supplying the ",Object(o.b)("inlineCode",{parentName:"p"},"renderLoading")," prop:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}4-6{"}"}'}),"\n<Relay.RootContainer\n  Component={ProfilePicture}\n  route={profileRoute}\n  renderLoading={function() {\n    return <div>Loading...</div>;\n  }}\n/>\n\n")),Object(o.b)("p",null,"This snippet configures ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer"),' to render the "Loading..." text whenever it needs to fetch data.'),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"renderLoading")," callback can simulate the default behavior by returning ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". Notice that this is different from a ",Object(o.b)("inlineCode",{parentName:"p"},"renderLoading")," callback that returns ",Object(o.b)("inlineCode",{parentName:"p"},"null"),", which would render nothing whenever data is loading, even if there was a previous view rendered."),Object(o.b)("h3",{id:"renderfetched"},Object(o.b)("inlineCode",{parentName:"h3"},"renderFetched")),Object(o.b)("p",null,"When all data necessary to render becomes available, ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," will render the supplied ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," by default. However, we can change this behavior by supplying a callback to the ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," prop:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}4-10{"}"}'}),"\n<Relay.RootContainer\n  Component={ProfilePicture}\n  route={profileRoute}\n  renderFetched={function(data) {\n    return (\n      <ScrollView>\n        <ProfilePicture {...data} />\n      </ScrollView>\n    );\n  }}\n/>\n\n")),Object(o.b)("p",null,"This snippet configures ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," to render ",Object(o.b)("inlineCode",{parentName:"p"},"ProfilePicture")," within a ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollView")," component as soon as data is ready."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," callback is always called with a ",Object(o.b)("inlineCode",{parentName:"p"},"data")," argument, which is an object mapping from ",Object(o.b)("inlineCode",{parentName:"p"},"propName")," to query data. It is expected that the ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," callback renders the supplied ",Object(o.b)("inlineCode",{parentName:"p"},"Component")," with them (e.g. using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/jsx-spread.html"}),"JSX spread attributes feature"),")."),Object(o.b)("blockquote",null,"Note",Object(o.b)("p",null,"Even though we have access to the ",Object(o.b)("inlineCode",{parentName:"p"},"data")," object in ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched"),", the actual data is intentionally opaque. This prevents the ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," from creating an implicit dependency on the fragments declared by ",Object(o.b)("inlineCode",{parentName:"p"},"Component"),".")),Object(o.b)("h3",{id:"renderfailure"},Object(o.b)("inlineCode",{parentName:"h3"},"renderFailure")),Object(o.b)("p",null,"If an error occurs that prevents ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," from fetching the data required for rendering ",Object(o.b)("inlineCode",{parentName:"p"},"Component"),", nothing will be rendered by default. Error handling behavior can be configured by supplying a callback to the ",Object(o.b)("inlineCode",{parentName:"p"},"renderFailure")," prop:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}4-11{"}"}'}),"\n<Relay.RootContainer\n  Component={ProfilePicture}\n  route={profileRoute}\n  renderFailure={function(error, retry) {\n    return (\n      <div>\n        <p>{error.message}</p>\n        <p><button onClick={retry}>Retry?</button></p>\n      </div>\n    );\n  }}\n/>\n\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"renderFailure")," callback is called with two arguments: an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," object and a function to retry the request. If the error was the result of a server error communicated in the server's response, the response payload is available for inspection on ",Object(o.b)("inlineCode",{parentName:"p"},"error.source"),"."),Object(o.b)("h2",{id:"force-fetching"},"Force Fetching"),Object(o.b)("p",null,"Like most of the Relay APIs, ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," attempts to resolve data using the client store before sending a request to the server. If we instead wanted to force a server request even if data is available on the client, we could use the ",Object(o.b)("inlineCode",{parentName:"p"},"forceFetch")," boolean prop."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}4{"}"}'}),"\n<Relay.RootContainer\n  Component={ProfilePicture}\n  route={profileRoute}\n  forceFetch={true}\n/>\n\n")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"forceFetch")," is true, ",Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," will always send a request to the server. However, if all the data required to render is also available on the client, ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," may still be called before the server request completes."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}5-6,9{"}"}'}),"\n<Relay.RootContainer\n  Component={ProfilePicture}\n  route={profileRoute}\n  forceFetch={true}\n  renderFetched={function(data, readyState) {\n    var isRefreshing = readyState.stale;\n    return (\n      <ScrollView>\n        <Spinner style={{display: isRefreshing ? 'block' : 'none' }}\n        <ProfilePicture {...data} />\n      </ScrollView>\n    );\n  }}\n/>\n\n")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"forceFetch")," is true and ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," is called as a result of available client data, ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," is called with a second argument that has a ",Object(o.b)("inlineCode",{parentName:"p"},"stale")," boolean property. The ",Object(o.b)("inlineCode",{parentName:"p"},"stale")," property is true if ",Object(o.b)("inlineCode",{parentName:"p"},"renderFetched")," is called before the forced server request completes."),Object(o.b)("h2",{id:"ready-state-change"},"Ready State Change"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Relay.RootContainer")," also supports the ",Object(o.b)("inlineCode",{parentName:"p"},"onReadyStateChange")," prop which lets us receive fine-grained events as they occur while fulfilling the data requirements."),Object(o.b)("p",null,"Learn how to use ",Object(o.b)("inlineCode",{parentName:"p"},"onReadyStateChange")," in our next guide, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-guides-ready-state"}),"Ready State"),"."))}p.isMDXComponent=!0}}]);