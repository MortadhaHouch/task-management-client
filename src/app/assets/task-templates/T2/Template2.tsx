export default function Template2() {
	return (
		<div>
			<>
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<title>New Apartment Move-In</title>
				<style
					dangerouslySetInnerHTML={{
					__html:
						"\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\tpadding-inline-start: 0;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.page-description {\n    margin-bottom: 2em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI Variable Display\", \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-default_background {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 237, 214, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-default_background {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 237, 214, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-uiBlue { background-color: rgba(35, 131, 226, .07); }\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-transparentGray { background-color: rgba(227, 226, 224, 0); }\n.select-value-color-translucentGray { background-color: rgba(0, 0, 0, 0.06); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(249, 228, 188, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n.select-value-color-pageGlass { background-color: undefined; }\n.select-value-color-washGlass { background-color: undefined; }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n"
					}}
				/>
				<article id="17249cdd-dce8-4ef8-92a6-92fd35762d8e" className="page sans">
					<header>
					<div className="page-header-icon undefined">
						<img
						className="icon"
						src="https://www.notion.so/icons/package_gray.svg"
						/>
					</div>
					<h1 className="page-title">New Apartment Move-In</h1>
					<p className="page-description" />
					</header>
					<div className="page-body">
					<figure
						className="block-color-yellow_background callout"
						style={{ whiteSpace: "pre-wrap", display: "flex" }}
						id="22c6b568-d49b-4d6f-b4d6-6334264eb672"
					>
						<div style={{ fontSize: "1.5em" }}>
						<img
							className="icon"
							src="https://www.notion.so/icons/light-bulb_yellow.svg"
						/>
						</div>
						<div style={{ width: "100%" }}>
						Use this template when you and your roommates are getting ready to
						move into a new apartment!
						</div>
					</figure>
					<p id="499fc0b9-e2bb-4886-9327-6b07a0bb58f7" className=""></p>
					<div id="2b793c15-5f3e-45eb-bca5-7720e4656ec0" className="column-list">
						<div
						id="7c1e9dd8-8599-4dfb-8e1d-c415ad6e5f77"
						style={{ width: "31.25%" }}
						className="column"
						>
						<figure
							className="block-color-gray_background callout"
							style={{ whiteSpace: "pre-wrap", display: "flex" }}
							id="4c17f43b-aa60-48b4-b697-c47eedc114a5"
						>
							<div style={{ fontSize: "1.5em" }}>
							<img
								className="icon"
								src="https://www.notion.so/icons/luggage-cart_gray.svg"
							/>
							</div>
							<div style={{ width: "100%" }}>
							<strong>
								Move In Dates:
								<br />
								<br />
								<br />
							</strong>
							<strong>
								<time>@September 3, 2024</time>
							</strong>
							<strong>
								{" "}
								- Anna &amp; Tiffany
								<br />
								<br />
								<br />
							</strong>
							<strong>
								<time>@September 4, 2024</time>
							</strong>
							<strong> - Johnny &amp; Alex</strong>
							</div>
						</figure>
						<h2 id="41f9d9c2-a140-4351-8c06-d65483adb929" className="">
							Rules &amp; Info
						</h2>
						<hr id="4cd1f19a-6759-4897-bcee-e40af0a166c0" />
						<figure
							id="43d59d68-9178-4043-bd26-f84e06b8951a"
							className="link-to-page"
						>
							<a href="https://www.notion.so/Apartment-Rules-43d59d6891784043bd26f84e06b8951a?pvs=21">
							<img
								className="icon"
								src="https://www.notion.so/icons/paste_gray.svg"
							/>
							Apartment Rules
							</a>
						</figure>
						<figure
							id="5e719f97-7065-4dab-8e73-162e09e78844"
							className="link-to-page"
						>
							<a href="https://www.notion.so/Apartment-Info-5e719f9770654dab8e73162e09e78844?pvs=21">
							<img
								className="icon"
								src="https://www.notion.so/icons/info-alternate_gray.svg"
							/>
							Apartment Info
							</a>
						</figure>
						</div>
						<div
						id="7b9ac461-c930-412d-9026-6734e60b2c69"
						style={{ width: "68.75%" }}
						className="column"
						>
						<div
							id="88d95b00-a42d-4e66-bfa2-8be23b9529dd"
							className="collection-content"
						>
							<h4 className="collection-title">Roommates</h4>
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
										className="typesTitle"
									>
										<path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z" />
									</svg>
									</span>
									Name
								</th>
								</tr>
							</thead>
							<tbody>
								<tr id="f46f25a2-b999-44dd-bddc-238d77cb7c9e">
								<td className="cell-title">
									<a href="https://www.notion.so/Anna-f46f25a2b99944ddbddc238d77cb7c9e?pvs=21">
									<img
										className="icon"
										src="https://www.notion.so/icons/hare_gray.svg"
									/>
									Anna
									</a>
								</td>
								</tr>
								<tr id="23003e4c-bca9-4551-be1f-f90fc443f564">
								<td className="cell-title">
									<a href="https://www.notion.so/Tiffany-23003e4cbca94551be1ff90fc443f564?pvs=21">
									<img
										className="icon"
										src="https://www.notion.so/icons/snake_gray.svg"
									/>
									Tiffany
									</a>
								</td>
								</tr>
								<tr id="c6174941-bb5d-4f74-bb86-5a75bf009cd6">
								<td className="cell-title">
									<a href="https://www.notion.so/Johnny-c6174941bb5d4f74bb865a75bf009cd6?pvs=21">
									<img
										className="icon"
										src="https://www.notion.so/icons/whale_gray.svg"
									/>
									Johnny
									</a>
								</td>
								</tr>
								<tr id="9f32f03d-51ad-4c74-85ee-8c8ef672f3c6">
								<td className="cell-title">
									<a href="https://www.notion.so/Alex-9f32f03d51ad4c7485ee8c8ef672f3c6?pvs=21">
									<img
										className="icon"
										src="https://www.notion.so/icons/chicken_gray.svg"
									/>
									Alex
									</a>
								</td>
								</tr>
							</tbody>
							</table>
							<br />
							<br />
						</div>
						</div>
					</div>
					<div
						id="3a9543da-f136-475e-a8fe-9bc0cad54165"
						className="collection-content"
					>
						<h4 className="collection-title">Shared Space Items</h4>
						<table className="collection-content">
						<thead>
							<tr>
							<th>
								<span className="icon property-icon">
								<img
									src="https://www.notion.so/icons/package_gray.svg"
									style={{ width: 14, height: 14 }}
								/>
								</span>
								Item
							</th>
							<th>
								<span className="icon property-icon">
								<img
									src="https://www.notion.so/icons/home_gray.svg"
									style={{ width: 14, height: 14 }}
								/>
								</span>
								Room
							</th>
							<th>
								<span className="icon property-icon">
								<img
									src="https://www.notion.so/icons/broom-and-dustpan_gray.svg"
									style={{ width: 14, height: 14 }}
								/>
								</span>
								Category
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
									className="typesPerson"
								>
									<path d="M10.9536 7.90088C12.217 7.90088 13.2559 6.79468 13.2559 5.38525C13.2559 4.01514 12.2114 2.92017 10.9536 2.92017C9.70142 2.92017 8.65137 4.02637 8.65698 5.39087C8.6626 6.79468 9.69019 7.90088 10.9536 7.90088ZM4.4231 8.03003C5.52368 8.03003 6.42212 7.05859 6.42212 5.83447C6.42212 4.63843 5.51245 3.68945 4.4231 3.68945C3.33374 3.68945 2.41846 4.64966 2.41846 5.84009C2.42407 7.05859 3.32251 8.03003 4.4231 8.03003ZM1.37964 13.168H5.49561C4.87231 12.292 5.43384 10.6074 6.78711 9.51807C6.18628 9.14746 5.37769 8.87231 4.4231 8.87231C1.95239 8.87231 0.262207 10.6917 0.262207 12.1628C0.262207 12.7974 0.548584 13.168 1.37964 13.168ZM7.50024 13.168H14.407C15.4009 13.168 15.7322 12.8423 15.7322 12.2864C15.7322 10.8489 13.8679 8.88354 10.9536 8.88354C8.04492 8.88354 6.17505 10.8489 6.17505 12.2864C6.17505 12.8423 6.50635 13.168 7.50024 13.168Z" />
								</svg>
								</span>
								Owner
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
									className="typesStatus"
								>
									<path d="M8.75488 1.02344C8.75488 0.613281 8.41309 0.264648 8.00293 0.264648C7.59277 0.264648 7.25098 0.613281 7.25098 1.02344V3.11523C7.25098 3.51855 7.59277 3.86719 8.00293 3.86719C8.41309 3.86719 8.75488 3.51855 8.75488 3.11523V1.02344ZM3.91504 5.0293C4.20215 5.31641 4.69434 5.32324 4.97461 5.03613C5.26855 4.74902 5.26855 4.25684 4.98145 3.96973L3.53906 2.52051C3.25195 2.2334 2.7666 2.21973 2.47949 2.50684C2.19238 2.79395 2.18555 3.28613 2.47266 3.57324L3.91504 5.0293ZM10.9629 4.01758C10.6826 4.30469 10.6826 4.79688 10.9697 5.08398C11.2568 5.37109 11.749 5.36426 12.0361 5.07715L13.4854 3.62793C13.7725 3.34082 13.7725 2.84863 13.4785 2.55469C13.1982 2.27441 12.7061 2.27441 12.4189 2.56152L10.9629 4.01758ZM15.0234 8.78906C15.4336 8.78906 15.7822 8.44727 15.7822 8.03711C15.7822 7.62695 15.4336 7.28516 15.0234 7.28516H12.9385C12.5283 7.28516 12.1797 7.62695 12.1797 8.03711C12.1797 8.44727 12.5283 8.78906 12.9385 8.78906H15.0234ZM0.975586 7.28516C0.56543 7.28516 0.223633 7.62695 0.223633 8.03711C0.223633 8.44727 0.56543 8.78906 0.975586 8.78906H3.07422C3.48438 8.78906 3.83301 8.44727 3.83301 8.03711C3.83301 7.62695 3.48438 7.28516 3.07422 7.28516H0.975586ZM12.0361 10.9902C11.749 10.71 11.2568 10.71 10.9629 10.9971C10.6826 11.2842 10.6826 11.7764 10.9697 12.0635L12.4258 13.5127C12.7129 13.7998 13.2051 13.793 13.4922 13.5059C13.7793 13.2256 13.7725 12.7266 13.4854 12.4395L12.0361 10.9902ZM2.52051 12.4395C2.22656 12.7266 2.22656 13.2188 2.50684 13.5059C2.79395 13.793 3.28613 13.7998 3.57324 13.5127L5.02246 12.0703C5.31641 11.7832 5.31641 11.291 5.03613 11.0039C4.74902 10.7168 4.25684 10.71 3.96973 10.9971L2.52051 12.4395ZM8.75488 12.9658C8.75488 12.5557 8.41309 12.207 8.00293 12.207C7.59277 12.207 7.25098 12.5557 7.25098 12.9658V15.0576C7.25098 15.4609 7.59277 15.8096 8.00293 15.8096C8.41309 15.8096 8.75488 15.4609 8.75488 15.0576V12.9658Z" />
								</svg>
								</span>
								Status
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
								Notes
							</th>
							</tr>
						</thead>
						<tbody>
							<tr id="5bd37b84-4091-4937-8e65-d28e5c1024ff">
							<td className="cell-title">
								<a href="https://www.notion.so/Floor-Lamp-5bd37b84409149378e65d28e5c1024ff?pvs=21">
								Floor Lamp
								</a>
							</td>
							<td className="cell-MpFb">
								<span className="selected-value select-value-color-pink">
								Living Room
								</span>
							</td>
							<td className="cell-gSWW">
								<span className="selected-value select-value-color-blue">
								Furniture
								</span>
							</td>
							<td className="cell-KrDM" />
							<td className="cell-Gvba">
								<span className="status-value">
								<div className="status-dot" />
								Plan to Get
								</span>
							</td>
							<td className="cell-ZbEG" />
							</tr>
							<tr id="7fa77914-d3a5-4201-bb46-4512ac87df6d">
							<td className="cell-title">
								<a href="https://www.notion.so/Vacuum-7fa77914d3a54201bb464512ac87df6d?pvs=21">
								Vacuum
								</a>
							</td>
							<td className="cell-MpFb">
								<span className="selected-value select-value-color-blue">
								Laundry Room
								</span>
							</td>
							<td className="cell-gSWW">
								<span className="selected-value select-value-color-default">
								Cleaning
								</span>
							</td>
							<td className="cell-KrDM" />
							<td className="cell-Gvba">
								<span className="status-value select-value-color-blue">
								<div className="status-dot status-dot-color-blue" />
								Ordered
								</span>
							</td>
							<td className="cell-ZbEG">Will arrive August 30th</td>
							</tr>
							<tr id="ab059690-95ba-47a4-8000-b7d238105756">
							<td className="cell-title">
								<a href="https://www.notion.so/Measuring-Cups-ab05969095ba47a48000b7d238105756?pvs=21">
								Measuring Cups
								</a>
							</td>
							<td className="cell-MpFb">
								<span className="selected-value select-value-color-yellow">
								Kitchen
								</span>
							</td>
							<td className="cell-gSWW">
								<span className="selected-value select-value-color-yellow">
								Utensils
								</span>
							</td>
							<td className="cell-KrDM" />
							<td className="cell-Gvba">
								<span className="status-value">
								<div className="status-dot" />
								Plan to Get
								</span>
							</td>
							<td className="cell-ZbEG" />
							</tr>
						</tbody>
						</table>
						<br />
						<br />
					</div>
					<p id="e5034156-c414-423c-8814-1307cd0e2739" className=""></p>
					</div>
				</article>
				<span className="sans" style={{ fontSize: 14, paddingTop: "2em" }} />
				</>

		</div>
	)
}
