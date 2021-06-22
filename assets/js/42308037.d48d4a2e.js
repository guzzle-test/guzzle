(self.webpackChunkguzzle=self.webpackChunkguzzle||[]).push([[87],{4134:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u},Highlight:function(){return d},default:function(){return p}});var l=e(2122),a=e(9756),i=(e(7294),e(3905)),r=["components"],s={},o={unversionedId:"guzzle-basics/ingestion/Working with JSON Files",id:"guzzle-basics/ingestion/Working with JSON Files",isDocsHomePage:!1,title:"Working with JSON Files",description:"<div",source:"@site/docs/guzzle-basics/ingestion/Working with JSON Files.md",sourceDirName:"guzzle-basics/ingestion",slug:"/guzzle-basics/ingestion/Working with JSON Files",permalink:"/guzzle/docs/guzzle-basics/ingestion/Working with JSON Files",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guzzle-basics/ingestion/Working with JSON Files.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ingest Data from Local file system to MySQL Database",permalink:"/guzzle/docs/guzzle-basics/ingestion/Ingest Data from Local file system to MySQL Database"}},u=[{value:"JSON file containing array with multi line",id:"json-file-containing-array-with-multi-line",children:[]}],d=function(t){t.children,t.color;return(0,i.kt)("div",{style:{color:"#000000",minWidth:"100%",height:"50%",padding:"10px"}},"6/01/2021 - 7 Minutes to read")},k={toc:u,Highlight:d};function p(t){var n=t.components,s=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,l.Z)({},k,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(d,{color:"#25c2a0",mdxType:"Highlight"}),(0,i.kt)("p",null,"JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications. JSON is a language-independent data format."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Json File tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"JSON file support in Guzzle provides extensive features to specify file format details and many other properties which make it easier to work with our Data. This article outlines how to work with JSON files for source and target in Ingestion activity.  "))),(0,i.kt)("h1",{id:"json-file-properties-in-guzzle"},"JSON File Properties in Guzzle"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Property "),(0,i.kt)("td",null,"Description"),(0,i.kt)("td",null,"Default Value"),(0,i.kt)("td",null,"Available in Source Section"),(0,i.kt)("td",null,"Available in Target Section")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Character Set"),(0,i.kt)("td",null,"It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc."),(0,i.kt)("td",null,"UTF-8")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Override JSON root path"),(0,i.kt)("td",null,"It can be used to specify an object or location where we want to take our data from. For eg- If we want to focus on one particular column of our data we can specify the Column name here."),(0,i.kt)("td",null,"None"),(0,i.kt)("td",null," \u2714"),(0,i.kt)("td",null,"X")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Multi-Line"),(0,i.kt)("td",null,"This is applicable when a single data record spans across multiple lines. This applies to both JSON files which are in array form or separate json documents."),(0,i.kt)("td",null,"False"),(0,i.kt)("td",null,"\u2714"),(0,i.kt)("td",null,"X"))),(0,i.kt)("p",null,"The Interface for the JSON Format for both Source and Target can be seen in the below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image alt text",src:e(7851).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image alt text",src:e(7542).Z})),(0,i.kt)("h1",{id:"multiline"},"Multiline:"),(0,i.kt)("p",null,"Each line must contain a separate, self-contained valid JSON object. "),(0,i.kt)("p",null,"example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"id": 0001, "name": "john", "address": \u201cbroward county\u201d }\n\n{"id": 0002, "name": "lynda", "address": \u201cvelcore line\u201d}\n\n{"id": 0003, "name": "roan", "address": \u201ctarell street\u201d}\n')),(0,i.kt)("p",null,"When Multi-line is true Guzzle expects Data in the following way:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"regular multi-line JSON file or entire file is a singular JSON object / array")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"it should be one singular valid JSON object / array"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"note: every object in that array or object is separated by commas ( because that single JSON object/array should valid)")," "),(0,i.kt)("p",null," for example:"),(0,i.kt)("p",null,"["),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' {"id": 0001, "name": "john", "address": \u201cbroward county\u201d }\n\n{"id": 0002, "name": "lynda", "address": \u201cvelcore line\u201d}\n\n{"id": 0003, "name": "roan", "address": \u201ctarell street\u201d}\n')),(0,i.kt)("p",null,"]"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"**Fig 1.1** Entire file is a singular Json Array\n")),(0,i.kt)("p",null,"{"),(0,i.kt)("p",null,'"Addresse1": {'),(0,i.kt)("p",null,'"address":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'            [\n\n                { "id": "1001", "street": "broward county" },\n\n                { "id": "1002", "street": "valcore line" }\n\n            ]\n\n    },\n')),(0,i.kt)("p",null,'  \t "Addresses2": {'),(0,i.kt)("p",null,'"address":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'            [\n\n                { "id": "1001", "street": "broward county" },\n\n                { "id": "1002", "street": "valcore line" }\n\n            ]\n\n    },\n')),(0,i.kt)("p",null,'"Addresses3": {'),(0,i.kt)("p",null,'"address":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'            [\n\n                { "id": "1001", "street": "broward county" },\n\n                { "id": "1002", "street": "valcore line" }\n\n            ]\n\n    }\n')),(0,i.kt)("p",null,"}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"**Fig 1.2**  File as Singular Json object\n")),(0,i.kt)("h1",{id:"illustrations"},"Illustrations"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Json file containing with single object separated ")),(0,i.kt)("p",null,'  {"id": 0001, "name": "john", "address": \u201cbroward county\u201d }'),(0,i.kt)("p",null,'  {"id": 0002, "name": "lynda", "address": \u201cvelcore line\u201d}'),(0,i.kt)("p",null,'  {"id": 0003, "name": "roan", "address": \u201ctarell street\u201d}'),(0,i.kt)("p",null,"Multiline : false"),(0,i.kt)("p",null,"Sample Output when multiline is false is shown below:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"id"),(0,i.kt)("td",null,"name"),(0,i.kt)("td",null,"address")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"001"),(0,i.kt)("td",null,"john"),(0,i.kt)("td",null,"Broward county"))),(0,i.kt)("p",null,"Sample Output when multiline is True is shown below:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"id"),(0,i.kt)("td",null,"name"),(0,i.kt)("td",null,"address")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"001"),(0,i.kt)("td",null,"john"),(0,i.kt)("td",null,"Broward county")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"002"),(0,i.kt)("td",null,"lynda"),(0,i.kt)("td",null,"Velcro line")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"003"),(0,i.kt)("td",null,"roan"),(0,i.kt)("td",null,"Tarell street"))),(0,i.kt)("h2",{id:"json-file-containing-array-with-multi-line"},"JSON file containing array with multi line"),(0,i.kt)("p",null,"Sample source data (Customer.json) :"),(0,i.kt)("p",null,"["),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n\n    "id": "0001",\n\n    "name": "john",\n\n"addresses":\n\n    {\n\n        "address":\n\n            [\n\n                { "id": "1001", "street": "broward county" },\n\n                { "id": "1002", "street": "valcore line" }\n\n            ]\n\n    }\n\n},\n\n{\n\n    "id": "0002",\n\n    "name": "lynda",\n\n    "addresses":\n\n        {\n\n            "address":\n\n                [\n\n                    { "id": "1001", "street": "broward county" },\n\n                    { "id": "1002", "street": "valcore line" }\n\n                ]\n\n        }\n\n},\n\n{\n\n    "id": "0003",\n\n    "name": "roan",\n\n    "addresses":\n\n        {\n\n            "address":\n\n                [\n\n                    { "id": "1001", "street": "broward county" },\n\n                    { "id": "1002", "street": "valcore line" }\n\n                ]\n\n        }\n\n}\n')),(0,i.kt)("p",null,"]"),(0,i.kt)("p",null,"When multiline is set to false Guzzle will treat the entire file like a single JSON object."),(0,i.kt)("p",null,"Job Config (json_with_multiline_false): "),(0,i.kt)("p",null,"version: 1"),(0,i.kt)("p",null,"job:"),(0,i.kt)("p",null,"  type: ingestion"),(0,i.kt)("p",null,"source:"),(0,i.kt)("p",null,"  endpoint: localfiles"),(0,i.kt)("p",null,"  properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"source_file_pattern: json/customer1.json\n\nformat: json\n\ncharset: UTF-8\n\npartial_load: false\n\nformat_properties:\n\n  clean_column_name: false\n\n  multiline: false\n")),(0,i.kt)("p",null,"Sample Output when multiline is false is shown below:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"id"),(0,i.kt)("td",null,"name"),(0,i.kt)("td",null,"addresses")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0001"),(0,i.kt)("td",null,"john"),(0,i.kt)("td",null,"[[1001, broward county],   [1002, valcore line]]")),(0,i.kt)("tr",null,(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null))),(0,i.kt)("p",null,"When multiline is set to true Guzzle will treat the entire file."),(0,i.kt)("p",null,"When multiline is set to false Guzzle will treat the entire file like a single JSON object."),(0,i.kt)("p",null,"Job Config (json_with_multiline_true): "),(0,i.kt)("p",null,"version: 1"),(0,i.kt)("p",null,"job:"),(0,i.kt)("p",null,"  type: ingestion"),(0,i.kt)("p",null,"source:"),(0,i.kt)("p",null,"  endpoint: localfiles"),(0,i.kt)("p",null,"  properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"source_file_pattern: json/customer1.json\n\nformat: json\n\ncharset: UTF-8\n\npartial_load: false\n\nformat_properties:\n\n  clean_column_name: false\n\n  multiline: true\n")),(0,i.kt)("p",null,"Sample Output when multiline is True is shown below:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"id"),(0,i.kt)("td",null,"name"),(0,i.kt)("td",null,"addresses")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0001"),(0,i.kt)("td",null,"john"),(0,i.kt)("td",null,"[[1001, broward county],   [1002, valcore line]]")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0002"),(0,i.kt)("td",null,"lynda"),(0,i.kt)("td",null,"[[1001, broward county],   [1002, valcore line]]")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0003"),(0,i.kt)("td",null,"roan"),(0,i.kt)("td",null,"[[1001, broward county],   [1002, valcore line]]"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: Every object in the array is separated by a comma")),(0,i.kt)("h1",{id:"column-mapping-in-json-files"},"Column Mapping in JSON Files"),(0,i.kt)("p",null,"We can also add Column Mapping to specify how to map columns in the source file. This is applicable for files which are having headers or without header. Column Mapping in JSON helps in mapping the columns to a new Column Name as shown here:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image alt text",src:e(282).Z})),(0,i.kt)("h1",{id:"here-we-have-mapped-the-columns-to-a-new-column-name-name-is-mapped-to-first_name-and-created_time-is-mapped-to-time"},"Here we have mapped the columns to a new Column Name. name is mapped to first_name and created_time is mapped to time."),(0,i.kt)("p",null,"x"),(0,i.kt)("p",null,' {"id": 0001, "name": "john", "address": \u201cbroward county\u201d }'),(0,i.kt)("p",null,' {"id": 0002, "name": "lynda", "address": \u201cvelcore line\u201d}'),(0,i.kt)("p",null,' {"id": 0003, "name": "roan", "address": \u201ctarell street\u201d}'),(0,i.kt)("p",null,"Config: "),(0,i.kt)("p",null,"version: 1"),(0,i.kt)("p",null,"job:"),(0,i.kt)("p",null,"  type: ingestion"),(0,i.kt)("p",null,"source:"),(0,i.kt)("p",null,"  endpoint: json_files"),(0,i.kt)("p",null,"  properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"source_file_pattern: customer.json\n\nformat: json\n\ncharset: UTF-8\n\npartial_load: false\n\nformat_properties:\n\n  clean_column_name: false\n\n  multiline: true\n")),(0,i.kt)("p",null,"  column_mapping:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"name: first_name\n\naddress: address_line1\n\nid: customer_id\n")),(0,i.kt)("p",null,"Sample output: "),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"customer_id"),(0,i.kt)("td",null,"first_name"),(0,i.kt)("td",null,"address_line1")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0001"),(0,i.kt)("td",null,"john"),(0,i.kt)("td",null,"broward county")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0002"),(0,i.kt)("td",null,"lynda"),(0,i.kt)("td",null,"Valcore line")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0003"),(0,i.kt)("td",null,"roan"),(0,i.kt)("td",null,"Tarrel street"))),(0,i.kt)("h1",{id:"if-file-has-multiline-customerjson"},"If file has multiline (Customer.json)"),(0,i.kt)("p",null,"  column_mapping:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"addresses.address: address_line1\n")),(0,i.kt)("p",null,"Sample Output"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"id"),(0,i.kt)("td",null,"name"),(0,i.kt)("td",null,"address_line1"),(0,i.kt)("td",null,"addresses")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0001"),(0,i.kt)("td",null,"john"),(0,i.kt)("td",null,"broward county"),(0,i.kt)("td",null,"[[1001, broward county],   [1002, valcore line]]")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0002"),(0,i.kt)("td",null,"lynda"),(0,i.kt)("td",null,"Valcore line"),(0,i.kt)("td",null,"[[1001, broward county],   [1002, valcore line]]")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0003"),(0,i.kt)("td",null,"roan"),(0,i.kt)("td",null,"Tarrel street"),(0,i.kt)("td",null,"[[1001, broward county],   [1002, valcore line]]"))))}p.isMDXComponent=!0},7851:function(t,n,e){"use strict";n.Z=e.p+"assets/images/working_with_json0-3758813c2d2ec749afe7c91109602ae6.png"},7542:function(t,n,e){"use strict";n.Z=e.p+"assets/images/working_with_json1-71ee65570dd6984b0f23b73b45bd14b5.png"},282:function(t,n,e){"use strict";n.Z=e.p+"assets/images/working_with_json2-b57478def2af4a1643de9ec5b54956ce.png"}}]);