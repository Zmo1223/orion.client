/*******************************************************************************
 * @license
 * Copyright (c) 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License v1.0
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html).
 *
 ******************************************************************************/
//NLS_CHARSET=UTF-8
/*eslint-env amd*/
define({
	'error': 'Error',  //$NON-NLS-0$  //$NON-NLS-1$
	'warning' : 'Avviso',  //$NON-NLS-0$  //$NON-NLS-1$
	'ignore' : 'Ignora',  //$NON-NLS-0$  //$NON-NLS-1$
	'sourceOutline' : 'Struttura origine', //$NON-NLS-0$  //$NON-NLS-1$
	'sourceOutlineTitle': 'Struttura origine JavaScript',  //$NON-NLS-0$  //$NON-NLS-1$
	'contentAssist' : 'Assistente ai contenuti JavaScript', //$NON-NLS-0$  //$NON-NLS-1$
	'eslintValidator' : 'Programma di convalida JavaScript', //$NON-NLS-0$  //$NON-NLS-1$
	'missingCurly' : 'Istruzioni non racchiuse tra parentesi graffe:', //$NON-NLS-0$  //$NON-NLS-1$
	'noCaller' : 'L\'utilizzo di \'arguments.caller\' o \'arguments.callee\' sconsigliato:', //$NON-NLS-0$  //$NON-NLS-1$
	'noEqeqeq' : 'Utilizzo di \'==\' sconsigliato:', //$NON-NLS-0$  //$NON-NLS-1$
	'noDebugger' : 'Utilizzo istruzione \'debugger\' sconsigliato:', //$NON-NLS-0$  //$NON-NLS-1$
	'noEval' : 'Utilizzo di \'eval()\' sconsigliato:', //$NON-NLS-0$  //$NON-NLS-1$
	'noDupeKeys' : 'Chiavi oggetto duplicate:', //$NON-NLS-0$  //$NON-NLS-1$
	'useIsNaN' : 'NaN non confrontato con isNaN():', //$NON-NLS-0$  //$NON-NLS-1$
	'docFuncDecl' : 'Nessun JSDoc nelle dichiarazioni di funzione:', //$NON-NLS-0$  //$NON-NLS-1$
	'docFuncExpr' : 'Nessun JSDoc nelle espressioni di funzione:', //$NON-NLS-0$  //$NON-NLS-1$
	'noUnreachable' : 'Codice non raggiungibile:', //$NON-NLS-0$  //$NON-NLS-1$
	'noFallthrough' : 'Fall-through switch case:', //$NON-NLS-0$  //$NON-NLS-1$
	'useBeforeDefine' : 'Membro utilizzato prima della definizione:', //$NON-NLS-0$  //$NON-NLS-1$
	'noEmptyBlock' : 'Blocco vuoto non documentato:', //$NON-NLS-0$  //$NON-NLS-1$
	'newParens' : 'Parentesi mancanti nella chiamata al costruttore:', //$NON-NLS-0$  //$NON-NLS-1$
	'noNewArray': '\'new Array()\' sconsigliato:', //$NON-NLS-0$  //$NON-NLS-1$
	'noNewFunc': '\'new Function()\' sconsigliato:', //$NON-NLS-0$  //$NON-NLS-1$
	'noNewObject': '\'new Object()\' sconsigliato:', //$NON-NLS-0$  //$NON-NLS-1$
	'noNewWrappers': 'Oggetti wrapper sconsigliati:', //$NON-NLS-0$  //$NON-NLS-1$
	'missingSemi' : 'Punti e virgola mancanti:', //$NON-NLS-0$  //$NON-NLS-1$
	'unusedVars' : 'Variabili non utilizzate:', //$NON-NLS-0$  //$NON-NLS-1$
	'varRedecl' : 'Nuove dichiarazioni di variabile:', //$NON-NLS-0$  //$NON-NLS-1$
	'varShadow': 'Osservazione variabile:', //$NON-NLS-0$  //$NON-NLS-1$
	'undefMember' : 'Riferimento globale non dichiarato:', //$NON-NLS-0$  //$NON-NLS-1$
	'unnecessarySemis' : 'Punti e virgola non necessari:', //$NON-NLS-0$  //$NON-NLS-1$
	'unusedParams' : 'Parametri non utilizzati:', //$NON-NLS-0$  //$NON-NLS-1$
	'unsupportedJSLint' : 'Direttiva ambiente non supportata:',  //$NON-NLS-0$  //$NON-NLS-1$
	'throwError': 'Non-Error utilizzato in \'throw\':',  //$NON-NLS-0$  //$NON-NLS-1$
	'generateDocName' : 'Generazione commento di elemento',  //$NON-NLS-0$  //$NON-NLS-1$
	'generateDocTooltip' : 'Generare un commento simile a JSDoc per l\'elemento JavaScript selezionato',  //$NON-NLS-0$  //$NON-NLS-1$
	'openDeclName' : 'Apri dichiarazione',  //$NON-NLS-0$  //$NON-NLS-1$
	'openDeclTooltip' : 'Apre la dichiarazione dell\'elemento selezionato',  //$NON-NLS-0$  //$NON-NLS-1$
	'validTypeof': 'Confronto \'typeof\' non valido',  //$NON-NLS-0$ //$NON-NLS-1$
	'noSparseArrays': 'Dichiarazioni array non frequenti', //$NON-NLS-0$ //$NON-NLS-1$
	'jsHover': 'JavaScript Hover Provider', //$NON-NLS-0$ //$NON-NLS-1$
	'removeExtraSemiFixName': 'Rimuovi punto e virgola supplementari', //$NON-NLS-0$ //$NON-NLS-1$
	'removeExtraSemiFixTooltip': 'Rimuove il punto e virgola supplementare', //$NON-NLS-0$ //$NON-NLS-1$
	'addFallthroughCommentFixName': 'Aggiungi commento $FALLTHROUGH$', //$NON-NLS-0$ //$NON-NLS-1$
	'addFallthroughCommentFixTooltip': 'Aggiungi il commento di riga  $FALLTHROUGH$', //$NON-NLS-0$ //$NON-NLS-1$
	'addEmptyCommentFixName': 'Blocco commenti vuoto', //$NON-NLS-0$ //$NON-NLS-1$
	'addEmptyCommentFixTooltip': 'Aggiungi commento  TODO al blocco commenti vuoto', //$NON-NLS-0$ //$NON-NLS-1$
	'addESLintEnvFixName': 'Aggiungi alla direttiva eslint-env', //$NON-NLS-0$ //$NON-NLS-1$
	'addESLintEnvFixTooltip': 'Aggiungi alla direttiva eslint-env per filtrare il membro conosciuto', //$NON-NLS-0$ //$NON-NLS-1$
	'addESLintGlobalFixName': 'Aggiungi alla direttiva globals', //$NON-NLS-0$ //$NON-NLS-1$
	'addESLintGlobalFixTooltip': 'Aggiungi alla direttiva globals per filtrare il membro sconosciuto', //$NON-NLS-0$ //$NON-NLS-1$
	'removeUnusedParamsFixName': 'Rimuovi parametro', //$NON-NLS-0$ //$NON-NLS-1$
	'removeUnusedParamsFixTooltip': 'Rimuovi il parametro non utilizzato mantenendo gli effetti collaterali', //$NON-NLS-0$ //$NON-NLS-1$
	'commentCallbackFixName': 'Aggiungi @callback alla funzione', //$NON-NLS-0$ //$NON-NLS-1$
	'commentCallbackFixTooltip': 'Documenta la funzione con @callback, ignorando i parametri non utilizzati', //$NON-NLS-0$ //$NON-NLS-1$
	'eqeqeqFixName': 'Aggiorna operatore', //$NON-NLS-0$ //$NON-NLS-1$
	'eqeqeqFixTooltip': 'Aggiorna l\'operatore a quello previsto', //$NON-NLS-0$ //$NON-NLS-1$
	'unreachableFixName': 'Rimuovi codice non raggiungibile', //$NON-NLS-0$ //$NON-NLS-1$
	'unreachableFixTooltip': 'Rimuovi codice non raggiungibile', //$NON-NLS-0$ //$NON-NLS-1$
	'sparseArrayFixName': 'Converti in array normale', //$NON-NLS-0$ //$NON-NLS-1$
	'sparseArrayFixTooltip': 'Rimuovi voci non frequenti e converti in array normale', //$NON-NLS-0$ //$NON-NLS-1$
	'semiFixName': 'Aggiungi \';\' mancante', //$NON-NLS-0$ //$NON-NLS-1$
	'semiFixTooltip': 'Aggiungi \';\' mancante', //$NON-NLS-0$ //$NON-NLS-1$
	'radix': 'Parametro radice mancante per parseInt()', //$NON-NLS-0$ //$NON-NLS-1$
});

