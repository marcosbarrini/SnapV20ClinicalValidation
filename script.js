$(document).ready(function() {
  var dictionaryOfImages, currentScreen, firstProcessAtLogIn, checkBoxList, userEnrolledKey, currentRound, processHistoricVar, lastTemplate, userEnrolledStatus, userPassword, userID, template, DictionaryCurrentPage, inputList, searchKey, sFormatType, sFormat, sValueToCheck, variableName, linkID, pList, pFieldKey1, pFieldKeyValue1, pFieldKey2, pFieldKeyValue2, pFieldName, pDictionaryKey, pDictionaryKeyValue, pPercentage, pProgressBarWidth, pListItemID, pDictionaryAttributeValue, i, checkFormatReturnValue, currentTemplate, returnField, currentField, found, outcomeAndFieldMappingList, varObj, SDKoutput, varProcessList, FlowableInfo, currentFormatElement, currentValueElement, pVerificationCode, pProcessDefKey, pUserID, pPassword, pUserName, pOutcome, pVariables, pFields, pOutcomes, inputListOfObj, logInForProcessAndCredentialsReturnValue, initSDKReturnValue, pErrorData, SDKGetFirstTaskReturnValue, tempListKey, processDefKey, currentProperty, initFirstLogInReturnValue, j, currentFieldIsRequired, returnError, txt1PlaceHolder, txt2PlaceHolder, txt3PlaceHolder, txt4PlaceHolder, TSC1localCurrentFieldName, currentOutcome, TSC1CheckRequiredFieldsRet, numberOfWrongLogInAttempts, LVcells, checkBoxElement, lastOptionValue, checkBoxValue;
  /**
   * Describe this function...
   */
  function setOutcomeAndFieldMapping(inputList, searchKey) {
    // Block#: QLk]mcZr%`wadeG_T]M%
    i = 0;
    // Block#: Q1D)O![VZm$(t`AMD?+.
    found = false;
    // Block#: p|LCGP/J#g9k=Rq^TQZh
    outcomeAndFieldMappingList = [];
    // Block#: S?9dwG?0suPEQ8aI::db
    while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(i, "LT", inputList.length) &&
      !found) {
      // Block#: 6G`+,w37R4lQ_;jgPZx8
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(inputList[i], 'id'), "EQUAL", searchKey)) {
        // Block#: x)h@yx~;Zxu?4c$#%a+n
        found = true;
        // Block#: ~8~RK|,E8usL]Ob!ou[c
        outcomeAndFieldMappingList = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(inputList[i], 'enumValues'));
      }
      // Block#: nB%xtqnwY|m)M(m*n{k}
      i = i + 1;
    }
  }
  /**
   * Describe this function...
   */
  function fillFormVariables() {
    // Block#: 97=2O4t3)YQExKWLc1Q$
    DictionaryCurrentPage = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: .K}i4~xjhUFudd[]icmB
    var index1_end = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormPropListID')).length;
    var index1_inc = 1;
    if(1 > index1_end) {
      index1_inc = -index1_inc;
    }
    for(index1 = 1; index1_inc >= 0 ? index1 <= index1_end : index1 >= index1_end; index1 += index1_inc) {
      // Block#: ,]8i8,JXE`hftzukqs/c
      com.fc.JavaScriptDistLib.Dictionary.setDictValue(DictionaryCurrentPage, (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormPropListID'))[index1 - 1], (com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FormPropListName'))[index1 - 1])
    }
    // Block#: Cm3@b)2M#-UAjKy*`woP
    displayPageEngine();
  }
  /**
   * Describe this function...
   */
  function checkFormat(sFormatType, sFormat, sValueToCheck) {
    // Block#: `7X^y6P9skMi7rxwTirp
    checkFormatReturnValue = true;
    // Block#: e;B-UPjVwvc!|67ARP(%
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(sFormatType, "EQUAL", 'e-mail')) {
      // Block#: n1/Q#Lmpmi0cr3*1@z#!
      if(com.fc.JavaScriptDistLib.TextLib.textContains(sValueToCheck, '@')) {
        // Block#: DA(HY@B;r.)*+m51dw}9
        checkFormatReturnValue = true;
      } else {
        // Block#: Y$[B4MJ?hr6E)H[zqNpl
        checkFormatReturnValue = false;
      }
    }
    // Block#: O%1F(Z-7KO~Y~,P3-%qh
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(sFormatType, "EQUAL", 'time')) {
      // Block#: @3nkBG8YM-eBcbH_HRuI
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(sFormat.length, "EQ", sValueToCheck.length)) {
        // Block#: S;81kOS):Y,emL]7/2Mt
        var index_end = sValueToCheck.length - 1;
        var index_inc = 1;
        if(0 > index_end) {
          index_inc = -index_inc;
        }
        for(index = 0; index_inc >= 0 ? index <= index_end : index >= index_end; index += index_inc) {
          // Block#: mKUEE}8ckKJL=0FTItqp
          currentFormatElement = com.fc.JavaScriptDistLib.TextLib.textSubstring(sFormat, index, 1);
          // Block#: 8q|LSsCIsdBTQ+vkr[r?
          currentValueElement = com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, index, 1);
          // Block#: Uk`Lu+=1j)#Om?M1o/nn
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentFormatElement, "EQUAL", '0')) {
            // Block#: ClG{Yj#gAxX$x;}gWlT%
            if(!com.fc.JavaScriptDistLib.MathLibrary.isNumber(com.fc.JavaScriptDistLib.MathLibrary.toNumber(currentValueElement))) {
              // Block#: ~ohQLu;.DMKO4/`-cku|
              checkFormatReturnValue = false;
            }
          }
          // Block#: UL.~{SJb0aNA3]Q%{rU_
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentFormatElement, "EQUAL", ':')) {
            // Block#: *%0+DGmqtEY3@?/mW#P.
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(currentValueElement, "EQUAL", ':')) {
              // Block#: TpyoM)M17b(MfdTVKq03
              checkFormatReturnValue = false;
            }
          }
        }
        // Block#: REiRNFvcO4RT)_mM#vc1
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 0, 2)), "GT", 23)) {
          // Block#: )sGi`|gqi0YJW(opDg)?
          checkFormatReturnValue = false;
        }
        // Block#: #yRIc*c@U[A3x9`[KgbZ
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 3, 2)), "GT", 59)) {
          // Block#: b!R#0{a}GEXqry#2Ap6S
          checkFormatReturnValue = false;
        }
      } else {
        // Block#: {$=u(Za/a$4cu!FQTrhj
        checkFormatReturnValue = false;
      }
    } else {}
    // Block#: MoAoAUvgw:BpaiZ*;;~D
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(sFormatType, "EQUAL", 'date')) {
      // Block#: [usx.sQ#I$V{HSKWf.kS
      if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(sFormat.length, "EQ", sValueToCheck.length)) {
        // Block#: ;8x;P:]bu;aYjd?q~]CH
        var index_end2 = sValueToCheck.length - 1;
        var index_inc2 = 1;
        if(0 > index_end2) {
          index_inc2 = -index_inc2;
        }
        for(index = 0; index_inc2 >= 0 ? index <= index_end2 : index >= index_end2; index += index_inc2) {
          // Block#: g*Q/QgTKE[RXLt#pmGM0
          currentFormatElement = com.fc.JavaScriptDistLib.TextLib.textSubstring(sFormat, index, 1);
          // Block#: 0LFJ]:m|Wf7N@ns/C.=A
          currentValueElement = com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, index, 1);
          // Block#: np`v-cucA~E_jg4S?p/Q
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentFormatElement, "EQUAL", '0')) {
            // Block#: :Y}|_512`mEpS`Z|P`i?
            if(!com.fc.JavaScriptDistLib.MathLibrary.isNumber(com.fc.JavaScriptDistLib.MathLibrary.toNumber(currentValueElement))) {
              // Block#: [5;:{7xO8Fx1eW?X.YT:
              checkFormatReturnValue = false;
            }
          }
          // Block#: EUU(y4^XKON}v-:=#h*R
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentFormatElement, "EQUAL", '/')) {
            // Block#: ;)Y@T@M#m8/[Th?^pcr7
            if(!com.fc.JavaScriptDistLib.TextLib.textComparison(currentValueElement, "EQUAL", '/')) {
              // Block#: xm99rAg!x=%|zy5@_|Li
              checkFormatReturnValue = false;
            }
          }
        }
        // Block#: qY#G.MuEbZt$]7uU:n-s
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 0, 2)), "GT", 31)) {
          // Block#: KfHVyqh]OatCFxZ{~c!n
          checkFormatReturnValue = false;
        }
        // Block#: ca^R9|^8[[Z3^J}^V+C?
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 3, 2)), "GT", 12)) {
          // Block#: Ou[;WuGa#?D{P?ResXwB
          checkFormatReturnValue = false;
        }
        // Block#: lMR.og.%NYhjKt*m%-cw
        if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(com.fc.JavaScriptDistLib.MathLibrary.toNumber(com.fc.JavaScriptDistLib.TextLib.textSubstring(sValueToCheck, 5, 4)), "GT", 2017)) {
          // Block#: MTTGz;Tl]|6(PU!oDEjp
          checkFormatReturnValue = false;
        }
      } else {
        // Block#: C=m]Vx!A^Rl{hi[SEs=`
        checkFormatReturnValue = false;
      }
    } else {}
    return checkFormatReturnValue;
  }
  /**
   * Describe this function...
   */
  function displayPageEngine() {
    // Block#: xJ]x$E4pHy,hO?=TW;Cq
    currentTemplate = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'id', 'templateType', '', '', 'name');
    // Block#: w.}h[b~c@Gd#*rJ=]gQ9
    if(currentTemplate == 'TDB1') {
      // Block#: wlIK1@BT$[j)%,M(c!vn
      if(currentTemplate != lastTemplate) {
        // Block#: jTbruLvkNfcTgbgKqmNy
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TDB1"]');
        showScreen.show();
        history.pushState({
          'view': 'TDB1'
        }, 'TDB1', 'TDB1');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: O2*D@yDC8-*u+,JBh1KR
      TDB1updateCurrentPage(DictionaryCurrentPage);
      // Block#: HRx/gvI!1.qX13]Cgj#^
      lastTemplate = 'TB1';
    }
    // Block#: )~,Dm;AGE|6[e?@-K?jp
    if(currentTemplate == 'TSC1') {
      // Block#: R,[0OhvlXdd%:eIEUR@z
      if(currentTemplate != lastTemplate) {
        // Block#: KgrUlFL5~K~dq*oL8zj-
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TSC1"]');
        showScreen.show();
        history.pushState({
          'view': 'TSC1'
        }, 'TSC1', 'TSC1');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: )/71E6Kh(2Kn!{K,O%Ru
      TSC1updateScreen();
      // Block#: Wyo2J_JIl|V?XE99bZy5
      lastTemplate = 'TSC1';
    }
    // Block#: dx+Zd`E{O~q3s@kVcR$.
    if(currentTemplate == 'TQL1') {
      // Block#: (I@ocnc_78_8Un^a2v$L
      if(currentTemplate != lastTemplate) {
        // Block#: DL#3m,8)CQu%amC|g4D-
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TQL1"]');
        showScreen.show();
        history.pushState({
          'view': 'TQL1'
        }, 'TQL1', 'TQL1');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
      // Block#: YE,MY]E=;Lj~`6_JxQDR
      TQL1updateScreen();
      // Block#: S/d@V^rHVZ96Gsq6.gKP
      lastTemplate = 'TQL1';
    }
    // Block#: c{UXJUJ~^(#Z=#`uY6*4
    if(currentTemplate == 'STRT') {
      // Block#: 5g|H)j.scZ{%Ox+)Ag0{
      varObj = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: gk@tf4*9l]l@AtqP;**|
      varProcessList = [];
      // Block#: EbIT2OQIl|`,)r4j1fk0
      if(com.fc.JavaScriptDistLib.Dictionary.getDictValue(FlowableInfo, 'FirstRun')) {
        // Block#: ]vKGx$t{0}xhN/jw?~r{
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type', 'scope'], ['firstrun', 'yes', 'string', 'local']))
      } else {
        // Block#: Y-jEj2LLX#m;+9X:EA:N
        com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'value', 'type', 'scope'], ['firstrun', 'no', 'string', 'local']))
      }
    }
  }
  /**
   * Describe this function...
   */
  function followLink(variableName, linkID) {
    // Block#: ^V/6f4;?$5KIyqFqLjJg
    $('[obj-name="TDB1imgHourglass"]').show(); // Block#: %LYG=*oNt#2ZN$#+#H$~
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TDB1imgHourglass", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, 'hourglass'))); // Block#: C0A8BFZd!fmGd3E$_idG
    varObj = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: cxv`#nzdmu?|.Mb@#FHF
    varProcessList = [];
    // Block#: }lbri.@}uf.a)-jrImKx
    com.fc.JavaScriptDistLib.ListLibrary.listAdd(varProcessList, com.fc.JavaScriptDistLib.Dictionary.createDictionary(['name', 'type', 'value', 'scope'], [variableName, 'string', linkID, 'local']))
  }
  /**
   * Describe this function...
   */
  function getFieldFromListWithKeys(pList, pFieldKey1, pFieldKeyValue1, pFieldKey2, pFieldKeyValue2, pFieldName) {
    // Block#: $V*6J^{}9US9H~q2rjkw
    i = 0;
    // Block#: QAtZ$z[WFB(_h};fwRl(
    found = false;
    // Block#: 6]p=K7~=QuM4,|={Vu3s
    returnField = '';
    // Block#: @orn84MUFdKyl/GKC3.Q
    while(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(i, "LT", pList.length) &&
      !found) {
      // Block#: :H4B,q%3JWLQO0a1wJgv
      currentField = pList[i];
      // Block#: :};GjSg%1V(zs*352FqY
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, pFieldKey1), "EQUAL", pFieldKeyValue1)) {
        // Block#: {(j(xr(zT|V^i`;:0{y+
        if(!com.fc.JavaScriptDistLib.TextLib.textComparison(pFieldKey2, "EQUAL", '')) {
          // Block#: RD*)FEU}ThD|J3E%XXyZ
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, pFieldKey2), "EQUAL", pFieldKeyValue2)) {
            // Block#: H|tN_XdQKLT9eD^*x?A,
            returnField = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, pFieldName));
            // Block#: i,xa1DR2hNmu(M1@uexN
            found = true;
          }
        } else {
          // Block#: ]V!Hb{Bj~Xxm6]?p9CV?
          returnField = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, pFieldName));
          // Block#: J)ZO#Pn6Z{}N~7Q,..LM
          found = true;
        }
      }
      // Block#: ;5NmN/MCH)-)$j3=z`:j
      i = i + 1;
    }
    return returnField;
  }
  /**
   * Describe this function...
   */
  function getDictionaryFromListWithKey(pList, pDictionaryKey, pDictionaryKeyValue) {
    // Block#: y::pHo33+|-0`-Z]?v{8
    var index_end3 = pList.length;
    var index_inc3 = 1;
    if(1 > index_end3) {
      index_inc3 = -index_inc3;
    }
    for(index = 1; index_inc3 >= 0 ? index <= index_end3 : index >= index_end3; index += index_inc3) {
      // Block#: :Vf2ixGliQ?_AX.6(F-+
      currentField = pList[index - 1];
      // Block#: L9co|56w)1/Y4qw9P_JJ
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, pDictionaryKey), "EQUAL", pDictionaryKeyValue)) {
        // Block#: -Z=~mYcKUj!n22wHWgRY
        currentField = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(currentField, pDictionaryKey));
      }
    }
    return currentField;
  }
  /**
   * Describe this function...
   */
  function setProgressBar(pPercentage, pProgressBarWidth) {
    return(pPercentage * pProgressBarWidth) / 100;
  }
  /**
   * Describe this function...
   */
  function setDictionaryAtttributeInList(pList, pListItemID, pDictionaryKey, pDictionaryAttributeValue) {
    // Block#: @5-;Xyr(A?yHwj($^/@=
    currentField = pList[pListItemID];
    // Block#: d,h}XCm})h3_Fb9v9wyS
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(currentField, pDictionaryKey, pDictionaryAttributeValue)
    // Block#: 1y7f}avQ9^|r(ZVD#tNo
    pList[pListItemID] = currentField;
  }
  /**
   * Describe this function...
   */
  function initSDKFirstLogIn(pVerificationCode) {
    // Block#: O!E`Oxf*]1U:dQYSg-{r
    delSDKLists();
    // Block#: R#,@Hb21(slQkE|46+4J
    userID = pVerificationCode;
    // Block#: 9IV6VmH$XlI^hb(q9CA5
    processDefKey = 'firstLogIn';
    // Block#: =`(0~qn?OO8lgK@NH{;u
    com.fc.JavaScriptDistLib.SnappClinical.snappClinicalConfigure(userID, 'P4ssw0RD$!', userID, 'mobileApp');
    // Block#: ~RiEH0A:]iWFFkRs(qOH
    initFirstLogInReturnValue = SDKGetFirstTask(processDefKey);
  }
  /**
   * Describe this function...
   */
  function delSDKLists() {
    // Block#: V!S|!2#H0%?uy_#E?o;)
    SDKoutput = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['variables', 'fields', 'outcomes', 'fieldMapping'], [
      [],
      [],
      [],
      []
    ]);
  }
  /**
   * Describe this function...
   */
  function logInForProcessAndCredentials(pProcessDefKey, pUserID, pPassword) {
    // Block#: ]XK47Zl9DsF%HP1hD#}7
    logInForProcessAndCredentialsReturnValue = false;
    // Block#: [yZ9si9L)Dz++B(f.:g*
    delSDKLists();
    // Block#: @1ca^H{F4@cmy%7sSFmd
    userID = pUserID;
    // Block#: JB=;7az@FZf(r]ta@qBo
    processDefKey = pProcessDefKey;
    // Block#: $w9ew:Ko?ag*7rMtg07y
    com.fc.JavaScriptDistLib.SnappClinical.snappClinicalConfigure(pUserID, pPassword, pUserID, 'mobileApp');
    // Block#: X/(Rl1j}QlaK[LVQz%`K
    logInForProcessAndCredentialsReturnValue = SDKGetFirstTask(pProcessDefKey);
    return logInForProcessAndCredentialsReturnValue;
  }
  /**
   * Describe this function...
   */
  function initImages() {
    // Block#: j!DW0f]!{s*x-r;MEq0Y
    dictionaryOfImages = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: ^P0_t%yz[2iD3,}MOie/
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'about', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/ea64ee99-7090-441b-bbd2-d294211382c5"))
    // Block#: YMQ^th80K!U%RAWD!Uy{
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'doctor', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/b10e75dd-5e33-4e5c-8c05-9d70616a1c4c"))
    // Block#: ad-]Q+6,j|$hxxVIC(H~
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'documents', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/d57cf0bc-247f-4436-aec5-5efe585ea874"))
    // Block#: e-ZPdopCe#6Yu|7UxD2A
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'diagnose', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/ef948692-c2dc-4f39-baaf-527313358cd1"))
    // Block#: [CJ4M.mHc%[??Ta)ZA`e
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'eQualification', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/22be2712-5285-4290-90fc-fc1404123234"))
    // Block#: L?uqz(hUx1Ijq!wX@JD~
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'FAQ', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/ea64ee99-7090-441b-bbd2-d294211382c5"))
    // Block#: 4#`;C(_Nu]SP(LpBmQnU
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'footerLogo', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/b4114f4f-72a7-4413-90a0-5422b0b784a1"))
    // Block#: 7XG~r#I^_c3m*aKf;OA;
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'gender', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5500f01d-436a-45e7-98bb-30665addeb4e"))
    // Block#: PFj0IM^%0M}tX7{;PM6X
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'Glucometer', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/bec130a2-c6f0-48d4-9aaa-cd5b03575a0a"))
    // Block#: I?qDLjk32eK0Wb)}?U;M
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'homewireless', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/dc534750-9e07-4b41-b408-077be1b2bec2"))
    // Block#: He5Wr@(P6LBoA+:#)1VZ
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'hospitalized', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/6395f26d-eaa9-4112-8832-5115b50e2cf4"))
    // Block#: x!?U:+(l|lM+5O623f84
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'hourglass', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690"))
    // Block#: *Nr_rk{c1]k{~5CyNR)N
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'insulin', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5bbfcabf-57fe-4579-b166-c9c20e15d763"))
    // Block#: rL8,W,@ZiG184]^E2U,p
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'lock', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/884b0bd2-8936-4a8a-920f-661244942a38"))
    // Block#: S*78a#`kZp,ZG8Y$@PNp
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'mealTime', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/c171217b-628b-4fd7-b952-e074e4e43ddc"))
    // Block#: .MAUsffqVeD$UGZ@vyB)
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'notAllowed', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/9c3d0080-a65c-43de-88ec-a7a08e2a1004"))
    // Block#: !%JmNUsQ_}?1*4`4Q|+w
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'pregnant', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5d25f28a-a92d-4043-a9cb-788c82eb477a"))
    // Block#: ]K(27xHM.3@8O*w#9$NW
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'processComplete', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5f1de44c-5f98-414a-8472-a71dd1126ce6"))
    // Block#: @xhUv.!7y_BskV(vA16b
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(dictionaryOfImages, 'verification', com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/217e1921-4a36-42f0-95b3-0457793bdc29"))
  }
  /**
   * Describe this function...
   */
  function TDB1updateCurrentPage(template) {
    // Block#: qo)ZY}?/?w;5hcke%puq
    $('[obj-name="TDB1imgLink1"]').hide(); // Block#: 8PKbDr]$?IR!Fzx|`2d1
    $('[obj-name="TDB1imgLink2"]').hide(); // Block#: YH(ZaOxRj!6Wf$Gr])/W
    $('[obj-name="TDB1imgLink3"]').hide(); // Block#: 39{fOz9oRl$ydn@wjGV*
    $('[obj-name="TDB1imgLink4"]').hide(); // Block#: zvNIu~}nj|QUc^CSo[~f
    $('[obj-name="TDB1imgLink5"]').hide(); // Block#: [aSehM?==$4G=DYg}u8l
    $('[obj-name="TDB1imgLink6"]').hide(); // Block#: oK=9}2%XzUj|^VnJvP~*
    $('[obj-name="TDB1lblLink1"]').hide(); // Block#: 8MZjmCT/Tap!xc-%^-n0
    $('[obj-name="TDB1lblLink2"]').hide(); // Block#: PdTZUqSu?7Pu2oL4@mZj
    $('[obj-name="TDB1lblLink3"]').hide(); // Block#: f~+pK0MXY!$#+YhsTZmW
    $('[obj-name="TDB1lblLink4"]').hide(); // Block#: oT1m@p$v0qAmHM-lJGF*
    $('[obj-name="TDB1lblLink5"]').hide(); // Block#: IQ,3x{6PhT-%t[=^$HVz
    $('[obj-name="TDB1lblLink6"]').hide(); // Block#: Bkx?_i,-Mj*WtK=E,u}-
    $('[obj-name="TDB1lblLinkText1"]').hide(); // Block#: G@%=(B4$ODo[i4:N,%FC
    $('[obj-name="TDB1lblLinkText2"]').hide(); // Block#: f|i~!@jAgrN-tGLTx@]r
    $('[obj-name="TDB1lblLinkText3"]').hide(); // Block#: dj:hxBBJn6~f{Qpgg$5K
    $('[obj-name="TDB1lblLinkText4"]').hide(); // Block#: ftSfoZvB$Q?E~wppu*98
    $('[obj-name="TDB1lblLinkText5"]').hide(); // Block#: byp{?Uh+AnL}l~|r;4uE
    $('[obj-name="TDB1lblLinkText6"]').hide(); // Block#: =ZgZEa?3=0me(,A$|;^c
    $('[obj-name="TDB1btnLinkGO1"]').hide(); // Block#: 4$;*f$c4},dai*c}3AKC
    $('[obj-name="TDB1btnLinkGO2"]').hide(); // Block#: 3NcS7#t#%M%/}@aLF:hu
    $('[obj-name="TDB1btnLinkGO3"]').hide(); // Block#: :6h/dikaihW$b*/T#H2c
    $('[obj-name="TDB1btnLinkGO4"]').hide(); // Block#: i-sLRW@~A+ZvV$n`p5oK
    $('[obj-name="TDB1btnLinkGO5"]').hide(); // Block#: WvC+AH)8)Vz/JC=bCt,f
    $('[obj-name="TDB1btnLinkGO6"]').hide(); // Block#: F!uEp{d6))4[vGkK*)q^
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblTitle", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'title'))); // Block#: gSmaQatfx7IdMpRPih:3
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link1')) {
      // Block#: BqSp``njZCSSwT*_J{3m
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link1'))); // Block#: BS6Zaa.xPJZ]/[jFfXA9
      $('[obj-name="TDB1imgLink1"]').show(); // Block#: xGpg7.9i6n*QBBBM3?pu
      $('[obj-name="TDB1lblLink1"]').show(); // Block#: `7n0ST;oSXj[Vz^k::qr
      $('[obj-name="TDB1lblLinkText1"]').show(); // Block#: 3a9Tyu1oIPdjdX2jYg*q
      $('[obj-name="TDB1btnLinkGO1"]').show();
    }
    // Block#: z9VA@L@T%ac7:vNL2l6R
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link2')) {
      // Block#: r4OKS/cKK!UDdJ6eOc=4
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link2'))); // Block#: jbUyvV^=+)pzJ?SaEE[h
      $('[obj-name="TDB1imgLink2"]').show(); // Block#: ^(q069FhgglKq%[zYinr
      $('[obj-name="TDB1lblLink2"]').show(); // Block#: :gV-*Xs_NVgsv*^qpeFM
      $('[obj-name="TDB1lblLinkText2"]').show(); // Block#: -!O(=jwk5`EB.c?`[32+
      $('[obj-name="TDB1btnLinkGO2"]').show();
    }
    // Block#: [^CFle9}k|JsslS(NYxA
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link3')) {
      // Block#: Rv(Qh?1M0Q6}:,%UcPS4
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText3", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link3'))); // Block#: GJgpxn]ko,Fp?xqWBNkb
      $('[obj-name="TDB1imgLink3"]').show(); // Block#: #G5*l/RN0bWgw{-)ncz[
      $('[obj-name="TDB1lblLink3"]').show(); // Block#: .tKF5FQ+xzHHlyK.E9J4
      $('[obj-name="TDB1lblLinkText3"]').show(); // Block#: LF;}e=+?AW$.7Vt!1q~[
      $('[obj-name="TDB1btnLinkGO3"]').show();
    }
    // Block#: nVZU5n]-.E-4oXa}1C#n
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link4')) {
      // Block#: xEwh}/Tr_jzW3QXGHt_z
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText4", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link4'))); // Block#: vq};RLg8D5B+;ME;%*[,
      $('[obj-name="TDB1imgLink4"]').show(); // Block#: ,(xre/5y*lqf6:X?T9c-
      $('[obj-name="TDB1lblLink4"]').show(); // Block#: MwH8.^J*Md:kOz`{WsPT
      $('[obj-name="TDB1lblLinkText4"]').show(); // Block#: gP%a5qgJH3zcNamAn?dS
      $('[obj-name="TDB1btnLinkGO4"]').show();
    }
    // Block#: ?nzsZXrOw(X9*YYhTN#]
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link5')) {
      // Block#: wAcNH6g2C=BaXaEc+PNS
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText5", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link5'))); // Block#: $X#SU#xFR2||h-tyVN!f
      $('[obj-name="TDB1imgLink5"]').show(); // Block#: .hJ,o;P18DG6tX*[5:*g
      $('[obj-name="TDB1lblLink5"]').show(); // Block#: dB|L3!:RXpuA3DUFu2D^
      $('[obj-name="TDB1lblLinkText5"]').show(); // Block#: 6sC5uczf#)Q|I6tNGX^l
      $('[obj-name="TDB1btnLinkGO5"]').show();
    }
    // Block#: ~VQr.JnLd14XD`S[k2.m
    if(com.fc.JavaScriptDistLib.Dictionary.conatinedInDict(template, 'link6')) {
      // Block#: JC?9=lyv[lg,P@!El}NP
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TDB1lblLinkText6", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'link6'))); // Block#: aDcdsqNt%dJ2$4|6Y6VS
      $('[obj-name="TDB1imgLink6"]').show(); // Block#: k1(MMPa`-]44$T;bt2C
      $('[obj-name="TDB1lblLink6"]').show(); // Block#: cJC6+HvGpPc^gLTs!WV5
      $('[obj-name="TDB1lblLinkText6"]').show(); // Block#: WC._mKH*|*m(W(l@e[is
      $('[obj-name="TDB1btnLinkGO6"]').show();
    }
    // Block#: Hs-tkYOfZvJ$_Xzn#h.5
    com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TDB1imgFooterLogo", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(dictionaryOfImages, com.fc.JavaScriptDistLib.Dictionary.getDictValue(template, 'footerImage')))); // Block#: 3KO1msk!@nBhm$b;9(.-
    $('[obj-name="TDB1imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function initialize() {
    // Block#: 0x(6aiB0BYFoXP84=Rem
    currentScreen = 'TFTL';
    // Block#: BUfwO#NYXwrN}Bi=?V!i
    firstProcessAtLogIn = 'eConsentProcess';
    // Block#: |g:0JG/+euG@kitS?s|~
    checkBoxList = [];
    // Block#: .?m(m|m_zeo~qi/`ZpOG
    userEnrolledKey = 'userEnrolled';
    // Block#: jq62Vjag@a|x^1`95!bp
    currentRound = 0;
    // Block#: /DLv0dqj0I%Bn!qdB]JZ
    initImages();
    // Block#: lYk/n4Y3k}7.-*p`Uy0d
    processHistoricVar = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: 6ZQEz2ku%[zG(}:15gyv
    lastTemplate = '';
    // Block#: x#Ln|?xEW`zh?Td+RP7.
    userEnrolledStatus = (com.fc.JavaScriptDistLib.Storage.getValue(userEnrolledKey));
    // Block#: :ljf*K{nH@iY@2!-c^(n
    userPassword = '';
    // Block#: ^w3;Je}JP2G~55Vl@1/]
    userID = 'marcos';
    // Block#: J:/WeGha(A4RNR-@5s?7
    userPassword = 'Mandrake32!';
    // Block#: :]|;rR`1$=KPNlpm$kP%
    if(!(userEnrolledStatus == null)) {
      // Block#: Jt/;=dK6+M{}pxmAb~,Z
      userID = 'forgetfulUser';
      // Block#: P4oJ;-Ix3}D69+oSYaCW
      userPassword = '4mn3s14C!';
      // Block#: Eqo}!!7ZZZ)O/w+P/I|.
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(userEnrolledStatus, "EQUAL", 'TRUE')) {
        // Block#: /S#SH4aGeDOrr3!BAdSD
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TLGI"]');
        showScreen.show();
        history.pushState({
          'view': 'TLGI'
        }, 'TLGI', 'TLGI');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      } else {
        // Block#: :{QAxx.YYvqs%_|cF%6B
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TFTL"]');
        showScreen.show();
        history.pushState({
          'view': 'TFTL'
        }, 'TFTL', 'TFTL');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
    } else {
      // Block#: LX6Qi`a@Jp.riX%rS$)6
      com.fc.JavaScriptDistLib.Storage.add('userEnrolled', 'FALSE') // Block#: GsCpF!l1EuNYU+@Tp_V(
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="TFTL"]');
      showScreen.show();
      history.pushState({
        'view': 'TFTL'
      }, 'TFTL', 'TFTL');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    }
  }
  /**
   * Describe this function...
   */
  function initSDK(pProcessDefKey, pUserName, pPassword) {
    // Block#: ArV-lNX./6]_c~m6]L1l
    initSDKReturnValue = false;
    // Block#: euL8~G6gwr7Zfw[wb/{X
    delSDKLists();
    // Block#: 1n(O102C2B6NMz3Iq~BK
    processDefKey = pProcessDefKey;
    // Block#: sZnarlvP8SR?GMlt5Oc!
    com.fc.JavaScriptDistLib.SnappClinical.snappClinicalConfigure(pUserName, pPassword, pUserName, 'mobileApp');
    // Block#: Ra|NkT*mT=#5F@Aoy#b%
    initSDKReturnValue = SDKGetFirstTask(pProcessDefKey);
    return initSDKReturnValue;
  }
  /**
   * Describe this function...
   */
  function saveTaskAndNext(pOutcome) {
    // Block#: PQcY*h*qH]Mt;G!x6ety
    currentRound = currentRound + 1;
    // Block#: /_qYP*Tk9n0uIr+~Y?1c
    pErrorData = '';
    // Block#: A?kvDZev)hkHcuXhk8r-
    currentProperty = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'id', 'switchToProcess', '', '', 'name');
    // Block#: /Sjsv]%8NYawwV0InVQy
    if(!!currentProperty.length) {
      // Block#: Qpu)G#Cvqc.o,`cL?trA
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentProperty, "EQUAL", 'eQualificationProcess')) {
        // Block#: yHiL/S(Sqn7[+q_r~=+n
        com.fc.JavaScriptDistLib.Storage.add(userEnrolledKey, 'TRUE')
      }
      // Block#: *M*c^*|8Dm8tlY1u|Qk3
      checkFormatReturnValue = logInForProcessAndCredentials(currentProperty, userID, userPassword);
    }
    // Block#: qhosLf{[.-rZJS_8HcPv
    if(!!currentProperty.length) {
      // Block#: $O@1(t%J=SGV-;9Sa8]F
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentProperty, "EQUAL", 'TLGI')) {
        // Block#: FDKo*.;fi6%J+J9zm.=)
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TLGI"]');
        showScreen.show();
        history.pushState({
          'view': 'TLGI'
        }, 'TLGI', 'TLGI');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
    }
    // Block#: c2}R,~_Ja/Bm{q[7/}[R
    com.fc.JavaScriptDistLib.SnappClinical.snappClinicalSaveTaskVariables(com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables'), com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'), pOutcome,
      function() {
        // Block#: nmj:3e44@#vXJ3?j!LbZ
        delSDKLists();
        // Block#: YIp@843l^6Ozv^,K_PYK
        com.fc.JavaScriptDistLib.SnappClinical.snappClinicalMoveToNextTask(
          function(variables, fields, outcomes) {
            // Block#: TotK_;-T=60nULO8@*4C
            SDKGetNextTask(variables, fields, outcomes);
          },
          function(error_data) {
            // Block#: {)9LX(Pc:3W2]T1:xfNZ
            pErrorData = error_data;
            // Block#: fn8rxhRDW~dYPur^l]!G
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(userPassword, "EQUAL", '')) {
              // Block#: `%_m=-{6$hPU/i%uL+yG
              $('[obj-name="TSC1imgHourglass"]').hide();
            } else {
              // Block#: b;*%|Wnf-NX:~9Ewv2IZ
              com.fc.JavaScriptDistLib.SnappClinical.snappClinicalConfigure(userID, userPassword, userID, 'mobileApp');
              // Block#: MQHj^-M3Q}|3|Py]8Q85
              i = SDKGetFirstTask('firstLogIn');
            }
          });
      },
      function(error_data) {
        // Block#: Z6YA`MkZs!B?#04Ic1(q
        pErrorData = error_data;
        // Block#: Xy@h9.f/CJ@hk{hgj9VN
        $('[obj-name="TSC1imgHourglass"]').hide();
      });
    return pErrorData;
  }
  /**
   * Describe this function...
   */
  function SDKGetFirstTask(pProcessDefKey) {
    // Block#: ]22]jBqy`HL#Ij(-og4?
    com.fc.JavaScriptDistLib.SnappClinical.snappClinicalGetNextTaskOnProcess(pProcessDefKey,
      function(variables, fields, outcomes) {
        // Block#: Y)/xE+qwp~h7m`Otv[cf
        SDKGetNextTask(variables, fields, outcomes);
        // Block#: r*V=J9+/+Eb4}jlP1q=s
        SDKGetFirstTaskReturnValue = true;
      },
      function(error_data) {
        // Block#: UY@U9A`X9kOG?GtSNWh+
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentScreen, "EQUAL", 'TLGI')) {
          // Block#: [_m2/z*PQ97ghF$j@`mj
          updatewrongLogInAttempts();
        }
        // Block#: 4E^UE^FbTSZCg%_mPECs
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentScreen, "EQUAL", 'TFTL')) {
          // Block#: c%szFXU~;;ya|;x/*}4G
          $('[obj-name="TFTLimgHourglass"]').hide(); // Block#: Y,VO1x/h~!h1MD]:FVYu
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TFTLlblInfoText", 'You entered an incorrect Verification Code');
        }
        // Block#: neZQq6N_MAF](h$A{p|,
        SDKGetFirstTaskReturnValue = false;
        // Block#: zT7onkhCX2:?vr?-F~Th
        pErrorData = error_data;
        // Block#: 24CJ?P^Z3bjebQDS=DuX
        $('[obj-name="TFTLimgHourglass"]').hide();
      });
    return SDKGetFirstTaskReturnValue;
  }
  /**
   * Describe this function...
   */
  function TSC1HideObjects() {
    // Block#: {bX)_/qfpC!{iPc.nnF)
    $('[obj-name="TSC1lblTitle"]').hide(); // Block#: sc;bZ-i[Xo)8oHz/w$]]
    $('[obj-name="TSC1btn1"]').hide(); // Block#: rqT`{y{i44|ewA}KDw^t
    $('[obj-name="TSC1cnt1"]').hide(); // Block#: |9WDwcs3,OU!QarwQVxW
    $('[obj-name="TSC1cnt2"]').hide(); // Block#: e#}scenX#fnxk;-i7(Fi
    $('[obj-name="TSC1cnt3"]').hide(); // Block#: [opr!Vs#[w4_1Y-NWff%
    $('[obj-name="TSC1cnt4"]').hide(); // Block#: Wh)r$0#]/1%D^Yz4ppQu
    $('[obj-name="TSC1cntSliderExt"]').hide(); // Block#: w+svp{Zme}I4s{Xx*LM7
    $('[obj-name="TSC1cntParentLink"]').hide(); // Block#: Q-`/z2SnQEBVfW4ZMFAk
    $('[obj-name="TSC1lblLink1"]').hide(); // Block#: 2A;Hz:2}[6Ld`)2(:`x=
    $('[obj-name="TSC1lblLink2"]').hide(); // Block#: R`|}?/{?50~TEEUk)n0T
    $('[obj-name="TSC1lblTopRight"]').hide(); // Block#: %1C{4F8HOlZ.CZyDn_4Z
    $('[obj-name="TSC1lblInfoText"]').hide(); // Block#: Rfv}!g,-;(u.#,OrV@E$
    $('[obj-name="TSC1imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function TQL1updateScreen() {
    // Block#: W(bhIT2Y9vVUy:nld{NT
    TQL1HideObjects();
    // Block#: X=dljHD8GSYQKe;`NrLy
    currentProperty = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'id', 'title', '', '', 'name');
    // Block#: d?sFGU:i7EBCmeWf)=Mg
    if(!!currentProperty.length) {
      // Block#: })Qi?rvRU_]B;/]v!jJ|
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TQL1lblTitle", (com.fc.JavaScriptDistLib.TextLib.convertToText(currentProperty))); // Block#: Y[EQ[~Qn7eekPH]=TY7h
      $('[obj-name="TQL1lblTitle"]').show();
    }
    // Block#: {s]DX`sE?nZj0*j_d10b
    currentProperty = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'id', 'progressBar', '', '', 'name');
    // Block#: {oxkL7W[Cb{LL$4om;R?
    if(!!currentProperty.length) {
      // Block#: kT/{$h@AM6PsT^;G:!_T
      com.fc.JavaScriptDistLib.Container.setProperty["width"]("TQL1cntSliderInt", (setProgressBar(currentProperty, com.fc.JavaScriptDistLib.Container.getProperty["width"]("TQL1cntSliderExt")))); // Block#: 9Key^Q}R84wsPnPvdi0c
      $('[obj-name="TQL1cntSliderExt"]').show();
    }
    // Block#: 9-eZJ~bOeM(02P~!wX4s
    currentProperty = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'id', 'infoText', '', '', 'name');
    // Block#: m@:yyH?19C[|x`?(?Yj|
    if(!!currentProperty.length) {
      // Block#: Oy+*KwzTjs~G^oS*]s@C
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TQL1lblInfoText", (com.fc.JavaScriptDistLib.TextLib.convertToText(currentProperty))); // Block#: 5GrVyO-mQYM}q^]Is_/`
      $('[obj-name="TQL1lblInfoText"]').show();
    }
    // Block#: l#O#_$4dL*i+pI=DWfi:
    for(index = 1; index <= 4; index++) {
      // Block#: u{$IQ70Wq}WRZ$h^{E%U
      currentOutcome = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomeAndFieldMapping')), 'id', String('outcome') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(index)), '', '', 'name');
      // Block#: anZJIKxw,eT_Gbz:4Vq;
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TQL1lblParent')) {
        // Block#: 8M;{L#)Y3!e|S(xS7m?)
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TQL1lblParent", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: @%F1]JWxHh)6io+lsNpw
        $('[obj-name="TQL1cntParentLink"]').show();
      }
      // Block#: -#Fj[k(X?pxt[=($*`rT
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TQL1btn1')) {
        // Block#: :V-SvXAfV?yXR${n{^.C
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TQL1btn1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: 9sU2;s!eRcZI[`tXYw{U
        $('[obj-name="TQL1btn1"]').show();
      }
      // Block#: ryH~k!h2F4Lo*evt=AsD
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TQL1lblLink1')) {
        // Block#: ?wqFwf*@e}?yD/x$JI:2
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TQL1lblLink1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: fERL+0A/-?*t-{##EjMR
        $('[obj-name="TQL1lblLink1"]').show();
      }
      // Block#: `pMp#XC*v6bhYIZL{F}h
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TQL1lblLink2')) {
        // Block#: X+.^L53T-IQ_S2[T0LZ|
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TQL1lblLink2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: 8wNP!4a|3%x`().X%:h?
        $('[obj-name="TQL1lblLink2"]').show();
      }
      // Block#: FYnZKTZYaFuFLTs4W[Eo
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TQL1lblTopRight')) {
        // Block#: thz~KnB?fc84Ojf3eM*D
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TQL1lblTopRight", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: /?Q@^MH?#jSRvO0|aRE%
        $('[obj-name="TQL1lblTopRight"]').show();
      }
    }
    // Block#: sI+SjTI,F+NqXG;xE{fj
    j = 0;
    // Block#: ].sRJ?`K33FLn]6ACql?
    checkBoxList = [];
    // Block#: JvRDl0j|!_TEdF:jlyzJ
    checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
    // Block#: dUyF5#$D9Kk`%qob_e!A
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length - 1, "GTE", 0)) {
      // Block#: Z,S=]iXSfh*9+m?pm6X1
      var index_end5 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length - 1;
      var index_inc5 = 1;
      if(0 > index_end5) {
        index_inc5 = -index_inc5;
      }
      for(index = 0; index_inc5 >= 0 ? index <= index_end5 : index >= index_end5; index += index_inc5) {
        // Block#: t#pK|H*-.`D-ko)([XSK
        currentField = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomeAndFieldMapping')), 'id', String('field') + String(com.fc.JavaScriptDistLib.TextLib.convertToText((index - j) + 1)), '', '', 'name');
        // Block#: eF-fi*76q*J:9I2?!$!h
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'fieldType'), "EQUAL", 'OptionFormField')) {
          // Block#: }$hDzP^_F`Joq$tp^?gh
          var listItem_end = (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'options')).length - 1;
          var listItem_inc = 1;
          if(0 > listItem_end) {
            listItem_inc = -listItem_inc;
          }
          for(listItem = 0; listItem_inc >= 0 ? listItem <= listItem_end : listItem >= listItem_end; listItem += listItem_inc) {
            // Block#: XYM3.O|C{Ae9SPd?,GwX
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'value'), "EQUAL", com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'options'))[listItem], 'name'))) {
              // Block#: B%1ze1!9xmYzq?a]Hv^w
              checkBoxValue = 'TRUE';
            } else {
              // Block#: Nu(yi4t|[|7`PQ`ZsXG@
              checkBoxValue = 'FALSE';
            }
            // Block#: GdyywnQ3*Iu$OtCR|3Lk
            checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createDictionary(['id', 'name', 'value'], [(com.fc.JavaScriptDistLib.TextLib.convertToText(listItem)), (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'options'))[listItem], 'name')), checkBoxValue]);
            // Block#: m7!f9p3DWZ64|)3x-Y1s
            com.fc.JavaScriptDistLib.ListLibrary.listAdd(checkBoxList, checkBoxElement)
            // Block#: u}?0-89g~AXMgt@W6^IN
            $('[obj-name="TQL1lsv"]').show();
          }
          // Block#: XEv#_Y4dJ5.VU7v~@/@c
          LVcells = checkBoxList.length;
        } else {
          // Block#: myx:7OL2NkULQMfacVIl
          j = j + 1;
        }
      }
      // Block#: V?tKGXS@hCD5KNA1iJbN
      com.fc.JavaScriptDistLib.ListView.removeAllCells('TQL1lsv');
      on_listview_length_configured_TQL1lsv();
    }
  }
  /**
   * Describe this function...
   */
  function updatewrongLogInAttempts() {
    // Block#: RgsG(*JRoppR}SERtIrC
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(numberOfWrongLogInAttempts, "LT", 2)) {
      // Block#: I4F/UE2B!gIl/xmM5:u9
      $('[obj-name="TLGIimgHourglass"]').hide(); // Block#: csr}#?=v-fu6+^~hWoYR
      numberOfWrongLogInAttempts = numberOfWrongLogInAttempts + 1;
      // Block#: dP#5#jP-HZmP*:rO+@i8
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TLGIlblInfoText", (['Your entered wrong log in credentials', '<br>', 'You have:  ', (com.fc.JavaScriptDistLib.TextLib.convertToText(3 - numberOfWrongLogInAttempts)), '  attempts left'].join('')));
    } else {
      // Block#: @M?Xs4?4zM|2=v)W)C,:
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TLGIlblInfoText", (['You exceeded maximum number of log in attempts ', '<br>', 'Plase click on the "Forgot password" link to recover your data'].join(''))); // Block#: ZoE|Y(v(np]zj`=Ui|b4
      $('[obj-name="TLGIimgHourglass"]').hide();
    }
  }
  /**
   * Describe this function...
   */
  function TSC1updateScreen() {
    // Block#: jgZ):lN/=~*w7Hr,GpEF
    TSC1HideObjects();
    // Block#: cmu#;wMO{mEyN*189][F
    currentProperty = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'id', 'title', '', '', 'name');
    // Block#: r8Ot/AfZ|{4)p6X7_b^.
    if(!!currentProperty.length) {
      // Block#: .(b9-3kfilkPDs_McVQV
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lblTitle", (com.fc.JavaScriptDistLib.TextLib.convertToText(currentProperty))); // Block#: |D.-^3=U/N5:K)Yw2,`g
      $('[obj-name="TSC1lblTitle"]').show();
    }
    // Block#: Eq_e-7{+$Acr*=}BbvWG
    currentProperty = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'id', 'progressBar', '', '', 'name');
    // Block#: vE}v6O#9puHugYoU6/:V
    if(!!currentProperty.length) {
      // Block#: d`CZ|StL`o-MH2nc!xtx
      com.fc.JavaScriptDistLib.Container.setProperty["width"]("TSC1cntSliderInt", (setProgressBar(currentProperty, com.fc.JavaScriptDistLib.Container.getProperty["width"]("TSC1cntSliderExt")))); // Block#: ej+?S?-!W9yFOy]Jz#~o
      $('[obj-name="TSC1cntSliderExt"]').show();
    }
    // Block#: ,v[JB@D{|iwm)zU[E?,g
    currentProperty = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'id', 'infoText', '', '', 'name');
    // Block#: 4iN2]jT@KhkNW/dR*L}z
    if(!!currentProperty.length) {
      // Block#: @QehWz`XFr2.XeYB@_m9
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lblInfoText", (com.fc.JavaScriptDistLib.TextLib.convertToText(currentProperty))); // Block#: q$-_$89*]?tlE[t5M.DA
      $('[obj-name="TSC1lblInfoText"]').show();
    }
    // Block#: mHk!]yL}7Djer`d#_Bs8
    for(index = 1; index <= 4; index++) {
      // Block#: Sq1UYI,BE{ok?vyy`,qm
      currentOutcome = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomeAndFieldMapping')), 'id', String('outcome') + String(com.fc.JavaScriptDistLib.TextLib.convertToText(index)), '', '', 'name');
      // Block#: ({hDEWBdGHdH8Nya%od5
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TSC1lblParent')) {
        // Block#: ^%}aj]=j/NdL]OBDJxKu
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lblParent", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: pJy27|_KUwjo:_x.=$mQ
        $('[obj-name="TSC1cntParentLink"]').show();
      }
      // Block#: k$R;z4;(*wrf[rH|(5QF
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TSC1btn1')) {
        // Block#: @.Dw5.qrG9?3`@#w1R}!
        com.fc.JavaScriptDistLib.Button.setProperty["Text"]("TSC1btn1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: ^:/yn*iL6o;x`9Zh{7J:
        $('[obj-name="TSC1btn1"]').show();
      }
      // Block#: B|bW0Zih@m|8qjZySO#u
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TSC1lblLink1')) {
        // Block#: c?+s`($_MAlZZbHO;C@1
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lblLink1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: _`lQ7Sj]e{}IM$QH?qgP
        $('[obj-name="TSC1lblLink1"]').show();
      }
      // Block#: Kt7fs[V{VT!s~=@A8Fjn
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TSC1lblLink2')) {
        // Block#: x.KKu!2a~[J#E`+itEPb
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lblLink2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: }vWP%?9]Zo+J_-~ON6]R
        $('[obj-name="TSC1lblLink2"]').show();
      }
      // Block#: E@q~OK70_Q2e#(NJ,d85
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentOutcome, "EQUAL", 'TSC1lblTopRight')) {
        // Block#: tGa)N#AqZirXY/=7}`jI
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lblTopRight", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomes'))[index - 1], 'name'))); // Block#: V[4E}_lB-d(8WH]#QX?m
        $('[obj-name="TSC1lblTopRight"]').show();
      }
    }
    // Block#: xK7]j8:McxZB:ZnPwg(-
    j = 0;
    // Block#: Q4@$5mbTYVy-N-6kaUE?
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length - 1, "GTE", 0)) {
      // Block#: CJD817gOaK[qxSMnLjP{
      var index_end6 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length - 1;
      var index_inc6 = 1;
      if(0 > index_end6) {
        index_inc6 = -index_inc6;
      }
      for(index = 0; index_inc6 >= 0 ? index <= index_end6 : index >= index_end6; index += index_inc6) {
        // Block#: Nts*n@Rm=VY/f0+rrh4P
        currentField = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomeAndFieldMapping')), 'id', String('field') + String(com.fc.JavaScriptDistLib.TextLib.convertToText((index - j) + 1)), '', '', 'name');
        // Block#: BQ_Jhpg,H|3+e=O2-,!3
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'fieldType'), "EQUAL", 'FormField')) {
          // Block#: cJY};tIV/G+:67.({dxD
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt1')) {
            // Block#: rcM2n6xK3j)U~kTGzq%L
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'name'))); // Block#: PkfMWXX0Xod#J3Uz]|M*
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt1", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'placeholder'))); // Block#: l2=Xe6Df,iry{|#DfjAQ
            txt1PlaceHolder = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt1");
            // Block#: 3_3@f_1YH9S8t`$yX)54
            $('[obj-name="TSC1cnt1"]').show();
          }
          // Block#: Z9u?et38,O7/e{6q_?|h
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt2')) {
            // Block#: 2*3=on~Noy.+`(J|:KOW
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'name'))); // Block#: %Hvh,PpQ^AS)1;s,P_d/
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt2", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'placeholder'))); // Block#: B1f]_rQxwH@~#-{chiOC
            txt2PlaceHolder = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt2");
            // Block#: `iM;=]Ka*Uqi:a)m(g:s
            $('[obj-name="TSC1cnt2"]').show();
          }
          // Block#: 0%78$I-qdVdf`a-f6d1p
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt3')) {
            // Block#: k[D]jPit{Z[h#1d?nry;
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl3", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'name'))); // Block#: /`2./8aV!g%%6Msz%!S}
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt3", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'placeholder'))); // Block#: 7vq}Qn7G4ij_K?i|J1o^
            txt3PlaceHolder = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt3");
            // Block#: g1h43/;-8BXhqMd[G;98
            $('[obj-name="TSC1cnt3"]').show();
          }
          // Block#: U%rDb(xvgI!4^|4n+R~J
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt4')) {
            // Block#: M.x}3cUb:wBty#CKl!h%
            com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl4", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'name'))); // Block#: :xmGTKvpBEc)b_e]8drT
            com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt4", (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'placeholder'))); // Block#: IeTP@wV.!IugYTV(WHf`
            txt4PlaceHolder = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt4");
            // Block#: Tz?hw=}4l21,y*DeNJw:
            $('[obj-name="TSC1cnt4"]').show();
          }
        } else {
          // Block#: H]/A`D5SRFMS(J./Svqc
          j = j + 1;
        }
      }
    }
  }
  /**
   * Describe this function...
   */
  function SDKGetNextTask(pVariables, pFields, pOutcomes) {
    // Block#: yog,pn!^l4$y{@,:%IP6
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(SDKoutput, 'variables', pVariables)
    // Block#: .W1fk}i|%{/Rf3hxUB8q
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(SDKoutput, 'fields', pFields)
    // Block#: HVUw-{`5@/.R]8M|$/wb
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(SDKoutput, 'outcomes', pOutcomes)
    // Block#: ^*,)#R.%c-%i=2v_wz{#
    setOutcomeAndFieldMapping((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'variables')), 'outcomeAndFieldMapping');
    // Block#: 3pM.9KulE3~]7B_`wr2q
    com.fc.JavaScriptDistLib.Dictionary.setDictValue(SDKoutput, 'outcomeAndFieldMapping', outcomeAndFieldMappingList)
    // Block#: xU9.:vB_vlk}E~nmM~9+
    displayPageEngine();
  }
  /**
   * Describe this function...
   */
  function TQL1HideObjects() {
    // Block#: ,FPpnSQFw`%M:ezYFlWt
    $('[obj-name="TQL1lblTitle"]').hide(); // Block#: qQ#_+*e]v0k!)ReWq.=1
    $('[obj-name="TQL1btn1"]').hide(); // Block#: v;zMMOq#Hyh$FBMWwxSQ
    $('[obj-name="TQL1cntParentLink"]').hide(); // Block#: t::@w+^~tcY2(EPJxb_3
    $('[obj-name="TQL1cntSliderExt"]').hide(); // Block#: hZ(Fk7t!*,@Y.u}5qL2p
    $('[obj-name="TQL1lblInfoText"]').hide(); // Block#: N:Nck=q4pU#Epo2ofeE^
    $('[obj-name="TQL1lblLink1"]').hide(); // Block#: I!aR2rz;?ycVp=D#rRIe
    $('[obj-name="TQL1lblLink2"]').hide(); // Block#: JrDz`J8+KQ#XQ1?!i}g-
    $('[obj-name="TQL1lblTopRight"]').hide(); // Block#: pf/rUHTQC@sWZca%@rRd
    $('[obj-name="TQL1imgHourglass"]').hide();
  }
  /**
   * Describe this function...
   */
  function TSC1FillFields() {
    // Block#: oiLZS3/mHwi,w|S9+=0J
    j = 0;
    // Block#: K%%2ye.kj_IW?5b%]GsE
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length, "GT", 0)) {
      // Block#: vyJ7;X:=PEYEI~O?0JNf
      var index_end7 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length - 1;
      var index_inc7 = 1;
      if(0 > index_end7) {
        index_inc7 = -index_inc7;
      }
      for(index = 0; index_inc7 >= 0 ? index <= index_end7 : index >= index_end7; index += index_inc7) {
        // Block#: RirbL1N+z^`+jEiluIB8
        currentField = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomeAndFieldMapping')), 'id', String('field') + String(com.fc.JavaScriptDistLib.TextLib.convertToText((index - j) + 1)), '', '', 'name');
        // Block#: 5TN)Q14]n/VdmIpSNK7Y
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'fieldType'), "EQUAL", 'FormField')) {
          // Block#: ^l=e4cs{4d|[ZxjcARQn
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt1')) {
            // Block#: yt@n(8{%,;|;vnJcu-7$
            com.fc.JavaScriptDistLib.Dictionary.setDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt1"))
          }
          // Block#: 0Q,FZOl+?GbB%oZ~GL?r
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt2')) {
            // Block#: jsU`b(Is?FUSS:@u#X:.
            com.fc.JavaScriptDistLib.Dictionary.setDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt2"))
          }
          // Block#: Op{bSTj[vcV*OB#tn-N:
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt3')) {
            // Block#: OCqc$!cV5KI{fz[%Sm;u
            com.fc.JavaScriptDistLib.Dictionary.setDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt3"))
          }
          // Block#: e`t_^KU7Je%)DLjW!job
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt4')) {
            // Block#: @_X,1f+6u*4E+.r}K2Iz
            com.fc.JavaScriptDistLib.Dictionary.setDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'value', com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt4"))
          }
        } else {
          // Block#: /sq83kZx)+2^pcBn=Axg
          j = j + 1;
        }
      }
    } else {
      // Block#: OHdlXtAa}[AT-3+nqRH)
      TSC1HideObjects();
    }
  }
  /**
   * Describe this function...
   */
  function TSC1CheckRequiredFields() {
    // Block#: UhHyiGpLjhneM*pOM~?8
    currentFieldIsRequired = false;
    // Block#: j0QAI`B$!1d8Jf_TE/;^
    j = 0;
    // Block#: ^2oEE)`[FXfhB/47t,rd
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length, "GT", 0)) {
      // Block#: 8`,n(PdxnBBM:G7hVxHo
      var index_end8 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length - 1;
      var index_inc8 = 1;
      if(0 > index_end8) {
        index_inc8 = -index_inc8;
      }
      for(index = 0; index_inc8 >= 0 ? index <= index_end8 : index >= index_end8; index += index_inc8) {
        // Block#: $vboeL1Q,`V.8a/s1,:X
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl1", TSC1localCurrentFieldName); // Block#: J0YFq04sVY5RXX@wOr(7
        currentField = getFieldFromListWithKeys((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'outcomeAndFieldMapping')), 'id', String('field') + String(com.fc.JavaScriptDistLib.TextLib.convertToText((index - j) + 1)), '', '', 'name');
        // Block#: ;-G7m_GYH[UMo5yg3769
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'fieldType'), "EQUAL", 'FormField')) {
          // Block#: $|osqR;%A0}~1jB_6kM|
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'required'), "EQUAL", 'true')) {
            // Block#: Ckkgy,1+r{(N/nZE5dUh
            TSC1localCurrentFieldName = (com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'name'));
            // Block#: p1{XASU3Hz~ohPO/kX$*
            TSC1CheckRequiredFieldsRet = String(TSC1localCurrentFieldName) + String(': is required');
            // Block#: CR4k(F]c_yMbBDz;,Xr[
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt1') &&
              (com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt1"), "EQUAL", txt1PlaceHolder) ||
                !com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt1").length)) {
              // Block#: -}O=k2aTjzvx-M.XqZpX
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl1", TSC1CheckRequiredFieldsRet); // Block#: 1h;7?hodOT?paar[.,w=
              currentFieldIsRequired = true;
            } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt1')) {}
            // Block#: N$L2XozM8B},A)v/.0~p
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt2') &&
              (com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt2"), "EQUAL", txt2PlaceHolder) ||
                !com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt2").length)) {
              // Block#: ;F$Y9{N[UJoGX,J[T/EJ
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl2", TSC1CheckRequiredFieldsRet); // Block#: h=-%h-TWvHX-b!-[*d{C
              currentFieldIsRequired = true;
            } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt2')) {
              // Block#: {GDgrUmFdn`Eq}b0a)R;
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl2", TSC1localCurrentFieldName);
            }
            // Block#: y*rXH]V$uGx|M.xbV*@j
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt3') &&
              (com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt3"), "EQUAL", txt3PlaceHolder) ||
                !com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt3").length)) {
              // Block#: ej5j$edZI(_CdPZ~|#`w
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl3", TSC1CheckRequiredFieldsRet); // Block#: /:.$DM]1xGH{M6-uUIn-
              currentFieldIsRequired = true;
            } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt3')) {
              // Block#: uJe-9V?ig35zH+p1UDQk
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl3", TSC1localCurrentFieldName);
            }
            // Block#: $1!}|0QNsJQEh+B+[..?
            if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt4') &&
              (com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt4"), "EQUAL", txt4PlaceHolder) ||
                !com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt4").length)) {
              // Block#: sb@J9kQnO|{%DeDF[otu
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl4", TSC1CheckRequiredFieldsRet); // Block#: ,QB.L!m/6=(9D[H5FP!/
              currentFieldIsRequired = true;
            } else if(com.fc.JavaScriptDistLib.TextLib.textComparison(currentField, "EQUAL", 'TSC1txt4')) {
              // Block#: $^7=*!VNkf):nG3}*S?d
              com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TSC1lbl4", TSC1localCurrentFieldName);
            }
          }
        } else {
          // Block#: -/$df5H6|g~U34_;*1RF
          j = j + 1;
        }
      }
    }
    return currentFieldIsRequired;
  }
  /**
   * Describe this function...
   */
  function TQL1FillFields() {
    // Block#: @I`KgrhxWE.H{ceswiJv
    j = 0;
    // Block#: -W5,ziZ3.3M4X:b}@pud
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length, "GT", 0)) {
      // Block#: jXF^?5Zua_;W4VS~yrC1
      var index_end9 = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields')).length - 1;
      var index_inc9 = 1;
      if(0 > index_end9) {
        index_inc9 = -index_inc9;
      }
      for(index = 0; index_inc9 >= 0 ? index <= index_end9 : index >= index_end9; index += index_inc9) {
        // Block#: -^x731]ClP(x6(]*!EAy
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'fieldType'), "EQUAL", 'OptionFormField')) {
          // Block#: jSfSbPaLp7qVQSEi*E1G
          com.fc.JavaScriptDistLib.Dictionary.setDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'value', lastOptionValue)
          // Block#: ~EF=7bN)I;3YDW^,Gr:J
          com.fc.JavaScriptDistLib.Dictionary.setDictValue((com.fc.JavaScriptDistLib.Dictionary.getDictValue(SDKoutput, 'fields'))[index], 'type', 'string')
        } else {
          // Block#: yhP0NvdXe~iTtmh_^l7z
          j = j + 1;
        }
      }
    } else {}
  }
  /**
   * Describe this function...
   */
  function printoutList(inputListOfObj) {
    // Block#: aLpZNj6,C{nQZ/8N/?+5
    if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(inputListOfObj.length, "GT", 0)) {
      // Block#: oa!7k8bDPEV(7Yz{Gq2d
      tempListKey = [];
      // Block#: JNrWv?.{/%v[C^[I+C
      tempListKey = (com.fc.JavaScriptDistLib.Dictionary.getKeys(inputListOfObj[0]));
      // Block#: ]aeoYkEpa;]uy2w`G{*{
      var indexpo1_end = inputListOfObj.length;
      var indexpo1_inc = 1;
      if(1 > indexpo1_end) {
        indexpo1_inc = -indexpo1_inc;
      }
      for(indexpo1 = 1; indexpo1_inc >= 0 ? indexpo1 <= indexpo1_end : indexpo1 >= indexpo1_end; indexpo1 += indexpo1_inc) {
        // Block#: 2pKD9Xfaby,^q%K2D[sf
        var indexpo2_end = tempListKey.length;
        var indexpo2_inc = 1;
        if(1 > indexpo2_end) {
          indexpo2_inc = -indexpo2_inc;
        }
        for(indexpo2 = 1; indexpo2_inc >= 0 ? indexpo2 <= indexpo2_end : indexpo2 >= indexpo2_end; indexpo2 += indexpo2_inc) {
          // Block#: qQO0.yGgXIWg0kG,u3T5
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("MyLabel", ([com.fc.JavaScriptDistLib.Label.getProperty["Text"]("MyLabel"), (com.fc.JavaScriptDistLib.Dictionary.getDictValue(inputListOfObj[indexpo1 - 1], tempListKey[indexpo2 - 1])), '  '].join('')));
        }
      }
      // Block#: c]uZ)fy)#4DYMYjKxY;6
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("MyLabel", (String(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("MyLabel")) + String('<br>')));
    }
  }
  // Block#: G1#L8a+aio5j=cVuR0Ar
  function on_Container_TQL1cntParentLink_CLICK(e) {
    try {
      // Block#: RjaOp;PE_n}ecn.d.{(Q
      $('[obj-name="TQL1imgHourglass"]').show(); // Block#: =d8:R~ojSep+g.x/id#D
      TQL1FillFields();
      // Block#: NC1Jc1nrN^1b^RUqqUAe
      returnError = saveTaskAndNext(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TQL1lblParent"));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TQL1cntParentLink"]').on('click', on_Container_TQL1cntParentLink_CLICK);
  // Block#: YnZbfEUT:vHtUp:W3fdr
  function on_Label_TQL1lblTopRight_CLICK(e) {
    try {
      // Block#: lSRVdzey|jW:sY+y_ae|
      $('[obj-name="TQL1imgHourglass"]').show(); // Block#: b1~@yhk8//uujVYvc#B$
      TQL1FillFields();
      // Block#: 2Y@[o8%nlgS9Dvf/w;#!
      returnError = saveTaskAndNext(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TQL1lblTopRight"));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TQL1lblTopRight"]').on('click', on_Label_TQL1lblTopRight_CLICK);
  // Block#: +i[d)(n86KathY+gaj#X
  function on_TDB1btnLinkGO1_click(e) {
    try {
      // Block#: m5S`_kW5IPmykW}.Bqcu
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link1');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO1"]').on('click', on_TDB1btnLinkGO1_click);
  // Block#: 6U@MVHPo|~vNZr{)Z:=)
  function on_Label_TDB1lblLinkText1_CLICK(e) {
    try {
      // Block#: *E]-phNa#3n@ELj[Ih6v
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link1');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText1"]').on('click', on_Label_TDB1lblLinkText1_CLICK);
  // Block#: .+u1vAW}T2lh$BRMg]G0
  function on_listview_cell_clicked(TQL1lsvCell, number) {
    try {
      // Block#: _Jz0c.h!~_S~.S``b+**
      if(!!checkBoxList.length) {
        // Block#: 6C2;}y?T`:Xx#=iCJ0rw
        var index_end4 = checkBoxList.length - 1;
        var index_inc4 = 1;
        if(0 > index_end4) {
          index_inc4 = -index_inc4;
        }
        for(index = 0; index_inc4 >= 0 ? index <= index_end4 : index >= index_end4; index += index_inc4) {
          // Block#: XebrT1Qr422(L{eHoLq:
          checkBoxElement = checkBoxList[index];
          // Block#: #s2SJ0*|=gtmW2Di}O|t
          if(com.fc.JavaScriptDistLib.MathLibrary.mathCompare(number, "EQ", index)) {
            // Block#: 7a$BW^e2U=U=Z)SN(`f~
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(checkBoxElement, 'value', 'TRUE')
          } else {
            // Block#: ^B,i|:9WZcLV`GMIS;2c
            com.fc.JavaScriptDistLib.Dictionary.setDictValue(checkBoxElement, 'value', 'FALSE')
          }
          // Block#: aPDe?`G.}a=0By=*6H{3
          checkBoxList[index] = checkBoxElement;
        }
        // Block#: q`d=A(#;3WvC_;7-h;[K
        com.fc.JavaScriptDistLib.ListView.removeAllCells('TQL1lsv');
        on_listview_length_configured_TQL1lsv();
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: wQi`LfM;Zd!nv!$t$P0}
  function on_TQL1btn1_click(e) {
    try {
      // Block#: /%~7rybXT5ZUCw;mY*mO
      $('[obj-name="TQL1imgHourglass"]').show(); // Block#: 6M.umGvd9-lZC.{|oqz8
      TQL1FillFields();
      // Block#: JD#(OX6kSw:;+%rEHe=c
      returnError = saveTaskAndNext(com.fc.JavaScriptDistLib.Button.getProperty["Text"]("TQL1btn1"));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TQL1btn1"]').on('click', on_TQL1btn1_click);
  // Block#: bL]#_Y,p/1`?njMH#0|=
  function on_Container_TSC1cntParentLink_CLICK(e) {
    try {
      // Block#: 3v$BT@VKo7Jl)2Bu7[`L
      $('[obj-name="TSC1imgHourglass"]').show(); // Block#: gTkpfwBG8yLnSKz[Hi@5
      if(!com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TSC1lblParent"), "EQUAL", 'back to LogIn')) {
        // Block#: zvfE#k9bn=aDB):WL~d_
        returnError = saveTaskAndNext(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TSC1lblParent"));
      } else {
        // Block#: NG~|fo]G21Cn@y):]`dK
        let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
        hideScreen.hide();
        let showScreen = $('[obj-name="TLGI"]');
        showScreen.show();
        history.pushState({
          'view': 'TLGI'
        }, 'TLGI', 'TLGI');
        hideScreen.triggerHandler('hide');
        showScreen.triggerHandler('show');
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TSC1cntParentLink"]').on('click', on_Container_TSC1cntParentLink_CLICK);
  // Block#: Se!^1y8XnL|a{`/d]57[
  function on_TDB1btnLinkGO2_click(e) {
    try {
      // Block#: NlBx2ea9Y!R?ndlA{;EB
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link2');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO2"]').on('click', on_TDB1btnLinkGO2_click);
  // Block#: }R}5S-zJcqh2l797RZmE
  function on_Label_TDB1lblLinkText2_CLICK(e) {
    try {
      // Block#: j$Y=d|)7Zdrr2ViPesB!
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link2');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText2"]').on('click', on_Label_TDB1lblLinkText2_CLICK);
  // Block#: I`sI;(gAXJ%n%Ic)hMr!
  function on_screen_showTQL1() {
    try {
      // Block#: Z=dJS?D;71q51q{SS:lD
      currentScreen = 'TQL1';
      // Block#: fl*97w#{yv.t9(rMFqGs
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TQL1imgHourglass", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690"))); // Block#: v9do6(qa42yxkT:zd,f(
      checkBoxList = [];
      // Block#: M.C[0@$}Z]EMzPYe=!#*
      checkBoxElement = com.fc.JavaScriptDistLib.Dictionary.createEmptyDictionary();;
      // Block#: XrAm5ON2]d3!8fW#yV36
      LVcells = checkBoxList.length;
      // Block#: qo9u+b;}Dl8A^R[P#XV%
      com.fc.JavaScriptDistLib.ListView.removeAllCells('TQL1lsv');
      on_listview_length_configured_TQL1lsv();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="TQL1"]').on('show', on_screen_showTQL1);
  com.fc.JavaScriptDistLib.Screen.screenDict['showTQL1'] = on_screen_showTQL1;
  // Block#: oQxx_da^c~/Uw}v0QW`J
  function on_TDB1btnLinkGO3_click(e) {
    try {
      // Block#: (HD+d]kHMuZs7nGP)MT1
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link3');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO3"]').on('click', on_TDB1btnLinkGO3_click);
  // Block#: GZMKVCl]b+BFA{hBUi3.
  function on_Label_TDB1lblLinkText3_CLICK(e) {
    try {
      // Block#: rm_9XZ[_PeC)K4SE*1$H
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link3');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText3"]').on('click', on_Label_TDB1lblLinkText3_CLICK);
  // Block#: Ow+6*OIg]U9mwQg6-25.
  function on_listview_length_configured_TQL1lsv() {
    try {
      com.fc.JavaScriptDistLib.ListView.configureCells('TQL1lsv', LVcells, on_listview_cell_clicked);
      $('[obj-name="TQL1lsv"]').children().each(function(i) {
        if(i > 0) {
          com.fc.JavaScriptDistLib.ListView.setContext($(this));
          on_listview_cell_configured($(this), i - 1);
          com.fc.JavaScriptDistLib.ListView.resetContext($(this));
        }
      });
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  on_listview_length_configured_TQL1lsv();
  // Block#: #bgP2U9X923ofdQXTRcv
  function on_screen_showTLGI() {
    try {
      // Block#: rqkrV0|!AVz.m^Bpef)B
      $('[obj-name="TLGIcntParentLink"]').hide(); // Block#: :6uo-qZOpW3c3G]3a{:R
      $('[obj-name="TLGIimgHourglass"]').hide(); // Block#: od!-cu(LTwxuxZG[Nsp0
      numberOfWrongLogInAttempts = 0;
      // Block#: RRvhp2JyDC~t+V$Uq.%)
      $('[obj-name="TLGIcnt1"]').show(); // Block#: hMI]el}PFvURmk9wvaZc
      $('[obj-name="TLGIcnt2"]').show(); // Block#: 3G!m9Q=3;1m531`kzH4H
      currentScreen = 'TLGI';
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="TLGI"]').on('show', on_screen_showTLGI);
  com.fc.JavaScriptDistLib.Screen.screenDict['showTLGI'] = on_screen_showTLGI;
  // Block#: Smo2~z5A25{VGE*Agw9M
  function on_TLGIResetEnroll_click(e) {
    try {
      // Block#: ZEG]R6UkPcQcZYL4Nz$p
      com.fc.JavaScriptDistLib.Storage.add(userEnrolledKey, 'FALSE') // Block#: x`0p?c6gyB!3dqI_@rC/
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="TFTL"]');
      showScreen.show();
      history.pushState({
        'view': 'TFTL'
      }, 'TFTL', 'TFTL');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TLGIResetEnroll"]').on('click', on_TLGIResetEnroll_click);
  // Block#: wHUPDL*)=oz~/2e.A~xL
  let on_screen_createMSC = function() {
    try {
      // Block#: 9byFW,=xuMXaxJZBn`WJ
      $('[obj-name="MSCimgHourglass"]').hide();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  }();
  // Block#: U_C3)3:6W3a{QfS._1m!
  function on_screen_showMSC() {
    try {
      // Block#: }Z_d*{#Dv(*4S(7Le{~u
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("MSCimgHourglass", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690")));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="MSC"]').on('show', on_screen_showMSC);
  com.fc.JavaScriptDistLib.Screen.screenDict['showMSC'] = on_screen_showMSC;
  // Block#: oO(rCp6l7jHX0sA|V5qq
  function on_listview_cell_configured(TQL1lsvCell, number) {
    try {
      // Block#: 7,0*K6H]};oacb+BxME_
      if(checkBoxList != null) {
        // Block#: L]lqfP%CIo^RVwnlAdz(
        if(!!checkBoxList.length) {
          // Block#: j?U_iE%L,qyBmZR=Dn!8
          checkBoxElement = checkBoxList[number];
          // Block#: aF#@(^B+p?=YKi?h+EEn
          if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Dictionary.getDictValue(checkBoxElement, 'value'), "EQUAL", 'FALSE')) {
            // Block#: 4[0ZD~|:uP+rD7M+aIdK
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TQL1lsvimg", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/320408be-ac64-43eb-aa59-31b487d7ad5c")));
          } else {
            // Block#: -%e[H4@3}zK@Wky~WZ[)
            com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TQL1lsvimg", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/5764f934-f19d-469c-8012-293248ba464a"))); // Block#: 0#,9ptmXYZbRz4L0}!0N
            lastOptionValue = (com.fc.JavaScriptDistLib.Dictionary.getDictValue(checkBoxElement, 'name'));
          }
          // Block#: E9:TLRT`g|DdyNzWO_@W
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TQL1lsvlbl", (com.fc.JavaScriptDistLib.Dictionary.getDictValue(checkBoxList[number], 'name')));
        }
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  // Block#: qsjC`,!kVx.sbTH~/nZM
  function on_TSC1btn1_click(e) {
    try {
      // Block#: RQ8~[kV?Op8.yR]eNq_^
      if(!TSC1CheckRequiredFields()) {
        // Block#: j{[i//`Of4YxWg(lg;_O
        $('[obj-name="TSC1imgHourglass"]').show(); // Block#: }Mb5hd?L4],Vzgr.H9R.
        TSC1FillFields();
        // Block#: Bqh|[fnP*Ih=)$NzTVy}
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TSC1lbl3"), "EQUAL", 'password')) {
          // Block#: RMKw/Wrhw.UwOta)Pm9/
          userPassword = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt3");
        }
        // Block#: fBv`Si1CE4yUx8#BcuYz
        $('[obj-name="TSC1imgHourglass"]').show(); // Block#: lj@Na8i,OSOPj20I*sEY
        returnError = saveTaskAndNext(com.fc.JavaScriptDistLib.Button.getProperty["Text"]("TSC1btn1"));
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TSC1btn1"]').on('click', on_TSC1btn1_click);
  // Block#: KNQ/%kc/f.9nG(b2Koj[
  function on_screen_showTSC1() {
    try {
      // Block#: q!b3{Tlbz1OAj[+i;P(6
      currentScreen = 'TSC1';
      // Block#: `IQo34X!fXOdA3|?s^uf
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TSC1imgHourglass", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690"))); // Block#: Pd{1C6gYo0XO6_F5Zpq#
      $('[obj-name="MSCimgHourglass"]').hide();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="TSC1"]').on('show', on_screen_showTSC1);
  com.fc.JavaScriptDistLib.Screen.screenDict['showTSC1'] = on_screen_showTSC1;
  // Block#: m)N#lh|+(|Z_KxI(T`qF
  function on_TDB1btnLinkGO4_click(e) {
    try {
      // Block#: Y[Szw.$qLDDl;fj*LOc,
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link4');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO4"]').on('click', on_TDB1btnLinkGO4_click);
  // Block#: ~sz5xby4ep_0GX3YJjLR
  var elemSelector = '[obj-name="TSC1txt1"]';
  $(elemSelector).find("input").on('blur', function(e) {
    // Block#: I$qd/a3F~V42zZowc7K`
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt1"), "EQUAL", '')) {
      // Block#: j)mEK^6o6Fy7C[xrn=Di
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt1", txt1PlaceHolder);
    }
  });
  // Block#: TMl60JO0/A$o8du2/x+%
  function on_Label_TDB1lblLinkText4_CLICK(e) {
    try {
      // Block#: GmWt42p0eU4wl9}dcv,f
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link4');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText4"]').on('click', on_Label_TDB1lblLinkText4_CLICK);
  // Block#: ywTdD!??@D/GbA0B7GRe
  function on_Textbox_TSC1txt1_CLICK(e) {
    try {
      // Block#: f!u_^@`px2ZQupHqN+[a
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt1"), "EQUAL", txt1PlaceHolder)) {
        // Block#: KiH/mBL]uQ`aBis:X2$6
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt1", '');
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TSC1txt1"]').on('click', on_Textbox_TSC1txt1_CLICK);
  // Block#: a5%H|7FJOY4ucvjgMC45
  function on_TLGIbtn1_click(e) {
    try {
      // Block#: +GX07e1-!ieO=(fX#!_!
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TLGItxt1"), "EQUAL", '')) {
        // Block#: kCmKeSnMT1T!+.Tus-m$
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TLGIlbl1", 'e-mail is required');
      } else {
        // Block#: YDMHtMWQ5}r}$2yt0SJF
        if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TLGItxt2"), "EQUAL", '')) {
          // Block#: G[C:,#gOV!~oYRe]LCSU
          com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TLGIlbl2", 'password is required');
        } else {
          // Block#: S7^aN0~-gQfL5uzg-$.J
          $('[obj-name="TLGIimgHourglass"]').show(); // Block#: epJ.iKG=0o=yH?+w:*:B
          com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TLGIimgHourglass", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690")));
        }
        // Block#: `rcph;~MO-M%{RL(#ES|
        $('[obj-name="TLGIimgHourglass"]').show(); // Block#: b7yW.q#BNw0g1n+;euk2
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TLGIimgHourglass", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690")));
      }
      // Block#: Nf*j#~f1}e*Q,-sxPBh)
      userID = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TLGItxt1");
      // Block#: DnH[Hj}wF=*R}?Rh?aYT
      userPassword = com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TLGItxt2");
      // Block#: cRJ`TKyR$V@T7.M7.qr$
      j = logInForProcessAndCredentials(firstProcessAtLogIn, userID, userPassword);
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TLGIbtn1"]').on('click', on_TLGIbtn1_click);
  // Block#: Sn]wB1lhgeEu+1G[WW9G
  function on_MSCbtnVerify_click(e) {
    try {
      // Block#: j-s]e+Wp+u2,$80R4ekq
      $('[obj-name="MSCimgHourglass"]').show(); // Block#: |2t.cuPAU3*etCoW-Myh
      initialize();
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="MSCbtnVerify"]').on('click', on_MSCbtnVerify_click);
  // Block#: Ohhe(lb[7zELE/9JU@~;
  var elemSelector = '[obj-name="TSC1txt2"]';
  $(elemSelector).find("input").on('blur', function(e) {
    // Block#: |avMVO?=Q_7{FN4r;|KI
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt2"), "EQUAL", '')) {
      // Block#: hg%T+C7ME,{FIOiB-fbR
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt2", txt2PlaceHolder);
    }
  });
  // Block#: ENo)7+y;NkWpIdxPZ],,
  function on_TDB1btnLinkGO5_click(e) {
    try {
      // Block#: CN/F=j`NYKNMm*lxwaO7
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link5');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO5"]').on('click', on_TDB1btnLinkGO5_click);
  // Block#: 2dtOOYwxwf=33if3`E$(
  function on_Textbox_TSC1txt2_CLICK(e) {
    try {
      // Block#: Gd:ac:?%yvsa}#Mx:.94
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt2"), "EQUAL", txt2PlaceHolder)) {
        // Block#: 4dy^=i(M3=G)WseVI=o8
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt2", '');
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TSC1txt2"]').on('click', on_Textbox_TSC1txt2_CLICK);
  // Block#: 83c*|{`XUr:0gDy$l5u]
  function on_Label_TDB1lblLinkText5_CLICK(e) {
    try {
      // Block#: EzKE(/I7Sf--0,h77}IZ
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link5');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText5"]').on('click', on_Label_TDB1lblLinkText5_CLICK);
  // Block#: ;xXq)oa8Mg;6dDg8p#w-
  function on_Label_TLGIlblForgotEmail_CLICK(e) {
    try {
      // Block#: TBv;nTR%fu`@prL9bQ/D
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TLGIlblInfoText", 'In order to receive information about your e-mail please contact the system administrator at this number +1 123456789 ');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TLGIlblForgotEmail"]').on('click', on_Label_TLGIlblForgotEmail_CLICK);
  // Block#: %4Uh!mt2bsE0}xp3e-TN
  var elemSelector = '[obj-name="TSC1txt3"]';
  $(elemSelector).find("input").on('blur', function(e) {
    // Block#: p|M~{G?gY8!Gv!*65^-Y
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt3"), "EQUAL", '')) {
      // Block#: DuTr-9(8+8$Om=T47_,f
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt3", txt3PlaceHolder);
    }
  });
  // Block#: hB]t[W,)BMGQw%3]^G]K
  function on_TDB1btnLinkGO6_click(e) {
    try {
      // Block#: Edb5Jx@Q+164zkBC2zse
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link6');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TDB1btnLinkGO6"]').on('click', on_TDB1btnLinkGO6_click);
  // Block#: =/tmP-]-(h=g^(ra!#/S
  function on_screen_showTFTL() {
    try {
      // Block#: {?udh221!3*zRJi`pQ[V
      currentScreen = 'TFTL';
      // Block#: r.,iSV;a3T7%v4*GI=7f
      $('[obj-name="TFTLimgHourglass"]').hide();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleException(e);
    }
  };
  $('[obj-name="TFTL"]').on('show', on_screen_showTFTL);
  com.fc.JavaScriptDistLib.Screen.screenDict['showTFTL'] = on_screen_showTFTL;
  // Block#: ^+TJTv0#~|Djj!QE3]=l
  function on_Textbox_TSC1txt3_CLICK(e) {
    try {
      // Block#: a,o*3XgG^hEPg$Pl`gbM
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt3"), "EQUAL", txt3PlaceHolder)) {
        // Block#: }_iTt#h:oIPcpXQNd{j=
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt3", '');
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TSC1txt3"]').on('click', on_Textbox_TSC1txt3_CLICK);
  // Block#: ,onZ_]~1hqlfC(Cuo]!z
  function on_Label_TDB1lblLinkText6_CLICK(e) {
    try {
      // Block#: gGA:Gw?Z4eekY2Ma~f,+
      followLink((com.fc.JavaScriptDistLib.Dictionary.getDictValue(DictionaryCurrentPage, 'SwitchVarName')), 'link6');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TDB1lblLinkText6"]').on('click', on_Label_TDB1lblLinkText6_CLICK);
  // Block#: p^quA?9O=|jxH:G%RKG}
  function on_Label_TSC1lblLink1_CLICK(e) {
    try {
      // Block#: ;R@*WKJz-n{KuX;,#{+_
      $('[obj-name="TSC1imgHourglass"]').show(); // Block#: ON[w:zF?t$+D2x@Tl}3b
      returnError = saveTaskAndNext(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TSC1lblLink1"));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TSC1lblLink1"]').on('click', on_Label_TSC1lblLink1_CLICK);
  // Block#: _T@%JI|k5SNA3TKR?[!`
  function on_Label_TLGIlblForgotPassword_CLICK(e) {
    try {
      // Block#: Ve5Dq.GbP4P.;/e;LX=N
      $('[obj-name="TLGIimgHourglass"]').show(); // Block#: GE8oJY!:OY{@6Q75)(/!
      com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TLGIimgHourglass", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690"))); // Block#: 4}7CIY!643z)%:)U1Vj$
      userID = 'forgetfulUser';
      // Block#: ZG(}ou_jHQ@stfmV,qza
      userPassword = '4mn3s14C!';
      // Block#: lj?]W_5Y%uT?#Youm,ii
      logInForProcessAndCredentialsReturnValue = logInForProcessAndCredentials('ResetPasswordV1', userID, userPassword);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TLGIlblForgotPassword"]').on('click', on_Label_TLGIlblForgotPassword_CLICK);
  // Block#: ;O*CL{D,4ZqeT_nvCIB0
  var elemSelector = '[obj-name="TSC1txt4"]';
  $(elemSelector).find("input").on('blur', function(e) {
    // Block#: ;HO*1sgY?l/u%,)d:GLn
    if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt4"), "EQUAL", '')) {
      // Block#: S/IBLlWToJs35zSZP4q=
      com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt4", txt4PlaceHolder);
    }
  });
  // Block#: MH`Ch@~M5;9qv#5I90^s
  function on_Label_TSC1lblLink2_CLICK(e) {
    try {
      // Block#: NU[P0H)lKj93/(UX6PEL
      $('[obj-name="TSC1imgHourglass"]').show(); // Block#: W!nd0C`5_hxt!iZxQyMr
      returnError = saveTaskAndNext(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TSC1lblLink2"));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TSC1lblLink2"]').on('click', on_Label_TSC1lblLink2_CLICK);
  // Block#: vs/MP|s[?[26|x5/FwpT
  function on_Textbox_TSC1txt4_CLICK(e) {
    try {
      // Block#: HugjXu(l,Qun$E+f|^aG
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TSC1txt4"), "EQUAL", txt4PlaceHolder)) {
        // Block#: F$o89]s9E^[H0N)+sd$!
        com.fc.JavaScriptDistLib.Textbox.setProperty["Text"]("TSC1txt4", '');
      }
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TSC1txt4"]').on('click', on_Textbox_TSC1txt4_CLICK);
  // Block#: JID7:IO8a%LL0`Ym_DUS
  function on_Label_TSC1lblTopRight_CLICK(e) {
    try {
      // Block#: q7HBmH``KM{e}8~zHGtq
      $('[obj-name="TSC1imgHourglass"]').show(); // Block#: 97`F#K+8[/]uf9fPgGxa
      returnError = saveTaskAndNext(com.fc.JavaScriptDistLib.Label.getProperty["Text"]("TSC1lblTopRight"));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TSC1lblTopRight"]').on('click', on_Label_TSC1lblTopRight_CLICK);
  // Block#: t/}0#(/IzU`9tTu?4.fg
  function on_TFTLbtn1_click(e) {
    try {
      // Block#: oIE*QgVg#MF;,F8}HDv,
      if(com.fc.JavaScriptDistLib.TextLib.textComparison(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TFTLtxt1"), "EQUAL", '')) {
        // Block#: Y-jEC],=HMJZ,i6Fk(b2
        com.fc.JavaScriptDistLib.Label.setProperty["Text"]("TFTLlbl1", 'Verification Code is required');
      } else {
        // Block#: ?WF@,eXQo(x?Br~txm/(
        $('[obj-name="TFTLimgHourglass"]').show(); // Block#: T-OgbEbBrvSv$sV:u[u~
        com.fc.JavaScriptDistLib.Image.setProperty["Image"]("TFTLimgHourglass", (com.fc.JavaScriptDistLib.ImageLibrary.createImageFromResource("https://staging.snapp.click/api/v2/raws/projects/resources/e61d073c-141f-4ce0-b7c0-6faaffd73690"))); // Block#: DF064ZfySE9xnz1?3ke[
        initSDKFirstLogIn(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("TFTLtxt1"));
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TFTLbtn1"]').on('click', on_TFTLbtn1_click);
  // Block#: l(lLjC_Wp;@6b_,ING*~
  function on_TFTLbtnSetEnroll_click(e) {
    try {
      // Block#: _06aj/@1Y1XZfeLeUS1P
      com.fc.JavaScriptDistLib.Storage.add(userEnrolledKey, 'TRUE') // Block#: ofx!H[`./J|N,nkKxG|4
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="TLGI"]');
      showScreen.show();
      history.pushState({
        'view': 'TLGI'
      }, 'TLGI', 'TLGI');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="TFTLbtnSetEnroll"]').on('click', on_TFTLbtnSetEnroll_click);
  // Block#: B}mdnDutY}s!(R5k,S[Y
  function on_Container_TFTLcntParentLink_CLICK(e) {
    try {
      // Block#: #2DK?g}{K+UorhldA2t;
      $('[obj-name="TFTLcnt1"]').hide(); // Block#: yQ-NYdhfto|6x_FTL}G9
      $('[obj-name="TFTLcntParentLink"]').hide(); // Block#: ~1WhYgwb-,Cke%O@l9%S
      $('[obj-name="TFTLimgHourglass"]').hide(); // Block#: sg.q!`fp=Ie8hL28#,i{
      $('[obj-name="TFTLlblInfoText"]').hide(); // Block#: C`,-sPs]mwk}^U/%*!p*
      $('[obj-name="TFTLbtn1"]').hide(); // Block#: 6}FAQjbO@r9J`lYUbO0=
      $('[obj-name="TFTLlblTitle"]').hide(); // Block#: +Aa,au;:kYcrc`^740kr
      com.fc.JavaScriptDistLib.Application.quitApp();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    };
  };
  $('[obj-name= "TFTLcntParentLink"]').on('click', on_Container_TFTLcntParentLink_CLICK);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="MSC"]').show();
});
// Generated by snapp
// 734698-921297-716095-682319
