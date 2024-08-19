import React from 'react'

export default function Template() {
  return (
		<div>
			<>
	<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
	<title>MFF PHASE 1 </title>
	<style
		dangerouslySetInnerHTML={{
		__html:
			"\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\tpadding-inline-start: 0;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.page-description {\n    margin-bottom: 2em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-default_background {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 237, 214, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-default_background {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 237, 214, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-uiBlue { background-color: rgba(35, 131, 226, .07); }\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-transparentGray { background-color: rgba(227, 226, 224, 0); }\n.select-value-color-translucentGray { background-color: rgba(0, 0, 0, 0.06); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(249, 228, 188, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n.select-value-color-pageGlass { background-color: undefined; }\n.select-value-color-washGlass { background-color: undefined; }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n"
		}}
	/>
	<article id="9a3192a5-de2b-4a45-82ab-b60d0107da4f" className="page sans">
		<header>
		<img
			className="page-cover-image"
			src="MFF%20PHASE%201%209a3192a5de2b4a4582abb60d0107da4f/IMG_20220414_001821_015.jpg"
			style={{ objectPosition: "center 81.66%" }}
		/>
		<div className="page-header-icon page-header-icon-with-cover">
			<span className="icon">1️⃣</span>
		</div>
		<h1 className="page-title">MFF PHASE 1 </h1>
		<p className="page-description">
			Account size = 5000 RPT = 0.5% {"{"}25{"}"}
			RPD = 1% {"{"}50{"}"}
			Max trades per day = 03 TGT = 8% {"{"}400{"}"}
			START DATE = 10-07-2023 END DATE = 26-07-2023
		</p>
		</header>
		<div className="page-body">
		<table className="collection-content">
			<thead>
			<tr>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesDate"
					>
					<path d="M3.29688 14.4561H12.7031C14.1797 14.4561 14.9453 13.6904 14.9453 12.2344V3.91504C14.9453 2.45215 14.1797 1.69336 12.7031 1.69336H3.29688C1.82031 1.69336 1.05469 2.45215 1.05469 3.91504V12.2344C1.05469 13.6973 1.82031 14.4561 3.29688 14.4561ZM3.27637 13.1162C2.70898 13.1162 2.39453 12.8154 2.39453 12.2207V5.9043C2.39453 5.30273 2.70898 5.00879 3.27637 5.00879H12.71C13.2842 5.00879 13.6055 5.30273 13.6055 5.9043V12.2207C13.6055 12.8154 13.2842 13.1162 12.71 13.1162H3.27637ZM6.68066 7.38086H7.08398C7.33008 7.38086 7.41211 7.30566 7.41211 7.05957V6.66309C7.41211 6.41699 7.33008 6.3418 7.08398 6.3418H6.68066C6.44141 6.3418 6.35938 6.41699 6.35938 6.66309V7.05957C6.35938 7.30566 6.44141 7.38086 6.68066 7.38086ZM8.92285 7.38086H9.31934C9.56543 7.38086 9.64746 7.30566 9.64746 7.05957V6.66309C9.64746 6.41699 9.56543 6.3418 9.31934 6.3418H8.92285C8.67676 6.3418 8.59473 6.41699 8.59473 6.66309V7.05957C8.59473 7.30566 8.67676 7.38086 8.92285 7.38086ZM11.1582 7.38086H11.5547C11.8008 7.38086 11.8828 7.30566 11.8828 7.05957V6.66309C11.8828 6.41699 11.8008 6.3418 11.5547 6.3418H11.1582C10.9121 6.3418 10.8301 6.41699 10.8301 6.66309V7.05957C10.8301 7.30566 10.9121 7.38086 11.1582 7.38086ZM4.44531 9.58203H4.84863C5.09473 9.58203 5.17676 9.50684 5.17676 9.26074V8.86426C5.17676 8.61816 5.09473 8.54297 4.84863 8.54297H4.44531C4.20605 8.54297 4.12402 8.61816 4.12402 8.86426V9.26074C4.12402 9.50684 4.20605 9.58203 4.44531 9.58203ZM6.68066 9.58203H7.08398C7.33008 9.58203 7.41211 9.50684 7.41211 9.26074V8.86426C7.41211 8.61816 7.33008 8.54297 7.08398 8.54297H6.68066C6.44141 8.54297 6.35938 8.61816 6.35938 8.86426V9.26074C6.35938 9.50684 6.44141 9.58203 6.68066 9.58203ZM8.92285 9.58203H9.31934C9.56543 9.58203 9.64746 9.50684 9.64746 9.26074V8.86426C9.64746 8.61816 9.56543 8.54297 9.31934 8.54297H8.92285C8.67676 8.54297 8.59473 8.61816 8.59473 8.86426V9.26074C8.59473 9.50684 8.67676 9.58203 8.92285 9.58203ZM11.1582 9.58203H11.5547C11.8008 9.58203 11.8828 9.50684 11.8828 9.26074V8.86426C11.8828 8.61816 11.8008 8.54297 11.5547 8.54297H11.1582C10.9121 8.54297 10.8301 8.61816 10.8301 8.86426V9.26074C10.8301 9.50684 10.9121 9.58203 11.1582 9.58203ZM4.44531 11.7832H4.84863C5.09473 11.7832 5.17676 11.708 5.17676 11.4619V11.0654C5.17676 10.8193 5.09473 10.7441 4.84863 10.7441H4.44531C4.20605 10.7441 4.12402 10.8193 4.12402 11.0654V11.4619C4.12402 11.708 4.20605 11.7832 4.44531 11.7832ZM6.68066 11.7832H7.08398C7.33008 11.7832 7.41211 11.708 7.41211 11.4619V11.0654C7.41211 10.8193 7.33008 10.7441 7.08398 10.7441H6.68066C6.44141 10.7441 6.35938 10.8193 6.35938 11.0654V11.4619C6.35938 11.708 6.44141 11.7832 6.68066 11.7832ZM8.92285 11.7832H9.31934C9.56543 11.7832 9.64746 11.708 9.64746 11.4619V11.0654C9.64746 10.8193 9.56543 10.7441 9.31934 10.7441H8.92285C8.67676 10.7441 8.59473 10.8193 8.59473 11.0654V11.4619C8.59473 11.708 8.67676 11.7832 8.92285 11.7832Z" />
					</svg>
				</span>
				DATE
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesTitle"
					>
					<path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z" />
					</svg>
				</span>
				PAIR{" "}
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesFile"
					>
					<path d="M12.5938 8.44043L7.54883 13.4854C6.26367 14.7773 4.54102 14.6475 3.44043 13.54C2.32617 12.4326 2.20312 10.7168 3.49512 9.4248L10.3926 2.52734C11.1445 1.77539 12.2725 1.63867 13.0039 2.37695C13.7422 3.11523 13.6055 4.22949 12.8535 4.98828L6.08594 11.7627C5.77832 12.0703 5.41602 11.9814 5.2041 11.7764C4.99902 11.5576 4.91016 11.2021 5.21777 10.8877L9.93457 6.1709C10.1738 5.93164 10.1875 5.58301 9.96191 5.35059C9.72949 5.13184 9.38086 5.13867 9.1416 5.37793L4.39746 10.1152C3.67285 10.8535 3.7002 11.9746 4.34961 12.624C5.05371 13.3281 6.12012 13.3145 6.8584 12.5762L13.6602 5.77441C14.9795 4.45508 14.9316 2.71875 13.7764 1.55664C12.6416 0.428711 10.8779 0.34668 9.55176 1.66602L2.61328 8.61816C0.883789 10.3477 1 12.8291 2.57227 14.4014C4.14453 15.9668 6.63281 16.0898 8.3623 14.3672L13.4414 9.28809C13.6738 9.0625 13.667 8.64551 13.4346 8.41992C13.209 8.18066 12.833 8.21484 12.5938 8.44043Z" />
					</svg>
				</span>
				Trade Report
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesNumber"
					>
					<path d="M2.4834 10.9902H4.33594L3.75488 13.8887C3.74121 13.9639 3.72754 14.0664 3.72754 14.1416C3.72754 14.5381 3.99414 14.7637 4.39746 14.7637C4.81445 14.7637 5.09473 14.5449 5.18359 14.1143L5.80566 10.9902H8.79297L8.21191 13.8887C8.19824 13.9639 8.18457 14.0664 8.18457 14.1416C8.18457 14.5381 8.45117 14.7637 8.85449 14.7637C9.27148 14.7637 9.55176 14.5449 9.63379 14.1143L10.2627 10.9902H12.4502C12.9287 10.9902 13.2432 10.6758 13.2432 10.2109C13.2432 9.8418 12.9902 9.56836 12.6006 9.56836H10.5498L11.2129 6.28711H13.3662C13.8379 6.28711 14.1523 5.96582 14.1523 5.50098C14.1523 5.13184 13.9062 4.8584 13.5098 4.8584H11.5L12.0195 2.27441C12.0264 2.21973 12.0469 2.11035 12.0469 2.01465C12.0469 1.625 11.7666 1.39258 11.3633 1.39258C10.9053 1.39258 10.6797 1.63867 10.5977 2.05566L10.0303 4.8584H7.04297L7.5625 2.27441C7.57617 2.21973 7.58984 2.11035 7.58984 2.01465C7.58984 1.625 7.30957 1.39258 6.91309 1.39258C6.44824 1.39258 6.21582 1.63867 6.13379 2.05566L5.57324 4.8584H3.54297C3.06445 4.8584 2.75 5.18652 2.75 5.65137C2.75 6.03418 3.00293 6.28711 3.39258 6.28711H5.28613L4.62305 9.56836H2.63379C2.15527 9.56836 1.84082 9.89648 1.84082 10.3613C1.84082 10.7373 2.09375 10.9902 2.4834 10.9902ZM6.09277 9.56836L6.75586 6.28711H9.74316L9.08008 9.56836H6.09277Z" />
					</svg>
				</span>
				LOTS
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesSelect"
					>
					<path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z" />
					</svg>
				</span>
				TYPE
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesNumber"
					>
					<path d="M2.4834 10.9902H4.33594L3.75488 13.8887C3.74121 13.9639 3.72754 14.0664 3.72754 14.1416C3.72754 14.5381 3.99414 14.7637 4.39746 14.7637C4.81445 14.7637 5.09473 14.5449 5.18359 14.1143L5.80566 10.9902H8.79297L8.21191 13.8887C8.19824 13.9639 8.18457 14.0664 8.18457 14.1416C8.18457 14.5381 8.45117 14.7637 8.85449 14.7637C9.27148 14.7637 9.55176 14.5449 9.63379 14.1143L10.2627 10.9902H12.4502C12.9287 10.9902 13.2432 10.6758 13.2432 10.2109C13.2432 9.8418 12.9902 9.56836 12.6006 9.56836H10.5498L11.2129 6.28711H13.3662C13.8379 6.28711 14.1523 5.96582 14.1523 5.50098C14.1523 5.13184 13.9062 4.8584 13.5098 4.8584H11.5L12.0195 2.27441C12.0264 2.21973 12.0469 2.11035 12.0469 2.01465C12.0469 1.625 11.7666 1.39258 11.3633 1.39258C10.9053 1.39258 10.6797 1.63867 10.5977 2.05566L10.0303 4.8584H7.04297L7.5625 2.27441C7.57617 2.21973 7.58984 2.11035 7.58984 2.01465C7.58984 1.625 7.30957 1.39258 6.91309 1.39258C6.44824 1.39258 6.21582 1.63867 6.13379 2.05566L5.57324 4.8584H3.54297C3.06445 4.8584 2.75 5.18652 2.75 5.65137C2.75 6.03418 3.00293 6.28711 3.39258 6.28711H5.28613L4.62305 9.56836H2.63379C2.15527 9.56836 1.84082 9.89648 1.84082 10.3613C1.84082 10.7373 2.09375 10.9902 2.4834 10.9902ZM6.09277 9.56836L6.75586 6.28711H9.74316L9.08008 9.56836H6.09277Z" />
					</svg>
				</span>
				Entry
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesText"
					>
					<path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z" />
					</svg>
				</span>
				Setup
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesText"
					>
					<path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z" />
					</svg>
				</span>
				TIME FRAME{" "}
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesNumber"
					>
					<path d="M2.4834 10.9902H4.33594L3.75488 13.8887C3.74121 13.9639 3.72754 14.0664 3.72754 14.1416C3.72754 14.5381 3.99414 14.7637 4.39746 14.7637C4.81445 14.7637 5.09473 14.5449 5.18359 14.1143L5.80566 10.9902H8.79297L8.21191 13.8887C8.19824 13.9639 8.18457 14.0664 8.18457 14.1416C8.18457 14.5381 8.45117 14.7637 8.85449 14.7637C9.27148 14.7637 9.55176 14.5449 9.63379 14.1143L10.2627 10.9902H12.4502C12.9287 10.9902 13.2432 10.6758 13.2432 10.2109C13.2432 9.8418 12.9902 9.56836 12.6006 9.56836H10.5498L11.2129 6.28711H13.3662C13.8379 6.28711 14.1523 5.96582 14.1523 5.50098C14.1523 5.13184 13.9062 4.8584 13.5098 4.8584H11.5L12.0195 2.27441C12.0264 2.21973 12.0469 2.11035 12.0469 2.01465C12.0469 1.625 11.7666 1.39258 11.3633 1.39258C10.9053 1.39258 10.6797 1.63867 10.5977 2.05566L10.0303 4.8584H7.04297L7.5625 2.27441C7.57617 2.21973 7.58984 2.11035 7.58984 2.01465C7.58984 1.625 7.30957 1.39258 6.91309 1.39258C6.44824 1.39258 6.21582 1.63867 6.13379 2.05566L5.57324 4.8584H3.54297C3.06445 4.8584 2.75 5.18652 2.75 5.65137C2.75 6.03418 3.00293 6.28711 3.39258 6.28711H5.28613L4.62305 9.56836H2.63379C2.15527 9.56836 1.84082 9.89648 1.84082 10.3613C1.84082 10.7373 2.09375 10.9902 2.4834 10.9902ZM6.09277 9.56836L6.75586 6.28711H9.74316L9.08008 9.56836H6.09277Z" />
					</svg>
				</span>
				Stoploss
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesNumber"
					>
					<path d="M2.4834 10.9902H4.33594L3.75488 13.8887C3.74121 13.9639 3.72754 14.0664 3.72754 14.1416C3.72754 14.5381 3.99414 14.7637 4.39746 14.7637C4.81445 14.7637 5.09473 14.5449 5.18359 14.1143L5.80566 10.9902H8.79297L8.21191 13.8887C8.19824 13.9639 8.18457 14.0664 8.18457 14.1416C8.18457 14.5381 8.45117 14.7637 8.85449 14.7637C9.27148 14.7637 9.55176 14.5449 9.63379 14.1143L10.2627 10.9902H12.4502C12.9287 10.9902 13.2432 10.6758 13.2432 10.2109C13.2432 9.8418 12.9902 9.56836 12.6006 9.56836H10.5498L11.2129 6.28711H13.3662C13.8379 6.28711 14.1523 5.96582 14.1523 5.50098C14.1523 5.13184 13.9062 4.8584 13.5098 4.8584H11.5L12.0195 2.27441C12.0264 2.21973 12.0469 2.11035 12.0469 2.01465C12.0469 1.625 11.7666 1.39258 11.3633 1.39258C10.9053 1.39258 10.6797 1.63867 10.5977 2.05566L10.0303 4.8584H7.04297L7.5625 2.27441C7.57617 2.21973 7.58984 2.11035 7.58984 2.01465C7.58984 1.625 7.30957 1.39258 6.91309 1.39258C6.44824 1.39258 6.21582 1.63867 6.13379 2.05566L5.57324 4.8584H3.54297C3.06445 4.8584 2.75 5.18652 2.75 5.65137C2.75 6.03418 3.00293 6.28711 3.39258 6.28711H5.28613L4.62305 9.56836H2.63379C2.15527 9.56836 1.84082 9.89648 1.84082 10.3613C1.84082 10.7373 2.09375 10.9902 2.4834 10.9902ZM6.09277 9.56836L6.75586 6.28711H9.74316L9.08008 9.56836H6.09277Z" />
					</svg>
				</span>
				EXIT AVG.
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesSelect"
					>
					<path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z" />
					</svg>
				</span>
				Exit Logic
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesNumber"
					>
					<path d="M2.4834 10.9902H4.33594L3.75488 13.8887C3.74121 13.9639 3.72754 14.0664 3.72754 14.1416C3.72754 14.5381 3.99414 14.7637 4.39746 14.7637C4.81445 14.7637 5.09473 14.5449 5.18359 14.1143L5.80566 10.9902H8.79297L8.21191 13.8887C8.19824 13.9639 8.18457 14.0664 8.18457 14.1416C8.18457 14.5381 8.45117 14.7637 8.85449 14.7637C9.27148 14.7637 9.55176 14.5449 9.63379 14.1143L10.2627 10.9902H12.4502C12.9287 10.9902 13.2432 10.6758 13.2432 10.2109C13.2432 9.8418 12.9902 9.56836 12.6006 9.56836H10.5498L11.2129 6.28711H13.3662C13.8379 6.28711 14.1523 5.96582 14.1523 5.50098C14.1523 5.13184 13.9062 4.8584 13.5098 4.8584H11.5L12.0195 2.27441C12.0264 2.21973 12.0469 2.11035 12.0469 2.01465C12.0469 1.625 11.7666 1.39258 11.3633 1.39258C10.9053 1.39258 10.6797 1.63867 10.5977 2.05566L10.0303 4.8584H7.04297L7.5625 2.27441C7.57617 2.21973 7.58984 2.11035 7.58984 2.01465C7.58984 1.625 7.30957 1.39258 6.91309 1.39258C6.44824 1.39258 6.21582 1.63867 6.13379 2.05566L5.57324 4.8584H3.54297C3.06445 4.8584 2.75 5.18652 2.75 5.65137C2.75 6.03418 3.00293 6.28711 3.39258 6.28711H5.28613L4.62305 9.56836H2.63379C2.15527 9.56836 1.84082 9.89648 1.84082 10.3613C1.84082 10.7373 2.09375 10.9902 2.4834 10.9902ZM6.09277 9.56836L6.75586 6.28711H9.74316L9.08008 9.56836H6.09277Z" />
					</svg>
				</span>
				Net P&amp;L
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesText"
					>
					<path d="M1.56738 3.25879H14.4258C14.7676 3.25879 15.0479 2.97852 15.0479 2.63672C15.0479 2.29492 14.7744 2.02148 14.4258 2.02148H1.56738C1.21875 2.02148 0.952148 2.29492 0.952148 2.63672C0.952148 2.97852 1.22559 3.25879 1.56738 3.25879ZM1.56738 6.84082H14.4258C14.7676 6.84082 15.0479 6.56055 15.0479 6.21875C15.0479 5.87695 14.7744 5.60352 14.4258 5.60352H1.56738C1.21875 5.60352 0.952148 5.87695 0.952148 6.21875C0.952148 6.56055 1.22559 6.84082 1.56738 6.84082ZM1.56738 10.4229H14.4258C14.7676 10.4229 15.0479 10.1426 15.0479 9.80078C15.0479 9.45898 14.7744 9.18555 14.4258 9.18555H1.56738C1.21875 9.18555 0.952148 9.45898 0.952148 9.80078C0.952148 10.1426 1.22559 10.4229 1.56738 10.4229ZM1.56738 14.0049H8.75879C9.10059 14.0049 9.38086 13.7246 9.38086 13.3828C9.38086 13.041 9.10742 12.7676 8.75879 12.7676H1.56738C1.21875 12.7676 0.952148 13.041 0.952148 13.3828C0.952148 13.7246 1.22559 14.0049 1.56738 14.0049Z" />
					</svg>
				</span>
				ROI
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesSelect"
					>
					<path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z" />
					</svg>
				</span>
				Rules Followed{" "}
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesSelect"
					>
					<path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z" />
					</svg>
				</span>
				Money Management{" "}
				</th>
				<th>
				<span className="icon property-icon">
					<svg
					role="graphics-symbol"
					viewBox="0 0 16 16"
					style={{
						width: 14,
						height: 14,
						display: "block",
						fill: "rgba(55, 53, 47, 0.45)",
						flexShrink: 0
					}}
					className="typesMultipleSelect"
					>
					<path d="M1.91602 4.83789C2.44238 4.83789 2.87305 4.40723 2.87305 3.87402C2.87305 3.34766 2.44238 2.91699 1.91602 2.91699C1.38281 2.91699 0.952148 3.34766 0.952148 3.87402C0.952148 4.40723 1.38281 4.83789 1.91602 4.83789ZM5.1084 4.52344H14.3984C14.7607 4.52344 15.0479 4.23633 15.0479 3.87402C15.0479 3.51172 14.7607 3.22461 14.3984 3.22461H5.1084C4.74609 3.22461 4.45898 3.51172 4.45898 3.87402C4.45898 4.23633 4.74609 4.52344 5.1084 4.52344ZM1.91602 9.03516C2.44238 9.03516 2.87305 8.60449 2.87305 8.07129C2.87305 7.54492 2.44238 7.11426 1.91602 7.11426C1.38281 7.11426 0.952148 7.54492 0.952148 8.07129C0.952148 8.60449 1.38281 9.03516 1.91602 9.03516ZM5.1084 8.7207H14.3984C14.7607 8.7207 15.0479 8.43359 15.0479 8.07129C15.0479 7.70898 14.7607 7.42188 14.3984 7.42188H5.1084C4.74609 7.42188 4.45898 7.70898 4.45898 8.07129C4.45898 8.43359 4.74609 8.7207 5.1084 8.7207ZM1.91602 13.2324C2.44238 13.2324 2.87305 12.8018 2.87305 12.2686C2.87305 11.7422 2.44238 11.3115 1.91602 11.3115C1.38281 11.3115 0.952148 11.7422 0.952148 12.2686C0.952148 12.8018 1.38281 13.2324 1.91602 13.2324ZM5.1084 12.918H14.3984C14.7607 12.918 15.0479 12.6309 15.0479 12.2686C15.0479 11.9062 14.7607 11.6191 14.3984 11.6191H5.1084C4.74609 11.6191 4.45898 11.9062 4.45898 12.2686C4.45898 12.6309 4.74609 12.918 5.1084 12.918Z" />
					</svg>
				</span>
				RISK{" "}
				</th>
			</tr>
			</thead>
			<tbody>
			<tr id="c3e60e01-2e81-4272-a497-0e455910f1c1">
				<td className="cell-Q~XL">
				<time>@10/07/2023 11:45 AM (GMT+5:30) → 12:00 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-c3e60e012e814272a4970e455910f1c1?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/ew9nsgIL/">
					https://www.tradingview.com/x/ew9nsgIL/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.17</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1920.18</td>
				<td className="cell-BhM|">Rejection from Support</td>
				<td className="cell-O@SE">5 min, 15 min</td>
				<td className="cell-ZObT">1918.91</td>
				<td className="cell-j+)N">1923.18</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">50.5</td>
				<td className="cell-cq?A">+1%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-purple">
					FULL
				</span>
				</td>
			</tr>
			<tr id="93bb10e3-f581-4a14-b114-d95fda629f53">
				<td className="cell-Q~XL">
				<time>@10/07/2023 7:15 PM (GMT+5:30) → 7:20 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-93bb10e3f5814a14b114d95fda629f53?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/XSZTj2IB/">
					https://www.tradingview.com/x/XSZTj2IB/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/WksK2iDC/">
					https://www.tradingview.com/x/WksK2iDC/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.04</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-red">
					SHORT
				</span>
				</td>
				<td className="cell-\]yi">1921.47</td>
				<td className="cell-BhM|">Rejection from resistance</td>
				<td className="cell-O@SE">5min, 15min </td>
				<td className="cell-ZObT">1924.17</td>
				<td className="cell-j+)N">1924.17</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-red">
					SL Hit
				</span>
				</td>
				<td className="cell-Hmcq">-11</td>
				<td className="cell-cq?A">-0.22%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="d53f7c61-81b1-4720-a4fe-01936b548268">
				<td className="cell-Q~XL">
				<time>@11/07/2023 9:00 AM (GMT+5:30) → 9:25 AM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-d53f7c6181b14720a4fe01936b548268?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/gB9MhJu1/">
					https://www.tradingview.com/x/gB9MhJu1/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.1</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1926.82</td>
				<td className="cell-BhM|">Breakout + Retest </td>
				<td className="cell-O@SE">5 min</td>
				<td className="cell-ZObT">1925.33</td>
				<td className="cell-j+)N">1926.17</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-purple">
					other
				</span>
				</td>
				<td className="cell-Hmcq">-7</td>
				<td className="cell-cq?A">-0.14%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="07598ff9-714d-4ab1-a09d-6636d82b7870">
				<td className="cell-Q~XL">
				<time>@11/07/2023 1:00 PM (GMT+5:30) → 1:45 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-07598ff9714d4ab1a09d6636d82b7870?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/Ur6mazy8/">
					https://www.tradingview.com/x/Ur6mazy8/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/5yEhT7jX/">
					https://www.tradingview.com/x/5yEhT7jX/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.11</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1931.37</td>
				<td className="cell-BhM|">Breakout + Retest</td>
				<td className="cell-O@SE">5 min</td>
				<td className="cell-ZObT">1929.13</td>
				<td className="cell-j+)N">1936.02</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">50.5</td>
				<td className="cell-cq?A">+1.01%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-purple">
					FULL
				</span>
				</td>
			</tr>
			<tr id="9748f49c-2349-4cc1-bb24-9dd04ae894ae">
				<td className="cell-Q~XL">
				<time>@12/07/2023 8:25 AM (GMT+5:30) → 10:50 AM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-9748f49c23494cc1bb249dd04ae894ae?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/kcxuvd3C/">
					https://www.tradingview.com/x/kcxuvd3C/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/tmW3PdRH/">
					https://www.tradingview.com/x/tmW3PdRH/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.1</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-red">
					SHORT
				</span>
				</td>
				<td className="cell-\]yi">1940.08</td>
				<td className="cell-BhM|">Rejection from major resistance </td>
				<td className="cell-O@SE">15 min, 5 min</td>
				<td className="cell-ZObT">1941.6</td>
				<td className="cell-j+)N">1940.06</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-gray">
					TSL Hit
				</span>
				</td>
				<td className="cell-Hmcq">-0.1</td>
				<td className="cell-cq?A">-0.002%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="aad240d6-ab4b-4f22-a94b-0e7d92fce061">
				<td className="cell-Q~XL">
				<time>@17/07/2023 6:40 AM (GMT+5:30) → 10:45 AM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-aad240d6ab4b4f22a94b0e7d92fce061?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/xi3SsPUl/">
					https://www.tradingview.com/x/xi3SsPUl/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.06</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-red">
					SHORT
				</span>
				</td>
				<td className="cell-\]yi">1953.87</td>
				<td className="cell-BhM|">Breakdown + Retest</td>
				<td className="cell-O@SE">15 min, 5 min</td>
				<td className="cell-ZObT">1956.22</td>
				<td className="cell-j+)N">1954.012</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-gray">
					TSL Hit
				</span>
				</td>
				<td className="cell-Hmcq">-11</td>
				<td className="cell-cq?A">-0.22%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="d2e3aa27-e1de-49b8-8742-a531cc9b8f78">
				<td className="cell-Q~XL">
				<time>@17/07/2023 7:00 AM (GMT+5:30) → 9:55 AM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-d2e3aa27e1de49b88742a531cc9b8f78?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/nakoFX93/">
					https://www.tradingview.com/x/nakoFX93/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.06</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-red">
					SHORT
				</span>
				</td>
				<td className="cell-\]yi">1954.92</td>
				<td className="cell-BhM|">
				Breakdown + Retest (same setup as 1st one )
				</td>
				<td className="cell-O@SE">15min, 5 min</td>
				<td className="cell-ZObT">1956.51</td>
				<td className="cell-j+)N">1952.56</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-gray">
					TSL Hit
				</span>
				</td>
				<td className="cell-Hmcq">14</td>
				<td className="cell-cq?A">+0.28%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-red">NO</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="1a24510a-028d-4e43-aca2-027b888c5f81">
				<td className="cell-Q~XL">
				<time>@17/07/2023 11:15 AM (GMT+5:30) → 12:45 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-1a24510a028d4e43aca2027b888c5f81?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/z8utd9Y1/">
					https://www.tradingview.com/x/z8utd9Y1/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/2ROp7PcE/">
					https://www.tradingview.com/x/2ROp7PcE/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.08</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-red">
					SHORT
				</span>
				</td>
				<td className="cell-\]yi">1955.55</td>
				<td className="cell-BhM|">Rejection from resistance</td>
				<td className="cell-O@SE">15min, 5 min</td>
				<td className="cell-ZObT">1957.43</td>
				<td className="cell-j+)N">1951.61</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">31</td>
				<td className="cell-cq?A">+0.62%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="6bc52c78-3b67-416c-9289-6cb5c31cbcfb">
				<td className="cell-Q~XL">
				<time>@18/07/2023 1:20 PM (GMT+5:30) → 4:15 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-6bc52c783b67416c92896cb5c31cbcfb?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/HizkAERc/">
					https://www.tradingview.com/x/HizkAERc/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/T3RKbEfH/">
					https://www.tradingview.com/x/T3RKbEfH/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.08</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-red">
					SHORT
				</span>
				</td>
				<td className="cell-\]yi">1962.72</td>
				<td className="cell-BhM|">Rejection from resistance</td>
				<td className="cell-O@SE">15min, 5 min</td>
				<td className="cell-ZObT">1964.85</td>
				<td className="cell-j+)N">1964.38</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-gray">
					TSL Hit
				</span>
				</td>
				<td className="cell-Hmcq">-10.56</td>
				<td className="cell-cq?A">-0.21%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="800ecd16-3fe3-4dad-bbf3-07ecd5fbdb14">
				<td className="cell-Q~XL">
				<time>
					@18/07/2023 8:30 PM (GMT+5:30) → 19/07/2023 7:35 AM (GMT+5:30)
				</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-800ecd163fe34dadbbf307ecd5fbdb14?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/nKnpMdPS/">
					https://www.tradingview.com/x/nKnpMdPS/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/mpflXw2d/">
					https://www.tradingview.com/x/mpflXw2d/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.05</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-red">
					SHORT
				</span>
				</td>
				<td className="cell-\]yi">1982.5</td>
				<td className="cell-BhM|">Rejection from major resistance</td>
				<td className="cell-O@SE">15min, 5 min</td>
				<td className="cell-ZObT">1985.24</td>
				<td className="cell-j+)N">1975.49</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">35</td>
				<td className="cell-cq?A">+0.7%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="e622dbd6-f07c-4a2a-89ba-fe70c9a3b6b3">
				<td className="cell-Q~XL">
				<time>@19/07/2023 10:05 AM (GMT+5:30) → 11:25 AM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-e622dbd6f07c4a2a89bafe70c9a3b6b3?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/CzvOI8B8/">
					https://www.tradingview.com/x/CzvOI8B8/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/ML9hVFkF/">
					https://www.tradingview.com/x/ML9hVFkF/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.19</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1975.04</td>
				<td className="cell-BhM|">Rejection from support </td>
				<td className="cell-O@SE">15 min, 5 min</td>
				<td className="cell-ZObT">1973.74</td>
				<td className="cell-j+)N">1978.09</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">57.5</td>
				<td className="cell-cq?A">+1.15%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-purple">
					FULL
				</span>
				</td>
			</tr>
			<tr id="b8c01416-78d8-4905-8c53-4ebc281df4dd">
				<td className="cell-Q~XL">
				<time>@20/07/2023 1:25 PM (GMT+5:30) → 2:15 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-b8c0141678d849058c534ebc281df4dd?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/cxTgIdk8/">
					https://www.tradingview.com/x/cxTgIdk8/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/FAsCBVtm/">
					https://www.tradingview.com/x/FAsCBVtm/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.19</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1979.13</td>
				<td className="cell-BhM|">Rejection from support</td>
				<td className="cell-O@SE">15min, 5min</td>
				<td className="cell-ZObT">1977.3</td>
				<td className="cell-j+)N">1983.72</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">50.6</td>
				<td className="cell-cq?A">+1.01%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-purple">
					FULL
				</span>
				</td>
			</tr>
			<tr id="03eb5063-f7d5-4337-87ee-b6ffefe8d72e">
				<td className="cell-Q~XL">
				<time>@21/07/2023 2:20 PM (GMT+5:30) → 2:25 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-03eb5063f7d5433787eeb6ffefe8d72e?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/W45Y3YXu/">
					https://www.tradingview.com/x/W45Y3YXu/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/C1PQmxld/">
					https://www.tradingview.com/x/C1PQmxld/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.07</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1963.31</td>
				<td className="cell-BhM|">Rejection from major support </td>
				<td className="cell-O@SE">15min, 5 min</td>
				<td className="cell-ZObT">1961.23</td>
				<td className="cell-j+)N">1961.23</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-red">
					SL Hit
				</span>
				</td>
				<td className="cell-Hmcq">-15</td>
				<td className="cell-cq?A">-0.3%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="bae43829-9056-45fd-8b6a-d4b1ae5dee67">
				<td className="cell-Q~XL">
				<time>@24/07/2023 10:00 AM (GMT+5:30) → 11:30 AM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-bae43829905645fd8b6ad4b1ae5dee67?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/yqILzyoD/">
					https://www.tradingview.com/x/yqILzyoD/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/oqTNwT06/">
					https://www.tradingview.com/x/oqTNwT06/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.15</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1959.64</td>
				<td className="cell-BhM|">Rejection from Support</td>
				<td className="cell-O@SE">15min, 5min</td>
				<td className="cell-ZObT">1958.49</td>
				<td className="cell-j+)N">1959.68</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-gray">
					TSL Hit
				</span>
				</td>
				<td className="cell-Hmcq">-0.15</td>
				<td className="cell-cq?A">-0.003%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-red">NO</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-red">NO</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="4413cd67-eb83-4b43-860c-cb6e68dc8759">
				<td className="cell-Q~XL">
				<time>@24/07/2023 11:50 AM (GMT+5:30) → 12:30 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-4413cd67eb834b43860ccb6e68dc8759?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/RLC13ij5/">
					https://www.tradingview.com/x/RLC13ij5/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/LjGtsETh/">
					https://www.tradingview.com/x/LjGtsETh/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.08</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1959.64</td>
				<td className="cell-BhM|">Rejection from support</td>
				<td className="cell-O@SE">15min, 5 min</td>
				<td className="cell-ZObT">1957.59</td>
				<td className="cell-j+)N">1963.9</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">34</td>
				<td className="cell-cq?A">+0.68%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="22c83fc3-2b26-4c40-a00f-007a68c2c842">
				<td className="cell-Q~XL">
				<time>@25/07/2023 5:05 PM (GMT+5:30) → 5:20 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-22c83fc32b264c40a00f007a68c2c842?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/0o109Csk/">
					https://www.tradingview.com/x/0o109Csk/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/AY8IakjS/">
					https://www.tradingview.com/x/AY8IakjS/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.07</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1954.64</td>
				<td className="cell-BhM|">Rejection from support</td>
				<td className="cell-O@SE">15min, 5min</td>
				<td className="cell-ZObT">1952.62</td>
				<td className="cell-j+)N">1959.39</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">33</td>
				<td className="cell-cq?A">+0.66%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="b6f99734-b1f4-4e5d-a20d-837509621be4">
				<td className="cell-Q~XL">
				<time>@26/07/2023 5:15 PM (GMT+5:30) → 7:00 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-b6f99734b1f44e5da20d837509621be4?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/WFOzB1j2/">
					https://www.tradingview.com/x/WFOzB1j2/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/7fuKXPxQ/">
					https://www.tradingview.com/x/7fuKXPxQ/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.07</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-red">
					SHORT
				</span>
				</td>
				<td className="cell-\]yi">1972.42</td>
				<td className="cell-BhM|">Rejection from resistance </td>
				<td className="cell-O@SE">15min, 5min</td>
				<td className="cell-ZObT">1974.72</td>
				<td className="cell-j+)N">1967.41</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">34.5</td>
				<td className="cell-cq?A">+0.69%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-blue">
					HALF
				</span>
				</td>
			</tr>
			<tr id="e92036a9-75c6-4f69-b8fb-45c380f0c7e4">
				<td className="cell-Q~XL">
				<time>@26/07/2023 7:20 PM (GMT+5:30) → 8:45 PM</time>
				</td>
				<td className="cell-title">
				<a href="https://www.notion.so/XAUUSD-e92036a975c64f69b8fb45c380f0c7e4?pvs=21">
					XAUUSD
				</a>
				</td>
				<td className="cell-_VYk">
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/385IOolk/">
					https://www.tradingview.com/x/385IOolk/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/3EtueIaV/">
					https://www.tradingview.com/x/3EtueIaV/
					</a>
				</span>
				<span style={{ marginRight: 6 }}>
					<a href="https://www.tradingview.com/x/7II0vGsd/">
					https://www.tradingview.com/x/7II0vGsd/
					</a>
				</span>
				</td>
				<td className="cell-<<La">0.09</td>
				<td className="cell-wpgo">
				<span className="selected-value select-value-color-green">
					LONG
				</span>
				</td>
				<td className="cell-\]yi">1965.78</td>
				<td className="cell-BhM|">Breakout and retest </td>
				<td className="cell-O@SE">15min, 5min</td>
				<td className="cell-ZObT">1963.1</td>
				<td className="cell-j+)N">1972.79</td>
				<td className="cell-Mbrk">
				<span className="selected-value select-value-color-green">
					TP hit
				</span>
				</td>
				<td className="cell-Hmcq">62.5</td>
				<td className="cell-cq?A">+1.25%</td>
				<td className="cell-vqzG">
				<span className="selected-value select-value-color-green">
					YES{" "}
				</span>
				</td>
				<td className="cell-_ixz">
				<span className="selected-value select-value-color-green">
					YES
				</span>
				</td>
				<td className="cell-kl?D">
				<span className="selected-value select-value-color-purple">
					FULL
				</span>
				</td>
			</tr>
			<tr id="2e8afc0c-e1db-4763-97ad-4a8cc18701aa">
				<td className="cell-Q~XL" />
				<td className="cell-title">
				<a href="https://www.notion.so/2e8afc0ce1db476397ad4a8cc18701aa?pvs=21">
					Untitled
				</a>
				</td>
				<td className="cell-_VYk" />
				<td className="cell-<<La" />
				<td className="cell-wpgo" />
				<td className="cell-\]yi" />
				<td className="cell-BhM|" />
				<td className="cell-O@SE" />
				<td className="cell-ZObT" />
				<td className="cell-j+)N" />
				<td className="cell-Mbrk" />
				<td className="cell-Hmcq" />
				<td className="cell-cq?A" />
				<td className="cell-vqzG" />
				<td className="cell-_ixz" />
				<td className="cell-kl?D" />
			</tr>
			</tbody>
		</table>
		<br />
		<br />
		</div>
	</article>
	<span className="sans" style={{ fontSize: 14, paddingTop: "2em" }} />
	</>
	</div>
  )
}
