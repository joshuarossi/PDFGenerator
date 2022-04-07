const generateStyledNPE = (
  NAME,
  USERNAME,
  NUM,
  TIMEGENERATED,
  DATEGENERATED,
  DATETRANSACTION,
  TIMETRANSACTION,
  NOMBRECLIENTO,
  CodigoPagado,
  ACCOUNTID,
  BAIDTRANSACCION,
  STATUS,
  AMOUNT
) => `<html>

<head>
  <meta name="generator" content="HTML Tidy for HTML5 (experimental) for Windows https://github.com/w3c/tidy-html5/tree/c63cc39" />
  <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <style type="text/css">
    @import url(https://themes.googleusercontent.com/fonts/css?kit=dpiI8CyVsrzWsJLBFKehGpLhv3qFjX7dUn1mYxfCXhI);

    ol {
      margin: 0;
      padding: 0
    }

    table td,
    table th {
      padding: 0
    }

    .c8 {
      border-right-style: solid;
      padding: 2pt 2pt 2pt 2pt;
      border-bottom-color: #ffffff;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #ffffff;
      vertical-align: bottom;
      border-right-color: #ffffff;
      border-left-width: 1pt;
      border-top-style: solid;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 234pt;
      border-top-color: #ffffff;
      border-bottom-style: solid
    }

    .c4 {
      color: #000000;
      font-weight: 700;
      text-decoration: none;
      vertical-align: baseline;
      font-size: 11pt;
      font-family: Roboto;
      font-style: normal
    }

    .c3 {
      color: #000000;
      font-weight: 400;
      text-decoration: none;
      vertical-align: baseline;
      font-size: 12pt;
      font-family: Arial;
      font-style: normal
    }

    .c17 {
      font-weight: 400;
      text-decoration: none;
      vertical-align: baseline;
      font-family: Arial;
      font-style: normal
    }

    .c24 {
      padding-top: 0pt;
      padding-bottom: 5pt;
      line-height: 1.15;
      text-align: left
    }

    .c1 {
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      text-align: left
    }

    .c10 {
      border-spacing: 0;
      border-collapse: collapse;
      margin-right: auto
    }

    .c13 {
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      text-align: right
    }

    .c9 {
      color: #000000;
      text-decoration: none;
      vertical-align: baseline;
      font-style: normal
    }

    .c21 {
      color: #ffffff;
      text-decoration: none;
      vertical-align: baseline;
      font-style: normal
    }

    .c0 {
      font-size: 12pt;
      font-family: Roboto;
      font-weight: 700
    }

    .c19 {
      font-weight: 400;
      font-size: 11pt;
      font-family: Roboto
    }

    .c15 {
      background-color: #ffffff;
      max-width: 468pt;
      padding: 72pt 72pt 72pt 72pt
    }

    .c16 {
      font-weight: 400;
      font-size: 10pt;
      font-family: Arial
    }

    .c2 {
      font-size: 12pt;
      font-family: Roboto;
      font-weight: 400
    }

    .c5 {
      orphans: 2;
      widows: 2
    }

    .c18 {
      font-weight: 700;
      font-family: Roboto
    }

    .c14 {
      color: #ffffff;
      font-size: 9pt
    }

    .c20 {
      color: #000000;
      font-size: 11pt
    }

    .c12 {
      background-color: #efefef
    }

    .c11 {
      background-color: #f3f3f3
    }

    .c6 {
      height: 11pt
    }

    .c22 {
      font-size: 13pt
    }

    .c7 {
      height: 0pt
    }

    .c23 {
      text-indent: -36pt
    }

    .title {
      padding-top: 0pt;
      color: #000000;
      font-size: 26pt;
      padding-bottom: 3pt;
      font-family: Arial;
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
    }

    .subtitle {
      padding-top: 0pt;
      color: #666666;
      font-size: 15pt;
      padding-bottom: 16pt;
      font-family: Arial;
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
    }

    li {
      color: #000000;
      font-size: 11pt;
      font-family: Arial
    }

    p {
      margin: 0;
      color: #000000;
      font-size: 11pt;
      font-family: Arial
    }

    h1 {
      padding-top: 20pt;
      color: #000000;
      font-size: 20pt;
      padding-bottom: 6pt;
      font-family: Arial;
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
    }

    h2 {
      padding-top: 18pt;
      color: #000000;
      font-size: 16pt;
      padding-bottom: 6pt;
      font-family: Arial;
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
    }

    h3 {
      padding-top: 16pt;
      color: #434343;
      font-size: 14pt;
      padding-bottom: 4pt;
      font-family: Arial;
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
    }

    h4 {
      padding-top: 14pt;
      color: #666666;
      font-size: 12pt;
      padding-bottom: 4pt;
      font-family: Arial;
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
    }

    h5 {
      padding-top: 12pt;
      color: #666666;
      font-size: 11pt;
      padding-bottom: 4pt;
      font-family: Arial;
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left
    }

    h6 {
      padding-top: 12pt;
      color: #666666;
      font-size: 11pt;
      padding-bottom: 4pt;
      font-family: Arial;
      line-height: 1.15;
      page-break-after: avoid;
      font-style: italic;
      orphans: 2;
      widows: 2;
      text-align: left
    }
  </style>
  <title></title>
</head>

<body class="c15">
  <div>
    <p class="c1 c5 c23">
      <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 201.00px; height: 81.00px;">
      <img alt="" src="data:image/png;base64,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"
      style="width: 153.00px; height: 81.00px; margin-left: 48.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
      title="" />
    </span>
      <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 715.20px; height: 91.82px;">
      <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmQAAABRCAYAAAB8ObqLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgB7dZBAQAgDAChuXL2T6Qx7gMpODv3DQAAmR0AAFJCBgAQEzIAgJiQAQDEhAwAICZkAAAxIQMAiAkZAEBMyAAAYkIGABATMgCAmJABAMSEDAAgJmQAADEhAwCICRkAQEzIAABiQgYAEBMyAICYkAEAxIQMACAmZAAAMSEDAIgJGQBATMgAAGJCBgAQEzIAgJiQAQDEhAwAICZkAAAxIQMAiAkZAEBMyAAAYkIGABATMgCAmJABAMSEDAAgJmQAADEhAwCICRkAQEzIAABiQgYAEBMyAICYkAEAxIQMACAmZAAAMSEDAIgJGQBATMgAAGJCBgAQEzIAgJiQAQDEhAwAICZkAAAxIQMAiAkZAEBMyAAAYkIGABATMgCAmJABAMSEDAAgJmQAADEhAwCICRkAQEzIAABiQgYAEBMyAICYkAEAxIQMACAmZAAAMSEDAIgJGQBATMgAAGJCBgAQEzIAgJiQAQDEhAwAICZkAAAxIQMAiAkZAEDsA0g+Aeq2miMrAAAAAElFTkSuQmCC"
      style="width: 715.20px; height: 94.66px; margin-left: 0.00px; margin-top: -1.42px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
      title="" />
    </span>
    </p>
    <p class="c5 c13">
      <span class="c19 c21">Resumen</span>
    </p>
    <p class="c1 c5 c6"></p>
  </div>
  <p class="c1 c5 c6"></p>
  <p class="c1 c5 c6"></p>
  <p class="c1 c5 c6"></p>
  <p class="c1 c5">
    <span class="c9 c0">Nombre: ${NAME}</span>
  </p>
  <p class="c1 c5">
    <span class="c9 c0">Telefono: ${USERNAME}</span>
  </p>
  <p class="c1 c5">
    <span class="c9 c0">DUI o PAS : ${NUM}</span>
  </p>
  <p class="c1 c5 c6"></p>
  <p class="c1 c5">
    <span class="c18">Hora :</span>
    <span class="c9 c19">${TIMEGENERATED}</span>
  </p>
  <p class="c1 c5">
    <span class="c18">Fecha:</span>
    <span class="c9 c19">${DATEGENERATED}</span>
  </p>
  <p class="c1 c5 c6"></p>
  <hr />
  <p class="c1 c5 c6"></p>
  <p class="c13 c5">
    <span class="c9 c0">�</span>
  </p>
  <p class="c1 c5 c6"></p>
  <p class="c5 c24">
    <span class="c18">DETALLE</span>
  </p>
  <p class="c1 c5 c6"></p>
  <a id="t.78e19fdf0d02b23766f50440e3fa2ae406722ad4"></a>
  <a id="t.0"></a>
  <table class="c10">
    <tbody>
      <tr class="c7">
        <td class="c8 c11" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c0">Fecha</span>
          </p>
        </td>
        <td class="c8 c12" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2"${DATETRANSACTION}</span>
        </p>
      </td>
    </tr>
    <tr class="c7">
      <td class="c8" colspan="1" rowspan="1">
        <p class="c1">
          <span class="c0">Hora</span>
          </p>
        </td>
        <td class="c8" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2">${TIMETRANSACTION}</span>
          </p>
        </td>
      </tr>
      <tr class="c7">
        <td class="c8 c12" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c0">Proveedor</span>
          </p>
        </td>
        <td class="c8 c12" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2">Banco Agricola</span>
          </p>
        </td>
      </tr>
      <tr class="c7">
        <td class="c8" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c0">Servicio</span>
          </p>
        </td>
        <td class="c8" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2"${NOMBRECLIENTO}</span>
        </p>
      </td>
    </tr>
    <tr class="c7">
      <td class="c8 c12" colspan="1" rowspan="1">
        <p class="c1">
          <span class="c0">C�digo pagado</span>
          </p>
        </td>
        <td class="c8 c12" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2">${CodigoPagado}</span>
          </p>
        </td>
      </tr>
      <tr class="c7">
        <td class="c8" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c0">Cuenta</span>
          </p>
        </td>
        <td class="c8" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2">${ACCOUNTID}</span>
          </p>
        </td>
      </tr>
      <tr class="c7">
        <td class="c8 c12" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c0">ID de transacci�n</span>
          </p>
        </td>
        <td class="c8 c12" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2">${BAIDTRANSACCION}</span>
          </p>
        </td>
      </tr>
      <tr class="c7">
        <td class="c8" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c0">Estado</span>
          </p>
        </td>
        <td class="c8" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2">${STATUS}</span>
          </p>
        </td>
      </tr>
      <tr class="c7">
        <td class="c8 c12" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c0">Importe</span>
          </p>
        </td>
        <td class="c8 c12" colspan="1" rowspan="1">
          <p class="c1">
            <span class="c2"${AMOUNT}</span>
        </p>
      </td>
    </tr>
  </tbody>
</table>
<p class="c1 c5">
  <span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 715.20px; height: 39.36px;">

    <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmQAAABRCAYAAAB8ObqLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF+SURBVHgB7dZBAQAgDAChuXL2T6Qx7gMpODv3DQAAmR0AAFJCBgAQEzIAgJiQAQDEhAwAICZkAAAxIQMAiAkZAEBMyAAAYkIGABATMgCAmJABAMSEDAAgJmQAADEhAwCICRkAQEzIAABiQgYAEBMyAICYkAEAxIQMACAmZAAAMSEDAIgJGQBATMgAAGJCBgAQEzIAgJiQAQDEhAwAICZkAAAxIQMAiAkZAEBMyAAAYkIGABATMgCAmJABAMSEDAAgJmQAADEhAwCICRkAQEzIAABiQgYAEBMyAICYkAEAxIQMACAmZAAAMSEDAIgJGQBATMgAAGJCBgAQEzIAgJiQAQDEhAwAICZkAAAxIQMAiAkZAEBMyAAAYkIGABATMgCAmJABAMSEDAAgJmQAADEhAwCICRkAQEzIAABiQgYAEBMyAICYkAEAxIQMACAmZAAAMSEDAIgJGQBATMgAAGJCBgAQEzIAgJiQAQDEhAwAICZkAAAxIQMAiAkZAEDsA0g+Aeq2miMrAAAAAElFTkSuQmCC"
    style="width: 715.20px; height: 39.36px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
    title="" />
  </span>
          </p>
          <div>
            <p class="c13 c5">
              <span class="c14">Página</span>
              <span class="c14 c17">de 1</span>
            </p>
          </div>
</body>

</html>`;
module.exports = generateStyledNPE;
