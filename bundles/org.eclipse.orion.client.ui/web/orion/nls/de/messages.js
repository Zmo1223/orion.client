/*******************************************************************************
 * @license
 * Copyright (c) 2012 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 ******************************************************************************/

//NLS_CHARSET=UTF-8
/*eslint-env browser, amd*/
define({
	"Navigator": "Navigator",
	"Sites": "Sites",
	"Shell": "Shell",
	"ShellLinkWorkspace": "Shell",
	"Get Plugins": "Plug-ins abrufen",
	"Global": "Global",
	"Editor": "Editor",
	"EditorRelatedLink": "Aktuellen Ordner anzeigen",
	"EditorRelatedLinkParent": "Einschließenden Ordner anzeigen",
	"EditorLinkWorkspace": "Bearbeiten",
	"EditorRelatedLinkProj": "Projekt anzeigen",
	"Filter bindings": "Bindings filtern",
	"Orion Editor": "Orion-Editor",
	"Orion Image Viewer": "Orion Image-Viewer",
	"Orion Markdown Editor": "Orion Markdown-Editor",
	"Orion Markdown Viewer": "Orion Markdown-Viewer",
	"Orion JSON Editor": "Orion JSON-Editor",
	"View on Site": "Auf Site anzeigen",
	"View this file or folder on a web site hosted by Orion": "Diese Datei oder diesen Ordner auf einer von Orion gehosteten Website anzeigen.",
	"ShowAllKeyBindings": "Liste aller Schlüsselbindings auf dieser Seite anzeigen",
	"Show Keys": "Schlüssel anzeigen",
	"HideShowBannerFooter": "Seitenbanner und -fußzeile aus- oder einblenden",
	"Toggle banner and footer": "Banner und Fußzeile ein-/ausschalten",
	"ChooseFileOpenEditor": "Datei nach Namen auswählen und für diese Datei einen Editor öffnen",
	"FindFile": "Benannte Datei suchen...",
	"System Configuration Details": "Details zur Systemkonfiguration",
	"System Config Tooltip": "Wechseln Sie zur Seite 'Details zur Systemkonfiguration'",
	"Background Operations": "Hintergrundoperationen",
	"Background Operations Tooltip": "Wechseln Sie zur Seite 'Hintergrundoperationen'",
	"Operation status is unknown": "Operationsstatus ist unbekannt",
	"Unknown item": "Unbekanntes Element",
	"NoSearchAvailableErr": "Suche nicht möglich: Es ist kein Suchservice verfügbar",
	"Related": "Zugehörig",
	"Options": "Optionen",
	"FAQ": "Häufig gestellte Fragen",
	"Report a Bug": "Programmfehler",
	"Privacy Policy": "Datenschutz",
	"Terms of Use": "Bedingungen",
	"Copyright Agent": "Copyright",
	"Orion Logo": "Orion-Logo",
	"Orion is in Beta. Please try it out but BEWARE your data may be lost.": "@buildLabel@",
	"LOG: ": "PROTOKOLL: ",
	"View": "Ansicht",
	"no parent": "kein übergeordnetes Element",
	"no tree model": "kein Baummodell",
	"no renderer": "kein Renderer",
	"could not find table row ": "Tabellenzeile konnte nicht gefunden werden ",
	"Operations": "Operationen",
	"Operations running": "Operationen werden ausgeführt",
	"SomeOpWarning": "Einige Operationen wurden mit einer Warnung abgeschlossen",
	"SomeOpErr": "Einige Operationen wurden mit einem Fehler abgeschlossen",
	"no service registry": "kein Service-Registry",
	"Tasks": "Tasks",
	"Close": "Schließen",
	"Expand all": "Alle einblenden",
	"Collapse all": "Alle ausblenden",
	"Search" : "Suchen",
	"Advanced search" : "Erweiterte Suche",
	"Submit" : "Übergeben",
	"More" : "Mehr",
	"Recent searches" : "Kürzliche Suchen",
	"Regular expression" : "Regulärer Ausdruck",
	"Search options" : "Suchoptionen",
	"Global search" : "Globale Suche",
	"Orion Home" : "Orion-Ausgangsverzeichnis",
	"Close notification" : "Benachrichtigung schließen",
	"OpPressSpaceMsg" : "Operationen - Drücken Sie die Leertaste, um die aktuellen Operationen anzuzeigen",
	"Toggle side panel" : "Seitliche Anzeige umschalten",
	"Open or close the side panel": "Seitliche Anzeige öffnen oder schließen",
	"Projects" : "Projekte",
	"Toggle Sidebar" : "Seitliche Liste umschalten",
	"Sample HTML5 Site": "HTML5-Beispielsite",
	"Generate an HTML5 'Hello World' website, including JavaScript, HTML, and CSS files.": "HTML5-Web-Site 'Hello World' inklusive JavaScript-, HTML- und CSS-Dateien generieren.",
	"Sample Orion Plugin": "Orion-Beispiel-Plug-in",
	"Generate a sample plugin for integrating with Orion.": "Beispiel-Plug-in für die Integration bei Orion generieren.",
	"Browser": "Webbrowser",
	"OutlineProgress": "Gliederung für ${0} wird von ${1} abgerufen",
	"outlineTimeout": "Für den Gliederungsservice wurde das zulässige Zeitlimit überschritten. Versuchen Sie, die Seite erneut zu laden und die Gliederung wieder zu öffnen.",
	"UnknownError": "Es ist ein unbekannter Fehler aufgetreten.",
	"UnknownWarning": "Es ist eine unbekannte Warnung aufgetreten.",
	"Filter": "Filtern (* = beliebige Zeichenfolge, ? = beliebiges Zeichen)",
	"TemplateExplorerLabel": "Schablonen",
	"OpenTemplateExplorer": "Schablonen-Explorer öffnen",
	"Edit": "Bearbeiten",
	"CentralNavTooltip": "Navigationsmenü ein-/ausblenden",
	"Wrote: ${0}": "Hat Folgendes geschrieben: ${0}",
	"GenerateHTML": "HTML-Datei generieren",
	"GenerateHTMLTooltip": "HTML-Datei schreiben, die aus dem aktuellen Inhalt des Markdown-Editors generiert wurde",
	"alt text": "alternativer Text",
	"blockquote": "Blockquote",
	"code": "code",
	"code (block)": "code (Block)",
	"code (span)": "code (Span)",
	"emphasis": "Hervorhebung",
	"fenced code (${0})": "abgeschirmter Code (${0})",
	"header (${0})": "Header (${0})",
	"horizontal rule": "horizontales Lineal",
	"label": "Beschriftung",
	"link (auto)": "Link (auto)",
	"link (image)": "Link (Image)",
	"link (inline)": "Link (inline)",
	"link label": "Linkbeschriftung",
	"link label (optional)": "Linkbeschriftung (optional)",
	"link (ref)": "Link (ref)",
	"list item (bullet)": "Listeneintrag (Listenpunkt)",
	"list item (numbered)": "Listeneintrag (nummeriert)",
	"strikethrough (${0})": "durchgestrichen (${0})",
	"strong": "Ffett",
	"table (${0})": "Tabelle (${0})",
	"text": "Text",
	"title (optional)": "Titel (optional)",
	"url": "url",
	"TogglePaneOrientationTooltip": "Ausrichtung des geteilten Teilfensters wechseln",
	"WarningHeaderTooDeep": "Kopfzeilenebene darf nicht über 6 liegen",
	"WarningUnorderedListItem": "Eintrag in einer ungeordneten Liste in einer geordneten Liste",
	"WarningOrderedListItem": "Eintrag in einer geordneten Liste in einer ungeordneten Liste",
	"WarningOrderedListShouldStartAt1": "Das erste Element in einer geordneten Liste muss den Index 1 haben",
	"WarningLinkHasNoText": "Link ist ohne Text",
	"WarningLinkHasNoURL": "Link hat keine URL",
	"WarningUndefinedLinkId": "Nicht definierte Link-ID: ${0}",
	"PageTitleFormat": "${0} - ${1}", // ${0} is the file or resource being edited; ${1} is the task (eg. "Editor")
	// Display names for keys:
	"KeyCTRL": "Strg",
	"KeySHIFT": "Umschalttaste",
	"KeyALT": "Alt",
	"KeyBKSPC": "Rücktaste",
	"KeyDEL": "Taste ENTF",
	"KeyEND": "Ende",
	"KeyENTER": "Eingabetaste",
	"KeyESCAPE": "Abbruchtaste",
	"KeyHOME": "Home",
	"KeyINSERT": "Einfg",
	"KeyPAGEDOWN": "Vorblättern",
	"KeyPAGEUP": "Zurückblättern",
	"KeySPACE": "Leerzeichen",
	"KeyTAB": "Tabulator",
	// End key names
});

